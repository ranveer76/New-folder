function sign_page(){
    document.getElementsByClassName('sign-container')[0].style.display = 'block';
    if(window.innerWidth < 771){
        document.getElementsByClassName('head')[0].style.display = 'none';
    }
}
document.getElementsByClassName('cross')[0].addEventListener('click', function(){
    document.getElementsByClassName('sign-container')[0].style.display = 'none';
    if(window.innerWidth < 771){
        document.getElementsByClassName('head')[0].style.display = 'flex';
    }
});

var menu = document.getElementsByClassName('burger')[0];
var nav = document.getElementsByClassName('head')[0].getElementsByTagName('ul');

menu.addEventListener('click', function(){
    if(nav[0].style.display == 'flex'){
        nav[0].style.display = 'none';
        nav[1].style.display = 'none';
    }else{
        nav[0].style.display = 'flex';
        nav[1].style.display = 'flex';
    } menu.classList.toggle('burger-active');
});