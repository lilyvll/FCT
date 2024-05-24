// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("This does nothing, congrats")
}
function displayPurple() {
    document.getElementById("purpleContent").style.display = "block";
    document.getElementById("pinkContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayPink() {
    document.getElementById("purpleContent").style.display = "none";
    document.getElementById("pinkContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function pinkBackground() {
    document.body.style.backgroundColor = "#f1828e";
    console.log(document)
}