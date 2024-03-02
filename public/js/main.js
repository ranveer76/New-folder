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