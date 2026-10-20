var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setState(id, error) {
  var input = document.getElementById(id);
  var msg = document.getElementById(id + "-msg");
  if (error) {
    input.className = "invalid";
    msg.className = "msg error";
    msg.textContent = "✗ " + error;
    return false;
  }
  input.className = "valid";
  msg.className = "msg ok";
  msg.textContent = "✓ Hợp lệ";
  return true;
}

function checkName() {
  var name = document.getElementById("name").value.trim();
  return setState("name", name === "" ? "Họ tên không được để trống" : "");
}

function checkEmail() {
  var email = document.getElementById("email").value.trim();
  var err = "";
  if (email === "") {
    err = "Email không được để trống";
  } else if (email.indexOf("@") === -1) {
    err = "Email không hợp lệ (thiếu dấu @)";
  } else if (!emailRegex.test(email)) {
    err = "Email không hợp lệ (thiếu tên miền)";
  }
  return setState("email", err);
}

function checkPassword() {
  var password = document.getElementById("password").value;
  return setState("password", password.length < 6 ? "Mật khẩu phải có ít nhất 6 ký tự" : "");
}

function checkConfirm() {
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var err = "";
  if (confirm === "") err = "Vui lòng xác nhận mật khẩu";
  else if (confirm !== password) err = "Mật khẩu xác nhận không khớp";
  return setState("confirm", err);
}

function validate() {
  var okName = checkName();
  var okEmail = checkEmail();
  var okPass = checkPassword();
  var okConfirm = checkConfirm();
  return okName && okEmail && okPass && okConfirm;
}

document.getElementById("name").addEventListener("input", checkName);
document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("password").addEventListener("input", function () {
  checkPassword();
   if (document.getElementById("confirm").value !== "") checkConfirm();
});
document.getElementById("confirm").addEventListener("input", checkConfirm);

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();                 

  var success = document.getElementById("success");
  success.textContent = "";

  if (validate()) {
    success.textContent = "✓ Đăng ký thành công!";
  }
});
