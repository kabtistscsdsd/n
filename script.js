function checkCode() {
    const codeInput = document.getElementById("code-input");
    const code = "11"; // تم تغيير الرمز إلى 11
    if (codeInput.value === code) {
        document.getElementById("popup").style.display = "none"; // إغلاق نافذة الرمز
        document.getElementById("container").style.display = "block"; // إظهار المحتوى
    } else {
        alert("الرمز غير صحيح! حاول مرة أخرى.");
    }
}
