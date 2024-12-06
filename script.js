let menu = document.querySelector('#menu-icon');
let navbar2 = document.querySelector('.navbar');

menu.onclick = () => {
    console.log('bosildi')
    menu.classList.toggle('bx-x');
    navbar2.classList.toggle('active');
}

window.onscroll = () => {
    console.log('salom')
    menu.classList.remove('bx-x');
    navbar2.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

