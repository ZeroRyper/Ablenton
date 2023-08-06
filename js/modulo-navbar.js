const navBar = document.querySelector('.nav__principal');
let prevScrollPos=0;
function handleScroll() {

    const currentScrollPos = window.scrollY;
  if (currentScrollPos> prevScrollPos) {
    // Si el scroll va hacia abajo, añadir clase .sticky y quitar .show
    navBar.classList.add('sticky');
    navBar.classList.remove('show');


  } 
else if(currentScrollPos< prevScrollPos){
    // Si el scroll va hacia arriba, añadir clase .show y quitar .sticky
    navBar.classList.add('show');
    navBar.classList.remove('sticky');
  }
  else {
    navBar.classList.remove('show');
    navBar.classList.remove('sticky');

  }
  prevScrollPos =currentScrollPos;

} 
// Event listener para el evento 'scroll'
window.addEventListener('scroll', handleScroll);

///

function megaM(){
    let megamenu = document.getElementById('nav__more')
    let a_more = document.getElementById('more');
    let active=0
    // Add a click event listener to the button
    a_more.addEventListener('click', function() {
    // This function will be executed when the button is clicked
      if(active==0){
        megamenu.classList.add('show');
        a_more.textContent = 'More -';
        a_more.s
        active=1
      }else{
        megamenu.classList.remove('show');
        a_more.textContent = 'More +';
        active=0
      }
  });
}
megaM();
//
function menu(){
 let cont_menus=document.getElementById('container__menus')
 let a_menu = document.getElementById('menu');
 let nav_menu=document.getElementById('nav__menu');

  let active=0
  // Add a click event listener to the button
  a_menu.addEventListener('click', function() {
  // This function will be executed when the button is clicked
    if(active==0){
      cont_menus.classList.add('show');
      nav_menu.classList.add('show');
      a_menu.textContent = 'Menu \u25B2';
      active=1
    }else{
      cont_menus.classList.remove('show');
      nav_menu.classList.remove('show');
      a_menu.textContent = 'Menu \u25BC';

      active=0
    }
});
}
menu();
