'''
Created on Nov 10, 2013

@author: Anis
'''
import json
import sys
import urllib

with open("country_names.txt") as countries_file:
    country_names = [line[5:].strip() for line in countries_file.readlines()]

api_key = open(".freebase_api_key").read()
mql_service_url = 'https://www.googleapis.com/freebase/v1/mqlread'
search_service_url = 'https://www.googleapis.com/freebase/v1/search'
topic_service_url = 'https://www.googleapis.com/freebase/v1/topic'

CAPITAL = '/location/country/capital'
OFFICIAL_LANGUAGE = '/location/country/official_language'
SPOKEN_LANGUAGES = '/location/country/languages_spoken'
POPULATION = '/location/statistical_region/population'
NUMBER = '/measurement_unit/dated_integer/number'

for country_name in country_names:
    params = {
        'query': country_name,
        'filter': '(any type:/location/country)',
        'key': api_key
    }
    search_url = search_service_url + '?' + urllib.urlencode(params)
    result = json.loads(urllib.urlopen(search_url).read())['result'][0]
    country_id = None
    try:
        country_id = result['id']
    except KeyError:
        #print 'ERROR: no ID'
        continue

    country_formatted_name = result['name'].encode(sys.stdout.encoding, 'replace')

    query = [{'id': country_id, 
              CAPITAL: [], 
              OFFICIAL_LANGUAGE: [],
              SPOKEN_LANGUAGES: [], 
              POPULATION: [{
                  NUMBER: [{
                      'value': None,
                  }],
                  '/measurement_unit/dated_integer/year': [{
                      'value': '2011',
                  }],
              }]
            }]
    params = {
            'query': json.dumps(query),
            'key': api_key
    }
    
    mql_url = mql_service_url + '?' + urllib.urlencode(params)
    response = json.loads(urllib.urlopen(mql_url).read())
    try:
        result = response['result'][0]
    except:
        #print 'ERROR: no result'
        continue
    
    capital = ''
    if result[CAPITAL]:
        capital = ', '.join(result[CAPITAL]).encode(sys.stdout.encoding, 'replace')

    first_language = ''
    if result[OFFICIAL_LANGUAGE]:
        first_language = result[OFFICIAL_LANGUAGE][0].encode(sys.stdout.encoding, 'replace')
    elif result[SPOKEN_LANGUAGES]:
        first_language = result[SPOKEN_LANGUAGES][0].encode(sys.stdout.encoding, 'replace')
    first_language = first_language.replace(' language', '').replace(' Language', '')

    population = ''
    try:
        population = result[POPULATION][0][NUMBER][0]['value']
    except IndexError:
        #print 'ERROR'
        pass

    print '\t'.join([country_formatted_name, str(population), capital, first_language])
