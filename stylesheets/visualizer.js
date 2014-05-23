google.load('visualization', '1', {packages: ['geochart']});
google.load('visualization', '1.1', {packages: ['map']});

$(document).ready(function(){
    $('textarea').autosize();
});

EUROPE = [
	'Russia',
	'Germany',
	'United Kingdom',
	'France',
	'Italy',
	'Spain',
	'Ukraine',
	'Poland',
	'Romania',
	'Netherlands',
	'Belgium',
	'Greece',
	'Portugal',
	'Czech Republic',
	'Hungary',
	'Sweden',
	'Belarus',
	'Austria',
	'Switzerland',
	'Bulgaria',
	'Serbia',
	'Denmark',
	'Finland',
	'Slovakia',
	'Norway',
	'Ireland',
	'Croatia',
	'Bosnia and Herzegovina',
	'Moldova',
	'Lithuania',
	'Albania',
	'Macedonia',
	'Slovenia',
	'Latvia',
	'Kosovo',
	'Estonia',
	'Montenegro',
	'Luxembourg',
	'Malta',
	'Iceland',
	'Andorra',
	'Liechtenstein',
	'Monaco',
	'San Marino',
	'Vatican City',
]

var sampleData = new Array();
sampleData[0] = ''; 
sampleData[1] =
   ['Country	Population	Capital	Language',
    'Andorra	86165	Andorra la Vella	Catalan',
    'United Arab Emirates	7890924	Abu Dhabi	Arabic',
    'Afghanistan	35320445	Kabul	Pashto',
    'Antigua and Barbuda	89612	St. John\'s	English',
    'Anguilla	15094	The Valley	English',
    'Albania	3215988	Tirana	Albanian',
    'Armenia	3100236	Yerevan	Armenian',
    'Angola	19618432	Luanda	Portuguese',
    'Argentina	40764561	Buenos Aires	Spanish',
    'American Samoa	69543	Pago Pago	Samoan',
    'Austria	8419000	Vienna	German',
    'Australia	22323900	Canberra	English',
    'Aruba	108141	Oranjestad	Dutch',
    'Azerbaijan	9168000	Baku	Azerbaijani',
    'Bosnia and Herzegovina	3752228	Sarajevo	Bosnian',
    'Barbados	273925	Bridgetown	English',
    'Bangladesh	150493658	Dhaka	Bengali',
    'Belgium	11008000	City of Brussels	Dutch',
    'Burkina Faso	16967845	Ouagadougou	French',
    'Bulgaria	7476000	Sofia	Bulgarian',
    'Bahrain	1323535	Manama	Arabic',
    'Burundi	10216190	Bujumbura	Kirundi',
    'Benin	9325032	Porto-Novo	French',
    'Bermuda	64700	Hamilton	English',
    'Brunei	405938	Bandar Seri Begawan	Malay',
    'Bolivia	10088108	Sucre	Spanish',
    'Brazil	196935134	Brasília	Portuguese',
    'Bahamas	347176	Nassau	English',
    'Bhutan	738267	Thimphu	Dzongkha',
    'Botswana	2030738	Gaborone	Tswana',
    'Belarus	9473000	Minsk	Belarusian',
    'Belize	356600	Belmopan	English',
    'Canada	34483975	Ottawa	English',
    'Democratic Republic of the Congo	67757577	Kinshasa	French',
    'Central African Republic	4486837	Bangui	Sango',
    'Congo	4139748	Brazzaville	French',
    'Switzerland	7912398	Bern	Romansh',
    'Côte d’Ivoire	20152894	Yamoussoukro	French',
    'Chile	17269525	Santiago	Spanish',
    'Cameroon	20030362	Yaoundé	English',
    'China	1344130000	Beijing	Standard Mandarin',
    'Colombia	46927125	Bogotá	Spanish',
    'Costa Rica	4726575	San José	Spanish',
    'Cuba	11253665	Havana	Spanish',
    'Cape Verde	500585	Praia	Portuguese',
    'Curaçao	145619	Willemstad	Papiamento',
    'Cyprus	1116564	Nicosia	Greek',
    'Czech Republic	10546000	Prague	Czech',
    'Germany	81797673	Berlin	German',
    'Djibouti	905564	Djibouti	Arabic',
    'Denmark	5671050	Copenhagen	Danish',
    'Dominica	67675	Roseau	English',
    'Dominican Republic	10056181	Santo Domingo	Spanish',
    'Algeria	35980193	Algiers	Arabic',
    'Ecuador	14666055	Quito	Spanish',
    'Estonia	1340000	Tallinn	Estonian',
    'Egypt	82536770	Cairo	Arabic',
    'Eritrea	5824000	Asmara	Arabic',
    'Spain	46235000	Madrid	Spanish',
    'Ethiopia	84734262	Addis Ababa	Amharic',
    'Finland	5388272	Helsinki	Finnish',
    'Fiji	868400	Suva	Fijian',
    'Federated States of Micronesia	111542	Palikir	English',
    'Faroe Islands	49267	Tórshavn	Danish',
    'France	65433714	Paris	French',
    'Gabon	1534262	Libreville	French',
    'United Kingdom	62744081	London	English',
    'Grenada	104890	St. George\'s	English',
    'Georgia	4486000	Tbilisi	Georgian',
    'Ghana	24965816	Accra	English',
    'Greenland	56840	Nuuk	Greenlandic',
    'Gambia	1776103	Banjul	English',
    'Guinea	10221808	Conakry	French',
    'Equatorial Guinea	720213	Malabo	Spanish',
    'Greece	11300410	Athens	Greek',
    'Guatemala	14757316	Guatemala City	Spanish',
    'Guam	182111	Hagåtña	Chamorro',
    'Guinea-Bissau	1547061	Bissau	Portuguese',
    'Guyana	756040	Georgetown	English',
    'Hong Kong	7071600		English',
    'Honduras	7754687	Tegucigalpa	Spanish',
    'Croatia	4284889	Zagreb	Croatian',
    'Haiti	10123787	Port-au-Prince	Haitian Creole French',
    'Hungary	9971000	Budapest	Hungarian',
    'Indonesia	243801639	Jakarta	Indonesian',
    'Republic of Ireland	4576317	Dublin	Irish',
    'Israel	7765900	Jerusalem	Hebrew',
    'Isle of Man	83327	Douglas	English',
    'India	1221156319	New Delhi	Hindi',
    'Iraq	32961959	Baghdad	Kurdishs',
    'Iran	75424285	Tehran	Persian',
    'Iceland	319014	Reykjavik	Icelandic',
    'Italy	60723603	Rome	Italian',
    'Jersey	97857	Saint Helier	English',
    'Jamaica	2706500	Kingston	Jamaican English',
    'Jordan	6181000	Amman	Arabic',
    'Japan	127817277	Tokyo	Esperanto',
    'Kenya	41609728	Nairobi	Swahili',
    'Kyrgyzstan	5507000	Bishkek	Russian',
    'Cambodia	14305183	Phnom Penh	Khmer',
    'Kiribati	101093	South Tarawa	Kiribati',
    'Comoros	753943	Moroni	Arabic',
    'Saint Kitts and Nevis	53051	Basseterre	English',
    'North Korea	24631291	Pyongyang	Korean',
    'South Korea	49779000	Seoul	Korean',
    'Kuwait	2818042	Kuwait City	Arabic',
    'Cayman Islands	56729	George Town, Cayman Islands	English',
    'Kazakhstan	16558459	Astana	Kazakh',
    'Laos	6288037	Vientiane	Lao',
    'Lebanon	4259405	Beirut	Arabic',
    'Saint Lucia	176000	Castries	English',
    'Liechtenstein	36304	Vaduz	German',
    'Sri Lanka	20869000	Sri Jayawardenepura Kotte, Colombo	Tamil',
    'Liberia	3786764	Monrovia	English',
    'Lesotho	2193843	Maseru	Sotho',
    'Lithuania	3199342	Vilnius	Lithuanian',
    'Luxembourg	517000	Luxembourg	Luxembourgish',
    'Latvia	2067887	Riga	Latvian',
    'Libya	6422772	Tripoli	Arabic',
    'Morocco	32272974	Rabat	Arabic',
    'Monaco	35430		French',
    'Moldova	3559000	Chișinău	Moldovan',
    'Montenegro	632261	Podgorica	Montenegrin',
    'Madagascar	21315135	Antananarivo	Malagasy',
    'Marshall Islands	54816	Majuro	Marshallese',
    'Republic of Macedonia	2063893	Skopje	Macedonian',
    'Mali	15839538	Bamako	French',
    'Myanmar	52350763	Naypyidaw	Burmese',
    'Mongolia	2800114	Ulan Bator	Mongolian',
    'Macau	555731		Portuguese',
    'Northern Mariana Islands	61174	Saipan	Chamorro',
    'Martinique	498151	Fort-de-France	French',
    'Mauritania	3541540	Nouakchott	Arabic',
    'Malta	419000	Valletta	Maltese',
    'Mauritius	1286051	Port Louis	Tamil',
    'Maldives	320081	Malé	Dhivehi',
    'Malawi	15380888	Lilongwe	English',
    'Mexico	114793341	Mexico City	Spanish',
    'Malaysia	28859154	Kuala Lumpur	Malaysian',
    'Mozambique	23929708	Maputo	Portuguese',
    'Namibia	2324004	Windhoek	English',
    'New Caledonia	249000	Nouméa	French',
    'Niger	16068994	Niamey	French',
    'Nigeria	162470737	Abuja	English',
    'Nicaragua	5869859	Managua	Spanish',
    'Netherlands	16696000	Amsterdam	Dutch',
    'Norway	4953088	Oslo	Nynorsk',
    'Nepal	30485798	Kathmandu	Nepali',
    'New Zealand	4405200	Wellington	English',
    'Oman	2846145	Muscat	Arabic',
    'Panama	3571185	Panama City	Spanish',
    'Peru	29399817	Lima	Spanish',
    'French Polynesia	273777	Pape\'ete	French',
    'Papua New Guinea	6187591	Port Moresby	Hiri Motu',
    'Philippines	94852030	Manila	Filipino',
    'Pakistan	176745364	Islamabad	English',
    'Poland	38534157	Warsaw	Polish',
    'Saint Pierre and Miquelon	5888	Saint-Pierre	French',
    'Pitcairn Islands	67	Adamstown	English',
    'Puerto Rico	3706690	San Juan	Spanish',
    'Portugal	10556999	Lisbon	Portuguese',
    'Palau	20956	Melekeok	Palauan',
    'Paraguay	6568290	Asunción	Paraguayan Guaraní',
    'Qatar	1870041	Doha	Arabic',
    'Romania	21380000	Bucharest	Romanian',
    'Serbia	7261000	Belgrade	Serbian',
    'Russia	142960000	Moscow	Russian',
    'Rwanda	10942950	Kigali	Kinyarwanda',
    'Saudi Arabia	28082541	Riyadh	Arabic',
    'Solomon Islands	571890	Honiara	English',
    'Seychelles	86000	Victoria	English',
    'Sudan	34318385	Khartoum	Arabic',
    'Sweden	9453000	Stockholm	Swedish',
    'Singapore	5183700	Singapore	Tamil',
    'Slovenia	2050189	Ljubljana	Slovenian',
    'Slovakia	5440000	Bratislava	Slovak',
    'Sierra Leone	5997486	Freetown	English',
    'San Marino	31735	San Marino	Italian',
    'Senegal	12767556	Dakar	French',
    'Somalia	9556873	Mogadishu	Somali',
    'Suriname	529419	Paramaribo	Dutch',
    'South Sudan	10314021	Juba	English',
    'São Tomé and Príncipe	179506	São Tomé	Portuguese',
    'El Salvador	6227491	San Salvador	Spanish',
    'Syria	21961676	Damascus	Arabic',
    'Swaziland	1067773	Mbabane, Lobamba	Swati',
    'Turks and Caicos Islands	42375	Cockburn Town	English',
    'Chad	11525496	N\'Djamena	Arabic',
    'Togo	6154813	Lomé	French',
    'Thailand	69518555	Bangkok	Thai',
    'Tajikistan	6976958	Dushanbe, Bukhara, Samarkand	Persian',
    'Timor-Leste	1175880	Dili	Tetun',
    'Turkmenistan	5105301	Ashgabat	Turkmen',
    'Tunisia	10673800	Tunis	Arabic',
    'Tonga	104509	Nukuʻalofa	Tongan',
    'Turkey	73058638	Ankara	Turkish',
    'Trinidad and Tobago	1346350	Port of Spain	English',
    'Tuvalu	10544	Funafuti	Tuvaluan',
    'Taiwan	23174528	Taipei	Standard Mandarin',
    'Tanzania	46218486	Dodoma	Swahili',
    'Ukraine	45706100	Kiev	Ukrainian',
    'Uganda	34509205	Kampala	Swahili',
    'United States	311591917	Washington, D.C.	English',
    'Uruguay	3368595	Montevideo	Spanish',
    'Uzbekistan	29341200	Tashkent	Uzbek',
    'Saint Vincent and the Grenadines	109365	Kingstown	English',
    'Venezuela	29278000	Caracas	Spanish',
    'United States Virgin Islands	109666	Charlotte Amalie	English',
    'Vietnam	87840000	Hanoi	Vietnamese',
    'Vanuatu	224564	Port Vila	Bislama',
    'Samoa	183874	Apia	Samoan',
    'Yemen	24799880	Sana\'a	Arabic',
    'South Africa	50586757	Pretoria, Bloemfontein, Cape Town	Zulu',
    'Zambia	13474959	Lusaka	English',
    'Zimbabwe	12754378	Harare	English',
   ].join('\n');

