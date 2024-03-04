var userpass = JSON.parse(localStorage.getItem("userpass")) || null;
localStorage.setItem("userpass", JSON.stringify(userpass));
var data = JSON.parse(localStorage.getItem("data")) || [{
    username: ["admin", "admin@gmail.com", "123456789"],
    password: "admin"
},
{
    username: ["user", "user@gmail.com", "987654321"],
    password: "user"
}];
function newacco() {
    document.getElementById('sign-in').innerText = 'Sign up';
    document.getElementById('sign-in').setAttribute('onclick', 'signup()');
    var ele = `
                    <label for="username">Username</label>
                    <input type="text" id="username" required>
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" required>
                    `;
    document.getElementById('sign-form').getElementsByTagName('button')[0].insertAdjacentHTML('beforebegin', ele);
    document.getElementsByClassName('sign-active')[0].classList.remove('sign-active');
    document.getElementById('newacco').classList.add('sign-active');
}
function signacco() {
    document.getElementById('sign-in').innerText = 'Sign in';
    document.getElementById('sign-in').setAttribute('onclick', 'login()');
    document.getElementsByClassName('sign-active')[0].classList.remove('sign-active');
    document.getElementById('signacco').classList.add('sign-active');
    for (var i = 0; i < 4; i++) {
        document.getElementById('sign-form').getElementsByTagName('input')[1].nextElementSibling.remove();
    }
}
async function signup() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userpass = JSON.parse(localStorage.getItem("userpass")) || [];
    userpass.push({ username: username, password: password });
    localStorage.setItem("userpass", JSON.stringify(userpass));
    data.push({ username: username, password: password });
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload();
}
function sign_out() {
    localStorage.setItem("userpass", null);
    window.location.reload();
}
function check_login() {
    if (userpass) {
        document.getElementById("login").innerText = "Sign out";
        document.getElementById("login").setAttribute("onclick", "sign_out()");
    }
    else {
        document.getElementById("login").innerText = "Sign in";
        document.getElementById("login").setAttribute("onclick", "sign_page()");
    }
}
check_login();
async function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userpass = await data;
    for (var i = 0; i < userpass.length; i++) {
        // console.log(username1.includes(username), password === userpass[i].password);
        if (userpass[i].username.includes(username) && password === userpass[i].password) {
            localStorage.setItem("userpass", JSON.stringify(userpass[i]));
            window.location.reload();
            return;
        }
    }
    alert("Invalid username or password");
}
function forgot_pass() {
    alert('Please contact the admin');
}
function sign_page() {
    document.getElementsByClassName('sign-container')[0].style.display = 'block';
    document.body.style.position = 'fixed';
    if (window.innerWidth < 771) {
        document.getElementsByClassName('head')[0].style.display = 'none';
    }
}
document.getElementsByClassName('cross')[0].addEventListener('click', function () {
    document.getElementsByClassName('sign-container')[0].style.display = 'none';
    document.body.style.position = 'static';
    if (window.innerWidth < 771) {
        document.getElementsByClassName('head')[0].style.display = 'flex';
    }
});

var menu = document.getElementsByClassName('burger')[0];
var nav = document.getElementsByClassName('head')[0].getElementsByTagName('ul');

menu.addEventListener('click', function () {
    nav[0].style.display = nav[0].style.display === 'flex' ? 'none' : 'flex';
    nav[1].style.display = nav[1].style.display === 'flex' ? 'none' : 'flex';
    menu.classList.toggle('burger-active');
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
        nav[0].style.display = 'flex';
        nav[1].style.display = 'flex';
        menu.classList.remove('burger-active');
    }
    else {
        nav[0].style.display = 'none';
        nav[1].style.display = 'none';
    }
});

var slideIndex = 0; // Variable to store the current slide index

function left_slide() {
    var listt = document.getElementsByClassName('list')[0];
    var width = 345;
    
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = Math.floor(listt.scrollWidth / width) - 1;
    }

    listt.scroll({
        left: width * slideIndex,
        behavior: 'smooth'
    });
}

function right_slide() {
    var listt = document.getElementsByClassName('list')[0];
    var width = 345;
    var maxSlides = Math.floor(listt.scrollWidth / width);

    if (slideIndex < maxSlides - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }

    listt.scroll({
        left: width * slideIndex,
        behavior: 'smooth'
    });
}
