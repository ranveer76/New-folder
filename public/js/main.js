function sign_page(){
    document.getElementsByClassName('sign-container')[0].style.display = 'block';
}
document.getElementsByClassName('cross')[0].addEventListener('click', function(){
    document.getElementsByClassName('sign-container')[0].style.display = 'none';
});