sampleData[2] = 
   ['Country	Highest point elevation (m)	Highest point name',
	'Nepal	8848	Mount Everest',
	'China	8848	Mount Everest',
	'Pakistan	8611	K2',
	'India	8586	Kangchenjunga',
	'Bhutan	7570	Gangkhar Puensum',
	'Tajikistan	7495	Ismoil Somoni Peak',
	'Afghanistan	7492	Noshaq',
	'Kyrgyzstan	7439	Jengish Chokusu',
	'Kazakhstan	7010	Khan Tengri',
	'Argentina	6960	Aconcagua',
	'Chile	6893	Ojos del Salado',
	'Peru	6768	Huascarán',
	'Bolivia	6542	Nevado Sajama',
	'Ecuador	6267	Mount Chimborazo',
	'United States	6168	Mount McKinley',
	'Canada	5959	Mount Logan',
	'Tanzania	5892	Mount Kilimanjaro',
	'Myanmar	5881	Hkakabo Razi',
	'Colombia	5700	Pico Cristóbal Colón or Pico Simón Bolívar',
	'Russia	5642	Mount Elbrus',
	'Mexico	5636	Pico de Orizaba',
	'Iran	5610	Damavand',
	'Kenya	5199	Batian on Mount Kenya',
	'Georgia	5193	Mt\'a Shkhara',
	'Turkey	5137	Mount Ararat',
	'Democratic Republic of the Congo	5110	Margherita Peak on Mount Stanley',
	'Uganda	5110	Margherita Peak on Mount Stanley',
	'Venezuela	4981	Pico Bolívar (La Columna)',
	'Indonesia	4884	Mount Carstensz (Puncak Jaya)',
	'France	4810	Mont Blanc',
	'Italy	4810	Monte Bianco',
	'Uzbekistan	4643	Khazret Sultan',
	' Switzerland	4634	Dufourspitze on Monte Rosa',
	'Ethiopia	4550	Ras Dejen',
	'Rwanda	4519	Mount Karisimbi',
	'Papua New Guinea	4509	Mount Wilhelm',
	'Azerbaijan	4485	Bazarduzu Dagi',
	'Mongolia	4374	Khüiten Peak (Huyten Orgil)',
	'Guatemala	4220	Volcán Tajumulco',
	'Morocco	4165	Jbel Toubkal',
	'Malaysia	4095	Mount Kinabalu',
	'Armenia	4090	Mount Aragats',
	'Cameroon	4040	Fako on Mount Cameroon',
	'Costa Rica	3820	Cerro Chirripó',
	'Austria	3798	Großglockner',
	'Japan	3776	Mount Fuji',
	'New Zealand	3754	Aoraki/Mount Cook',
	'Spain	3718	Teide on Tenerife in the Canary Islands',
	'Yemen	3666	Jabal an Nabi Shu\'ayb',
	'Iraq	3611	Cheekha Dar',
	'Lesotho	3482	Thabana Ntlenyana',
	'Panama	3475	Volcán Barú',
	'South Africa	3450	Mafadi',
	'Chad	3445	Emi Koussi',
	'South Sudan	3187	Kinyeti',
	'Vietnam	3143	Fan Si Pan',
	'Turkmenistan	3139	Aýrybaba',
	'Dominican Republic	3098	Pico Duarte',
	'Lebanon	3088	Qurnat as Sawda\'',
	'Sudan	3042	Deriba Caldera',
	'Eritrea	3018	Emba Soira',
	'Equatorial Guinea	3008	Pico Basile',
	'Algeria	3003	Mount Tahat',
	'Malawi	3002	Sapitwa (Mulanje Massif)',
	'Saudi Arabia	3000	unclear (possibly Jabal Sawda) ',
	'Brazil	2994	Pico da Neblina',
	'Oman	2980	Jabal Shams',
	'East Timor	2963	Pico do Ramelau (Mount Ramelau)',
	'Germany	2962	Zugspitze',
	'Philippines	2954	Mount Apo',
	'Andorra	2942	Coma Pedrosa',
	'Bulgaria	2925	Musala',
	'Greece	2919	Mount Olympus',
	'Madagascar	2876	Maromokotro',
	'Honduras	2870	Cerro Las Minas',
	'Slovenia	2864	Triglav',
	'Cape Verde	2829	Mount Fogo',
	'Laos	2817	Phou Bia',
	'Syria	2814	Mount Hermon (Jabal el-Sheikh)',
	'Albania	2764	Maja e Korabit',
	'Macedonia	2764	Golem Korab',
	'Guyana	2750	Mount Roraima',
	'Australia	2745	Mawson Peak on Heard Island',
	'North Korea	2744	Paektu-san',
	'El Salvador	2730	Cerro El Pital',
	'Burundi	2684	south east of Mount Heha',
	'Haiti	2680	Pic la Selle',
	'Slovakia	2655	Gerlachovský štít',
	'Egypt	2629	Mount Catherine',
	'Angola	2620	Morro de Môco',
	'Namibia	2606	Konigstein',
	'Liechtenstein	2599	Grauspitz',
	'Zimbabwe	2592	Mount Nyangani',
	'Thailand	2565	Doi Inthanon',
	'Romania	2544	Moldoveanu',
	'Montenegro	2534	Zla Kolata',
	'Sri Lanka	2524	Pidurutalagala',
	'Poland	2499	Rysy',
	'Norway	2469	Galdhøpiggen',
	'Somalia	2450	Shimbiris',
	'Mozambique	2436	Monte Binga',
	'Nigeria	2419	Chappal Waddi',
	'Bosnia and Herzegovina	2386	Maglić',
	'Comoros	2360	Le Kartala',
	'Portugal	2351	Ponta do Pico on Pico Island in the Azores',
	'Solomon Islands	2335	Mount Popomanaseu',
	'Zambia	2329	unnamed location in Mafinga Hills',
	'Libya	2267	Bikku Bitti',
	'Jamaica	2256	Blue Mountain Peak',
	'Israel	1208	Har Meron or Mount Hermon',
	'Serbia	2169	Midžor or Đeravica',
	'Iceland	2110	Hvannadalshnúkur',
	'Nicaragua	2107	Mogoton',
	'Sweden	2104	Kebnekaise',
	'Ukraine	2061	Hora Hoverla',
	'Djibouti	2028	Mousa Ali',
	'São Tomé and Príncipe	2024	Pico de São Tomé',
	'Niger	2022	Mont Idoukal-n-Taghès',
	'Cuba	1974	Pico Turquino',
	'Cyprus	1951	Mount Olympus',
	'South Korea	1950	Halla-san (in Jeju Island)',
	'Sierra Leone	1948	Mount Bintumani (Loma Mansa)',
	'United Arab Emirates	1910	Unnamed knoll west of Jabal Bil Ays',
	'Vanuatu	1879	Mount Tabwemasana',
	'Swaziland	1862	Emlembe',
	'Samoa	1857	Mauga Silisili (Savaii)',
	'Jordan	1854	Jabal Umm ad Dami',
	'Brunei	1850	Bukit Pagon',
	'Croatia	1831	Dinara',
	'Cambodia	1810	Phnom Aural',
	'Côte d\'Ivoire	1752	Mont Nimba',
	'Guinea	1752	Mont Nimba',
	'Czech Republic	1602	Sněžka',
	'Tunisia	1544	Jebel ech Chambi',
	'Botswana	1491	Otse Hill',
	'Dominica	1447	Morne Diablotins',
	'Liberia	1440	Mount Wuteve',
	'Central African Republic	1420	Mont Ngaoui',
	'United Kingdom	1344	Ben Nevis',
	'Fiji	1324	Tomanivi',
	'Finland	1324	Halti',
	'Saint Vincent and the Grenadines	1234	Soufrière',
	'Suriname	1230	Juliana Top',
	'Saint Kitts and Nevis	1156	Mount Liamuiga',
	'Mali	1155	Hombori Tondo',
	'Belize	1124	Doyle\'s Delight',
	'Gabon	1070	Mont Bengoué',
	'Bangladesh	1063	Saka Haphong',
	'Ireland	1038	Carrauntoohil',
	'Tonga	1033	unnamed location on Kao Island',
	'Republic of the Congo	1020	Mont Nabeba',
	'Hungary	1014	Kékes',
	'Togo	986	Mont Agou',
	'Saint Lucia	950	Mount Gimie',
	'Trinidad and Tobago	940	El Cerro del Aripo',
	'Mauritania	915	Kediet ej Jill',
	'Seychelles	905	Morne Seychellois',
	'Netherlands	887	Mount Scenery (on the Caribbean island of Saba)',
	'Ghana	880	Mount Afadjato',
	'Paraguay	842	Cerro Peró (Cerro Tres Kandú)',
	'Grenada	840	Mount Saint Catherine',
	'Mauritius	828	Piton de la Petite Rivière Noire',
	'Federated States of Micronesia	791	Dolohmwar (Totolom)',
	'San Marino	755	Monte Titano',
	'Burkina Faso	749	Tena Kourou',
	'Belgium	694	Signal de Botrange',
	'Benin	658	Mont Sokbaro',
	'Senegal	581	unnamed feature near Nepen Diakha',
	'Luxembourg	560	Kneiff',
	'Uruguay	514	Cerro Catedral',
	'Moldova	430	Dealul Bălăneşti',
	'Antigua and Barbuda	402	Mount Obama',
	'Belarus	346	Dzyarzhynskaya Hara',
	'Barbados	336	Mount Hillaby',
	'Estonia	318	Suur Munamägi',
	'Latvia	312	Gaizinkalns',
	'Kuwait	306	unnamed location',
	'Guinea-Bissau	300	unnamed location in the northeast corner of the country',
	'Lithuania	294	Aukštojas Hill',
	'Malta	253	Ta\'Dmejrek',
	'Palau	242	Mount Ngerchelchuus',
	'Denmark	171	Møllehøj',
	'Singapore	164	Bukit Timah',
	'Monaco	161	Chemin des Révoires, a pathway located on the slopes of Mont Agel',
	'Bahrain	134	Mountain of Smoke',
	'Qatar	103	Qurayn Abu al Bawl',
	'Kiribati	81	unnamed location on Banaba',
	' Vatican City	75	Vatican Hill',
	'Nauru	71	Command Ridge',
	'Bahamas	63	Mount Alvernia on Cat Island',
	'The Gambia	53	unnamed location',
	'Marshall Islands	10	unnamed location on Likiep',
	'Tuvalu	5	unnamed location on Niulakita',
	'Maldives	2.4	unnamed location on Villingili Island',
   ].join('\n');

