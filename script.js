// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var cont = document.querySelector("#elemcont")
var fixedimg = document.querySelector("#fixedimg")
cont.addEventListener("mouseenter", function(){
    fixedimg.style.display = "block"
})
cont.addEventListener("mouseleave", function(){
    fixedimg.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var img = e.getAttribute("data-img")
        fixedimg.style.backgroundImage = `url(${img})`
    })
})