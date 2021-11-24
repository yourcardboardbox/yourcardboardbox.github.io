document.onload = onLoad();
            
function onLoad() {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else if (savedTheme == "light") {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

    document.addEventListener("DOMContentLoaded", function(event) {
    var themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.onclick = function() {    
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", switchToTheme); 

        localStorage.setItem("theme", switchToTheme);
    }
 });