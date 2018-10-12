$(document).ready(function () {
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    var myCookie = getCookie("CookieBannerShown");
    if (myCookie == null) {
        // string to create content in the drop down box, edit the text in here to edit the message that shows up
        var CookieInfoBox = '<div id="CookieWrapper"><div id="CookieInternal"><p>This site uses cookies - for more information click <a href="http://www.sepa.org.uk/system_pages/privacy_policy.aspx#cookies" target="_blank">here</a><br /><div id="CookieWrapperClose">[close]</div></div></div>';
        // add the content
        // to change where the drop down appears change the div id below (#wrap) with the div id you wish to target
        $("#header").append(CookieInfoBox);
        // this is the last thing triggers when the script loads and it is to make the banner appear at the top
        $('#CookieWrapper').delay(500).slideToggle(500);
        //set the cookie, it only exists for 15 days then they will be served the message again
        createCookie("CookieBannerShown", "Yes", 15);

        // if the click the close div get rid of the box
        $('#CookieWrapperClose').css('cursor', 'pointer');
        $('#CookieWrapperClose').click(function () {
            $('#CookieWrapper').delay(200).slideToggle(500);
        });
    } else {
        // at the moment this doesnt have to do anything because there is no need
        // If you wanted the scipt to do something if the person had already seen the drop down you would put it in here
    }
}); // end doc ready
