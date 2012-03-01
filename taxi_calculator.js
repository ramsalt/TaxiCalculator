/* Første del som inneholder priser og takster samt tidspunkt til de forskjellige taxiselskapene */

var map;
var gdir;
var geo;
var locale = "no_NO";
var markers = [];
var marker;
var newMarkers = [];
var latLngs = [];
var icons = [];

/* 
var selskapstid inneholder tidspunkter der de forskjellige takstene for hvert selskap brukes selskaptid[0] 
inneholder dagene, selskaptid[x] inneholder nye array for hver dag.
selskaptid[x][1] er taksten som brukes for selskap x på dag 1 
*/

var selskapstid = new Array();
selskapstid[0] = new Array("Selskap","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag","Helligdag");
selskapstid[1] = new Array();
selskapstid[1][0] = "<a href='http://www.dintaxi.no/'>Din Taxi</a>";
selskapstid[1][1] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2);//man index1 = kl 00-01, index2=kl 01-02 osv
selskapstid[1][2] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2);//tir
selskapstid[1][3] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2); //ons
selskapstid[1][4] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2); //tor
selskapstid[1][5] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2); //fre
selskapstid[1][6] = new Array(3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3); //lør
selskapstid[1][7] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5); //søn
selskapstid[1][8] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5); //hellig
selskapstid[2] = new Array();
selskapstid[2][0] = "<a href='http://www.norgestaxi.no/article.asp?m=2&s=28&ID=36'>Norgestaxi</a>";
selskapstid[2][1] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[2][2] = new Array(2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[2][3] = new Array(2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[2][4] = new Array(2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[2][5] = new Array(2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3);
selskapstid[2][6] = new Array(3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3);
selskapstid[2][7] = new Array(3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3);
selskapstid[2][8] = new Array(3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4);
selskapstid[3] = new Array();
selskapstid[3][0] = "<a href='http://www.02365.no/Kontakt.aspx'>Christiania Taxi</a>";
selskapstid[3][1] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[3][2] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[3][3] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[3][4] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[3][5] = new Array(3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,4,4);
selskapstid[3][6] = new Array(4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4);
selskapstid[3][7] = new Array(4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3);
selskapstid[3][8] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5);
selskapstid[4] = new Array();
selskapstid[4][0] = "<a href='http://citytaxi.no/bestil.shtml'>City Taxi</a>";
selskapstid[4][1] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[4][2] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[4][3] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[4][4] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[4][5] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,4,4);
selskapstid[4][6] = new Array(4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4);
selskapstid[4][7] = new Array(4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3);
selskapstid[4][8] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5);
selskapstid[5] = new Array();
selskapstid[5][0] = "<a href='http://taxi2.no/adresse.html'>Taxi2</a>";
selskapstid[5][1] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[5][2] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[5][3] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[5][4] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2);
selskapstid[5][5] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3);
selskapstid[5][6] = new Array(3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3);
selskapstid[5][7] = new Array(3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3);
selskapstid[5][8] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5);
selskapstid[6] = new Array();	
selskapstid[6][0] = "<a href='http://www.oslotaxi.no/templates/OsloTaxiWeb/Pages/TwoColumn____2925.aspx'>Oslo taxi</a>";
//selskapstid[x][x] = new Array(1,2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,0,1,2,3,4); //dag 
selskapstid[6][1] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2); //man
selskapstid[6][2] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2); //tir
selskapstid[6][3] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2); //ons
selskapstid[6][4] = new Array(2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2); //tor
selskapstid[6][5] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3); //fre
selskapstid[6][6] = new Array(3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3); //lør
selskapstid[6][7] = new Array(3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2); //søn
selskapstid[6][8] = new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4); //hell
selskapstid[7] = new Array();
selskapstid[7][0] = "<a href='http://bergentaxi.no/'>Bergen taxi</a>";
selskapstid[7][1] = new Array(3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3); //man 
selskapstid[7][2] = new Array(3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3); //tir
selskapstid[7][3] = new Array(3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3); //ons
selskapstid[7][4] = new Array(3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3); //tor
selskapstid[7][5] = new Array(3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,3); //fre
selskapstid[7][6] = new Array(4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3); //lør
selskapstid[7][7] = new Array(4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3); //søn
selskapstid[7][8] = new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4); //hellig
selskapstid[8] = new Array();
selskapstid[8][0] = "<a href='http://www.taxus.no/source/inter/side.asp?side=81&mid=953'> Asker og Bærum Taxi</a>";
selskapstid[8][1] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3); //man 
selskapstid[8][2] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3); //tir
selskapstid[8][3] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3); //ons
selskapstid[8][4] = new Array(3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3); //tor
selskapstid[8][5] = new Array(4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4); //fre
selskapstid[8][6] = new Array(4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4); //lør
selskapstid[8][7] = new Array(4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4); //søn
selskapstid[8][8] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5); //hellig

