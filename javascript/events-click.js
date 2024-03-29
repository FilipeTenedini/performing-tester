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
(() => {
    const urlHaveCouponId = window.location.href.includes('coupon-id');
    if (urlHaveCouponId) {
        const modal = document.querySelector('.modal-area--backdrop');
        modal.classList.remove('non-display');
        blockScroll();
    }
})();
function removeModal() {
    const modal = document.querySelector('.modal-area--backdrop');
    document.body.classList.remove('blocking-scroll');
    modal.parentNode.removeChild(modal);
}
function stopPropagation(event) {
    event.stopPropagation();
}