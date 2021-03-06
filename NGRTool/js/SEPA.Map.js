﻿var map;
var selectedbg;

var baseMapServiceLayer;
var baseMapServiceLayerAerial;

var mapLoadedHandlervar;
var baseMapServiceLayerLoadedHandlervar;
var dynamicMapServiceLayerLoadedHandlervar;

var gl_Query_results_selected; //graphics Layer
var graphic_draw_search_poly; //Symbol
var Graphic;

var mapVisLayers = [];
var myBreachPrint;

//var Reserviorjson = '{"d":[{"__type":"result","pvaid":"Ballo Reservoir","xmin":321787,"ymin":704444,"xmax":323089,"ymax":705446},{"__type":"result","pvaid":"Barr Loch","xmin":234573,"ymin":656756,"xmax":235696,"ymax":658199},{"__type":"result","pvaid":"Cam Loch","xmin":219400,"ymin":912151,"xmax":223180,"ymax":914730},{"__type":"result","pvaid":"Castle Loch","xmin":308305,"ymin":580967,"xmax":309366,"ymax":582212},{"__type":"result","pvaid":"Castle Loch","xmin":227794,"ymin":553114,"xmax":229429,"ymax":554392},{"__type":"result","pvaid":"Castle Semple Loch","xmin":235668,"ymin":658522,"xmax":237895,"ymax":659959},{"__type":"result","pvaid":"Dunalastair Water","xmin":268151,"ymin":757853,"xmax":270885,"ymax":759085},{"__type":"result","pvaid":"Fionn Loch","xmin":211658,"ymin":916008,"xmax":214549,"ymax":918523},{"__type":"result","pvaid":"Fionn Loch","xmin":192395,"ymin":875455,"xmax":199293,"ymax":883598},{"__type":"result","pvaid":"Fionn Loch Mór","xmin":232955,"ymin":922514,"xmax":234337,"ymax":924176},{"__type":"result","pvaid":"Gartmorn Dam","xmin":291168,"ymin":693759,"xmax":292802,"ymax":694480},{"__type":"result","pvaid":"Gladhouse Reservoir","xmin":329126,"ymin":652694,"xmax":330976,"ymax":654561},{"__type":"result","pvaid":"Gorm Loch Mór","xmin":230947,"ymin":924053,"xmax":232726,"ymax":925138},{"__type":"result","pvaid":"Heldale Water","xmin":324641,"ymin":991830,"xmax":326660,"ymax":992596},{"__type":"result","pvaid":"Hoglinns Water","xmin":324685,"ymin":991005,"xmax":325278,"ymax":991447},{"__type":"result","pvaid":"Lake of Menteith","xmin":256506,"ymin":699564,"xmax":259068,"ymax":701218},{"__type":"result","pvaid":"Linlithgow Loch","xmin":299591,"ymin":677173,"xmax":300851,"ymax":677880},{"__type":"result","pvaid":"Loch Achray","xmin":250633,"ymin":706081,"xmax":252482,"ymax":707012},{"__type":"result","pvaid":"Loch Ailsh","xmin":230959,"ymin":910100,"xmax":232288,"ymax":911628},{"__type":"result","pvaid":"Loch Airigh na h-Airde","xmin":120722,"ymin":922361,"xmax":122349,"ymax":924794},{"__type":"result","pvaid":"Loch Ashie","xmin":262118,"ymin":833698,"xmax":263770,"ymax":835978},{"__type":"result","pvaid":"Loch Assynt","xmin":215362,"ymin":921794,"xmax":224808,"ymax":926621},{"__type":"result","pvaid":"Loch Avon","xmin":300502,"ymin":801757,"xmax":302582,"ymax":803256},{"__type":"result","pvaid":"Loch Bad a\u0027 Ghaill","xmin":206157,"ymin":909282,"xmax":209228,"ymax":911082},{"__type":"result","pvaid":"Loch Beannach","xmin":259563,"ymin":911952,"xmax":260368,"ymax":913083},{"__type":"result","pvaid":"Loch Borralie","xmin":237928,"ymin":966513,"xmax":238717,"ymax":967638},{"__type":"result","pvaid":"Loch Buidhe","xmin":256788,"ymin":937228,"xmax":257073,"ymax":937782},{"__type":"result","pvaid":"Loch Bà","xmin":230934,"ymin":748902,"xmax":234625,"ymax":751727},{"__type":"result","pvaid":"Loch Caladail","xmin":239392,"ymin":966203,"xmax":239947,"ymax":967056},{"__type":"result","pvaid":"Loch Calder","xmin":306074,"ymin":958312,"xmax":308525,"ymax":962026},{"__type":"result","pvaid":"Loch Caluim","xmin":301723,"ymin":951257,"xmax":302559,"ymax":952372},{"__type":"result","pvaid":"Loch Chearsanais","xmin":79574,"ymin":816573,"xmax":80428,"ymax":817083},{"__type":"result","pvaid":"Loch Choire","xmin":261265,"ymin":926862,"xmax":265088,"ymax":930587},{"__type":"result","pvaid":"Loch Coire Geurad","xmin":116388,"ymin":919882,"xmax":118373,"ymax":921966},{"__type":"result","pvaid":"Loch Craggie","xmin":261748,"ymin":906910,"xmax":263130,"ymax":908057},{"__type":"result","pvaid":"Loch Crocach","xmin":209305,"ymin":926210,"xmax":210873,"ymax":927974},{"__type":"result","pvaid":"Loch Doon","xmin":247601,"ymin":592558,"xmax":251039,"ymax":601670},{"__type":"result","pvaid":"Loch Druidibeag","xmin":76980,"ymin":836844,"xmax":80812,"ymax":838719},{"__type":"result","pvaid":"Loch Druim a\u0027 Chliabhain","xmin":280301,"ymin":939927,"xmax":281473,"ymax":942560},{"__type":"result","pvaid":"Loch Eck","xmin":212674,"ymin":686876,"xmax":214373,"ymax":696350},{"__type":"result","pvaid":"Loch Eigheach","xmin":244063,"ymin":756370,"xmax":246065,"ymax":757813},{"__type":"result","pvaid":"Loch Einich","xmin":291116,"ymin":798008,"xmax":291820,"ymax":799915},{"__type":"result","pvaid":"Loch Enoch","xmin":244033,"ymin":584673,"xmax":245118,"ymax":585650},{"__type":"result","pvaid":"Loch Eye","xmin":282058,"ymin":879013,"xmax":284360,"ymax":880319},{"__type":"result","pvaid":"Loch Fada","xmin":190849,"ymin":885203,"xmax":192515,"ymax":887097},{"__type":"result","pvaid":"Loch Faoghail Charrasan","xmin":119921,"ymin":926049,"xmax":120957,"ymax":928579},{"__type":"result","pvaid":"Loch Faoghail Chiorabhal","xmin":119765,"ymin":924957,"xmax":121230,"ymax":925853},{"__type":"result","pvaid":"Loch Flemington","xmin":280640,"ymin":851692,"xmax":281314,"ymax":852321},{"__type":"result","pvaid":"Loch Garasdale","xmin":176040,"ymin":650542,"xmax":177160,"ymax":651563},{"__type":"result","pvaid":"Loch Garbhaig","xmin":199051,"ymin":870244,"xmax":200939,"ymax":870815},{"__type":"result","pvaid":"Loch Geodha Beag","xmin":101018,"ymin":909267,"xmax":101180,"ymax":909823},{"__type":"result","pvaid":"Loch Gorm","xmin":121771,"ymin":664814,"xmax":124278,"ymax":666967},{"__type":"result","pvaid":"Loch Heilen","xmin":324587,"ymin":967752,"xmax":326170,"ymax":968784},{"__type":"result","pvaid":"Loch Insh","xmin":282204,"ymin":803708,"xmax":283779,"ymax":805616},{"__type":"result","pvaid":"Loch Iubhair","xmin":241390,"ymin":726298,"xmax":243923,"ymax":727469},{"__type":"result","pvaid":"Loch Ken or River Dee","xmin":263628,"ymin":564554,"xmax":273361,"ymax":576216},{"__type":"result","pvaid":"Loch Kernsary","xmin":187352,"ymin":879241,"xmax":188962,"ymax":880917},{"__type":"result","pvaid":"Loch Kinder","xmin":296368,"ymin":563849,"xmax":297403,"ymax":564842},{"__type":"result","pvaid":"Loch Kinord","xmin":343506,"ymin":798842,"xmax":344769,"ymax":800036},{"__type":"result","pvaid":"Loch Knockie","xmin":244920,"ymin":812739,"xmax":246310,"ymax":814383},{"__type":"result","pvaid":"Loch Laidon","xmin":233979,"ymin":751758,"xmax":241975,"ymax":757816},{"__type":"result","pvaid":"Loch Langabhat","xmin":114837,"ymin":912863,"xmax":122564,"ymax":922320},{"__type":"result","pvaid":"Loch Laxavat Ard","xmin":124157,"ymin":937652,"xmax":125339,"ymax":938660},{"__type":"result","pvaid":"Loch Leven","xmin":312008,"ymin":699247,"xmax":317558,"ymax":703923},{"__type":"result","pvaid":"Loch Lossit","xmin":140618,"ymin":664915,"xmax":141176,"ymax":665504},{"__type":"result","pvaid":"Loch Lubnaig","xmin":255832,"ymin":710453,"xmax":258732,"ymax":715606},{"__type":"result","pvaid":"Loch Lurgainn","xmin":208506,"ymin":906531,"xmax":213803,"ymax":909445},{"__type":"result","pvaid":"Loch Maberry","xmin":228272,"ymin":574064,"xmax":228951,"ymax":575894},{"__type":"result","pvaid":"Loch Macaterick","xmin":243521,"ymin":590674,"xmax":244603,"ymax":592311},{"__type":"result","pvaid":"Loch Mahaick","xmin":270513,"ymin":706608,"xmax":270979,"ymax":707104},{"__type":"result","pvaid":"Loch Maree","xmin":186170,"ymin":864088,"xmax":201584,"ymax":879653},{"__type":"result","pvaid":"Loch Marulaigh","xmin":80957,"ymin":815918,"xmax":82105,"ymax":816541},{"__type":"result","pvaid":"Loch Meadie","xmin":274783,"ymin":958944,"xmax":275774,"ymax":961387},{"__type":"result","pvaid":"Loch Meadie","xmin":249057,"ymin":938932,"xmax":251707,"ymax":944212},{"__type":"result","pvaid":"Loch Morar","xmin":168482,"ymin":789209,"xmax":186922,"ymax":793174},{"__type":"result","pvaid":"Loch More","xmin":306234,"ymin":943799,"xmax":308400,"ymax":946596},{"__type":"result","pvaid":"Loch Mullardoch","xmin":208953,"ymin":828609,"xmax":222288,"ymax":831778},{"__type":"result","pvaid":"Loch Naver","xmin":257730,"ymin":934402,"xmax":266592,"ymax":938521},{"__type":"result","pvaid":"Loch Olaidh Meadhanach","xmin":74710,"ymin":830975,"xmax":77353,"ymax":832097},{"__type":"result","pvaid":"Loch Orasaigh","xmin":138168,"ymin":927584,"xmax":139444,"ymax":928825},{"__type":"result","pvaid":"Loch Ossian","xmin":236819,"ymin":766978,"xmax":241235,"ymax":769767},{"__type":"result","pvaid":"Loch Pattack","xmin":253246,"ymin":778440,"xmax":254347,"ymax":779752},{"__type":"result","pvaid":"Loch Poit na h-l","xmin":131179,"ymin":721980,"xmax":131788,"ymax":723215},{"__type":"result","pvaid":"Loch Poll","xmin":209557,"ymin":929725,"xmax":210961,"ymax":931617},{"__type":"result","pvaid":"Loch Rannoch","xmin":250106,"ymin":756514,"xmax":266068,"ymax":759178},{"__type":"result","pvaid":"Loch Ruard","xmin":313794,"ymin":942271,"xmax":314472,"ymax":943938},{"__type":"result","pvaid":"Loch Ruthven","xmin":260180,"ymin":827338,"xmax":263720,"ymax":828378},{"__type":"result","pvaid":"Loch Scadabhagh","xmin":83372,"ymin":867090,"xmax":87576,"ymax":870680},{"__type":"result","pvaid":"Loch Scarmclate","xmin":318311,"ymin":958991,"xmax":319442,"ymax":960198},{"__type":"result","pvaid":"Loch Sgàire","xmin":119374,"ymin":928106,"xmax":119988,"ymax":929237},{"__type":"result","pvaid":"Loch Shiel","xmin":167804,"ymin":767761,"xmax":190719,"ymax":780703},{"__type":"result","pvaid":"Loch Sionascaig","xmin":208760,"ymin":911751,"xmax":213776,"ymax":915659},{"__type":"result","pvaid":"Loch Stack","xmin":226957,"ymin":940800,"xmax":230748,"ymax":943666},{"__type":"result","pvaid":"Loch Tay","xmin":257879,"ymin":733179,"xmax":277484,"ymax":745632},{"__type":"result","pvaid":"Loch Tom nan Aighean","xmin":129039,"ymin":928210,"xmax":129618,"ymax":928829},{"__type":"result","pvaid":"Loch Truderscaig","xmin":270621,"ymin":932203,"xmax":271758,"ymax":933389},{"__type":"result","pvaid":"Loch Tulla","xmin":227600,"ymin":741730,"xmax":231118,"ymax":744165},{"__type":"result","pvaid":"Loch Tummel","xmin":277391,"ymin":758507,"xmax":288456,"ymax":760332},{"__type":"result","pvaid":"Loch Urigill","xmin":223182,"ymin":908803,"xmax":225642,"ymax":911081},{"__type":"result","pvaid":"Loch Ussie","xmin":249834,"ymin":856449,"xmax":251190,"ymax":857576},{"__type":"result","pvaid":"Loch Venachar","xmin":254219,"ymin":705025,"xmax":259854,"ymax":706548},{"__type":"result","pvaid":"Loch Veyatie","xmin":214735,"ymin":912038,"xmax":220979,"ymax":916037},{"__type":"result","pvaid":"Loch Voil","xmin":247790,"ymin":719241,"xmax":253402,"ymax":720764},{"__type":"result","pvaid":"Loch Watten","xmin":320944,"ymin":954946,"xmax":324808,"ymax":957742},{"__type":"result","pvaid":"Loch a\u0027 Bhaid-luachraich","xmin":188437,"ymin":885301,"xmax":189961,"ymax":887899},{"__type":"result","pvaid":"Loch a\u0027 Bhealaich","xmin":258914,"ymin":925919,"xmax":261057,"ymax":927296},{"__type":"result","pvaid":"Loch a\u0027 Ghlinne","xmin":101831,"ymin":912080,"xmax":103051,"ymax":913552},{"__type":"result","pvaid":"Loch a\u0027 Phuill","xmin":95156,"ymin":741220,"xmax":96126,"ymax":742592},{"__type":"result","pvaid":"Loch an Doire Dhuibh","xmin":213113,"ymin":910228,"xmax":214591,"ymax":911627},{"__type":"result","pvaid":"Loch an Eilein","xmin":288901,"ymin":807281,"xmax":290337,"ymax":808337},{"__type":"result","pvaid":"Loch an Fhir Mhaoil","xmin":117857,"ymin":925011,"xmax":118734,"ymax":926671},{"__type":"result","pvaid":"Loch na Caorach","xmin":291149,"ymin":958132,"xmax":291451,"ymax":959081},{"__type":"result","pvaid":"Loch na Claise Càrnaich","xmin":227356,"ymin":951808,"xmax":228656,"ymax":952907},{"__type":"result","pvaid":"Loch na Meilich","xmin":157217,"ymin":839436,"xmax":157600,"ymax":840093},{"__type":"result","pvaid":"Loch na Seilge","xmin":291658,"ymin":958253,"xmax":292674,"ymax":959108},{"__type":"result","pvaid":"Loch na h-Uamhachd","xmin":255440,"ymin":965678,"xmax":255619,"ymax":965942},{"__type":"result","pvaid":"Loch nam Falcag","xmin":129146,"ymin":926704,"xmax":130499,"ymax":928136},{"__type":"result","pvaid":"Loch nan Caor","xmin":106281,"ymin":906976,"xmax":106551,"ymax":907271},{"__type":"result","pvaid":"Loch nan Eun","xmin":81890,"ymin":866745,"xmax":85621,"ymax":867869},{"__type":"result","pvaid":"Loch of Aboyne","xmin":353492,"ymin":799506,"xmax":353963,"ymax":800057},{"__type":"result","pvaid":"Loch of Butterstone","xmin":305413,"ymin":744617,"xmax":306308,"ymax":745357},{"__type":"result","pvaid":"Loch of Clunie","xmin":310943,"ymin":743641,"xmax":311889,"ymax":744556},{"__type":"result","pvaid":"Loch of Craiglush","xmin":304018,"ymin":743976,"xmax":304757,"ymax":744643},{"__type":"result","pvaid":"Loch of Drumellie","xmin":313572,"ymin":743740,"xmax":314865,"ymax":744745},{"__type":"result","pvaid":"Loch of Forfar","xmin":343419,"ymin":750223,"xmax":344949,"ymax":750839},{"__type":"result","pvaid":"Loch of Girlsta","xmin":442869,"ymin":1151009,"xmax":443609,"ymax":1153391},{"__type":"result","pvaid":"Loch of Harray","xmin":326739,"ymin":1012476,"xmax":331334,"ymax":1019720},{"__type":"result","pvaid":"Loch of Kirbister","xmin":336149,"ymin":1007132,"xmax":337483,"ymax":1008867},{"__type":"result","pvaid":"Loch of Lintrathen","xmin":326826,"ymin":754020,"xmax":328908,"ymax":755793},{"__type":"result","pvaid":"Loch of Lowes","xmin":304159,"ymin":743335,"xmax":305602,"ymax":744587},{"__type":"result","pvaid":"Loch of Skene","xmin":377716,"ymin":806821,"xmax":379177,"ymax":808081},{"__type":"result","pvaid":"Loch of Spiggie","xmin":436735,"ymin":1115729,"xmax":437766,"ymax":1117726},{"__type":"result","pvaid":"Loch of Strathbeg","xmin":405817,"ymin":857668,"xmax":408733,"ymax":859824},{"__type":"result","pvaid":"Loch of Tingwall","xmin":441286,"ymin":1141945,"xmax":442139,"ymax":1143537},{"__type":"result","pvaid":"Lochan na h-Achlaise","xmin":230475,"ymin":747362,"xmax":231630,"ymax":748636},{"__type":"result","pvaid":"Lochmill Loch","xmin":321959,"ymin":716068,"xmax":322606,"ymax":716350},{"__type":"result","pvaid":"Long Loch","xmin":136242,"ymin":798108,"xmax":136401,"ymax":799037},{"__type":"result","pvaid":"Lussa Loch","xmin":170659,"ymin":628635,"xmax":171784,"ymax":631151},{"__type":"result","pvaid":"Milton Loch","xmin":283540,"ymin":570977,"xmax":284425,"ymax":572105},{"__type":"result","pvaid":"Mochrum Loch","xmin":229166,"ymin":552008,"xmax":230703,"ymax":553993},{"__type":"result","pvaid":"Rescobie Loch","xmin":350463,"ymin":751304,"xmax":352597,"ymax":752093},{"__type":"result","pvaid":"Sandwood Loch","xmin":222233,"ymin":963290,"xmax":223394,"ymax":965063},{"__type":"result","pvaid":"Sandy Loch","xmin":321809,"ymin":1002799,"xmax":321968,"ymax":1003211},{"__type":"result","pvaid":"St Mary\u0027s Loch","xmin":323355,"ymin":619150,"xmax":327012,"ymax":623890},{"__type":"result","pvaid":"Threipmuir Reservoir","xmin":315832,"ymin":663239,"xmax":319027,"ymax":664455},{"__type":"result","pvaid":"White Loch","xmin":210326,"ymin":560207,"xmax":211236,"ymax":561572},{"__type":"result","pvaid":"Woodhall Loch","xmin":266326,"ymin":566389,"xmax":267782,"ymax":568802}]}';
var Reserviorjson;
var _thinkwhere = 'http://map.sepa.org.uk/proxy/thinkwhere.ashx';