sampleData[3] =
   ['Country	Population	Currency',
	'Austria	8404252	Euro',
	'Belgium	10918405	Euro',
	'Estonia	1340194	Euro',
	'Finland	5375276	Euro',
	'France	65075373	Euro',
	'Germany	81751602	Euro',
	'Greece	11325897	Euro',
	'Ireland	4480858	Euro',
	'Italy	60626442	Euro',
	'Luxembourg	511840	Euro',
	'Malta	417617	Euro',
	'Netherlands	16655799	Euro',
	'Portugal	10636979	Euro',
	'Slovakia	5435273	Euro',
	'Slovenia	2050189	Euro',
	'Spain	47190493	Euro',
	'Bulgaria	7261000	Bulgarian lev',
	'United Kingdom	64231000	British pound sterling',
	'Croatia	4258000	Croatian kuna',
	'Czech Republic	10519000	Czech koruna',
	'Denmark	5612000	Danish krone',
	'Hungary	9894000	Hungarian forint',
	'Latvia	2011000	Latvian lats',
	'Lithuania	2956000	Lithuanian litas',
	'Poland	38548000	Polish złoty',
	'Romania	19858000	Romanian leu',
	'Sweden	9595000	Swedish krona',
	'Switzerland	8075000	Swiss franc',
	'Ukraine	45461000	Ukrainian hryvnia',
	'Belarus	9460000	Belarusian ruble',
	'Norway	5077000	Norwegian krone',
	'Bosnia and Herzegovina	3847000	Bosnia and Herzegovina convertible mark',
	'Moldova	3486000	Moldovan leu',
	'Albania	2783000	Albanian lek',
	'Macedonia	2066000	Macedonian denar',
   ].join('\n');

