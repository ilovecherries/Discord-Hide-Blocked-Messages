// ==UserScript==
// @name        Discord Hide Blocked Messages
// @namespace   https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Hide-Blocked-Messages/master/script.user.js
// @homepageURL https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @supportURL  https://github.com/Multarix/Discord-Hide-Blocked-Messages/issues
// @grant       none
// @version     1.0
// @author      Anonymous
// @description 10/28/2020, 1:37:40 PM
// ==/UserScript==

function hideBlocked(){
   const blocked = document.querySelectorAll('[class^="groupStart"]'); // Find all "Blocked Messages"
	 const blockedReplies = document.querySelectorAll('[class^="repliedTextPlaceholder"]'); // Find all "Blocked Replies"
	 
   blocked.forEach(blokMsg => {
      if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message if it's not already hidden.
   });

   blockedReplies.forEach(blokMsg => {
      const msg = blokMsg.parentNode.parentNode.parentNode;
      if(msg.style.display !== "none") msg.style.display = "none"; // Hide the message if it's not already hidden
   })
};
setInterval(hideBlocked, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.
