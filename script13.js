var THU_MUC = "Anh/Bai13/";

// Đổi một số (0–59 hoặc 0–23) thành 2 thẻ ảnh: hàng chục + hàng đơn vị
function soThanhAnh(n) {
  var chuc = Math.floor(n / 10);
  var donvi = n % 10;
  return '<img src="' + THU_MUC + '0' + chuc + '.gif" alt="' + chuc + '">' +
         '<img src="' + THU_MUC + '0' + donvi + '.gif" alt="' + donvi + '">';
}

function haiCham() {
  return '<img src="' + THU_MUC + 'haicham.gif" alt=":">';
}

function loiChao(gio) {
  if (gio >= 5 && gio < 11) return "Chào buổi sáng";
  if (gio >= 11 && gio < 13) return "Chào buổi trưa";
  if (gio >= 13 && gio < 18) return "Chào buổi chiều";
  if (gio >= 18 && gio < 22) return "Chào buổi tối";
  return "Chúc ngủ ngon";
}

function capNhat() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  document.getElementById("dongho").innerHTML =
    soThanhAnh(h) + haiCham() + soThanhAnh(m) + haiCham() + soThanhAnh(s);
  document.getElementById("loichao").textContent = loiChao(h);
}

capNhat();                   // hiển thị ngay, không chờ 1 giây đầu
setInterval(capNhat, 1000);  // cập nhật mỗi giây

