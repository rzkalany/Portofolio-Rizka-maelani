const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// window.addEventListener('scroll', function() {
//   var footerForm = document.getElementById('footer-email-form');
//   var footerFormPosition = footerForm.getBoundingClientRect().top;
//   var windowHeight = window.innerHeight;

//   // Jika bagian atas formulir sudah berada di bawah layar, tambahkan kelas 'show'
//   if (footerFormPosition < windowHeight) {
//     footerForm.classList.add('show');
//   }
// });

window.addEventListener('scroll', function() {
  var footerForm = document.getElementById('footer-email-form');
  var footerFormPosition = footerForm.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  // Jika bagian atas formulir sudah berada di bawah layar, tambahkan kelas 'show'
  if (footerFormPosition < windowHeight) {
    footerForm.classList.add('show');
  } else {
    footerForm.classList.remove('show'); // Jika tidak, hapus kelas 'show'
  }
});



// // ====== untuk alamat email ========== //
const contactForm = document.getElementById('email-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_8a9b4sn', 'template_n94ctsg', '#contact-form', 'XLIUbTAeLZKsIfFxq')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
// document.getElementById('email-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting

//   // Get the email input value
//   var email = document.getElementById('email-input').value;

//   // Validate the email address
//   if(validateEmail(email)) {
//     // Email is valid, you can process it further here
//     alert('Email submitted successfully: ' + email);
//     // Reset the form
//     document.getElementById('email-form').reset();
//   } else {
//     // Email is not valid, display an error message
//     alert('Please enter a valid email address');
//   }
// });

// // Function to validate email address
// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
