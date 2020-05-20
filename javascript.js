


var theme = document.getElementsByClassName("classic-theme");
var themeButtone = document.getElementById("theme-buttone");

    themeButtone.onclick = function(){

        if(theme.className == "dark-theme"){

            theme.className = "classic-theme";
            themeButtone.innerHTML = "Dark Theme";
            

        } else{

            theme.className = "dark-theme";
            themeButtone.innerHTML = "Classic Theme";

        }

    };