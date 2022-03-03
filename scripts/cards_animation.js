function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
function hoverElement(el) {
    el.childNodes[1].childNodes[1].childNodes[1].classList.add("card_servicos_img_container_hover")
}
function leaveElement(el) {
    el.childNodes[1].childNodes[1].childNodes[1].classList.remove("card_servicos_img_container_hover")
}