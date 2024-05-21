function changTypePass() {
    let password = document.getElementById('password');
    password.type = password.type == 'text' ? 'password' : 'text';
}
function changTypeConPass() {
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm-password');
    password.type = password.type == 'text' ? 'password' : 'text';
    confirm_password.type = confirm_password.type == 'text' ? 'password' : 'text';
}