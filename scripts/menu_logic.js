function open_hide_menu() {
    document.getElementsByClassName('menu')[0].style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    window.scrollTo(0, 0);
};
function hide_open_menu() {
    document.getElementsByClassName('menu')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
};