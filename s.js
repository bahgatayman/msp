const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.dropdown')

toggleBtn.onclick = function () {
  dropDown.classList.toggle('open')
  const isOpen = dropDown.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars' 
}





// تحديد كل الروابط داخل شريط التنقل
const navLinks = document.querySelectorAll(".links li a");

// الحصول على اسم الصفحة الحالية من URL
const currentPage = window.location.pathname.split("/").pop(); // استخراج اسم الملف الحالي

// مقارنة الروابط مع اسم الصفحة الحالية
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active"); // إضافة الفئة "active" للرابط المطابق
  }
});






// الموعد النهائي للعد التنازلي
const targetDate = new Date("2025-01-29T00:00:00").getTime(); // حدد التاريخ هنا

// تحديث العداد كل ثانية
const countdownInterval = setInterval(() => {
  const now = new Date().getTime(); // الوقت الحالي
  const timeLeft = targetDate - now; // الوقت المتبقي

  if (timeLeft >= 0) {
    // حساب الأيام، الساعات، الدقائق، والثواني
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // تحديث العناصر في الصفحة
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    // إذا انتهى الوقت
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown Finished!";
  }
}, 1000);
