## Request list of nearby casinos

```
curl -H 'Host: bravopokerlive.appspot.com' \
     -H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
     -H 'Accept: */*' \
     --data-binary "lat=40&lon=-73&mile=500" \
     --compressed \
     'https://bravopokerlive.appspot.com/service/getcasinolistbylocation' | jq
```

Sample response:

```json
[
  {
    "waitListSignUpNote": null,
    "hiddenFromList": false,
    "enableTournRegistration": false,
    "tournamentRegNote": null,
    "tournamentRegVoidNote": null,
    "gameCount": 31,
    "medURL": "https://bravopokerlive.appspot.com/admin/casinoimageretrieve?type=mediumImage&id=ahBzfmJyYXZvcG9rZXJsaXZlci4LEglkYl9jYXNpbm8YgICQ79eotAsMCxILZGJfY2FzX2luZm8YgICAgICAgAoM",
    "bannedMessage": null,
    "optionalFeeLabel": null,
    "smallURL": null,
    "liveGamePit": false,
    "lng": -77.008694,
    "tournamentRegEmail": null,
    "managementID": "x",
    "tournamentResNote": null,
    "city": "Oxon Hill",
    "enableWaitListRegistration": false,
    "waiverNote": null,
    "casinoID": "NHRB",
    "rewardSignUpUrl": null,
    "domesticWireEmail": null,
    "state": "MD",
    "enableTournamentInfo": true,
    "liveGamePoker": true,
    "enableWaitListInfo": true,
    "cashierCheckEmail": null,
    "majorevent": null,
    "description": "MGM National Harbor",
    "zipCode": "20745",
    "enableTournReservation": false,
    "waitListSignUpEmail": "aboone@mgmnationalharbor.com",
    "tournamentResVoidEmail": null,
    "internationalWireNote": null,
    "tournamentRegVoidEmail": null,
    "lat": 38.795587,
    "shortName": "MGM National Harbor Casino Resort",
    "largeURL": null,
    "distance": 229.8,
    "domesticWireNote": null,
    "lastEdit": "11-23-2024 18:27:37",
    "playerIDLabel": "MGM Rewards",
    "region": "Northeast",
    "internationalWireEmail": null,
    "cashierCheckNote": null,
    "tournamentResVoidNote": null,
    "enableGameList": true,
    "tournamentResEmail": null,
    "address": "7100 Oxon Hill Rd."
  }
]
```

## Get casino details

```
curl -H 'Host: bravopokerlive.appspot.com' \
     -H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
     -H 'Accept: */*' \
     --data-binary "mgmtid=x&casinoid=NHRB" \
     --compressed \
     'https://bravopokerlive.appspot.com/service/getcasinodetailbyid' | jq
```

Sample response:

```json
[
  {
    "waitListSignUpNote": null,
    "enableTournRegistration": false,
    "tournamentRegNote": null,
    "tournamentRegVoidNote": null,
    "web_address": "https://www.mgmnationalharbor.com/en/casino/poker.html",
    "twitter": "https://twitter.com/MGMNH_Poker",
    "medURL": "https://bravopokerlive.appspot.com/admin/casinoimageretrieve?type=mediumImage&id=ahBzfmJyYXZvcG9rZXJsaXZlci4LEglkYl9jYXNpbm8YgICQ79eotAsMCxILZGJfY2FzX2luZm8YgICAgICAgAoM",
    "bannedMessage": null,
    "optionalFeeLabel": null,
    "active": true,
    "tournamenttext": "November 2024 Tournaments\r\n\r\n11/23\r\n11:15am\r\n$1,100 NLH\r\nBetMGM Fall Festival 1C\r\n$250,000 GTD!\r\n\r\n11/24\r\n12:15pm\r\n$1,100 NLH\r\nBetMGM Fall Festival Day 2\r\n\r\n2:15 pm\r\n$400 Limit Mixed Game\r\nR.O.S.E.\r\n$10,000 GTD!\r\n\r\n11/25\r\n11:15am\r\n$200 NLH\r\nSurvivor - $1,500 Payouts\r\n$4,500 GTD!\r\n\r\n7:15pm\r\n$300 NLH\r\n$8,000 GTD!\r\n\r\n11/26\r\n11:15am\r\n$200 NLH\r\nDouble GreenChip Bounty\r\n$5,000 GTD!\r\n\r\n7:15pm\r\n$300 NLH\r\nBlackChip Bounty\r\n$8,000 GTD!\r\n\r\n11/27\r\n11:15am\r\n$200 NLH\r\n$5,000 GTD!\r\n\r\n7:15pm\r\n$200 NLH\r\nDouble Stack (40k Starting Chips)\r\n$6,000 GTD!\r\n\r\n11/28\r\n11:15am\r\n$250 NLH\r\nTriple Green Chip Bounty\r\n\r\n7:15pm\r\n$400 NLH\r\n",
    "smallURL": null,
    "liveGamePit": false,
    "lng": 38.795587,
    "largURL": null,
    "shortName": "MGM National Harbor Casino Resort",
    "managementID": "x",
    "tournamentResNote": null,
    "city": "Oxon Hill",
    "contact_number": "3019715600",
    "enableWaitListRegistration": false,
    "waiverNote": null,
    "casinoID": "NHRB",
    "rewardSignUpUrl": null,
    "zipcode": "20745",
    "tournamentRegEmail": null,
    "domesticWireEmail": null,
    "state": "MD",
    "enableTournamentInfo": true,
    "casinodescription": "MGM National Harbor",
    "promotext": "NOVEMBER 2024 PROMOTIONS:\r\n_______________________________\r\n \r\nSUNDAYS\r\n$400 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 8:15PM\r\n\r\n$300 FINAL-15\r\n8:15PM\r\n\r\n$300 LATE NIGHT HIGH HANDS\r\n30-MINUTE SESSIONS\r\nFOLLOWING FINAL 15 – 9:15AM\r\n_______________________________\r\n\r\nMONDAYS\r\n$200 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 8:15PM\r\n\r\n$300 FINAL-15\r\n8:15PM\r\n\r\n$300 LATE NIGHT HIGH HANDS\r\n30-MINUTE SESSIONS\r\nFOLLOWING FINAL 15 – 9:15AM\r\n_______________________________\r\n\r\nTUESDAYS\r\n$200 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 8:15PM\r\n\r\n$300 FINAL-15\r\n8:15PM\r\n\r\n$300 LATE NIGHT HIGH HANDS\r\n30-MINUTE SESSIONS\r\nFOLLOWING FINAL 15 – 9:15AM\r\n_______________________________ \r\n\r\nWEDNESDAYS\r\n$300 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 8:15PM\r\n\r\n$300 FINAL-15\r\n8:15PM\r\n\r\n$300 LATE NIGHT HIGH HANDS\r\n30-MINUTE SESSIONS\r\nFOLLOWING FINAL 15 – 9:15AM\r\n_______________________________ \r\n\r\nTHURSDAYS\r\n$300 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 8:15PM\r\n\r\n$300 FINAL-15\r\n8:15PM\r\n\r\n$300 LATE NIGHT HIGH HANDS\r\n30-MINUTE SESSIONS\r\nFOLLOWING FINAL 15 – 9:00AM\r\n_______________________________ \r\n\r\nFRIDAY\r\nNOVEMBER 29\r\n$599 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 6:15PM\r\n_______________________________\r\n \r\nSATURDAYS\r\nNOVEMBER 23 & 30\r\n$599 HIGH HANDS\r\n15-MINUTE SESSIONS\r\n9:15AM – 6:15PM\r\n_______________________________\r\n\r\n$500 ROYAL FLUSHES!! \r\n*Make a Royal using both cards, get $500\r\n____________________________\r\n\r\nTexas Hold'em Bad Beat Jackpot:\r\n$30,000\r\n\r\nJackpot qualifier: Quad sevens or better beaten by a bigger hand.  Both cards must play in both hands, and kicker must tie or beat the board. The Bad Beat Jackpot will seed and remain static at $30,000.\r\n_______________________________________\r\n\r\nMUST BE AN MGM REWARDS MEMBER TO QUALIFY\r\n_______________________________________\r\n\r\nFOR INFORMATIONAL PURPOSES ONLY. RULES & STRUCTURE \r\nSHEETS POSTED IN THE POKER ROOM TAKE PRECENDENT OVER\r\nANYTHING POSTED HERE.\r\n",
    "liveGamePoker": true,
    "enableWaitListInfo": true,
    "email": "aboone@mgmnationalharbor.com",
    "majorevent": null,
    "physical_address": "7100 Oxon Hill Rd.",
    "description": "Welcome to the Poker Room at MGM National Harbor, located on the second level of the Casino. Home to 50 tables including an elevated 8 table High Limit platform and exclusive High Limit Salon. All live poker games will feature 8-handed play. Tournaments will run 9-handed. \r\nWe offer cash games of varying limits around the clock and daily tournaments throughout the week.\r\n\r\n📢 Use code 'MG3' for discounted room rates at:\r\n   • AC Hotel by Marriott- National Harbor\r\n   • Residence Inn by Marriott- National Harbor\r\n   • Courtyard by Marriott- Alexandria Old Town\r\n   • Springhill Suites by Marriott- Alexandria Old Town\r\nLocated minutes from the Poker Room\r\n\r\n   •Tableside dining is permitted in the poker room.\r\n   •Players will have 30 minutes away from the table before being picked up\r\n   •Table changes restricted to once every 2 hours of play after the initial change\r\n   •Guests may call-in to be added to the $2/5 NLH, $1/2 5-Card PLO and ALL Time Raked game waitlists 7 day/week.\r\n   •Guests will have 60 minutes from the time of their call to check-in.\r\n_______________________________________",
    "enableTournReservation": false,
    "waitListSignUpEmail": "aboone@mgmnationalharbor.com",
    "tournamentResVoidEmail": null,
    "facebook": null,
    "internationalWireNote": null,
    "tournamentRegVoidEmail": null,
    "lat": 38.795587,
    "responsibleGamingNote": "Play responsibly. For help visit mdgamblinghelp.org or call 1-800-GAMBLER",
    "domesticWireNote": null,
    "lastEdit": "11-25-2024 00:09:14",
    "playerIDLabel": "MGM Rewards",
    "region": "Northeast",
    "internationalWireEmail": null,
    "manager": "Adam Boone",
    "cashierCheckNote": null,
    "tournamentResVoidNote": null,
    "enableGameList": true,
    "cashierCheckEmail": null,
    "tournamentResEmail": null
  }
]
```