sampleData[4] =
   ['State	Population	Statehood	Obesity	Newspaper	2012 Elections',
	'Maryland	5884563	1788	25.2%	Washington Post	Obama',
	'Alabama	4822023	1819	30.1%	USA Today	Romney',
	'Alaska	731449	1959	27.3%	SF Gate	Romney',
	'Arizona	6553255	1912	23.3%	USA Today	Romney',
	'Arkansas	2949131	1836	28.1%	USA Today	Romney',
	'California	38041430	1850	23.1%	SF Gate	Obama',
	'Colorado	5187582	1876	21%	USA Today	Obama',
	'Connecticut	3590347	1788	20.8%	The New York Times	Obama',
	'Delaware	917092	1787	25.9%	The New York Times	Obama',
	'Florida	19317568	1845	23.3%	USA Today	Obama',
	'Georgia	9919945	1788	27.5%	USA Today	Romney',
	'Hawaii	1392313	1959	20.7%	The New York Times	Obama',
	'Idaho	1595728	1890	24.6%	SF Gate	Romney',
	'Illinois	12875255	1818	25.3%	Chicago Tribune	Obama',
	'Indiana	6537334	1816	27.5%	Chicago Tribune	Romney',
	'Iowa	3074186	1946	26.3%	USA Today	Obama',
	'Kansas	2885905	1861	25.8%	USA Today	Romney',
	'Kentucky	4380415	1792	28.4%	USA Today	Romney',
	'Louisiana	4601893	1812	29.5%	USA Today	Romney',
	'Maine	1329192	1820	23.7%	The New York Times	Obama',
	'Massachusetts	6646144	1788	20.9%	Boston Globe	Obama',
	'Michigan	9883360	1837	27.7%	USA Today	Obama',
	'Minnesota	5379139	1858	24.8%	The New York Times	Obama',
	'Mississippi	2984926	1817	34.4%	USA Today	Romney',
	'Missouri	6021988	1821	27.4%	USA Today	Romney',
	'Montana	1005141	1889	21.7%	SF Gate	Romney',
	'Nebraska	1855525	1867	26.5%	USA Today	Romney',
	'Nevada	2758931	1864	23.6%	USA Today	Obama',
	'New Hampshire	1320718	1788	23.6%	Boston Globe	Obama',
	'New Jersey	8864590	1787	22.9%	Wall Street Journal	Obama',
	'New Mexico	2085538	1912	23.3%	The New York Times	Obama',
	'New York	19570261	1788	23.5%	The Guardian	Obama',
	'North Carolina	9752073	1789	27.1%	USA Today	Romney',
	'North Dakota	699628	1889	25.9%	SF Gate	Romney',
	'Ohio	11544225	1803	26.9%	USA Today	Obama',
	'Oklahoma	3814820	1907	28.1%	USA Today	Romney',
	'Oregon	3899353	1859	25%	The New York Times	Obama',
	'Pennsylvania	12763536	1787	25.7%	USA Today	Obama',
	'Rhode Island	1050292	1790	21.4%	The New York Times	Obama',
	'South Carolina	4723723	1788	29.2%	USA Today	Romney',
	'South Dakota	833354	1889	26.1%	SF Gate	Romney',
	'Tennessee	6456243	1796	29%	USA Today	Romney',
	'Texas	26059203	1845	27.2%	USA Today	Romney',
	'Utah	2855287	1896	21.8%	USA Today	Romney',
	'Vermont	626011	1791	21.1%	The New York Times	Obama',
	'Virginia	8185867	1788	25.2%	Washington Post	Obama',
	'Washington	6897012	1889	24.5%	The New York Times	Obama',
	'West Virginia	1855413	1863	30.6%	USA Today	Romney',
	'Wisconsin	5726398	1848	25.5%	USA Today	Obama',
	'Wyoming	576412	1890	24%	SF Gate	Romney',
   ].join('\n');

