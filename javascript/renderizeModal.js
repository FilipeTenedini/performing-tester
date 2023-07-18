function renderModal() {
    document.querySelector('body').innerHTML+= `
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
}
function removeModal() {
    const modal = document.querySelector('.modal-area--backdrop');
    modal.parentNode.removeChild(modal);
}