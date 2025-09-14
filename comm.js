function showPopup(popupId) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });

    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup(popupId);
        }
    });
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