require(["dojo/parser", "dojo/promise/all", "dojo/Deferred", "dojo/_base/connect", "dijit/registry", "esri/config", "dojo/sniff", "dojo/_base/array",
 "esri/map", "esri/arcgis/utils", "esri/domUtils", "esri/InfoTemplate", "esri/tasks/IdentifyTask", "esri/tasks/IdentifyParameters", "esri/dijit/Popup", "dojo/_base/array",
 "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/ArcGISDynamicMapServiceLayer", 'esri/layers/WMSLayer', 'esri/layers/WMSLayerInfo', "esri/layers/GraphicsLayer",
 "esri/geometry/Point",
 "esri/geometry/Extent", "esri/dijit/Scalebar", "esri/dijit/OverviewMap", "esri/dijit/HomeButton", "esri/graphic",
 "esri/Color", "dojo/dom", "dojo/on", "dojo/dom-construct",
 "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/symbols/PictureMarkerSymbol",
 "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/layout/TabContainer", "dijit/layout/AccordionContainer", "dijit/form/TextBox",
 "dijit/layout/AccordionPane", "dojo/domReady!"

 ], function (parser, all, Deferred, connect, registry, esriConfig, sniff, array,
  Map, arcgisUtils, domUtils, InfoTemplate, IdentifyTask, IdentifyParameters, Popup, arrayUtils,
  ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, WMSLayer, WMSLayerInfo, GraphicsLayer,
  Point,
  Extent, Scalebar, OverviewMap, HomeButton, Graphic,
  Color, dom, on, domConstruct,
  SimpleFillSymbol, SimpleLineSymbol, PictureMarkerSymbol
  ) {
     parser.parse();

     //Initialise the Thinkwhere Maps
     initLayer();

     //*************************** Info Template *************************************************

     graphic_draw_search_point = new PictureMarkerSymbol("http://static.arcgis.com/images/Symbols/Basic/RedStickpin.png", 50, 50).setOffset(0, 24);

     //******************************************************************************************

     //*************************** Initial Extent ***************************************************
     var initExtent = new Extent({ "xmin": -179362, "ymin": 509793, "xmax": 667306, "ymax": 980091, "spatialReference": { "wkid": 27700} });
     //*********************************************************************************************
     //*************************** Map Layers ***************************************************

     map = new Map("map", { extent: initExtent, logo: false });

     baseMapServiceLayer = new my.ThinkWhereColour();
     map.addLayer(baseMapServiceLayer);

     //baseMapServiceLayer2 = new my.ThinkWhereStandard();
     selectedbg = 'grey';

     //dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer('https://map.sepa.org.uk/ArcGIS/rest/services/Secure/Reservoir_Map/MapServer', { id: 'Reservoirs', opacity: 0.8 });
     //dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer('http://dsk004902/ArcGIS/rest/services/Reservoirs_Lochs/MapServer', { id: 'Reservoirs', opacity: 0.8 });
     //dynamicMapServiceLayer.setImageFormat('png32');

     //map.addLayer(dynamicMapServiceLayer);
     //var layerDefinitions = [];
     //layerDefinitions[0] = "BREACH_ID = '0'";
     //dynamicMapServiceLayer.setLayerDefinitions(layerDefinitions);


     gl_Query_results_selected = new GraphicsLayer({ id: "Results_Selected" });
     map.addLayer(gl_Query_results_selected);
     //**********************************************************
     var layer1 = new WMSLayerInfo({
         name: "ScotlandBest250mm",
         title: "Latest Available Digital Aerial Photograpy of Scotland"
     });
     var resourceInfo = {
         extent: new esri.geometry.Extent(0, 31.500000, 700000, 1250000, {
             wkid: 27700
         }),
         layerInfos: [layer1]
     };
     //baseMapServiceLayer = new WMSLayer("http://www.getmapping.com/wms/scotland/scotland.wmsx", {
     baseMapServiceLayerAerial = new WMSLayer("http://www.getmapping.com/wms/scotland/sepa02/reo9tin/scotland.wmsx", {
         resourceInfo: resourceInfo,
         visibleLayers: ["ScotlandBest250mm"],
         id: "bg_Aerial",
         visible: false
     });

     map.addLayer(baseMapServiceLayerAerial);

     //**********************************************************
     //************************** Create WMS for Overview Map ******************************
     //var lyr_os_background_bng_colour = new WMSLayerInfo({
     //    name: 'os_background_bng_colour',
     //    title: 'OS Background Stack'
     //});

     //var resourceInfo = {
     //    extent: new Extent(-55904.4384805, 528259.95961, 494063.444651, 1264076.88368, {
     //        wkid: 27700
     //    }),
     //    layerInfos: [lyr_os_background_bng_colour]
     //};
     //var wmsLayer = new WMSLayer('http://wms.locationcentre.co.uk/services/sepa_bf5394/service', {
     //    resourceInfo: resourceInfo,
     //    visibleLayers: ['os_standard_look_feel']
     //});

     //******************************************************************************************
     //*************************** Loading Icon *************************************************
     mapUpdateStart = map.on("update-start", MapUpdateStart);
     mapUpdateEnd = map.on("update-end", MapUpdateEnd);

     function MapUpdateStart() {
         $('.loadingImg').show();
     }
     function MapUpdateEnd() {
         $('.loadingImg').hide();
     }
     //************************************************************************************************
     //*************************** Map and Layer Loaded ****************************************

     if (map.loaded) {
         mapLoadedHandler();
     } else {
         mapLoadedHandlervar = map.on("load", mapLoadedHandler);
     }

     if (baseMapServiceLayer.loaded) {
         baseMapServiceLayerLoadedHandler();
     } else {
         baseMapServiceLayerLoadedHandlervar = baseMapServiceLayer.on("load", baseMapServiceLayerLoadedHandler);
     }

     //     if (dynamicMapServiceLayer.loaded) {
     //         dynamicMapServiceLayerLoadedHandler();
     //     } else {
     //         dynamicMapServiceLayerLoadedHandlervar = dynamicMapServiceLayer.on("load", dynamicMapServiceLayerLoadedHandler);
     //     }

     function mapLoadedHandler() {
         if (mapLoadedHandlervar) {
             mapLoadedHandlervar.remove();
         }
         map.on("zoom-end", scaleTimer); //The scale you are currently looking at
         map.on("pan-end", scaleTimer); //The scale you are currently looking at

         autoRecenter(map);
         //GetReservoirList('Reservoirs');
         //debugger;
     }

     function baseMapServiceLayerLoadedHandler() {
         if (baseMapServiceLayerLoadedHandlervar) {
             baseMapServiceLayerLoadedHandlervar.remove();
         }

         scaleTimer(map.extent);
         map.on("click", identify);
     }



     //***********************************************************************************************************
     //************ Recenter the map when the window changes size *************************************

     function autoRecenter(map) {
         var resizeDelay = 100;
         on(map, 'load', function (map) {
             on(window, 'resize', map, map.resize);
         });
         on(map, 'resize', function (extent, width, height) {
             map.__resizeCenter = map.extent.getCenter();
             setTimeout(function () {
                 map.centerAt(map.__resizeCenter);
             }, resizeDelay);
         });
     }

     //*********************************************************************************************
     //***************************************** Search Text Box **************************************
     $("#txtsearch").Watermark("e.g. Postcode, NGR, Town or feature such as Loch Lomond");
     $('#txtsearch').keypress(function (e) {
         if (e.which == '13') {
             e.preventDefault();
             return bannerSearch();
         }
     });
     $("#txtsearch").mouseup(function (e) {
         e.preventDefault();
     });
     $("input").focus(function () {
         $(this).select();
     });
     //************************************************************************************************
     //**************************************** Title Bar Menu Buttons *********************************

     $('#btnSepaHome').click(function () {
         var URL = strSEPAHomeURL;
         window.open(URL, '_self');
     }).hover(function () {
         $(this).css('cursor', 'pointer');
     });
     
     //************************************************************************************************
     //*************************** Background Selector ****************************************

     function identify(evt) {
         var mp = evt.mapPoint;

         var point = new Point(mp.x, mp.y, map.spatialReference);
         var graphic = new Graphic(point, graphic_draw_search_point);

         gl_Query_results_selected.clear();
         gl_Query_results_selected.add(graphic);

         var myNGR = NE2NGR(mp.x.toFixed(0), mp.y.toFixed(0));

         $('.NGRValue').html(myNGR);
         $('.EastingValue').html(mp.x.toFixed(0));
         $('.NorthingValue').html(mp.y.toFixed(0));

     }


     function NE2NGR(east, north) {
         var eX = east / 500000;
         var nX = north / 500000;
         var tmp = Math.floor(eX) - 5.0 * Math.floor(nX) + 17.0;
         nX = 5 * (nX - Math.floor(nX));
         eX = 20 - 5.0 * Math.floor(nX) + Math.floor(5.0 * (eX - Math.floor(eX)));
         if (eX > 7.5)
             eX = eX + 1;
         if (tmp > 7.5)
             tmp = tmp + 1;
         var eing = String(east);
         var ning = String(north);

         var lnth = eing.length;
         eing = eing.substring(lnth - 5, 6);
         lnth = ning.length;
         if (lnth == '6') {
             ning = ning.substring(lnth - 5, 6);
         } else if (lnth == '7') {
             ning = ning.substring(lnth - 5, 7);
         }

         ngr = String.fromCharCode(tmp + 65) + String.fromCharCode(eX + 65) + ' ' + eing + ' ' + ning;

         return ngr;
     }
     //*********************************************************************************************
     //*************************** Background Selector ****************************************

     $(".bg_slector").hover(function () {
         $(this).css({
             cursor: 'pointer'
         });
     });
     $('.bg_slectorcolour_image').click(function () {
         $(this).hide(); $('.bg_slectorgreyscale_image').show();
         //BaseLayer.setVisibleLayers([32]);

         map.removeLayer(baseMapServiceLayer);
         map.addLayer(baseMapServiceLayerColour);
         map.reorderLayer(baseMapServiceLayerColour, 0);
         selectedbg = 'colour';

     });
     $('.bg_slectorgreyscale_image').click(function () {
         $(this).hide(); $('.bg_slectorcolour_image').show();
         //BaseLayer.setVisibleLayers([15]);

         map.removeLayer(baseMapServiceLayerColour);
         map.addLayer(baseMapServiceLayer);
         map.reorderLayer(baseMapServiceLayer, 0);
         selectedbg = 'grey';
     });
     //*********************************************************************************************
     //*************************** Scale Error Message ************************
     function getScale() {
         if (typeof map == 'undefined') {
             // No map
             return null;
         }
         else {
             //debugger;
             return esri.geometry.getScale(map.extent, map.width, map.extent.spatialReference.wkid);
         }
     }

     //*********************************************************************************************
     //*************************** Copyright Scale Bar and Map Scale ************************

     $('.copyrighttext').html(strCopyright); //Add Copyright


     function showExtent(extent) {
         var _mapScale = numberWithCommas(Math.round(map.getScale()));
         $('#plcScaleMap').html(' Map Scale: 1 : ' + _mapScale);
     }

     function scaleTimer() {

         var scaleTimer;
         clearTimeout(scaleTimer);
         scaleTimer = setTimeout(jQuery.proxy(function () {
             var _mapScale = numberWithCommas(Math.round(map.getScale() / 1000) * 1000);
             document.getElementById('scaleBar').innerHTML = 'Map Scale - 1:' + _mapScale;
         }, this), 500);

         $('.bg_Selector').unbind("click");

         if (map.getScale() < 50000) {

             if ($('.bg_Selector').prop('title') == 'Aerial Background') {
                 $('.bg_Selector').css("background", "url(./images/Aerial_Photography_Small.png)");
             }
             $('.bg_Selector').click(function (ent) {
                 if ($('.bg_Selector').prop('title') == 'Aerial Background') {
                     $('.bg_Selector').css("background", "url(./images/Colour_Small.png)");
                     $('.bg_Selector').prop('title', 'Colour Background');
                     baseMapServiceLayerAerial.setVisibility(true);
                     baseMapServiceLayer.setVisibility(false);
                 } else {
                     $('.bg_Selector').css("background", "url(./images/Aerial_Photography_Small.png)");
                     $('.bg_Selector').prop('title', 'Aerial Background');
                     baseMapServiceLayerAerial.setVisibility(false);
                     baseMapServiceLayer.setVisibility(true);
                 }
             });
         } else {
             if ($('.bg_Selector').prop('title') == 'Aerial Background') {
                 $('.bg_Selector').css("background", "url(./images/Aerial_Photography_Small_Disabled.png)");
                 $('.bg_Selector').prop('title', 'Aerial Background');
             } else {
                 $('.bg_Selector').css("background", "url(./images/Aerial_Photography_Small_Disabled.png)");
                 $('.bg_Selector').prop('title', 'Aerial Background');
                 baseMapServiceLayerAerial.setVisibility(false);
                 baseMapServiceLayer.setVisibility(true);
             }
         }



     }

     //Scale Bar
     var scalebar = new Scalebar({
         attachTo: "bottom-right",
         map: map,
         scalebarUnit: 'metric'
     });

     $('.esriScalebar').css({ bottom: '0px', right: '0%' });
     $(".esriScalebar").detach().appendTo('.scalemessage');
     $('.esriScalebar').css({ position: 'relative' });
     $('.esriScalebarLabel').css({ color: '#ffffff' });

     //*************************************************************************************************
     //***************************************** Setup Overview Map ******************************

     var overviewMap = new OverviewMap({
         map: map,
         visible: false,
         baseLayer: wmsLayer,
         expandFactor: 3,
         opacity: .40,
         attachTo: 'bottom-right'
     });

     overviewMap.startup();
     $('#esri_dijit_OverviewMap_0').css({ bottom: '40px' }); //Position of Overview Pointer


     var home = new HomeButton({
         map: map
     }, "HomeButton");
     home.startup();

     //**********************************************************************************************
     //*********************************************** Control the Extent *************************
     //     function CheckMapExtent(extent, delta) {
     //         //Setup variables for controling map extent
     //         maxExtent = new esri.geometry.Extent(maxxmin, maxymin, maxxmax, maxymax, new esri.SpatialReference({ wkid: 27700 }));
     //         previousExtent = initExtent;
     //         if (maxExtent.intersects(extent)) {
     //             previousExtent = extent;
     //         } else {
     //             map.setExtent(previousExtent);
     //         }
     //     }
     //**********************************************************************************************
     //***************************************** Legend Reszize ********************************

     innercontentresize();
     //     $(".map_legend").resizable({
     //         resize: function (event, ui) {
     //             $('.map_legendinner').show('slow');
     //             $('.map_legendinner').css('height', $(this).height() - 30)
     //             $('.map_legendinner').css('width', $(this).width() - 2)
     //         }
     //     }).draggable({ handle: ".legheader", containment: "#map" });
     //     $(".legheader").hover(function () {
     //         $(this).css({
     //             cursor: 'pointer'
     //         });
     //     });
     $('.legheadup').click(function () {
         if ($('.map_legendinner').css('display') == 'none' || $('.map_legend').css('height') == '28px') {
             $('.map_legend').height(MapContentheight);
             $('.map_legend').width(MapContentwidth);
             $('.map_legendinner').height(MapContentheight - 30);
             $('.map_legendinner').width(MapContentwidth - 2);
             $('.map_legendinner').slideDown('slow');
             $(this).addClass('legheadup').removeClass('legheaddown');
         } else {
             MapContentheight = $('.map_legend').height(); //Map Content Box
             MapContentwidth = $('.map_legend').width();
             $('.map_legendinner').hide('slow');
             $('.map_legend').height(28);
             $(this).addClass('legheaddown').removeClass('legheadup');
         }
     }).hover(function () {
         $(this).css({
             cursor: 'pointer'
         });
     });

     //**********************************************************************************************




 });

