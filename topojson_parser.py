'''
Created on May 22, 2014

@author: Anis

Parses a topojson file into a TSV table: ID    properties.
'''

FILE = 'data/world-topo-min.json'

import json
import urllib
import urllib2

ids = []
queries = []
data = json.load(open(FILE))
for country in data['objects']['countries']['geometries']:
    country_id = country['id']
    name = country['properties']['name']
    ids.append(country_id)
    queries.append(name)

all_queries = '&q='.join([str(urllib.quote((query.encode('utf8')))) for query in queries])
url = 'http://localhost:9999/geocode?q=%s' % all_queries
response = urllib2.urlopen(url)
data = json.loads(response.read())

print '\t'.join(['id', 'name', 'geonameId'])
errors = []
for country_id, name in zip(ids, queries):
    if name not in data:
        errors.append('Geocoder did not return a response for: %s' % name)
        continue
    geonameId = data[name]
    print '\t'.join([str(country_id), name, str(geonameId)])
print '\n'.join(errors)