/* Prisene for hvert enkelt taxiselskap, vanlig taxi.*/
var selskap = new Array();
/* HER REDIGERES TAKSTPRISENE FOR VANLIG TAXI*/
/* START DINTAXI.NO PRISER */
selskap[1] = new Array(); //dintaxi.no
selskap[1][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[1][1] = new Array(38,57,71,75,350,13.20,0);  // Hverdag dagtid
selskap[1][2] = new Array(46,68,82,91,424,15.90,0);  // Hverdag kveld
selskap[1][3] = new Array(51,77,91,101,473,17.80,0); // Hverdag natt
selskap[1][4] = new Array(49,73,87,97,455,17.10,0);  // Lørdag 
selskap[1][5] = new Array(55,82,96,109,508,19.10,0); // Søndag og hellidag

/*SLUTT PRISER DINTAXI vanlig taxi */

selskap[2] = new Array(); // Norgestaxi priser
selskap[2][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[2][1] = new Array(45,68,68,105,470,19.6,0);
selskap[2][2] = new Array(58,87,87,134,602,25.09,0);
selskap[2][3] = new Array(66,100,100,154,691,28.81,0);
selskap[2][4] = new Array(71,107,107,165,738,30.77,0);
selskap[3] = new Array(); // Christiania taxi priser
selskap[3][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[3][1] = new Array(44,66,66,103,430,19.5,0);
selskap[3][2] = new Array(53,79,79,124,516,23.4,0);
selskap[3][3] = new Array(57,86,86,134,559,25.35,0);
selskap[3][4] = new Array(64,96,96,149,624,28.28,0);
selskap[3][5] = new Array(71,107,107,167,697,31.59,0);
selskap[4] = new Array(); // City taxi priser
selskap[4][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[4][1] = new Array(49,81,81,116,515,20.8,0);
selskap[4][2] = new Array(56,93,93,133,593,23.9,0);
selskap[4][3] = new Array(60,100,100,142,634,25.6,0);
selskap[4][4] = new Array(69,116,116,165,734,29.6,0);
selskap[4][5] = new Array(78,130,130,185,825,33.2,0);
selskap[5] = new Array(); // Taxi2 priser
selskap[5][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[5][1] = new Array(44,68,68,113,465,19.5,0);
selskap[5][2] = new Array(57,88,88,133,600,25,0);
selskap[5][3] = new Array(65,106,106,161,700,29,0);
selskap[5][4] = new Array(57,88,88,133,600,26,0);
selskap[5][5] = new Array(72,117,117,177,770,31.9,0);
selskap[6] = new Array(); // Oslo taxi
selskap[6][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[6][1] = new Array(46,66,91,106,370,16.0,5);
selskap[6][2] = new Array(55,79,109,127,444,19.2,5);
selskap[6][3] = new Array(67,96,132,154,537,23.2,5);
selskap[6][4] = new Array(74,106,146,170,592,25.6,5);
selskap[7] = new Array(); // Bergen taxi
selskap[7][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[7][1] = new Array(32,69,69,89,391,14.30,0); //man -fre 09-15 
selskap[7][2] = new Array(35,76,76,98,430,15.70,0); //man-fre 06-09 & 15-18 
selskap[7][3] = new Array(40,86,86,111,489,17.90,0); //man-fre 18-06 & lør-søn 06-24
selskap[7][4] = new Array(48,104,104,134,587,21.50,0); //lør-søn 00-06 & høytid*
selskap[8] = new Array(); // Asker og Bærum taxi
selskap[8][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
selskap[8][1] = new Array(42,73,98,98,490,18.45,0); //man -fre 07-17 
selskap[8][2] = new Array(48,84,113,113,564,21.22,0); //man-fre 1700-2300 og lørdag 0700-2300
selskap[8][3] = new Array(51,89,120,120,598,22.51,0); // man-fre natt 23-07 søndag 07-23
selskap[8][4] = new Array(58,101,135,135,676,25.46,0); //Fredag og lørdag natt_helg
selskap[8][5] = new Array(67,117,157,157,784,29.52,0); //høytid*

/* PRISER MINIBUSS DINTAXI.NO */
var dintaxi_5_8 = new Array();
dintaxi_5_8[1] = new Array(); //dintaxi.no
dintaxi_5_8[1][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
dintaxi_5_8[1][1] = new Array(38,57,71,112,525,20.19,0); //Hverdag 06-18
dintaxi_5_8[1][2] = new Array(46,68,82,136,653.30,24.43,0);  //Hverdag 18-24
dintaxi_5_8[1][3] = new Array(51,77,91,151,708.80,27.26,0); //Hverdag 24-06
dintaxi_5_8[1][4] = new Array(49,73,87,146,682,26.25,0);  //Lørdag 06-15
dintaxi_5_8[1][5] = new Array(55,82,96,162,761.30,29.28,0); //Lør e 15 + søn hell

var dintaxi_9_11 = new Array();
dintaxi_9_11[1] = new Array(); //dintaxi.no
dintaxi_9_11[1][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
dintaxi_9_11[1][1] = new Array(38,57,71,150,700,26.92,0); //Hverdag 06-18
dintaxi_9_11[1][2] = new Array(46,68,82,182,847,32.57,0); //Hverdag 18-24
dintaxi_9_11[1][3] = new Array(51,77,91,202,945,36.34,0); //Hverdag 24-06
dintaxi_9_11[1][4] = new Array(49,73,87,195,910,35.00,0); //Lørdag 06-15
dintaxi_9_11[1][5] = new Array(55,82,96,218,1015,39.03,0);//Lør e 15 + søn hell

var dintaxi_12_15 = new Array();
dintaxi_12_15[1]  = new Array(); //dintaxi.no
dintaxi_12_15[1][0] = new Array("Påslag","Maks fremmøte","Maks forhåndsbestilling","Minstepris","Ventetakst","Kjøretakst","Oslopakke3-påslag");
dintaxi_12_15[1][1] = new Array(38,57,71,188,875,33.65,0); //Hverdag 06-18
dintaxi_12_15[1][2] = new Array(46,68,82,227,1058.80,40.72,0); //Hverdag 18-24
dintaxi_12_15[1][3] = new Array(51,77,91,253,1181.30,45.43,0); //Hverdag 24-06
dintaxi_12_15[1][4] = new Array(49,73,87,244,1137.50,43.71,0); //Lørdag 06-15
dintaxi_12_15[1][5] = new Array(55,82,96,272,1268.8,48.79,0);//Lør e 15 + søn hell

<!-- ENDpriser.js -->

<!-- gmaptools.js -->


function initialize() {
  if (GBrowserIsCompatible()) {      
    map = new GMap2(document.getElementById("kart"));
    map.setCenter(new GLatLng(69.677366,18.958282),10);	// inital setCenter()  
    map.addControl(new GMapTypeControl());
    map.addControl(new GLargeMapControl());
    gdir = new GDirections(map, document.getElementById("routeGuide"));
    geo = new GClientGeocoder();
    GEvent.addListener(gdir, "load", regnuttakst);
    GEvent.addListener(gdir, "error", handleErrors);
    GEvent.addListener(gdir, "addoverlay", onGDirectionsAddOverlay); // Triggers marker swap, and calculate price
    setDirections(document.getElementById("fromAddress1").value,document.getElementById("toAddress1").value, locale);
  }
}

function setDirections(fromAddress, toAddress, locale) {
  gdir.load("from: " + fromAddress + " to: " + toAddress,
  { "locale": locale , "getSteps":true});
}

function geocode(query, pin_){
  geo.getLocations(query, function(addresses){
    if(addresses.Status.code != 200){
      alert("Feil under ruteberegning, prøv på nytt. Kanskje må du spesifisere en av addressene bedre." + query);
    }
    else
    {
      marker = pin_||createMarker();
      var result = addresses.Placemark[0];
      marker.howMany = addresses.Placemark.length;
      marker.response = result.address;
      var details = result.AddressDetails||{};
      marker.accuracy = details.Accuracy||0;
      var lat = result.Point.coordinates[1];
      var lng = result.Point.coordinates[0];
      var responsePoint = new GLatLng(lat, lng);
      marker.setLatLng(responsePoint);
      if(marker.poly) map.removeOverlay(marker.poly);
      marker.poly = new GPolyline([query, responsePoint],"#ff0000",2,1);
      map.addOverlay(marker.poly);
      marker.index = markers.length;
      markers.push(marker);
      if(!pin_){
        map.setCenter(responsePoint);
      }
      if(result.address) {	 
        updateInputAddress(marker);
      }
    }
  });
}

function createMarker(){
  marker = new GMarker(map.getCenter(),{draggable:true, autoPan:false});
  map.addOverlay(marker);
  
  GEvent.addListener(marker, 'dragend', function(markerPoint){
    if(!map.getBounds().containsLatLng(markerPoint)){
      map.removeOverlay(this);
      map.removeOverlay(this.poly);
    }else{
    geocode(this.getLatLng(),this);
    }
  });
  return marker
}

function follow(imageInd){
  var dog = true;
  var noMore = false;

  var mouseMove = GEvent.addListener(map, 'mousemove', function(cursorPoint){
    if(!noMore){
      marker = createMarker();
      noMore = true;
    }
    if(dog){
      marker.setLatLng(cursorPoint);
    }
  });
  var mapClick = GEvent.addListener(map, 'click', function(){
    dog = false;
    geocode(marker.getLatLng(),marker);
    // 'mousemove' event listener is deleted for saving resources
    GEvent.removeListener(mouseMove);
    GEvent.removeListener(mapClick);
  });
}

function updateInputAddress(marker_){
    var pin = marker_;
    var test = pin.getIcon().image;
    var ttt = pin.response;
    if(test=="http://maps.gstatic.com/intl/en_ALL/mapfiles/marker_greenA.png")
    {
        document.getElementById('fromAddress1').value = ttt;
    }
    if(test=="http://maps.gstatic.com/intl/en_ALL/mapfiles/marker_greenB.png")
    {
	document.getElementById('toAddress1').value = ttt;
    }
}

function handleErrors(){
  if (gdir.getStatus().code == G_GEO_UNKNOWN_ADDRESS)
    alert("No corresponding geographic location could be found for one of the specified addresses. This may be due to the fact that the address is relatively new, or it may be incorrect.\nError code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_SERVER_ERROR)
    alert("A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known.\n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_MISSING_QUERY)
    alert("The HTTP q parameter was either missing or had no value. For geocoder requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input.\n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_BAD_KEY)
    alert("The given key is either invalid or does not match the domain for which it was given. \n Error code: " + gdir.getStatus().code);
  else if (gdir.getStatus().code == G_GEO_BAD_REQUEST)
    alert("A directions request could not be successfully parsed.\n Error code: " + gdir.getStatus().code);
  else alert("An unknown error occurred.");
}
  
function onGDirectionsAddOverlay(){ 
  // Remove the draggable markers from previous function call.
  for (var i=0; i<newMarkers.length; i++){
    map.removeOverlay(newMarkers[i]);
  }

  // Loop through the markers and create draggable copies
  for (var i=0; i<=gdir.getNumRoutes(); i++){
    var originalMarker = gdir.getMarker(i);
    latLngs[i] = originalMarker.getLatLng();
    geocode(latLngs[i], originalMarker);
    icons[i] = originalMarker.getIcon();
    newMarkers[i] = new GMarker(latLngs[i],{icon:icons[i], draggable:true, title:'Draggable'});
    map.addOverlay(newMarkers[i]);

    // Get the new waypoints from the newMarkers array and call loadFromWaypoints by dragend
    GEvent.addListener(newMarkers[i], "dragend", function(){
      var points = [];
      for (var i=0; i<newMarkers.length; i++){
        points[i]= newMarkers[i].getLatLng();
      }
      gdir.loadFromWaypoints(points,{ "locale": locale});
    });

    //Bind 'click' event to original markers 'click' event
    copyClick(newMarkers[i],originalMarker);

    // Now we can remove the original marker safely
    map.removeOverlay(originalMarker);
  }

  function copyClick(newMarker,oldMarker){
    GEvent.addListener(newMarker, 'click', function(){
      GEvent.trigger(oldMarker,'click');
    });
  }
 regnuttakst();
  
}
// Her genereres html tabeller med oversikt over prisene
function regnuttakst() 
{   
    var dintaxiTekst="";
    var date = new Date();
    var klokkeslett;
    var klokkeminutter = date.getMinutes();
    var vanligfart = 50; // Gjennomsnittsfart normal kjøring.
    var langsomfart = 20;// Gjennomsnittsfart sakte kjøring.
    var ukedag;
    var tekstdag;
    if(document.getElementById("select_day1").value=="now")
    { 
	ukedag = date.getDay();
        if (ukedag ==0) ukedag=7;
    }
    else { ukedag = new Number(document.getElementById("select_day1").value); }
    if (ukedag == "1") tekstdag = "mandager";
    else if (ukedag == "2") tekstdag = "tirsdager";
    else if (ukedag == "3") tekstdag = "onsdager";
    else if (ukedag == "4") tekstdag = "torsdager";
    else if (ukedag == "5") tekstdag = "fredager";
    else if (ukedag == "6") tekstdag = "lørdager";
    else tekstdag = "søndager";

    if (document.getElementById("select_hour1").value=="now") { klokkeslett = date.getHours();} 
    else {klokkeslett = new Number(document.getElementById("select_hour1").value);}
    

/*Arrayet trafikktillegg inneholder faktorer som reflekterer stopp og kjøring i så lav hastighet at taksameteret slår over på ventetakst. Det
er tanken at rushtid og skulderrushtid bare gjelder på hverdager. */
   var trafikktillegg = new Array();
   trafikktillegg[0] = new Array("Betegnelse","Lav trafikk","Skulderrushtid","Kjernerushtid");
   trafikktillegg[1] = new Array("Stilletid",0.17,0.26,0.4);// Prosent av reisetiden der bilen står helt stille.
   trafikktillegg[2] = new Array("Langsom-distanse",0.2,0.4,0.6); // Prosent av distansen som kjøres i hastighet under venteterskel 
   var startord,rushpeker,noyaktigklokke,tidspris;
   var distanse_km = gdir.getDistance().meters/1000;
   
   // Debug distance
   console.log(distanse_km);
   
   if (document.getElementById("praie").checked) 
   {
     bestillingsvalg = 0;
     startord = " ved praing på gaten";
   }
   else if (document.getElementById("ringe").checked) 
   {	
     bestillingsvalg = 1;
     startord = "ved bestilling";
   }
   else 
   {
     bestillingsvalg = 2;
     startord = "ved forhåndsbestilling";
   }
   if(distanse_km > 9) 
   {
      vanligfart = 60;
      langsomfart = 30;  
   }
   noyaktigklokke = eval(klokkeslett)+eval(klokkeminutter/60);
   rushpeker = 1;
   //antall km i sakte fart satt til 0.1*distanse_km	
   langsomfart_km = distanse_km * trafikktillegg[2][rushpeker];
   vanligfart_km = distanse_km - langsomfart_km; //
   // Antall minutter som kjøres så langsomt ('langsomfart') at tidstaksering gjelder	
   var langsomfart_min = langsomfart_km/langsomfart*60;
   // Antall minutter i vanlig hastighet ('vanligfart') 
   var vanligfart_min = vanligfart_km/vanligfart*60;
   // Antall minutter drosjen ståhelt stille. 
   var stille_min = (eval(langsomfart_min)+eval(vanligfart_min))*(eval(1)+eval(trafikktillegg[1][rushpeker]))*trafikktillegg[1][rushpeker]; 
   var tidstakseres_min = eval(langsomfart_min)+eval(stille_min); // Antall minutter som tidstakseres
   var total_min = eval(vanligfart_min)+eval(langsomfart_min)+eval(stille_min); // Tiden turen beregnes å vare totalt.
   var antallPass = document.getElementById("selectPassangerCount").value;
   var infotekst = "Mellom klokken " + klokkeslett + " og klokken " + eval(klokkeslett+1) + " er takstene dette "+ "på " + tekstdag+" "  + startord+".";
   var prisinfotabell ="<table border='0' width='100%' cellspacing='0' cellpadding='3'><tbody><tr>";
   prisinfotabell +="<th rowspan='2' class='title'>Selskap</th>";
   prisinfotabell +="<th colspan='3'>Betaling for</th>";
   prisinfotabell +="<th rowspan='2'>SUM</th>";
   prisinfotabell +="</tr>";
   prisinfotabell +="<tr><th>Start</th><th>Km</th><th>Vente</th></tr>";
   var prisdetaljer = "<table border='0' width='100%' cellspacing='0' cellpadding='3'><tbody><tr><th class='title'>&nbsp;";
   prisdetaljer +="<br/>&nbsp;</th><th>Start<br/>takst<br/>&nbsp;</th><th>Oslo-<br/>pakke 3<br/>&nbsp;</th><th>Km-<br/>takst";
   prisdetaljer +="<br/>&nbsp;</th><th>Vente-<br/>takst<br/>&nbsp;</th></tr>";

   //Kun minibuss for dintaxi
   if (antallPass != "1")
   {
      var selskap_dt; 
      if (antallPass == "2") selskap_dt = dintaxi_5_8;
      if (antallPass == "3") selskap_dt = dintaxi_9_11;
      if (antallPass == "4") selskap_dt = dintaxi_12_15;
      var takstregime = selskapstid[1][ukedag][klokkeslett];
      var taksameterstart = selskap_dt[1][takstregime][bestillingsvalg];
      var starttakst = eval(taksameterstart);// + eval(oslopakke);
      var kmtakst = selskap_dt[1][takstregime][5];
      var kjorepris = kmtakst*vanligfart_km;
      var timespris = selskap_dt[1][takstregime][4];
      var tidspris = tidstakseres_min * (timespris/60);
      var pris = Math.round(eval(starttakst) + eval(kjorepris) + eval(tidspris));
      var betalpris = pris;
      if (pris < selskap_dt[1][takstregime][3]) { betalpris = selskap_dt[1][takstregime][3]; }
      dintaxiTekst = "Prisanslag: " + betalpris +" kr";
      var startTab = Math.round(starttakst);
      var kjoreprisTab = Math.round(kjorepris);
      var tidsprisTab = Math.round(tidspris);
      var linkref = selskapstid[1][0];
      var even = "<tr class='evenNew'><td class='title'>"+ linkref +"</td>"
      var odd = "<tr class='oddNew'><td class='title'>"+ linkref + "</td>";
      var oslopakke = selskap[1][takstregime][6];
      var infotab = "<td>"+ startTab +"</td><td>"+kjoreprisTab +"</td><td>" + tidsprisTab +"</td><td>" + betalpris +"</td></tr>";
      var detaljtab = "<td>"+ taksameterstart +"</td><td>"+ oslopakke +"</td><td>" + kmtakst + "</td><td>" + timespris +"</td></tr>";
      prisinfotabell += odd; 
      prisdetaljer += odd;
      prisinfotabell += infotab;
      prisdetaljer += detaljtab; 
      prisinfotabell +="</tbody></table>";
      prisdetaljer +="</tbody></table>";
      prisdetaljer +="<p>"+infotekst+"</p>";
      document.getElementById("results").innerHTML = dintaxiTekst;
      document.getElementById("prisinfo").innerHTML = prisinfotabell;
      document.getElementById("detaljer").innerHTML = prisdetaljer;
      var test = document.getElementById("otherTaxis").innerHTML;
      if (test) {
      	document.getElementById("otherTaxis").innerHTML = "";  
      }
   }
   else // dersom vi beregner vanlig taxi
   {
      var otherTaxisTxt ="<div class='priceInfo'><b>Sammenlignbare priser hos andre taxiselskaper:</b><br/>&nbsp;<br/></div>";
   
     for (var i=1; i < selskap.length ;i++)
     {
        var takstregime = selskapstid[i][ukedag][klokkeslett];
        var taksameterstart = selskap[i][takstregime][bestillingsvalg];
        var oslopakke = selskap[i][takstregime][6];
        var starttakst = eval(taksameterstart) + eval(oslopakke);
        var kmtakst = selskap[i][takstregime][5];
        var kjorepris = kmtakst*vanligfart_km;
        var timespris = selskap[i][takstregime][4];
        var tidspris = tidstakseres_min * (timespris/60);
        var pris = Math.round(eval(starttakst) + eval(kjorepris) + eval(tidspris));
        var betalpris = pris;
        if (pris<selskap[i][takstregime][3]) { betalpris = selskap[i][takstregime][3];}
        var startTab = Math.round(starttakst);
        var kjoreprisTab = Math.round(kjorepris);
        var tidsprisTab = Math.round(tidspris);
        var linkref = selskapstid[i][0];
        var even = "<tr class='evenNew'><td class='title'>"+ linkref +"</td>"
        var odd = "<tr class='oddNew'><td class='title'>"+ linkref + "</td>";
        var infotab = "<td>"+ startTab +"</td><td>"+kjoreprisTab +"</td><td>" + tidsprisTab +"</td><td>" + betalpris +"</td></tr>";
        var detaljtab = "<td>"+ taksameterstart +"</td><td>"+ oslopakke +"</td><td>" + kmtakst + "</td><td>" + timespris +"</td></tr>";
        if (i == 1) 
        {
	  dintaxiTekst = "Prisanslag: " + betalpris +" kr";
	  prisinfotabell += odd; 
	  prisdetaljer += odd;
	}
        else if (i==2) 
        { 
          otherTaxisTxt += "<div class='priceExample'>Norgestaxi: " + betalpris + " kr</div>";
	  prisinfotabell += even; 
	  prisdetaljer += even;
        }
        else if (i==3) 
        { 
	  otherTaxisTxt += "<div class='priceExample'>Christiania Taxi: " + betalpris + " kr</div>";
	  prisinfotabell += odd; 
	  prisdetaljer += odd;
        }
        else if (i==4) 
        { 
	  otherTaxisTxt += "<div class='priceExample'>City Taxi: " + betalpris + " kr</div>";
	  prisinfotabell += even; 
	  prisdetaljer += even;
        }
        else if (i==5) 
        { 
	  otherTaxisTxt += "<div class='priceExample'>Taxi2: " + betalpris + " kr</div>";
	  prisinfotabell += odd; 
	  prisdetaljer += odd;
        }
        else if (i==6) 
        { 
	  otherTaxisTxt += "<div class='priceExample'>Oslo Taxi: " + betalpris + " kr</div>";
	  prisinfotabell += even; 
	  prisdetaljer += even;
        }
        else if (i==7) 
        { 
	  otherTaxisTxt += "<div class='priceExample'>Bergen Taxi: " + betalpris + " kr</div>";
	  prisinfotabell += odd; 
	  prisdetaljer += odd;
        }
        else { 
	  otherTaxisTxt += "<div class='priceExample'>Asker og Bærum Taxi: " + betalpris + " kr</div>";
	  prisinfotabell += even; 
	  prisdetaljer += even;
        }
       prisinfotabell += infotab;
       prisdetaljer += detaljtab; 
     }
     prisinfotabell +="</tbody></table>";
     prisdetaljer +="</tbody></table>";
     prisdetaljer +="<p>"+infotekst+"</p>";
     otherTaxisTxt +="<div class='clearDiv'></div>";
     document.getElementById("results").innerHTML = dintaxiTekst;
     document.getElementById("prisinfo").innerHTML = prisinfotabell;
     document.getElementById("detaljer").innerHTML = prisdetaljer;
     document.getElementById("otherTaxis").innerHTML = otherTaxisTxt; 
   }
}