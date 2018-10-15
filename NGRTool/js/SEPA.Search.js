

//*********************************************************************************************
//*********************************** String Trim Functions ***************************************

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
}
//*********************************************************************************************
//*************************** Clears all graphics from the map *************************************

//********************* Search Function ****************
function bannerSearch() {
    //$(".btnSearch").hide();
    var iMap = new SEPA.GIS.Map();
    iMap.SEPAGISmap = map;
    if (typeof iMap == 'undefined') {
        return false;
    }
    //iMap.clearGraphic();
    var searchResultSelected = jQuery.proxy(iMap.zoomTo, iMap);
    if (document.getElementById("txtsearch")) {
        var searchTerm = document.getElementById("txtsearch").value.toUpperCase();
        //var searchTerm = document.getElementById("txtsearch").value;
        $('.btnSearch').focus();
        // Check IF NGR entered
        if (searchTerm.trim() === '') {
            document.getElementById("txtsearch").value = "Not a valid search term."
        } else {
            SEPA.GIS.point.ngr.prototype.REGEX = /^(NA|NF|NL|NB|NG|NM|NR|NW|NC|NH|NN|NS|NX|ND|NJ|NO|NT|NY|NK|HW|HX|HY|HT|HP|HU|HZ)([0-9]{2}|[0-9]{4}|[0-9]{6}|[0-9]{8}|[0-9]{10})$/
            if (searchTerm.replace(/\s/g, '').match(SEPA.GIS.point.ngr.prototype.REGEX)) {
                // NGR Entered, zoom to it and display point
                var searchNGR = new SEPA.GIS.point.ngr(searchTerm.replace(/\s/g, ''));
                var searchXY = searchNGR.getXY();
                iMap.zoomTo(searchXY.xcoord, searchXY.ycoord, {
                    drawZoom: true,
					zoomBuffer: 100
                });
				setTimeout(function () {
                    mapLayer = map.getLayer('resultGraphics');
                    mapLayer.clear();
                }, 5000);
            }
            else {
                var ispc = checkPostCode(searchTerm);
                if (ispc) { searchTerm = ispc; }
                //debugger;
                var mapSearch = new SEPA.GIS.search.Auto();
                mapSearch._searchComplete = function () {
                    $(".searchResultClear").html("New Search");
                }
                //$(".btnSearch").show();
                mapSearch.search(searchTerm, "resultlist", "searcharea", searchResultSelected);
            }
        }
    }
    return false;
}
//**************************************************************************

//********************* Check Post Code ************************************

function checkPostCode(toCheck) {
    // Permitted letters depend upon their position in the postcode.
    var alpha1 = "[abcdefghijklmnoprstuwyz]";                       // Character 1
    var alpha2 = "[abcdefghklmnopqrstuvwxy]";                       // Character 2
    var alpha3 = "[abcdefghjkstuw]";                                // Character 3
    var alpha4 = "[abehmnprvwxy]";                                  // Character 4
    var alpha5 = "[abdefghjlnpqrstuwxyz]";                          // Character 5
    // Array holds the regular expressions for the valid postcodes
    var pcexp = new Array();
    // Expression for postcodes: AN NAA, ANN NAA, AAN NAA, and AANN NAA
    pcexp.push(new RegExp("^(" + alpha1 + "{1}" + alpha2 + "?[0-9]{1,2})(\\s*)([0-9]{1}" + alpha5 + "{2})$", "i"));
    // Expression for postcodes: ANA NAA
    pcexp.push(new RegExp("^(" + alpha1 + "{1}[0-9]{1}" + alpha3 + "{1})(\\s*)([0-9]{1}" + alpha5 + "{2})$", "i"));
    // Expression for postcodes: AANA  NAA
    pcexp.push(new RegExp("^(" + alpha1 + "{1}" + alpha2 + "?[0-9]{1}" + alpha4 + "{1})(\\s*)([0-9]{1}" + alpha5 + "{2})$", "i"));
    // Exception for the special postcode GIR 0AA
    pcexp.push(/^(GIR)(\s*)(0AA)$/i);
    // Standard BFPO numbers
    pcexp.push(/^(bfpo)(\s*)([0-9]{1,4})$/i);
    // Load up the string to check
    var postCode = toCheck;
    // Assume postcode entered is not valid
    var valid = false;
    // Check the string against the types of post codes
    for (var i = 0; i < pcexp.length; i++) {
        if (pcexp[i].test(postCode)) {
            // The post code is valid - split the post code into component parts
            pcexp[i].exec(postCode);
            // Copy it back into the original string, converting it to uppercase and
            // inserting a space between the inward and outward codes
            postCode = RegExp.$1.toUpperCase() + " " + RegExp.$3.toUpperCase();
            // Load new postcode back into the form element
            valid = true;
            // Remember that we have found that the code is valid and break from loop
            break;
        }
    }
    // Return with either the reformatted valid postcode or the original invalid 
    // postcode
    if (valid) { return postCode; } else return false;
}