// Redirect functions

function redirectBedford() {
  location.href = "http://search.google.com/local/writereview?placeid=ChIJ1RD77LuFdUgRylnyt50UJ-A";
}

function redirectBrydens() {
  location.href = "http://search.google.com/local/writereview?placeid=ChIJe9FEFU-FdUgRMafnZXLZj-8";
}



// Highlight current menu

var url = location.href.split("/");
var navLinks = document.getElementsByClassName("nav-menu-link");
var currentPage = url[url.length - 1];

for (let i = 0; i < navLinks.length; i++) {
  let lb = navLinks[i].href.split("/");
  if (lb[lb.length - 1] == currentPage) {
    navLinks[i].classList.add("nav-menu-active");
  }
}

