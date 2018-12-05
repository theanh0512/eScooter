const trips = [
  {
    "_id": "5beae3e62a5399029aaa2357",
    "vehicleId": "5beae3e6acc3b52d4748a6ad",
    "tripDate": "Saturday, August 4, 2018 6:21 AM",
    "tripDuration": 446
  },
  {
    "_id": "5beae3e68f799c7be047ccf1",
    "vehicleId": "5beae3e6907ebfb09dd4b0e5",
    "tripDate": "Thursday, July 19, 2018 5:34 AM",
    "tripDuration": 816
  },
  {
    "_id": "5beae3e6b6e811f7c8f36c1c",
    "vehicleId": "5beae3e610dd2a439caa57e7",
    "tripDate": "Monday, October 1, 2018 12:03 PM",
    "tripDuration": 635
  },
  {
    "_id": "5beae3e6003e3a4aa90e43d3",
    "vehicleId": "5beae3e6bdd88ccaa7f46ef0",
    "tripDate": "Wednesday, October 31, 2018 3:02 PM",
    "tripDuration": 283
  },
  {
    "_id": "5beae3e6003cbd57b0df0820",
    "vehicleId": "5beae3e622384cf2ddf48d19",
    "tripDate": "Wednesday, September 12, 2018 1:57 PM",
    "tripDuration": 641
  },
  {
    "_id": "5beae3e64899db3a19b505ac",
    "vehicleId": "5beae3e6db9f6d869e75d6f1",
    "tripDate": "Tuesday, January 9, 2018 1:57 AM",
    "tripDuration": 823
  },
  {
    "_id": "5beae3e6bb1f23c13e5ccced",
    "vehicleId": "5beae3e60abcd3c2e2a7a810",
    "tripDate": "Wednesday, August 29, 2018 7:14 AM",
    "tripDuration": 967
  },
  {
    "_id": "5beae3e60d0a578fb3851210",
    "vehicleId": "5beae3e6b55fc4736902b922",
    "tripDate": "Tuesday, July 10, 2018 4:43 PM",
    "tripDuration": 457
  },
  {
    "_id": "5beae3e69fd9220df5bc0244",
    "vehicleId": "5beae3e6f33655978188469e",
    "tripDate": "Friday, May 4, 2018 2:02 AM",
    "tripDuration": 795
  },
  {
    "_id": "5beae3e63b5c4d60cfd3e512",
    "vehicleId": "5beae3e6e5b18d2a7cd4b3d3",
    "tripDate": "Sunday, September 9, 2018 1:38 PM",
    "tripDuration": 358
  },
  {
    "_id": "5beae3e6f7a3d00809982214",
    "vehicleId": "5beae3e6095946019528a999",
    "tripDate": "Saturday, March 31, 2018 5:57 PM",
    "tripDuration": 705
  },
  {
    "_id": "5beae3e62134c648422c16ad",
    "vehicleId": "5beae3e60d0bbbd107b39fc5",
    "tripDate": "Wednesday, August 1, 2018 1:52 PM",
    "tripDuration": 841
  },
  {
    "_id": "5beae3e606f74f8197b66958",
    "vehicleId": "5beae3e683a703ec995acce3",
    "tripDate": "Thursday, April 26, 2018 5:35 AM",
    "tripDuration": 463
  },
  {
    "_id": "5beae3e678217a5a0f128f00",
    "vehicleId": "5beae3e63f626a149aaa1ea8",
    "tripDate": "Wednesday, March 14, 2018 4:45 PM",
    "tripDuration": 640
  },
  {
    "_id": "5beae3e68c6df43353f3fefe",
    "vehicleId": "5beae3e6b5c28b1acda81f73",
    "tripDate": "Thursday, March 8, 2018 12:39 PM",
    "tripDuration": 950
  },
  {
    "_id": "5beae3e689c04b3316e079f3",
    "vehicleId": "5beae3e663b6039275f1f4ee",
    "tripDate": "Saturday, April 7, 2018 1:07 PM",
    "tripDuration": 400
  },
  {
    "_id": "5beae3e66282f4a596f53520",
    "vehicleId": "5beae3e6a6fc267f98c98352",
    "tripDate": "Thursday, March 1, 2018 10:03 AM",
    "tripDuration": 740
  },
  {
    "_id": "5beae3e6cfce0f7f42bc80d9",
    "vehicleId": "5beae3e63f9ce512bc85bcdd",
    "tripDate": "Thursday, March 22, 2018 8:20 AM",
    "tripDuration": 713
  },
  {
    "_id": "5beae3e6dfabf2ca31a36f68",
    "vehicleId": "5beae3e6764492972e0f3672",
    "tripDate": "Sunday, April 29, 2018 6:57 AM",
    "tripDuration": 89
  },
  {
    "_id": "5beae3e6752629c5f6c404b5",
    "vehicleId": "5beae3e62532ae29cf888983",
    "tripDate": "Tuesday, January 30, 2018 6:29 PM",
    "tripDuration": 839
  },
  {
    "_id": "5beae3e68ff6fa084398a2e9",
    "vehicleId": "5beae3e62ac734a7fc322e31",
    "tripDate": "Monday, May 14, 2018 11:35 AM",
    "tripDuration": 333
  },
  {
    "_id": "5beae3e6c7862645f6d93825",
    "vehicleId": "5beae3e606846ce6a5ede32b",
    "tripDate": "Tuesday, March 27, 2018 11:11 AM",
    "tripDuration": 143
  },
  {
    "_id": "5beae3e60243edce34357c19",
    "vehicleId": "5beae3e69e606c413c0b9208",
    "tripDate": "Thursday, April 19, 2018 11:25 PM",
    "tripDuration": 83
  },
  {
    "_id": "5beae3e6e51622cd6663433e",
    "vehicleId": "5beae3e6901d1bdff08f10b8",
    "tripDate": "Sunday, August 26, 2018 4:13 PM",
    "tripDuration": 628
  },
  {
    "_id": "5beae3e6601155eb282b213d",
    "vehicleId": "5beae3e638e6d9691de3bb1c",
    "tripDate": "Friday, June 8, 2018 11:53 PM",
    "tripDuration": 60
  },
  {
    "_id": "5beae3e6ed1be096e08e2f46",
    "vehicleId": "5beae3e6b1e37b31fed2888e",
    "tripDate": "Monday, July 30, 2018 7:39 AM",
    "tripDuration": 650
  },
  {
    "_id": "5beae3e6ef21d9580bf064ae",
    "vehicleId": "5beae3e6741dfbe78a4c3564",
    "tripDate": "Sunday, July 22, 2018 9:23 PM",
    "tripDuration": 174
  },
  {
    "_id": "5beae3e698b8d1582caf29f8",
    "vehicleId": "5beae3e63a4088c176169367",
    "tripDate": "Wednesday, October 24, 2018 9:04 PM",
    "tripDuration": 905
  },
  {
    "_id": "5beae3e683cbb347557b4c45",
    "vehicleId": "5beae3e63ff6f75d140b5ee7",
    "tripDate": "Wednesday, May 16, 2018 4:33 PM",
    "tripDuration": 904
  },
  {
    "_id": "5beae3e64dfebbe77294b2f9",
    "vehicleId": "5beae3e63a7fce883d9c827e",
    "tripDate": "Wednesday, February 14, 2018 6:08 AM",
    "tripDuration": 452
  },
  {
    "_id": "5beae3e6bd13e2589e66f0dd",
    "vehicleId": "5beae3e647a3efa05f080596",
    "tripDate": "Monday, March 12, 2018 5:59 PM",
    "tripDuration": 114
  },
  {
    "_id": "5beae3e6c2e6d466e11f5c90",
    "vehicleId": "5beae3e6caed2965aaaf0ca5",
    "tripDate": "Wednesday, September 26, 2018 5:02 PM",
    "tripDuration": 346
  },
  {
    "_id": "5beae3e64ad158a352931544",
    "vehicleId": "5beae3e67fd6f5bd20528456",
    "tripDate": "Tuesday, April 3, 2018 10:36 PM",
    "tripDuration": 268
  },
  {
    "_id": "5beae3e6d9a30ecfb8a7bcbf",
    "vehicleId": "5beae3e62473e8e2d93ad3e1",
    "tripDate": "Monday, March 5, 2018 8:56 PM",
    "tripDuration": 219
  },
  {
    "_id": "5beae3e624f0592c2a8e9d79",
    "vehicleId": "5beae3e6fa21080d1fdbd039",
    "tripDate": "Wednesday, May 30, 2018 6:44 AM",
    "tripDuration": 358
  },
  {
    "_id": "5beae3e615efeeb736ba2aa2",
    "vehicleId": "5beae3e694ee7e8c79e68991",
    "tripDate": "Tuesday, March 13, 2018 3:14 PM",
    "tripDuration": 881
  },
  {
    "_id": "5beae3e6c8cd9112cb050797",
    "vehicleId": "5beae3e681e3205aceadb553",
    "tripDate": "Friday, January 5, 2018 9:39 PM",
    "tripDuration": 832
  },
  {
    "_id": "5beae3e608cf26dcbde02058",
    "vehicleId": "5beae3e6d8909d57b970cf3b",
    "tripDate": "Wednesday, May 23, 2018 12:32 PM",
    "tripDuration": 544
  },
  {
    "_id": "5beae3e66f919246c78ad99c",
    "vehicleId": "5beae3e6721c502a70480e0f",
    "tripDate": "Thursday, September 13, 2018 8:53 PM",
    "tripDuration": 629
  },
  {
    "_id": "5beae3e6c48e9254ebb80221",
    "vehicleId": "5beae3e63c8932b4dc77e725",
    "tripDate": "Wednesday, September 5, 2018 5:41 PM",
    "tripDuration": 608
  },
  {
    "_id": "5beae3e6155cff0dd60b3d29",
    "vehicleId": "5beae3e6401e0c50cb29a0f8",
    "tripDate": "Friday, July 27, 2018 6:01 AM",
    "tripDuration": 783
  },
  {
    "_id": "5beae3e6f0ab1aa4740e983e",
    "vehicleId": "5beae3e6b2c197a6b150afb9",
    "tripDate": "Friday, October 19, 2018 1:10 PM",
    "tripDuration": 434
  },
  {
    "_id": "5beae3e60cebf59e89065e27",
    "vehicleId": "5beae3e65577eb3c39693e73",
    "tripDate": "Tuesday, November 6, 2018 9:59 AM",
    "tripDuration": 933
  },
  {
    "_id": "5beae3e6cc4417f82bc7d126",
    "vehicleId": "5beae3e6d50bdb41e124ff78",
    "tripDate": "Thursday, January 4, 2018 6:59 AM",
    "tripDuration": 410
  },
  {
    "_id": "5beae3e6cd329778c6a49f3c",
    "vehicleId": "5beae3e6e67c6718bd6e3b50",
    "tripDate": "Saturday, October 13, 2018 9:39 AM",
    "tripDuration": 354
  },
  {
    "_id": "5beae3e62e4239bc5c4dfb5d",
    "vehicleId": "5beae3e62442e71c0e04aa08",
    "tripDate": "Tuesday, June 5, 2018 8:00 PM",
    "tripDuration": 815
  },
  {
    "_id": "5beae3e67fb765ed41365485",
    "vehicleId": "5beae3e6981392227333182a",
    "tripDate": "Wednesday, October 3, 2018 3:24 AM",
    "tripDuration": 542
  },
  {
    "_id": "5beae3e64ffccf8c4191d424",
    "vehicleId": "5beae3e6bcfe69ed662a8961",
    "tripDate": "Friday, March 23, 2018 3:41 AM",
    "tripDuration": 106
  },
  {
    "_id": "5beae3e648539e3ea8e96afe",
    "vehicleId": "5beae3e6d863370f98982dcf",
    "tripDate": "Monday, July 16, 2018 1:03 PM",
    "tripDuration": 740
  },
  {
    "_id": "5beae3e6b3593306d1fcd570",
    "vehicleId": "5beae3e6e00f5cb7a479d3f9",
    "tripDate": "Monday, July 16, 2018 10:22 PM",
    "tripDuration": 829
  }
];

export default trips;