sampleData[5] =
   ['State	Beer	Beer image	Food	Food image',
	'Maryland	Blue moon		Blue crabs	http://openclipart.org/image/800px/svg_to_png/27380/annaleeblysse_Blue_Crab.png',
	'Alabama	Yuengling	http://kramerbev.com/files/2013/07/Yuengling-Lager.png	Cornbread	http://texaslastfrontier.com/wp-content/uploads/2012/08/berthie_cornbread.png',
	'Alaska	Blue moon	http://investorplace.com/wp-content/uploads/2013/08/blue-moon-beer.png	King crab	http://0.tqn.com/d/webclipart/1/0/M/P/5/King-Crab.png',
	'Arizona	Blue moon		Fry bread	http://navajofrybread.com/wp-content/uploads/2013/01/frybread.jpg',
	'Arkansas	Bud light	http://images.pictureshunt.com/pics/b/bud_light_logo-3122.gif	Jelly pie	http://etc-mysitemyway.s3.amazonaws.com/icons/legacy-previews/icons/firey-orange-jelly-icons-food-beverage/056639-firey-orange-jelly-icon-food-beverage-food-pie-sc44.png',
	'California	Corona Extra	http://kramerbev.com/files/2013/07/Corona-Extra.png	Grapes	http://www.clker.com/cliparts/d/2/7/c/1194986125512843964grape_01.svg.med.png',
	'Colorado	Blue moon		Denver omelette	http://www.ihop.com/menus/main-menu/omelettes/-/media/ihop/MenuItems/Omelettes/Big%20Steak%20Omelette/Big_Steak_Omelette.png?mh=367',
	'Connecticut	Samuel Adams	http://kramerbev.com/files/2013/08/Sam-Adams-Boston-Lager-copy.png	Hamburger	http://freeclipartstore.com/Hamburger%2008.gif',
	'Delaware	Yuengling		Crab puff	http://www.rolandfood.com/i/product_images/c/936/71026__47441_zoom.png',
	'Florida	Yuengling		Oranges	http://www.sesptsa.org/wp-content/uploads/2013/01/shutterstock_11167330_High-612x300.png',
	'Georgia	Blue moon		Peaches	http://www.hauserandhauserfarms.com/assets/corn%20photos/peach.gif',
	'Hawaii	Corona Extra		Pinapples	http://www.picgifs.com/food-and-drinks/food-and-drinks/pineapple/food-and-drinks-pineapple-932490.gif',
	'Idaho	Blue moon		Potatoes	http://www.kimmelorchard.org/images/icon_potatoes.png',
	'Illinois	Samuel Adams		Chicago-style pizza	http://a4.urbancdn.com/w/s/47/yZ031SxChcgWHh-640m.png',
	'Indiana	Coors Light	https://www.coorslight.com/portals/0/skins/coorslight/images/agegate/logo.png	Popcorn	http://www.bellybytes.com/recipe/popcorn/images/PopCorn.png',
	'Iowa	Bud light		Loose meat sandwitches	http://s3.amazonaws.com/WawaPromotions/hotturkeyfall2013/web/img_hotturkey_m.png',
	'Kansas	Bud light		Wet barbeque	http://ondergrondse.tudelft.nl/assets/images/barbeque.gif',
	'Kentucky	Bud light		Fried chicken	http://files.gamebanana.com/img/ico/sprays/501338981012a.png',
	'Louisiana	Blue moon		Crawfish	http://www.downloadclipart.net/large/21-crawfish-1-file-clipart.png',
	'Maine	Samuel Adams		Lobster	http://lobsterfestival.com/images/home-lobster.png',
	'Massachusetts	Samuel Adams		Clam showder	http://d1mtqxpn49jad8.cloudfront.net/content/menu/get-started/large/10028.png',
	'Michigan	Bud light		Pasties	http://www.cornishpasties.org.uk/otherpasties/welsh/giantwelshoggie.gif',
	'Minnesota	Blue moon		Fried food on stick	http://pixabay.com/static/uploads/photo/2012/04/12/12/35/food-29837_640.png?i',
	'Mississippi	Bud light		Mud pie	http://alabamarainbowpages.com/wp-content/uploads/2013/10/logo-599x599.png',
	'Missouri	Bud light		Toasted ravioli	http://www.leancuisine.com/images/site/products/plate/33.png',
	'Montana	Bud light		Rocky Mountain oysters	http://trueoyster.com/files/4613/7530/1867/oyster-hero.png',
	'Nebraska	Blue moon		Corn	http://www.justysproduce.com/images/yellow-corn-01.jpg',
	'Nevada	Blue moon		Buffets	http://www.albertosrestaurantandbanquets.com/wp-content/uploads/2013/04/Fabulous-Buffets.fw_.png',
	'New Hampshire	Samuel Adams		Maple syrup	http://ocanada.com.au/shop/media/catalog/product/cache/1/image/5e06319eda06f020e43594a9c230972d/m/a/maplesyrupclearysleaf50ml.gif',
	'New Jersey	Samuel Adams		Italian sub	http://www.themilanbakeryonline.com/wp-content/uploads/2012/07/frullati_cafe_turkey_sub.png',
	'New Mexico	Blue moon		Chiles	http://www.findthatlogo.com/wp-content/gallery/chilis-logo-gallery/chilis-logo.jpg',
	'New York	Blue moon		Pizza	http://tntpizzeria.com/images/pizza%20copy.png',
	'North Carolina	Blue moon		Dry barbeque	http://www.echurrascobbq.com.au/Content/images/BBQ_only.png',
	'North Dakota	Bud light		Knoeplah	http://www.perogi.ca/images/pictures_jan28_2008/crepes.gif',
	'Ohio	Yuengling		Cincinatti chili	http://www.skylinechili.com/images/slide-food.png',
	'Oklahoma	Coors Light		Fried okra	http://misswhitewrites.com/wp-content/uploads/2013/01/sides-fried-okra-big.png',
	'Oregon	Blue moon		Hazelnuts	http://0.tqn.com/d/webclipart/1/0/Q/E/5/hazelnuts.png',
	'Pennsylvania	Yuengling		Cheesesteaks	http://25.media.tumblr.com/tumblr_lt2oumD2ov1qbvmeqo1_1280.png',
	'Rhode Island	Samuel Adams		Coffee milk	http://www.garelickfarms.com/sites/default/files/styles/s_290x435/public/GF_PROD_trumoo_1lowfatcoff_halfgal_0.png',
	'South Carolina	Blue moon		Benne wafers	http://trialx.org/wp-content/uploads/2012/07/recipes/Benne_Wafers-1.gif',
	'South Dakota	Bud light		Chislic	http://img.gawkerassets.com/img/193i0qqm6x1elpng/original.png',
	'Tennessee	Yuengling		Tomatoes	http://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png',
	'Texas	Bud light		Steak	http://www.homegrowncow.com/images/meat-cuts/Loin-Porterhouse-Steak.gif',
	'Utah	Blue moon		Green Jell-O	http://fc03.deviantart.net/fs71/f/2011/226/6/4/the_evil_jello_by_blackmoonrose13-d46kd27.png',
	'Vermont	Samuel Adams		Ben & Jerry\'s ice cream	http://upload.wikimedia.org/wikipedia/en/thumb/1/17/Ben_and_jerry_logo.svg/800px-Ben_and_jerry_logo.svg.png',
	'Virginia	Blue moon		Hamburger	http://freeclipartstore.com/Hamburger%2008.gif',
	'Washington	Blue moon		Apples	http://www.clker.com/cliparts/3/7/5/6/11949861182029597463an_apple_01.svg.med.png',
	'West Virginia	Yuengling		Ramps	http://www.sas.usace.army.mil/Portals/61/siteimages/Lakes/thurmond/striper.gif',
	'Wisconsin	Miller Lite	http://www.pizzashuttle.com/sites/default/files/imagecache/special_frontpage/lite_logo_transparent.gif	Cheese	http://www.yankeepotroast.org/img/cheese1.gif',
	'Wyoming	Bud light		Buffalo burger	http://www.fuddruckers.com/images/menu_burger_02.png',
   ].join('\n');

sampleData[6] = 
	   ['Marker	Date',
		'Shefa-\'Amr, Israel	Oct 1990',
		'Nazareth, Israel	Sep 2002',
		'Haifa, Israel	Nov 2008',
		'Taba, Egypt	August 1995',
		'Sharm el-Sheikh, Egypt	August 1997',
		'Amman, Jordan	July 2000',
		'Bavaria, Germany	July 2004',
		'Burgas, Bulgaria	Aug 2010',
		'Costa Brava, Spain	May 2011',
		'Zurich, Switzerland	Nov 2011',
		'Petra, Jordan	July 2012',
		'Sicily, Italy	Sep 2012',
		'London, United Kingdom	July 2013',
		'Iceland	July 2013',
		'Maryland, United States	August 2013',
		'Washington, D.C., United States	Sep 2013',
	   ].join('\n');

sampleData[7] = 
	   ['Location	Date',
		'Shefa-\'Amr, Israel	Oct 1990',
		'Nazareth, Israel	Sep 2002',
		'Haifa, Israel	Nov 2008',
		'Taba, Egypt	August 1995',
		'Sharm el-Sheikh, Egypt	August 1997',
		'Amman, Jordan	July 2000',
		'Bavaria, Germany	July 2004',
		'Burgas, Bulgaria	Aug 2010',
		'Costa Brava, Spain	May 2011',
		'Zurich, Switzerland	Nov 2011',
		'Petra, Jordan	July 2012',
		'Sicily, Italy	Sep 2012',
		'London, United Kingdom	July 2013',
		'Iceland	July 2013',
		'Maryland, United States	August 2013',
		'Washington, D.C., United States	Sep 2013',
	   ].join('\n');

sampleData[8] = 
   ['Path	Dates',
	'Miami, Florida	Dec 22-23',
	'Nassau, Bahamas	Dec 24',
	'Coco Cay, Bahamas	Dec 25',
	'Key West, Florida	Dec 26',
	'Orlando, Florida	Dec 27',
	'Daytona Beach, Florida	Dec 28',
   ].join('\n');

sampleData[9] = 
   ['From	Colonies in 1920',
	'United Kingdom	Egypt',
	'United Kingdom	Sudan',
	'United Kingdom	South Sudan',
	'United Kingdom	Auganda',
	'United Kingdom	Kenya',
	'United Kingdom	Tanzania',
	'United Kingdom	Malawi',
	'United Kingdom	Zambia',
	'United Kingdom	Zimbabwe',
	'United Kingdom	Bostwana',
	'United Kingdom	Namibia',
	'United Kingdom	South Africa',
	'United Kingdom	Israel',
	'United Kingdom	Jordan',
	'United Kingdom	Iraq',
	'United Kingdom	India',
	'United Kingdom	Ireland',
	'United Kingdom	Papua New Guinea',
	'United Kingdom	Malaysia',
	'United Kingdom	Australia',
	'United Kingdom	New Zealand',
	'United Kingdom	Yemen',
	'United Kingdom	Oman',
	'United Kingdom	United Arab Emirates',
	'United Kingdom	Canada',
	'United Kingdom	Kuwait',
	'United Kingdom	Ghana',
	'United Kingdom	Nigeria',
	'United Kingdom	Guyana',
	'France	Syria',
	'France	Lebanon',
	'France	Madagascar',
	'France	Vietnam',
	'France	Cambodia',
	'France	French Guiana',
	'France	Algeria',
	'France	Tunisia',
	'France	Morocco',
	'France	Mauritania',
	'France	Mali',
	'France	Niger',
	'France	Chad',
	'France	Central African Republic',
	'France	Cameron',
   ].join('\n');

