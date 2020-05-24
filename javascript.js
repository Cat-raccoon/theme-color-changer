


// var theme = document.getElementsByClassName("classic-theme");
// var themeButtone = document.getElementById("theme-buttone");

//     themeButtone.onclick = function(){

//         if(theme.className == "dark-theme"){

//             theme.className = "classic-theme";
//             themeButtone.innerHTML = "Dark Theme";
            

//         } else{

//             theme.className = "dark-theme";
//             themeButtone.innerHTML = "Classic Theme";

//         }

//     };

var theme = document.getElementsByClassName("theme");
var themeButtone = document.getElementById("theme-buttone");

    themeButtone.onclick = function(){

        var className = Array.from(theme[0].classList);

        if (className.includes("dark")){
            toggleTheme( "dark","classic")

            themeButtone.innerHTML = "Dark Theme";

        } else if (className.includes("classic")) {
            toggleTheme("classic", "dark")

            themeButtone.innerHTML = "Classic Theme";
        }
    };

    function toggleTheme(removeTheme, addTheme) {
        for (var i = 0; i < theme.length; i++) {

            theme[i].classList.remove(removeTheme);
            theme[i].classList.add(addTheme);
        }
    }