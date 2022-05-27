// ==UserScript==
// @name         Torn UserList Hospitalized-only
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vrasp
// @match        https://www.torn.com/page.php?sid=UserList*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let userList = document.querySelectorAll(".userlist-wrapper .user-info-list-wrap>li");    

    userList.forEach((user) => {
        let icons = user.querySelector('.user-icons');

        let isHospitalized = icons.querySelector('li[title*="Hospital"]');

        if (isHospitalized) {
            let hospitalReason = isHospitalized.title.split('<br>')[1];

            if (!hospitalReason.includes('Hospitalized by')) {
                user.style = 'display:none;';
            }
        }
    });
})();
