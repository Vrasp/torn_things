// ==UserScript==
// @name         Torn Hospital - Hide Revives Off
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vrasp
// @match        https://www.torn.com/hospitalview.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideUnavailable() {
        let userList = document.querySelectorAll(".user-info-list-wrap>li");

        userList.forEach((user) => {
            let reviveElement = user.querySelector('.revive');

            if (reviveElement && reviveElement.className.includes('reviveNotAvailable')) {
                user.style = 'display:none;';
            }
        });
    }

    // save the real open
    const oldOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function() {
        // when an XHR object is opened, add a listener for its readystatechange events

        if (arguments[1].includes('hospitalview.php')) { setTimeout(hideUnavailable, 250); }

        // run the real `open`
        oldOpen.apply(this, arguments);
    }

    setTimeout(hideUnavailable, 250);
})();
