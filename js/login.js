document.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.getElementById('sign-in')
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const getByLogin = async (email, password) => {
            const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await res.json()
            if (data.access_token) {
                authorization(data.access_token);
                alert("Đăng nhập thành công")
                return;
            }
            else {
                alert("Đăng nhập thất bại");
                return;
            }
    }
        getByLogin(email, password)
        const authorization = async (token) => {
        const res = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        const accessToken = await res.json();
        localStorage.setItem('user', JSON.stringify(accessToken))
        window.location.href = '/index.html'
    }


})
})
document.addEventListener('DOMContentLoaded', () => {
    const welcomeElement = document.getElementById('welcome');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.name) {
        welcomeElement.innerHTML = user.name;
    } else {
        return
    }
});
