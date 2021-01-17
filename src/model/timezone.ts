export type Timezone =
  | "Pacific/Niue"
  | "Pacific/Pago_Pago"
  | "Pacific/Honolulu"
  | "Pacific/Rarotonga"
  | "Pacific/Tahiti"
  | "Pacific/Marquesas"
  | "America/Anchorage"
  | "Pacific/Gambier"
  | "America/Los_Angeles"
  | "America/Tijuana"
  | "America/Vancouver"
  | "America/Whitehorse"
  | "Pacific/Pitcairn"
  | "America/Denver"
  | "America/Phoenix"
  | "America/Mazatlan"
  | "America/Dawson_Creek"
  | "America/Edmonton"
  | "America/Hermosillo"
  | "America/Yellowknife"
  | "America/Belize"
  | "America/Chicago"
  | "America/Mexico_City"
  | "America/Regina"
  | "America/Tegucigalpa"
  | "America/Winnipeg"
  | "America/Costa_Rica"
  | "America/El_Salvador"
  | "Pacific/Galapagos"
  | "America/Guatemala"
  | "America/Managua"
  | "America/Cancun"
  | "America/Bogota"
  | "Pacific/Easter"
  | "America/New_York"
  | "America/Iqaluit"
  | "America/Toronto"
  | "America/Guayaquil"
  | "America/Havana"
  | "America/Jamaica"
  | "America/Lima"
  | "America/Nassau"
  | "America/Panama"
  | "America/Port-au-Prince"
  | "America/Rio_Branco"
  | "America/Halifax"
  | "America/Barbados"
  | "Atlantic/Bermuda"
  | "America/Boa_Vista"
  | "America/Caracas"
  | "America/Curacao"
  | "America/Grand_Turk"
  | "America/Guyana"
  | "America/La_Paz"
  | "America/Manaus"
  | "America/Martinique"
  | "America/Port_of_Spain"
  | "America/Porto_Velho"
  | "America/Puerto_Rico"
  | "America/Santo_Domingo"
  | "America/Thule"
  | "America/St_Johns"
  | "America/Araguaina"
  | "America/Asuncion"
  | "America/Belem"
  | "America/Argentina/Buenos_Aires"
  | "America/Campo_Grande"
  | "America/Cayenne"
  | "America/Cuiaba"
  | "America/Fortaleza"
  | "America/Godthab"
  | "America/Maceio"
  | "America/Miquelon"
  | "America/Montevideo"
  | "Antarctica/Palmer"
  | "America/Paramaribo"
  | "America/Punta_Arenas"
  | "America/Recife"
  | "Antarctica/Rothera"
  | "America/Bahia"
  | "America/Santiago"
  | "Atlantic/Stanley"
  | "America/Noronha"
  | "America/Sao_Paulo"
  | "Atlantic/South_Georgia"
  | "Atlantic/Azores"
  | "Atlantic/Cape_Verde"
  | "America/Scoresbysund"
  | "Africa/Abidjan"
  | "Africa/Accra"
  | "Africa/Bissau"
  | "Atlantic/Canary"
  | "Africa/Casablanca"
  | "America/Danmarkshavn"
  | "Europe/Dublin"
  | "Africa/El_Aaiun"
  | "Atlantic/Faroe"
  | "Etc/GMT"
  | "Europe/Lisbon"
  | "Europe/London"
  | "Africa/Monrovia"
  | "Atlantic/Reykjavik"
  | "Africa/Algiers"
  | "Europe/Amsterdam"
  | "Europe/Andorra"
  | "Europe/Berlin"
  | "Europe/Brussels"
  | "Europe/Budapest"
  | "Europe/Belgrade"
  | "Europe/Prague"
  | "Africa/Ceuta"
  | "Europe/Copenhagen"
  | "Europe/Gibraltar"
  | "Africa/Lagos"
  | "Europe/Luxembourg"
  | "Europe/Madrid"
  | "Europe/Malta"
  | "Europe/Monaco"
  | "Africa/Ndjamena"
  | "Europe/Oslo"
  | "Europe/Paris"
  | "Europe/Rome"
  | "Europe/Stockholm"
  | "Europe/Tirane"
  | "Africa/Tunis"
  | "Europe/Vienna"
  | "Europe/Warsaw"
  | "Europe/Zurich"
  | "Asia/Amman"
  | "Europe/Athens"
  | "Asia/Beirut"
  | "Europe/Bucharest"
  | "Africa/Cairo"
  | "Europe/Chisinau"
  | "Asia/Damascus"
  | "Asia/Gaza"
  | "Europe/Helsinki"
  | "Asia/Jerusalem"
  | "Africa/Johannesburg"
  | "Africa/Khartoum"
  | "Europe/Kiev"
  | "Africa/Maputo"
  | "Europe/Kaliningrad"
  | "Asia/Nicosia"
  | "Europe/Riga"
  | "Europe/Sofia"
  | "Europe/Tallinn"
  | "Africa/Tripoli"
  | "Europe/Vilnius"
  | "Africa/Windhoek"
  | "Asia/Baghdad"
  | "Europe/Istanbul"
  | "Europe/Minsk"
  | "Europe/Moscow"
  | "Africa/Nairobi"
  | "Asia/Qatar"
  | "Asia/Riyadh"
  | "Antarctica/Syowa"
  | "Asia/Tehran"
  | "Asia/Baku"
  | "Asia/Dubai"
  | "Indian/Mahe"
  | "Indian/Mauritius"
  | "Europe/Samara"
  | "Indian/Reunion"
  | "Asia/Tbilisi"
  | "Asia/Yerevan"
  | "Asia/Kabul"
  | "Asia/Aqtau"
  | "Asia/Aqtobe"
  | "Asia/Ashgabat"
  | "Asia/Dushanbe"
  | "Asia/Karachi"
  | "Indian/Kerguelen"
  | "Indian/Maldives"
  | "Antarctica/Mawson"
  | "Asia/Yekaterinburg"
  | "Asia/Tashkent"
  | "Asia/Colombo"
  | "Asia/Kolkata"
  | "Asia/Kathmandu"
  | "Asia/Almaty"
  | "Asia/Bishkek"
  | "Indian/Chagos"
  | "Asia/Dhaka"
  | "Asia/Omsk"
  | "Asia/Thimphu"
  | "Antarctica/Vostok"
  | "Indian/Cocos"
  | "Asia/Yangon"
  | "Asia/Bangkok"
  | "Indian/Christmas"
  | "Antarctica/Davis"
  | "Asia/Saigon"
  | "Asia/Hovd"
  | "Asia/Jakarta"
  | "Asia/Krasnoyarsk"
  | "Asia/Brunei"
  | "Asia/Shanghai"
  | "Asia/Choibalsan"
  | "Asia/Hong_Kong"
  | "Asia/Kuala_Lumpur"
  | "Asia/Macau"
  | "Asia/Makassar"
  | "Asia/Manila"
  | "Asia/Irkutsk"
  | "Asia/Singapore"
  | "Asia/Taipei"
  | "Asia/Ulaanbaatar"
  | "Australia/Perth"
  | "Asia/Pyongyang"
  | "Asia/Dili"
  | "Asia/Jayapura"
  | "Asia/Yakutsk"
  | "Pacific/Palau"
  | "Asia/Seoul"
  | "Asia/Tokyo"
  | "Australia/Darwin"
  | "Antarctica/DumontDUrville"
  | "Australia/Brisbane"
  | "Pacific/Guam"
  | "Asia/Vladivostok"
  | "Pacific/Port_Moresby"
  | "Pacific/Chuuk"
  | "Australia/Adelaide"
  | "Antarctica/Casey"
  | "Australia/Hobart"
  | "Australia/Sydney"
  | "Pacific/Efate"
  | "Pacific/Guadalcanal"
  | "Pacific/Kosrae"
  | "Asia/Magadan"
  | "Pacific/Norfolk"
  | "Pacific/Noumea"
  | "Pacific/Pohnpei"
  | "Pacific/Funafuti"
  | "Pacific/Kwajalein"
  | "Pacific/Majuro"
  | "Asia/Kamchatka"
  | "Pacific/Nauru"
  | "Pacific/Tarawa"
  | "Pacific/Wake"
  | "Pacific/Wallis"
  | "Pacific/Auckland"
  | "Pacific/Enderbury"
  | "Pacific/Fakaofo"
  | "Pacific/Fiji"
  | "Pacific/Tongatapu"
  | "Pacific/Apia"
  | "Pacific/Kiritimati";