const icon = document.querySelector('.icon1');
const toggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener("click", navigationLink);

function navigationLink(){
  if(icon.classList == "icon1"){
    icon.classList.remove("icon1");
    navMenu.classList.add('show');
    document.body.style.overflow = "hidden";
     icon.classList.add("icon2");
  }
  else if(icon.classList == "icon2"){
    icon.classList.remove("icon2");
    navMenu.classList.remove('show');
    document.body.style.overflow = "auto";
    icon.classList.add("icon1");
  }
}