sampleData[10] = 
   ['Country	Occupier',
	'Egypt	United Kingdom',
	'Sudan	United Kingdom',
	'South Sudan	United Kingdom',
	'Auganda	United Kingdom',
	'Kenya	United Kingdom',
	'Tanzania	United Kingdom',
	'Malawi	United Kingdom',
	'Zambia	United Kingdom',
	'Zimbabwe	United Kingdom',
	'Bostwana	United Kingdom',
	'Namibia	United Kingdom',
	'South Africa	United Kingdom',
	'Israel	United Kingdom',
	'Jordan	United Kingdom',
	'Iraq	United Kingdom',
	'India	United Kingdom',
	'Ireland	United Kingdom',
	'Papua New Guinea	United Kingdom',
	'Malaysia	United Kingdom',
	'Australia	United Kingdom',
	'New Zealand	United Kingdom',
	'Yemen	United Kingdom',
	'Oman	United Kingdom',
	'United Arab Emirates	United Kingdom',
	'Canada	United Kingdom',
	'Kuwait	United Kingdom',
	'Ghana	United Kingdom',
	'Nigeria	United Kingdom',
	'Guyana	United Kingdom',
	'Syria	France',
	'Lebanon	France',
	'Madagascar	France',
	'Vietnam	France',
	'Cambodia	France',
	'French Guiana	France',
	'Algeria	France',
	'Tunisia	France',
	'Morocco	France',
	'Mauritania	France',
	'Mali	France',
	'Niger	France',
	'Chad	France',
	'Central African Republic	France',
	'Cameron	France',
	].join('\n');

function fillSampleData(i) {
	$('#data').val(sampleData[i]).trigger('autosize.resize');
	processTSV();
};

function processTSV() {
	var table = $.tsv.parseRows($('#data').val());
     
    var tables = new Array();
    var idx = 0;
    for (var column = 1; column < table[0].length; column++) {
    	tables[idx] = new Array();
    	var plusImages = false;
    	if (column + 1 < table[0].length && (table[0][column + 1] === table[0][column] + " image")) {
    		plusImages = true;
    	} 
    	for (var row = 0; row < table.length; row++) {
    		var value = table[row][column];
    		if ($.isNumeric(value)) {
    			value = parseInt(value, 10);
    		}
    		var newRow = [table[row][0], value];
    		if (plusImages) {
    			newRow.push(table[row][column + 1]);
    		}
    		tables[idx][row] = newRow;
    	}
    	idx++;
    	if (plusImages) {
    		column++;  // Advance 2 columns on this iteration.
    	}
    }

	$('#charts_div').empty();
    for (var t = 0; t < tables.length; t++) {
    	$('#charts_div').append(
        		'<h1 style="padding-left: 10px">' + tables[t][0][1] + '</h1>');
    	$('#charts_div').append(
        		'<div id="chart_div' + t + '" class="map_container"></div>');
    	$('#charts_div').append(
    		'<div id="chart_legend' + t + '" style="width: 1050px"></div><hr />');
    	drawRegionsMap(tables[t], t);
    }
};

function sortNumber(a, b) {
    return a - b;
}
function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// First row of the table is the header row. (e.g., Country, Population).
// Table has two columns: Item, Value. (e.g., Israel, 8M).
function drawRegionsMap(table, t) {
	var mapRegion = 'world';
	var mapResolution = 'countries';
	if (table[0][0] === 'Country') {
		var allEuropeanCountries = true;
		for (var row = 1; row < table.length; row++) {
			if (EUROPE.indexOf(table[row][0]) == -1) {
				allEuropeanCountries = false;
				break;
			}
		}
		if (allEuropeanCountries) {
			mapRegion = '150';  // = Europe. See https://google-developers.appspot.com/chart/interactive/docs/gallery/geochart#Configuration_Options
		}
	}
	if (table[0][0] === 'State') {
		mapRegion = 'US';
		mapResolution = 'provinces';
	}
	if (table[0][0] === 'Marker') {
		// displayMode: 'markers'.
		drawMarkersMap(table, t, mapRegion, mapResolution);
	} else if (table[0][0] === 'Location') {
		drawLocationsMap(table, t);
	} else if (table[0][0] === 'Path') {
		drawPathMap(table, t);
	} else if (table[0][0] === 'From') {
		drawPairsMap(table, t);
	} else {
		// displayMode: 'regions'.
		if (typeof table[1][1] === 'number' || endsWith(table[1][1], '%')) {
			drawRegionsMapOrdinalData(table, t, mapRegion, mapResolution);
		} else {
			drawRegionsMapNominalData(table, t, mapRegion, mapResolution);
		}
	}
}

function drawRegionsMapOrdinalData(table, t, mapRegion, mapResolution) {
  var columnName = table[0][1];
  table.shift();  // Remove the first row - the header (e.g., "Country  Population").

  // Convert percentages (if that's the case) to numbers.
	var percentages = false;
	if (typeof table[0][1] === 'string' && endsWith(table[0][1], '%')) {
		percentages = true;
		for (var i = 0; i < table.length; i++) {
			table[i][1] = Number(table[i][1].replace('%', ''));
		}
	}

  // Sort the table based on value.
  table.sort(function(a, b) {
    a = a[1];
    b = b[1];

    return a < b ? -1 : (a > b ? 1 : 0);
  });

	console.log(table)

  // Scale colors in a Harmonic scale (similar to logarithmic scale), but I invented it now.
	// Since for example, many countries have small population, while very few (China/India) have
	// a huge population, and usually more populated countries tend to be bigger on the map, we 
	// want more countries to be colored with the first color than the last color.
	// E.g., white white white white silver silver silver gray gray black.
	// The following loop scales the colors list this way.
  var COLORS = ['#f4f4f4', 'yellow', 'orange', 'red', 'maroon', 'gray', 'black'];
  var scaled_colors = [];
  for (var i = 0; i < COLORS.length; i++) {
  	for (var j = 0; j < COLORS.length - i; j++) {
  		scaled_colors.push(COLORS[i]);
  	}
  }
  // Rainbow for the colors.
	var rainbow = new Rainbow(); 
	rainbow.setNumberRange(0, table.length - 1);
	rainbow.setSpectrum.apply(this, scaled_colors);

  // Geocode all names.
  var queries = [];
  for (var i = 0; i < table.length; i++) {
      queries[i] = table[i][0];
  }
  $.ajax({
      url: '/geocode',
      data: { q: queries },
      dataType: "json",
      traditional: true,
      success: function(result) {
        console.log(result);

        var colorDict = d3.map();
        for (var i = 0; i < queries.length; i++) {
            var hexColour = rainbow.colourAt(i);
            // colorDict[result[queries[i]]] = '#' + hexColour;
            colorDict[table[i][0]] = '#' + hexColour;
        }

        fillMap('chart_div' + t, colorDict);
      }
  });
  
  // Legend.
  var LEGEND_WIDTH = 350;
  legendDiv = '<div style="margin-left: 10px">';
  legendDiv += '<div style="display: inline-block; padding-right: 10px">' + columnName + ':</div>';
  legendDiv += '<div style="display: inline-block">' + commafy(table[0][1]) + '</div>';
  for (var i = 0; i < table.length; i++) {
  	legendDiv += 
  		'<div style="background-color: #' + rainbow.colourAt(i) + '; width: ' + 
  		Math.round(LEGEND_WIDTH / table.length) + 
  		'px; height: 15px; display: inline-block"> </div>';
  }
  legendDiv += '<div style="display: inline-block">' + commafy(table[table.length - 1][1]) + '</div>';
  legendDiv += '</div>';
  $('#chart_legend' + t).append(legendDiv);
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 3; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRainbowColors(numberOfColors) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distiguishable vibrant markers in Google Maps and other apps.
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    // Adam Cole, 2011-Sept-14
    var colors = [];
    for (var index = 0; index < numberOfColors; index++) {
	    var r, g, b;
	    var h = index / numberOfColors;
	    var i = ~~(h * 6);
	    var f = h * 6 - i;
	    var q = 1 - f;
	    switch(i % 6) {
	        case 0: r = 1, g = f, b = 0; break;
	        case 1: r = q, g = 1, b = 0; break;
	        case 2: r = 0, g = 1, b = f; break;
	        case 3: r = 0, g = q, b = 1; break;
	        case 4: r = f, g = 0, b = 1; break;
	        case 5: r = 1, g = 0, b = q; break;
	    }
	    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
	    colors.push(c);
    }
    return colors;
}

