var goc = document.documentElement;
var nut = document.getElementById('nutGat');
var ghiChu = document.getElementById('ghiChu');

function datTheme(toi) {
  goc.classList.toggle('toi', toi);
  nut.setAttribute('aria-checked', toi ? 'true' : 'false');
  ghiChu.textContent = 'Đây là giao diện ở chế độ ' + (toi ? 'Tối' : 'Sáng') + ' (đang bật).';

  try {
    localStorage.setItem('theme', toi ? 'toi' : 'sang');
  } catch (e) {}
}

nut.addEventListener('click', function () {
  datTheme(!goc.classList.contains('toi'));
});

try {
  datTheme(localStorage.getItem('theme') === 'toi');
} catch (e) {}


