$(document).ready(function() {
    $('.coming-soon__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false

    });

    $('.most-popular__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        verticalSwiping: true,
        vertical: true
    });
});

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("slide");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("btns-holder");
var btns = btnContainer.getElementsByClassName("coming-soon__filter__btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var btnContainer = document.getElementById("btns-holder-row");
var btns = btnContainer.getElementsByClassName("most-popular__filter__btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var circleArray = document.querySelectorAll('.progress-ring__circle');
circleArray.forEach(function(item) {
    var radius = item.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;
    item.style.strokeDasharray = `${circumference} ${circumference}`;
    item.style.strokeDashoffset = circumference;
    
    function setProgress(percent) {
        var offset = circumference - percent / 10 * circumference;
        item.style.strokeDashoffset = offset;
    }

    var rating = item.parentNode.parentNode;
    setProgress(rating.dataset.grade)
})