function toggleDropdownMenu(navItem) {
    const dropdownMenuClasses = navItem.querySelector('.dropdown-menu').classList;
    if (dropdownMenuClasses.contains('non-display')) {
        dropdownMenuClasses.remove('non-display');
    } else {
        dropdownMenuClasses.add('non-display');
    }
}
function blockScroll() {
    document.body.classList.add('blocking-scroll');
}
function showModal() {
    window.open('http://127.0.0.1:5500/index.html#', '_blank');
    const modal = document.querySelector('.modal-area--backdrop');
    modal.remove('non-display');
    blockScroll();
}
function removeModal() {
    const modal = document.querySelector('.modal-area--backdrop');
    document.body.classList.remove('blocking-scroll');
    modal.parentNode.removeChild(modal);
}
function stopPropagation(event) {
    event.stopPropagation();
}