## Get list of games (not useful)

```
curl -H 'Host: bravopokerlive.appspot.com' \
     -H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
     -H 'Accept: */*' \
     --data-binary "mgmtid=x&casinoid=NHRB" \
     --compressed \
     'https://bravopokerlive.appspot.com/service/getgamelist' | jq
```

## Get tournament clocks

```
curl -H 'Host: bravopokerlive.appspot.com' \
     -H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
     -H 'Accept: */*' \
     --data-binary "mgmtid=x&casinoid=NHRB" \
     --compressed \
     'https://bravopokerlive.appspot.com/service/getclocksbycasinoid' | jq
```

## Get cash waitlist

Assuming NHRB is the casino ID:

```
curl -H 'Host: bravopokerlive.appspot.com' \
     -H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
     -H 'Accept: */*' \
     --data-binary "casino=NHRB%7Cx" \
     --compressed \
     'https://bravopokerlive.appspot.com/service/getwaitlistbycasinoid'
```

Sample response:

```json
[
  {
    "gamemin": 5,
    "playercount": 5,
    "playername": "GENNER",
    "gamedesc": "5 Card O High 500-2500",
    "gamename": "5-5 5 Card O High 500-2500",
    "gamecode": "PK31",
    "entrytime": "2024-11-24 17:17:30",
    "lastupdatedtm": "2024-11-24T20:01:21",
    "interestlist": 0,
    "customersakey": "-1",
    "gamemax": 5,
    "called": 0,
    "displayorder": "3"
  },
  {
    "gamemin": 5,
    "playercount": 5,
    "playername": "FISHCAKE",
    "gamedesc": "5 Card O High 500-2500",
    "gamename": "5-5 5 Card O High 500-2500",
    "gamecode": "PK31",
    "entrytime": "2024-11-24 16:30:34",
    "lastupdatedtm": "2024-11-24T20:01:21",
    "interestlist": 0,
    "customersakey": "-1",
    "gamemax": 5,
    "called": 0,
    "displayorder": "4"
  }
]
```
