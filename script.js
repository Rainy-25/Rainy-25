let password = document.getElementById('password');
let total = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "?@#$^&*~$/+<[]{}-_()>!";

let allchar = uppercase + lowercase + number + symbol;

function createpw() {
    let pw = "";
    pw += uppercase[Math.floor(Math.random() * uppercase.length)];
    pw += lowercase[Math.floor(Math.random() * lowercase.length)];
    pw += number[Math.floor(Math.random() * number.length)];
    pw += symbol[Math.floor(Math.random() * symbol.length)];
  
    while (total > pw.length) {
        pw += allchar[Math.floor(Math.random() * allchar.length)];
    }
    password.value = pw;
}

function copyfun() {
    password.select();
    document.execCommand('copy'); 
}
