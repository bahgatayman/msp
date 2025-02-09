function showPopup(popupId) {
    // إغلاق جميع النوافذ المفتوحة
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });

    // فتح النافذة المطلوبة
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    // إضافة حدث الإغلاق عند الضغط خارج المحتوى
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup(popupId);
        }
    });
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