//Usefull funtion to make numbers nice :)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function innercontentresize() {
    $('.map_legendinner').css('height', $(".map_legend").height() - 30)
    $('.map_legendinner').css('width', $(".map_legend").width() - 2)
}

function initLayer() {
    dojo.declare("my.ThinkWhereStandard", esri.layers.TiledMapServiceLayer, {
        constructor: function () {
            this.spatialReference = new esri.SpatialReference({ wkid: 27700 });
            this.initialExtent = (this.fullExtent = new esri.geometry.Extent(-49743770.85697311, -33016566.845420867, 50443770.85697311, 34766566.84542087, this.spatialReference));
            this.id = 'bg1';
            this.opacity = 1.0;
            this.tileInfo = new esri.layers.TileInfo({
                "rows": 256,
                "cols": 256,
                "dpi": 96,
                "format": "image/png",
                "origin": {
                    "x": 0,
                    "y": 1300000
                },
                "spatialReference": {
                    "wkid": 27700
                },
                "lods": [
                                         { "level": 0, "resolution": 1000.0000000004, "scale": 3571428.571429 },
                                         { "level": 1, "resolution": 499.99999999880004, "scale": 1785714.285714 },
                                         { "level": 2, "resolution": 200.00000000008, "scale": 714285.714286 },
                                         { "level": 3, "resolution": 100.00000000004, "scale": 357142.857143 },
                                         { "level": 4, "resolution": 49.999999999879996, "scale": 178571.428571 },
                                         { "level": 5, "resolution": 24.999999999996, "scale": 89285.714286 },
                                         { "level": 6, "resolution": 10.000000000004, "scale": 35714.285714 },
                                         { "level": 7, "resolution": 4.999999999988, "scale": 17857.142857 },
                                         { "level": 8, "resolution": 2.4999999999996, "scale": 9448.818897636284 },
                                         { "level": 9, "resolution": 1.2699999999987999, "scale": 4535.714286 },
                                         { "level": 10, "resolution": 0.49999999999879996, "scale": 1785.714286 },
                                         { "level": 11, "resolution": 0.20000000000008, "scale": 714.285714 }
                ]
            });
            this.loaded = true;
            this.onLoad(this);
        },

        getTileUrl: function (level, row, col) {
			return _thinkwhere + "?https://api.themapcloud.com/maps/wmts/os_standard_look_feel/uk_bng_largescale/" + level + "/" + col + "/" + row + "." + "png";
        }
    });

    dojo.declare("my.ThinkWhereColour", esri.layers.TiledMapServiceLayer, {
        constructor: function () {
            this.spatialReference = new esri.SpatialReference({ wkid: 27700 });
            this.initialExtent = (this.fullExtent = new esri.geometry.Extent(-49743770.85697311, -33016566.845420867, 50443770.85697311, 34766566.84542087, this.spatialReference));
            this.id = 'bg2';
            this.opacity = 1.0;
            this.tileInfo = new esri.layers.TileInfo({
                "rows": 256,
                "cols": 256,
                "dpi": 96,
                "format": "image/png",
                "origin": {
                    "x": 0,
                    "y": 1300000
                },
                "spatialReference": {
                    "wkid": 27700
                },
                "lods": [
                                         { "level": 0, "resolution": 1000.0000000004, "scale": 3571428.571429 },
                                         { "level": 1, "resolution": 499.99999999880004, "scale": 1785714.285714 },
                                         { "level": 2, "resolution": 200.00000000008, "scale": 714285.714286 },
                                         { "level": 3, "resolution": 100.00000000004, "scale": 357142.857143 },
                                         { "level": 4, "resolution": 49.999999999879996, "scale": 178571.428571 },
                                         { "level": 5, "resolution": 24.999999999996, "scale": 89285.714286 },
                                         { "level": 6, "resolution": 10.000000000004, "scale": 35714.285714 },
                                         { "level": 7, "resolution": 4.999999999988, "scale": 17857.142857 },
                                         { "level": 8, "resolution": 2.4999999999996, "scale": 9448.818897636284 },
                                         { "level": 9, "resolution": 1.2699999999987999, "scale": 4535.714286 },
                                         { "level": 10, "resolution": 0.49999999999879996, "scale": 1785.714286 },
                                         { "level": 11, "resolution": 0.20000000000008, "scale": 714.285714 }
                ]
            });
            this.loaded = true;
            this.onLoad(this);
        },

        getTileUrl: function (level, row, col) {
            return _thinkwhere + "?https://api.themapcloud.com/maps/wmts/os_licensed_background_colour/uk_bng_largescale/" + level + "/" + col + "/" + row + "." + "png";
        }
    });

    dojo.declare("my.ThinkWhereGreyScale", esri.layers.TiledMapServiceLayer, {
        constructor: function () {
            this.spatialReference = new esri.SpatialReference({ wkid: 27700 });
            this.initialExtent = (this.fullExtent = new esri.geometry.Extent(-49743770.85697311, -33016566.845420867, 50443770.85697311, 34766566.84542087, this.spatialReference));
            this.id = 'bg3';
            this.opacity = 1.0;
            this.tileInfo = new esri.layers.TileInfo({
                "rows": 256,
                "cols": 256,
                "dpi": 96,
                "format": "image/png",
                "origin": {
                    "x": 0,
                    "y": 1300000
                },
                "spatialReference": {
                    "wkid": 27700
                },
                "lods": [
                                         { "level": 0, "resolution": 1000.0000000004, "scale": 3571428.571429 },
                                         { "level": 1, "resolution": 499.99999999880004, "scale": 1785714.285714 },
                                         { "level": 2, "resolution": 200.00000000008, "scale": 714285.714286 },
                                         { "level": 3, "resolution": 100.00000000004, "scale": 357142.857143 },
                                         { "level": 4, "resolution": 49.999999999879996, "scale": 178571.428571 },
                                         { "level": 5, "resolution": 24.999999999996, "scale": 89285.714286 },
                                         { "level": 6, "resolution": 10.000000000004, "scale": 35714.285714 },
                                         { "level": 7, "resolution": 4.999999999988, "scale": 17857.142857 },
                                         { "level": 8, "resolution": 2.4999999999996, "scale": 9448.818897636284 },
                                         { "level": 9, "resolution": 1.2699999999987999, "scale": 4535.714286 },
                                         { "level": 10, "resolution": 0.49999999999879996, "scale": 1785.714286 },
                                         { "level": 11, "resolution": 0.20000000000008, "scale": 714.285714 }
                ]
            });
            this.loaded = true;
            this.onLoad(this);
        },

        getTileUrl: function (level, row, col) {
            return _thinkwhere + "?https://api.themapcloud.com/maps/wmts/os_licensed_background_greyscale/uk_bng_largescale/" + level + "/" + col + "/" + row + "." + "png";
        }
    });
}

$.fn.scrollTo = function (target, options, callback) {
    if (typeof options == 'function' && arguments.length == 2) { callback = options; options = target; }
    var settings = $.extend({
        scrollTarget: target,
        offsetTop: 300,
        duration: 0,
        easing: 'swing'
    }, options);
    return this.each(function () {
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({ scrollTop: scrollY }, parseInt(settings.duration), settings.easing, function () {
            if (typeof callback == 'function') { callback.call(this); }
        });
    });
}