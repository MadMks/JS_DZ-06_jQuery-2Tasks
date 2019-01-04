function showPopup() {
    var btnShow = document.getElementsByClassName("popup")[0];

    btnShow.classList.add("popup_active");
}

function hidePopup() {
    var btnShow = document.getElementsByClassName("popup")[0];

    btnShow.classList.remove("popup_active");
}