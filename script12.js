var tenThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

function gioiHan() {
    var oNgay = document.getElementById("inNgay");
    var oThang = document.getElementById("inThang");
    var oNam = document.getElementById("inNam");

    var nam = parseInt(oNam.value, 10);
    var thang = parseInt(oThang.value, 10);
    var ngay = parseInt(oNgay.value, 10);

    if (!isNaN(nam)) {
        nam = Math.min(Math.max(nam, 1), 9999);
        oNam.value = nam;
    }
    if (!isNaN(thang)) {
        thang = Math.min(Math.max(thang, 1), 12);
        oThang.value = thang;
    }

    var maxNgay = 31;
    if (!isNaN(thang)) {
        var d = new Date(2000, 0, 1);
        d.setFullYear(isNaN(nam) ? 2000 : nam, thang, 0);
        maxNgay = d.getDate();
    }
    oNgay.max = maxNgay;

    if (!isNaN(ngay)) {
        oNgay.value = Math.min(Math.max(ngay, 1), maxNgay);
    }
}

function inLich() {
    gioiHan();
    var ngay = parseInt(document.getElementById("inNgay").value, 10);
    var thang = parseInt(document.getElementById("inThang").value, 10);
    var nam = parseInt(document.getElementById("inNam").value, 10);

    var d = new Date(2000, 0, 1);
    d.setFullYear(nam, thang - 1, ngay);

    if (d.getFullYear() !== nam || d.getMonth() !== thang - 1 || d.getDate() !== ngay) {
        alert("Ngày " + ngay + "/" + thang + "/" + nam + " không tồn tại!");
        return;
    }

    document.getElementById("nam").textContent = nam;
    document.getElementById("thang").textContent = "Tháng " + (d.getMonth() + 1);
    document.getElementById("soNgay").textContent = d.getDate();
    document.getElementById("thu").textContent = tenThu[d.getDay()];

}

document.getElementById("nutIn").addEventListener("click", inLich);

["inNgay", "inThang", "inNam"].forEach(function (id) {
    document.getElementById(id).addEventListener("change", gioiHan);
});

inLich();

