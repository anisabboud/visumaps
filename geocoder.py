'''
Created on May 1, 2014

@author: Anis
'''

# Parameters:
# - maxRows    integer (optional)    the maximal number of rows in the document returned by the service. Default is 100, the maximal allowed value is 1000.
# - featureClass    character A,H,L,P,R,S,T,U,V (optional)    featureclass(es) (default= all feature classes); this parameter may occur more than once, example: featureClass=P&featureClass=A
# - featureCode    string (optional)    featurecode(s) (default= all feature codes); this parameter may occur more than once, example: featureCode=PPLC&featureCode=PPLX
# - type    string xml,json,rdf    the format type of the returned document, default = xml
# - style    string SHORT,MEDIUM,LONG,FULL (optional)    verbosity of returned xml document, default = MEDIUM
# - fuzzy    With the parameter 'fuzzy' the search will find results even if the search terms are incorrectly spelled. Example: http://api.geonames.org/search?q=londoz&fuzzy=0.8&username=demo


# Sample request: http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo
# Actual request: http://api.geonames.org/searchJSON?q=us&maxRows=1&username=anis&featureClass=A&featureClass=P


import urllib
import urllib2
import urlparse
import json
import os

from google.appengine.ext import db

import jinja2
import webapp2


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'])

class QueryToId(db.Model):
    query = db.StringProperty(required=True)
    geonamesId = db.IntegerProperty(required=True)
    # http://www.geonames.org/export/codes.html
    # featureType = db.StringProperty(required=False,
    #                                choices=set(["PCLI",  # independent political entity
    #                                             ]))

class Entry(db.Model):
    geonamesId = db.IntegerProperty(required=True)
    geonamesJsonEntry = db.StringProperty(required=True)

    def GetAttr(self, attr):
        return json.loads(self.geonamesJsonEntry)['geonames'][0][attr]

class Geocoder(webapp2.RequestHandler):

    def get(self):
        geocode_all = self.request.get('all')  # See http://webapp-improved.appspot.com/guide/request.html
        if geocode_all:
            self.PrintDatabase()
            return
            
        queries = self.request.params.getall('q')  # See http://webapp-improved.appspot.com/guide/request.html
        
        queries_to_ids = db.GqlQuery('SELECT * FROM QueryToId WHERE query IN :1',
                                     queries)

        # Fill in the IDs of queries which are already in the DataStore.
        geonamesIds = {}
        for q in queries_to_ids:
            geonamesIds[q.query] = q.geonamesId
        
        # For queries that haven't been encountered in the past (not in the DataStore), request their entry 
        # from the Geonames search API - http://www.geonames.org/export/geonames-search.html
        for query in queries:
            if query not in geonamesIds:
                response = urllib2.urlopen('http://api.geonames.org/searchJSON?q=%s&maxRows=1&username=anis&featureClass=A&featureClass=P&style=SHORT' % str(urllib.quote((query))))
                data = json.load(response)
                
                geonamesId = data['geonames'][0]['geonameId']
                geonamesIds[query] = geonamesId
                json_str = json.dumps(data)
                
                new_query_to_id = QueryToId(key_name=query,
                                            query=query,
                                            geonamesId=geonamesId)
                new_entry = Entry(key_name=str(geonamesId),
                                  geonamesId=geonamesId,
                                  geonamesJsonEntry=json_str)
                
                print data['geonames'][0]['toponymName']
                print data['geonames'][0]['geonameId']
                
                db.put(new_query_to_id)
                db.put(new_entry)
        self.response.write(json.dumps(geonamesIds))

    def PrintDatabase(self):
        entries = db.GqlQuery('SELECT * FROM Entry')
        rows = {e.geonamesId: ([], e.GetAttr('toponymName'), e.geonamesJsonEntry) for e in entries}  # geonamesId -> ([query1, query2, ...], geonamesJsonEntry)

        queries_to_ids = db.GqlQuery('SELECT * FROM QueryToId')
        for q in queries_to_ids:
            rows[q.geonamesId][0].append(q.query)
        
        template_values = {
            'rows': sorted(rows.items()),
        }

        template = JINJA_ENVIRONMENT.get_template('geocoder.html')
        self.response.write(template.render(template_values))
            
application = webapp2.WSGIApplication([
    ('/geocode', Geocoder),
], debug=True)
