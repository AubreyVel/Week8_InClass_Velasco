"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Aubrey Velasco
      Date:   5-5-2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {

 let codeValue = document.getElementById("postalCode");
 let countryValue = document.getElementById("country");

 document.getElementById("place").innerText = "";
 document.getElementById("region").innerText = "";

 fetch("http://api.zippopotam.us/"+countryValue+"/"+codeValue)
 .then()

}



