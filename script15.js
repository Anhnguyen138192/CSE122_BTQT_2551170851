const expressionEl = document.getElementById('expression'); 
const resultEl = document.getElementById('result');         
let expr = '';     
let done = false;  

function tinh(s) {
    s = s.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/\b0+(?=\d)/g, '');
    try {
        const v = Function('return ' + s)();

        return isFinite(v) ? String(+v.toFixed(10)) : 'Lỗi';
    } catch {
        return 'Lỗi';
    }
}

function hienThi() {
    expressionEl.textContent = expr.replace(/([+−×÷%])/g, ' $1 ');
}

function nhap(c) {
    if (done) clearAll
    expr += c;
    hienThi();
}

function clearAll() {
    expr = '';
    done = false;
    expressionEl.textContent = '';
    resultEl.textContent = '0';
}

function pressNumber(n) { nhap(n); }

function pressDot() { nhap('.'); }

function pressOperator(op) {
    if (done) { expr = resultEl.textContent.replace('-', '−'); done = false; }

    if (expr === '') return; 

    if (/[+−×÷%]$/.test(expr)) expr = expr.slice(0, -1);

    expr += op;
    hienThi();
}
function pressParen() {
    const mo = (expr.match(/\(/g) || []).length;   
    const dong = (expr.match(/\)/g) || []).length; 
    nhap(/[0-9)]$/.test(expr) && mo > dong ? ')' : '(');
}

function calculate() {
    if (expr === '' || done) return;
    resultEl.textContent = tinh(expr);   
    expressionEl.textContent += ' =';    
    done = true;
}
