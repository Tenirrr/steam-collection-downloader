// ==UserScript==
// @name         Steam Collection Download List Generator
// @namespace    http://tampermonkey.net/
// @version      1.0.0.0
// @description  To make the world easier ❤
// @author       Tenir
// @match        https://steamcommunity.com/sharedfiles/filedetails/?id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @grant        GM_setClipboard
// ==/UserScript==

function copyScript(appID, itemIDs) {
    console.log(appID);
}

$(function() {
    const numRe = /[0-9]+/;
    const appRe = /https:\/\/steamcommunity\.com\/app\/[0-9]+/;
    var appID = 0;
    var itemIDs = [];
    var script = "";

    $(".breadcrumbs").find("a").each((index, item) => {
        if (item.href.match(appRe)) appID = item.href.match(numRe)[0];
    })

    $(".collectionItem").each((index, item) => {
        script += `workshop_download_item ${appID} ${item.id.match(numRe)[0]} \n`;
    })

    $(".collectionChildren").prepend("<a id='scriptDownloadUrl' download='steamcmd_script.txt' target='_blank'>Download Script</a>  <a id='scriptCopyButton'>Copy Script</a><br><br>");

    $("#scriptDownloadUrl").attr('href', `data:,${script}`);

    $("#scriptCopyButton").on( "click", function() {
        navigator.clipboard.writeText(script)
    } );
});