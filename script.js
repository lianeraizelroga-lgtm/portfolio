/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar * Tutorial used: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
}

/*For Sidebar Navigation, can be closed and open for lesson gallergy. Tutorial used: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp*/
function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "100px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*For Form Validation. Tutorial: galing sa video ni sir Erwin*/
function validateForm() {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const nameAlert = document.querySelector(".nameAlert");
    const emailAlert = document.querySelector(".emailAlert");
    const messageAlert = document.querySelector(".messageAlert");
    

    if (name === "") {
        nameAlert.innerHTML = "Name cannot be empty!";
        return false;
    } else {
        nameAlert.innerHTML = "";
    }

    if (email === "") {
        emailAlert.innerHTML = "Email cannot be empty!";
        return false;
    } else {
        emailAlert.innerHTML = "";
    }

    if (message === "") {
        messageAlert.innerHTML = "Message cannot be empty!";
        return false;
    } else {
        messageAlert.innerHTML = "";
    }

    if (name !== "" && email !== "" && message !== "") {
        alert("Message sent successfully! Thank you for contacting me.");
        return true;
    }
}

/*For Dark Mode Toggle Button.*/
function DarkMode() {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    const allElements = document.querySelectorAll("*");
    const button = document.querySelector("button");
   

    button.classList.toggle("dark-nav-footer");
    body.classList.toggle("dark-body");
    nav.classList.toggle("dark-nav-footer");
    footer.classList.toggle("dark-nav-footer");
    header.classList.toggle("dark-section");
    sections.forEach(section => section.classList.toggle("dark-section"));
    allElements.forEach(element => element.classList.toggle("light-text"));
}
