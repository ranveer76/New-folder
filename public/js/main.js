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
    nav[0].style.display = nav[0].style.display === 'flex' ? 'none' : 'flex';
    nav[1].style.display = nav[1].style.display === 'flex' ? 'none' : 'flex';
    menu.classList.toggle('burger-active');
});

window.addEventListener('resize', function(){
    if(window.innerWidth > 900){
        nav[0].style.display = 'flex';
        nav[1].style.display = 'flex';
        menu.classList.remove('burger-active');
    }
    else{
        nav[0].style.display = 'none';
        nav[1].style.display = 'none';
    }
});