function drawRegionsMapNominalData(table, t, mapRegion, mapResolution) {
    var numberOfItems = table.length - 1;
	var values = [];
	for (var i = 1; i <= numberOfItems; i++) {
		var value = table[i][1];
		if (value == undefined) {
			value = '';
		}
		values.push(value);
	}
	values.sort();

	// Count number of unique values.
	var unique = 1;
	for (var i = 1; i < numberOfItems; i++) {
		if (values[i] != values[i - 1]) {
			unique++;
		}
	}

	var dict = {};  // A map (dictionary) from value -> color.

	var axisColors = null;
	var axisValues = [];
	if (unique > values.length / 2 && unique > 20) {
		// Too many unique values. Color each region in a different random color.
		axisColors = getRainbowColors(numberOfItems);
		for (var i = 0; i < values.length; i++) {
			axisValues.push(i);
			dict[values[i]] = i;
		}
	} else {
		// The number of unique values is less than half the number of values. This means that there
		// are too many duplicate values. E.g., many countries speak the same language.
		// We want to color countries that have the same value with the same color.
		// And we don't want to color all the other countries (because it will just mess up the map
		// and make it less clear).

		// If there are at most 20 unique values, show them all. Otherwise, omit values that appear
		// only once, because they are not very interesting (the idea of the map in this case is to
		// see which regions have the same value, e.g., same language).
		var allowSingletons = (unique <= 20);

		// A group is a group that has an equal value.
		// The number of groups is basically the number of colors we'd need to color the map, so 
		// let's count them. And add a representative from each group to the axis values.
		var numberOfGroups = 0;
		
		if (!allowSingletons) {
			// Each group will have at least two elements.
			for (var i = 1; i < numberOfItems; i++) {
				if (values[i] === values[i - 1] && 
						((i + 1 == numberOfItems) || (values[i + 1] !== values[i]))) {
					// I'm the last in my group.
					axisValues.push(numberOfGroups);
					dict[values[i]] = numberOfGroups;
					numberOfGroups++;
				}
			}
		} else {  // Singletons allowed.
			for (var i = 0; i < numberOfItems; i++) {
				if (i == 0 || values[i] !== values[i - 1]) {
					// I'm the fisrt in my group.
					axisValues.push(numberOfGroups);
					dict[values[i]] = numberOfGroups;
					numberOfGroups++;
				}
			}
		}
		console.log(numberOfGroups)
		axisColors = getRainbowColors(numberOfGroups);
	    
	    // Legend.
	    legendDiv = '<div style="margin-left: 10px"><table>';
		var legendValues = Object.keys(dict);
	    for (var i = 0; i < legendValues.length; i++) {
	    	var value = legendValues[i];
	    	var colorIndex = dict[value];
	    	var color = axisColors[colorIndex];
	    	legendDiv += '<tr><td style="background-color: ' + color + '; width: 50px"></td><td>' + value + '</td></tr>';
	    }
	    legendDiv += '</table></div>';
	    $('#chart_legend' + t).append(legendDiv);
	}

	var plusImages = false;
	if (table[0].length === 3) {
		plusImages = true;
	}
	
	var dataRows = [];  // Each row is [State name, color index, value]
	var imagesDict = {};  // Maps from value to image URL.
	var dataDict = {};  // Maps from State name to [color, image URL]
	for (var i = 1; i < table.length; i++) {
		var colorIndex = dict[table[i][1]];
		dataRows.push([table[i][0], colorIndex, table[i][1]]);
		if (plusImages) {
			if (table[i][2] !== '') {
				imagesDict[table[i][1]] = table[i][2];
			}
			dataDict[table[i][0]] = [axisColors[colorIndex], imagesDict[table[i][1]]];
		}
	}

	// Images
	if (plusImages) {
		var map, polys = [];
		var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(42.16,-100.72),
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('chart_div' + t), mapOptions);
		jQuery.get("/stylesheets/states.xml", {}, function(data) {
			jQuery(data).find("state").each(function() {
				var name = this.getAttribute('name');
				var colorAndURL = dataDict[name];
				var colour = colorAndURL[0];  // this.getAttribute('colour');
				var url = colorAndURL[1];
				var points = this.getElementsByTagName("point");
				var pts = [];
				var minLat = 90, maxLat = -90;
				var minLon = 180, maxLon = -180;
				for (var i = 0; i < points.length; i++) {
					var lat = parseFloat(points[i].getAttribute("lat"));
					var lon = parseFloat(points[i].getAttribute("lng"))
					pts.push(new google.maps.LatLng(lat, lon));

					if (lat < minLat) {
						minLat = lat;
					}
					if (lat > maxLat) {
						maxLat = lat;
					}
					if (lon < minLon) {
						minLon = lon;
					}
					if (lon > maxLon) {
						maxLon = lon;
					}
				}
				var poly = new google.maps.Polygon({
					paths: pts,
					strokeColor: '#000000',
					strokeOpacity: 0.35,
					fillColor: colour,
					fillOpacity: 0.5,
				});
				polys.push(poly);
				poly.setMap(map);
				
				var imageBounds = new google.maps.LatLngBounds(
						new google.maps.LatLng(minLat, minLon),
						new google.maps.LatLng(maxLat, maxLon));
				
				var myOverlay = new USGSOverlay(
						imageBounds,
						url,
						map);
			});
		});
	} else {  // No images.	
	    // Chart (map) options and drawing.
	    var options = {region: mapRegion, resolution: mapResolution, 
	    		       colorAxis: {colors: axisColors, values: axisValues}};
	    var data = new google.visualization.DataTable();
	    data.addColumn('string', table[0][0]);
	    data.addColumn('number', 'Value');
	    data.addColumn({type: 'string', role: 'tooltip'})
	    data.addRows(dataRows);
	    var chart = new google.visualization.GeoChart(document.getElementById('chart_div' + t));
	    chart.draw(data, options);
	}
};

function drawMarkersMap(table, t, mapRegion, mapResolution) {
    // Chart (map) options and drawing.
    var options = {region: mapRegion, displayMode: 'markers', resolution: mapResolution,
                   legend: 'none'};
    var data = google.visualization.arrayToDataTable(table);
    var chart = new google.visualization.GeoChart(document.getElementById('chart_div' + t));
    chart.draw(data, options);
};

function drawLocationsMap(table, t) {
	var map;
	var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(42.16,-100.72),
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('chart_div' + t), mapOptions);
	
	var bounds = new google.maps.LatLngBounds();
    var geocoder = new google.maps.Geocoder();

    for (row = 1; row < table.length; row++) {
        var address = table[row][0];
        var value = table[row][1];
        // We wrap the geocode call in a function to create a closure for the variables.
        // Otherwise, all the markers will have the same value. Damn JavaScript.
        (function(address, value, row) {
            setTimeout( function () {
	        	geocoder.geocode({'address': address}, function(results, status) { 
			        if (status == google.maps.GeocoderStatus.OK) {
			            var marker = new google.maps.Marker({
			                map: map,
			                position: results[0].geometry.location,
		            		title: address + ": " + value
			            });
		
			            addInfoWindow(map, marker, address + ": " + value);
			
			            bounds.extend(results[0].geometry.location);
			        } else {
			            alert('Geocode for "' + address + '" was not successful for the following reason: ' + status);
			        }
			
			        map.fitBounds(bounds);
			    });
            }, (row - 1) * 1000);
        }(address, value, row));
    }
};

function drawPathMap(table, t) {
	var map;
	var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(42.16,-100.72),
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('chart_div' + t), mapOptions);
	
	var bounds = new google.maps.LatLngBounds();
    var geocoder = new google.maps.Geocoder();

    for (row = 1; row < table.length; row++) {
        var address = table[row][0];
        var value = table[row][1];
        // We wrap the geocode call in a function to create a closure for the variables.
        // Otherwise, all the markers will have the same value. Damn JavaScript.
        (function(address, value, row) {
            setTimeout(function () {
	        	geocoder.geocode({'address': address}, function(results, status) {
			        if (status == google.maps.GeocoderStatus.OK) {
			        	var latLng = results[0].geometry.location;
			            var marker = new google.maps.Marker({
			                map: map,
			                position: latLng,
		            		title: address + ": " + value
			            });
		
			            addInfoWindow(map, marker, address + ": " + value);
			
			            bounds.extend(latLng);
			            map.fitBounds(bounds);
			            
				        if (row > 1) {  // Not the first row.
				        	// Draw an arrow from the previous location to the current one. 
				            var previousAddress = table[row - 1][0];
				        	geocoder.geocode({'address': previousAddress}, function(results, status) { 
						        if (status == google.maps.GeocoderStatus.OK) {
						        	  // Define a symbol using a predefined path (an arrow)
						        	  // supplied by the Google Maps JavaScript API.
						        	  var lineSymbol = {
						        	    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
						        	  };

						        	  // Create the polyline and add the symbol via the 'icons' property.
						        	  var prevLatLng = results[0].geometry.location;
						        	  var line = new google.maps.Polyline({
						        	    path: [prevLatLng, latLng],
						        	    icons: [{
						        	      icon: lineSymbol,
						        	      offset: '100%'
						        	    }],
						        	    map: map
						        	  });
						        } else {
						            alert('Geocode for "' + previousAddress + '" was not successful for the following reason: ' + status);
						        }
				        	});
				        }
			        } else {
			            alert('Geocode for "' + address + '" was not successful for the following reason: ' + status);
			        }
	        	});
            }, (row - 1) * 1000);
        }(address, value, row));
    }
};

