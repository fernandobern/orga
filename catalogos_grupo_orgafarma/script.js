document.addEventListener("DOMContentLoaded", function() {
    const modalButton = document.querySelector(".btn_modal");
    const modalButtonNovafarma = document.querySelector(".btn_modal_novafarma");
    const modalButtonhb = document.querySelector(".btn_modal_hb");

    const modalDialog = document.querySelector(".modal_dialog");
    const modalDialogNovafarma = document.querySelector(".modal_dialog_novafarma");
    const modalDialoghb = document.querySelector(".modal_dialog_novafarma");

    const closeModalButton = document.querySelector(".close_modal");
    const closeModalButtonNovafarma = document.querySelector(".close_modal_novafarma");
    const closeModalButtonhb = document.querySelector(".close_modal_novafarma");

    modalButton.addEventListener("click", function() {
        modalDialog.showModal();
    });

    closeModalButton.addEventListener("click", function() {
        modalDialog.close();
    });


    modalButtonNovafarma.addEventListener("click", function() {
        modalDialog.showModal();
    });

    closeModalButtonNovafarma.addEventListener("click", function() {
        modalDialog.close();
    });

    modalButtonhb.addEventListener("click", function() {
        modalDialog.showModal();
    });

    closeModalButtonhb.addEventListener("click", function() {
        modalDialog.close();
    });
});