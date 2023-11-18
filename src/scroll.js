window.addEventListener("scroll", function() {
    let navBar = document.querySelector('.navBar');
    let mainAplication = document.querySelector('mainAplication');
    
    navBar.classList.toggle('rolagem', document.getElementById('mainAplication').scrollTop > 0);
  });