function drawPairsMap(table, t) {
	var fromToDict = {};
	// How many unique "from"s are there. Each one will get a color.
	for (var row = 1; row < table.length; row++) {
		if (row == 1 || table[row][0] !== table[row - 1][0]) {  
			// New source. Add a new list for it with the first "to" element.
			fromToDict[table[row][0]] = [table[row][1]];
		} else {  
			// Source is already in the dictionary. Just add the new "to" to its set.
			fromToDict[table[row][0]].push(table[row][1]);
		}
	}
	var sources = Object.keys(fromToDict);
	var colors = getRainbowColors(sources.length);
	
	var map;
	var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(42.16,-100.72),
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('chart_div' + t), mapOptions);
	
	var bounds = new google.maps.LatLngBounds();
    var geocoder = new google.maps.Geocoder();

    var sourceIndex = 0;
    var waitTime = 0;
    for (i = 0; i < sources.length; i++) {
        // We wrap the geocode call in a function to create a closure for the variables.
        // Otherwise, all the markers will have the same value. Damn JavaScript.
        (function(i, waitTime) {
        	var fromAddress = sources[i];
            var toAddresses = fromToDict[fromAddress];

        	geocoder.geocode({'address': fromAddress}, function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		        	var latLng1 = results[0].geometry.location;
		            var marker1 = new google.maps.Marker({
		                map: map,
		                position: latLng1,
	            		title: fromAddress
		            });
		            addInfoWindow(map, marker1, fromAddress);
		            bounds.extend(latLng1);
		            map.fitBounds(bounds);

		            for (var j = 0; j < toAddresses.length; j++) {
		                (function(toAddresses, j) {
		                    setTimeout(function () {  // To avoid OVER_QUERY_LIMIT error.
				            	var toAddress = toAddresses[j];
				        		// Draw an arrow from fromAddress to toAddress. 
					        	geocoder.geocode({'address': toAddress}, function(results, status) { 
							        if (status == google.maps.GeocoderStatus.OK) {
							        	var latLng2 = results[0].geometry.location;
							            var marker2 = new google.maps.Marker({
							                map: map,
							                position: latLng2,
						            		title: toAddress
							            });
							            addInfoWindow(map, marker2, toAddress);
							            bounds.extend(latLng2);
							            map.fitBounds(bounds);
							            
							        	// Define a symbol using a predefined path (an arrow)
							        	// supplied by the Google Maps JavaScript API.
							        	var lineSymbol = {
							        		path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
							        		strokeColor: colors[i],
							        	};
			
							        	// Create the polyline and add the symbol via the 'icons' property.
							        	var latLng2 = results[0].geometry.location;
							        	var line = new google.maps.Polyline({
							        		path: [latLng1, latLng2],
							        		icons: [{
							        			icon: lineSymbol,
							        			offset: '100%',
							        		}],
						        		    strokeColor: colors[i],
							        		map: map
							        	});
							        } else {
							            alert('Geocode for "' + toAddress + '" was not successful for the following reason: ' + status);
							        }
					        	});
				        	}, (waitTime + j) * 1000);
		                }(toAddresses, j));
		            }
		        } else {
		            alert('Geocode for "' + fromAddress + '" was not successful for the following reason: ' + status);
		        }
        	});
        }(i, waitTime)); 
        waitTime += fromToDict[sources[i]].length;
    }
};

function addInfoWindow(map, marker, message) {
    var info = message;

    var infoWindow = new google.maps.InfoWindow({
        content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });
}

// Code inspired by http://techslides.com/d3-map-starter-kit/
function fillMap(container_id, colorDict) {
  d3.select(window).on("resize", throttle);

  var throttleTimer;
  function throttle() {
      window.clearTimeout(throttleTimer);
      throttleTimer = window.setTimeout(function() {
          redraw();
      }, 200);
  }

  var zoom = d3.behavior.zoom()
      .scaleExtent([1, 9])
      .on("zoom", move);

  var width = document.getElementById(container_id).offsetWidth;
  var height = width / 2;

  var topo, projection, path, svg, g;

  var graticule = d3.geo.graticule();

  var tooltip = d3.select("#" + container_id).append("div").attr("class", "tooltip hidden");

  setup(width, height);

  function setup(width, height) {
      projection = d3.geo.mercator()
          .translate([(width / 2), (height / 2)])
          .scale(width / 2 / Math.PI);

      path = d3.geo.path().projection(projection);

      svg = d3.select("#" + container_id).append("svg")
          .attr("width", width)
          .attr("height", height)
          .call(zoom)
          .on("click", click)
          .append("g");

      g = svg.append("g");
  }

  d3.json("../data/world-topo-min.json", function(error, world) {
      var countries = topojson.feature(world, world.objects.countries).features;

      topo = countries;
      draw(topo);
  });

  function draw(topo) {
      svg.append("path")
          .datum(graticule)
          .attr("class", "graticule")
          .attr("d", path);

      g.append("path")
          .datum({
              type: "LineString",
              coordinates: [
                  [-180, 0],
                  [-90, 0],
                  [0, 0],
                  [90, 0],
                  [180, 0]
              ]
          })
          .attr("class", "equator")
          .attr("d", path);

      var country = g.selectAll(".country").data(topo);

      country.enter().insert("path")
          .attr("class", "country")
          .attr("d", path)
          .attr("id", function(d, i) { return d.id; })
          .attr("title", function(d, i) { return d.properties.name; })
          .style("fill", function(d, i) { return colorDict[d.properties.name]; /*d.properties.color;*/ });

      //offsets for tooltips
      var offsetL = document.getElementById(container_id).offsetLeft + 20;
      var offsetT = document.getElementById(container_id).offsetTop + 10;

      //tooltips
      country
          .on("mousemove", function(d, i) {
              var mouse = d3.mouse(svg.node()).map(function(d) {
                  return parseInt(d);
              });

              tooltip.classed("hidden", false)
                  .attr("style", "left:" + (mouse[0] + offsetL) + "px;top:" + (mouse[1] + offsetT) + "px")
                  .html(d.properties.name);
          })
          .on("mouseout", function(d, i) {
              tooltip.classed("hidden", true);
          });


      //EXAMPLE: adding some capitals from external CSV file
      d3.csv("../data/country-capitals.csv", function(err, capitals) {
          capitals.forEach(function(i) {
              addpoint(i.CapitalLongitude, i.CapitalLatitude, i.CapitalName);
          });
      });

  }

  function redraw() {
      width = document.getElementById(container_id).offsetWidth;
      height = width / 2;
      d3.select('svg').remove();
      setup(width, height);
      draw(topo);
  }

  function move() {
      var t = d3.event.translate;
      var s = d3.event.scale;
      zscale = s;
      var h = height / 4;

      t[0] = Math.min(
          (width / height) * (s - 1),
          Math.max(width * (1 - s), t[0])
      );

      t[1] = Math.min(
          h * (s - 1) + h * s,
          Math.max(height * (1 - s) - h * s, t[1])
      );

      zoom.translate(t);
      g.attr("transform", "translate(" + t + ")scale(" + s + ")");

      //adjust the country hover stroke width based on zoom level
      d3.selectAll(".country").style("stroke-width", 1.5 / s);
  }

  // geo translation on mouse click in map
  function click() {
      var latlon = projection.invert(d3.mouse(this));
      console.log(latlon);
  }


  // function to add points and text to the map (used in plotting capitals)
  function addpoint(lat, lon, text) {
      var gpoint = g.append("g").attr("class", "gpoint");
      var x = projection([lat, lon])[0];
      var y = projection([lat, lon])[1];

      gpoint.append("svg:circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("class", "point")
          .attr("r", 1.5);

      // conditional in case a point has no associated text
      if (text.length > 0) {
          gpoint.append("text")
              .attr("x", x + 2)
              .attr("y", y + 2)
              .attr("class", "text")
              .text(text);
      }
  }
}