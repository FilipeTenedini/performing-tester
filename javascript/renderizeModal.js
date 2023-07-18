function blockScroll() {
    document.body.classList.add('blocking-scroll');
}
function renderModal() {
    const body = document.querySelector('body');
    body.innerHTML+= `
    <div class="modal-area--backdrop" onclick="removeModal()">
        <div class="modal-area">
            <div class="modal-header">

            </div>
            <div class="modal-content">

            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
    `;
    blockScroll();
}
function removeModal() {
    const modal = document.querySelector('.modal-area--backdrop');
    document.body.classList.remove('blocking-scroll');
    modal.parentNode.removeChild(modal);
}