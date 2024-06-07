// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("RedResult").style.display = "none";
    document.getElementById("GreenResult").style.display = "none";
    document.getElementById("BlueResult").style.display = "none";
    document.getElementById("OrangeResult").style.display = "none";
    document.getElementById("YellowResult").style.display = "none";
    document.getElementById("PurpleResult").style.display = "none";
    document.getElementById("PinkResult").style.display = "none";
}

function seeResult() {
    var Red = 0;
    var Green = 0;
    var Blue = 0;
    var Orange = 0;
    var Yellow = 0;
    var Purple = 0;
    var Pink = 0;

    if (document.getElementById("warm").checked) {
        Red += .5;
        Orange += .5;
        Yellow += .5;
        Pink += .5;
    } else if (document.getElementById("cool").checked) {
        Green += .5;
        Blue += .5;
        Purple += .5;
    } else {
        Red += 0;
    }

    if (document.getElementById("everyone ever").checked) {
        Blue += 1;
        Purple += 1;
    } else if (document.getElementById("eh").checked) {
        Green += 1;
        Red += 1;
    } else {
        Yellow += 2;
        Orange += 2;
        Pink += 1;
    }

    if (document.getElementById("everywhere").checked) {
        Green += 1;
    } else if (document.getElementById("nope").checked) {
        Pink += 1;
        Purple += 1;
        Blue += 1;
    } else {
        Orange += 1;
        Yellow += 1;
        Red += 1;
    }
    
    if (document.getElementById("yeah").checked) {
        Purple += 1;
        Pink += 1;
        Orange += 1;
    } else if (document.getElementById("nah").checked) {
        Green += 1;
        Blue += 1;
        Yellow += 1;
    } else {
        Red += 1;
    }
    
    if (document.getElementById("yes").checked) {
        Purple += 1;
        Green += 1;
        Orange -= 8;
        Red -= 8;
        Pink -= 8;
        Orange -= 8;
        Yellow -= 8;
        Blue += 1;
    } else if (document.getElementById("no").checked) {
        Red += 1;
        Pink += 1;
        Orange += 1;
        Yellow += 1;
        Green -= 8;
    } else {
        Blue += 1;
        Purple += 1;
    }

    if (document.getElementById("boy").checked) {
        Blue += 3;
        Red += 1;
        Orange += 1;
        Green += 1;
    } else if (document.getElementById("girl").checked) {
        Pink += 3;
        Purple += 1;
        Yellow += 1;
    } else {
        Red += 0;
    }

    if (document.getElementById("yea").checked) {
        Orange += 1;
    } else if (document.getElementById("naha").checked) {
        Green += 1;
        Blue += 1;
        Pink += 1;
    } else if (document.getElementById("ish").checked) {
        Yellow += 1;
        Red += 1;
    } else {
        Purple += 1;

    }

    resetResult();

    if (Red > Orange && Red > Yellow && Red > Green && Red > Blue && Red > Purple && Red > Pink) {
        document.getElementById("RedResult").style.display = "block";
    } else if (Green > Red && Green > Orange && Green > Purple && Green > Yellow && Green > Blue && Green> Pink) {
        document.getElementById("GreenResult").style.display = "block";
    } else if (Blue > Red && Blue > Green && Blue > Orange && Blue > Purple && Blue > Yellow && Blue > Pink) {
        document.getElementById("BlueResult").style.display = "block";
    } else if (Orange > Red && Orange > Green && Orange > Purple && Orange > Yellow && Orange > Green && Orange > Pink) {
        document.getElementById("OrangeResult").style.display = "block";
    } else if (Yellow > Red && Yellow > Green && Yellow > Orange && Yellow > Purple && Yellow > Blue && Yellow > Pink) {
        document.getElementById("YellowResult").style.display = "block";
    } else if (Purple > Red && Purple > Green && Purple > Orange && Purple > Yellow && Purple > Blue && Purple > Pink) {
        document.getElementById("PurpleResult").style.display = "block";
    } else {
        document.getElementById("PinkResult").style.display = "block";
    }
}
