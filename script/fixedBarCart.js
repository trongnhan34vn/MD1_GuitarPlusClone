let checkCart = document.getElementById('check-cart');
let checkPos = checkCart.getBoundingClientRect().height;
console.log(checkPos)
window.addEventListener("scroll", function (e) {
    let scrollPos = window.scrollY;
    console.log(scrollPos,checkPos)
    if(scrollPos >= checkPos*2 ) {
        checkCart.style.transform = "translateY(100px)";
    } else {
        checkCart.style.transform = "translateY(0)";
        checkCart.style.transition = "transform 0.3s"
    }
})

