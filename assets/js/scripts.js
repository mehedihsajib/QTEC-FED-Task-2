const hamburger = document.getElementById("hamburger");

const sidebarItems = document.getElementById("sidebarItems");

hamburger.addEventListener("click", function () {
    sidebarItems.addClass("hide");
});
