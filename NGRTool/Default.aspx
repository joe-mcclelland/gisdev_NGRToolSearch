<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=7,IE=9,IE=10" />
    <!--The viewport meta tag is used to improve the presentation and behavior of the samples 
      on iOS devices-->
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no" />
    <title>NGR Tool</title>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" href="http://js.arcgis.com/3.14/dijit/themes/claro/claro.css" />
    <link rel="stylesheet" href="http://js.arcgis.com/3.14/esri/css/esri.css" />
    <link href="css/PageLayout.css" rel="stylesheet" type="text/css" />
    <link href="css/cookie-info-box-css.css" rel="stylesheet" type="text/css" />
    <link href="css/jquery.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        var djConfig = {
            parseOnLoad: true
        };
    </script>
    <script type="text/javascript" src="http://js.arcgis.com/3.14compact"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.js" type="text/javascript"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.Map.js" type="text/javascript"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.search.js" type="text/javascript"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.point.js" type="text/javascript"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.map.tools.js" type="text/javascript"></script>
    <script src="http://map.sepa.org.uk/sepalib/SEPA.GIS.map.utilities.js" type="text/javascript"></script>
    <script src="js/framework/jquery-watermark.js" type="text/javascript"></script>
    <script src="js/SEPA.Params.js" type="text/javascript"></script>
    <script src="js/SEPA.Search.js" type="text/javascript"></script>
    <script src="js/SEPA.Map.js" type="text/javascript"></script>
    <script src="js/cookie-information-drop-down.js" type="text/javascript"></script>
        <script type="text/javascript">

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-1288164-18']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

    </script>
</head>
<body class="claro">
    <%--<form id="form1" runat="server">    </form>--%>
    <div id="mainWindow" data-dojo-type="dijit.layout.BorderContainer" data-dojo-type="design:'headline', gutters:false"
        style="width: 100%; height: 100%;">
        <div id="header" data-dojo-type="dijit.layout.ContentPane" class="roundedCorners"
            data-dojo-props="region:'top', splitter:false">
            <a href="http://www.sepa.org.uk" target="_self">
                <img class="logoheader" alt="SEPA Logo and link to SEPA home Page" src="http://www.sepa.org.uk//images/template/Sepa-logo.jpg"
                    style="padding: 0px 0px 0px 15px; border-style: none;" /></a>
            <img class="logoheader" alt="SEPA Title" src="images/Title.png" onclick="setMapScale();return false;"
                style="float: right; margin-top: 35px;" />
            <!--<div class="loadingtext">
                Application Loading...</div>-->
            <div id="dialog" class="dialog">
            </div>
            <div id="infodialog" class="infodialog">
            </div>
            <div id="topmenu"><span class="placeholder" id="btnSepaHome">&nbsp;</span>
                <!--<a class="homelink" id="btnSepaHome">SEPA Home</a> -->
                <%--<a class="topwidth" id="btnHomeLink">SEPA Home </a>
                <span style="float: right;"><a class="topwidthr" id="btnMapDates">
                        Map Creation Dates</a>
                        <a class="topwidthr" id="btnPrint">Print Map</a>
                        <a class="topwidthr" id="btnHelp">Help</a></span>--%>
            </div>
        </div>

        <div data-dojo-type="dijit.layout.ContentPane" id="mapPane" class="roundedCorners"
            data-dojo-props="region:'center', splitter:false" style="padding: 0px;">
            <div id="Div2" data-dojo-type="dijit.layout.BorderContainer" data-dojo-type="design:'headline', gutters:false"
                style="width: 100%; height: 100%;">
                <div data-dojo-type="dijit.layout.ContentPane" id="map" class="roundedCorners" data-dojo-props="region:'center', splitter:false">
                    
                    <div class="divSearchBox">
                        <button id="btnHideSearchBar" class="btnHideTopSearch" title="Hide Search Bar" name="Hide Search Bar">
                            <!--    -->
                        </button>
                        <div id="divSearchBox1">
                            <!--<table>
                                <tr>
                                    <td>
                                        <input type="text" id="txtsearch" class="txtSearch" value="" size="28" />
                                    </td>
                                    <td>
                                        <input type="submit" value="Search" id="cmdsearch" />
                                    </td>
                                </tr>
                            </table>-->
                            <div id="searcharea">
                                <input type="text" id="txtsearch" class="txtSearch" value="" size="28" /><a href="#"
                                    target="_self" onclick="bannerSearch();return  false;" class="btnSearch">Search</a>
                            </div>
                        </div>
                    </div>
                    <div class="divNGRBox">
                        <table>
                         <tr>
                                <td colspan="2">
                                  <span class="NGRHeading">Click on the map to get NGR</span>
                                </td>
                            </tr>
                            </table><p></p><table>
                            <tr>
                                <td class="lbl">
                                    National Grid Reference:
                                </td>
                                <td class="fld"><span class="NGRValue"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="lbl">
                                    Easting:
                                </td>
                                <td class="fld"><span class="EastingValue"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="lbl">
                                    Northing:
                                </td>
                                <td class="fld"><span class="NorthingValue"></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div title="Aerial Background" class="bg_Selector"></div>
                    <div id="scaleerrormessage" class="scaleerrormessage">
                    </div>
                    <div id="copyright" class="copyright">
                        <table width="100%">
                            <tr>
                                <td>
                                    <div class="copyrighttext">
                                    </div>
                                </td>
                                <td>
                                    <div id="scalemessage" class="scalemessage">
                                    </div>
                                </td>
                                <td>
                                    <div id="scaleBar" class="statusbardiv" style="text-align: right;">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="HomeButton">
                    </div>
                </div>
                <img alt="Loading Image" class="loadingImg" id="loadingImg" src="images/ajax-loadermap.gif" />
            </div>
        </div>
    </div>
</body>
</html>
