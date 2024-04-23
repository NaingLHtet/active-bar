const sideBar = document.querySelector(".sidebar");
const openSideBarBtn = document.querySelector(".fa-bars");
const closeSideBarBtn = document.querySelector(".fa-xmark");
const navLinksCon = document.querySelector(".navLink-con");

//nav link btns
const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const contactBtn = document.querySelector(".contact-btn");
const serviceBtn = document.querySelector(".service-btn");
const activeBar = document.querySelector(".active-bar");



window.onload = () => {
  const btnWidth = homeBtn.offsetWidth;
  const leftWidth = homeBtn.offsetLeft;
  
  activeBar.style.left = leftWidth + "px";
  activeBar.style.width = btnWidth + "px";
};


//open sidebar
openSideBarBtn.addEventListener("click", () => {
  sideBar.style.left = "0%";
  //hide activebar when sidebar is open
  activeBar.style.display = "none";
});
//close sidebar
closeSideBarBtn.addEventListener("click", () => {
  sideBar.style.left = "-100%";
  activeBar.style.display = "block";
});


//show the current page with a bar
homeBtn.addEventListener("click", () => {
  activebarWidthLength(homeBtn);
  activebarLeftLength(homeBtn);
});

aboutBtn.addEventListener("click", () => {
  activebarWidthLength(aboutBtn);
  activebarLeftLength(aboutBtn);
});

contactBtn.addEventListener("click", () => {
  activebarWidthLength(contactBtn);
  activebarLeftLength(contactBtn);
});

serviceBtn.addEventListener("click", () => {
  activebarWidthLength(serviceBtn);
  activebarLeftLength(serviceBtn);
});

// the clicked element's width
const activebarWidthLength = (width) => {
  const btnWidth = width.offsetWidth;
  
  activeBar.style.width = btnWidth + "px";
};
// the clicked element's left
const activebarLeftLength = (leftwidth) => {
  const leftWidth = leftwidth.offsetLeft;
  
  activeBar.style.left = leftWidth + "px";
};





