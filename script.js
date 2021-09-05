let social = document.getElementsByClassName("social-share")[0];

social.classList.add('hideP')

document.getElementsByClassName("btn-share")[0].addEventListener('click', function(event){
    social.classList.toggle('hideP');
});