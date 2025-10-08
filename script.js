// ============================
// Hamburger Menu Toggle
// ============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Animate hamburger
  navLinks.classList.toggle('active');  // Show/Hide menu
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ============================
// Scroll Fade-In Animations
// ============================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ============================
// Typing Effect for Home Section
// ============================
const typingText = document.getElementById('typing-text');
const textArray = ["Siddharth Wani", "Software Test Engineer", "Automation", "Game Testing", "API Testing"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 120;
let erasingSpeed = 60;
let delayBetween = 2000;

function type() {
  typingText.textContent = textArray[textIndex].substring(0, charIndex + 1);
  charIndex++;
  if (charIndex < textArray[textIndex].length) {
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
  charIndex--;
  if (charIndex > 0) {
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed + 500);
  }
}

// Start typing on DOM load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv');
    const modal = document.getElementById('downloadModal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    downloadBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex'; // show modal
    });

    yesBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = downloadBtn.href;
        link.download = downloadBtn.href.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        modal.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal on clicking outside the content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  // Create popup dynamically
  const popupOverlay = document.createElement("div");
  popupOverlay.className = "popup-overlay";
  document.body.appendChild(popupOverlay);

  popupOverlay.innerHTML = `
    <div class="popup" id="popupBox">
      <h3 id="popupTitle">Confirm Submission</h3>
      <p id="popupMessage">Do you want to send this message to Siddharth?</p>
      <div class="popup-buttons">
        <button class="btn-confirm" id="popupYes">Yes</button>
        <button class="btn-cancel" id="popupNo">No</button>
      </div>
    </div>
  `;

  const popupBox = document.getElementById("popupBox");
  const popupTitle = document.getElementById("popupTitle");
  const popupMessage = document.getElementById("popupMessage");
  const popupYes = document.getElementById("popupYes");
  const popupNo = document.getElementById("popupNo");

  const showPopup = (title, message, isSuccess = false) => {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popupBox.classList.toggle("success", isSuccess);
    popupOverlay.style.display = "flex";
    if (isSuccess) popupNo.style.display = "none";
    else popupNo.style.display = "inline-block";
  };

  const hidePopup = () => {
    popupOverlay.style.display = "none";
    popupBox.classList.remove("success");
  };

  popupYes.addEventListener("click", () => {
    if (popupBox.classList.contains("success")) {
      hidePopup();
      return;
    }
    // Show success message
    showPopup("Success 🎉", "Your message has been successfully submitted! Thank you for reaching out.", true);
    form.reset();
  });

  popupNo.addEventListener("click", hidePopup);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showPopup("Incomplete Form ⚠️", "Please fill in all fields before submitting.");
      return;
    }

    showPopup("Confirm Submission 📨", `Do you want to send this message to Siddharth?\n\nName: ${name}\nEmail: ${email}`);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = [
    {
      iconSelector: ".bxl-gmail",
      mobileLink: "mailto:wanisiddharthb@gmail.com?subject=Hello%20Siddharth&body=I%20want%20to%20connect%20with%20you",
      desktopLink: "https://mail.google.com/mail/?view=cm&fs=1&to=wanisiddharthb@gmail.com"
    },
    {
      iconSelector: ".bxl-whatsapp",
      mobileLink: "whatsapp://send?phone=918767096245",
      desktopLink: "https://wa.me/918767096245"
    },
    {
      iconSelector: ".bxl-telegram",
      mobileLink: "tg://resolve?domain=wanisiddharthb",
      desktopLink: "https://t.me/wanisiddharthb"
    },
    {
      iconSelector: ".bxl-linkedin-square",
      mobileLink: "linkedin://profile/siddharthwani",
      desktopLink: "https://www.linkedin.com/in/siddharthwani/"
    },
    {
      iconSelector: ".bxl-instagram",
      mobileLink: "instagram://user?username=siddharthbwani",
      desktopLink: "https://www.instagram.com/siddharthbwani"
    }
  ];

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  socialLinks.forEach(item => {
    const icon = document.querySelector(item.iconSelector);
    if(icon) {
      icon.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        const link = isMobile ? item.mobileLink : item.desktopLink;
        if(isMobile) {
          // Mobile: open app in same tab
          window.location.href = link;
        } else {
          // Desktop: open web version in new tab
          window.open(link, "_blank");
        }
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("emailLink");
  const emailAddress = "wanisiddharthb@gmail.com";
  const subject = "Hello Siddharth";
  const body = "I want to connect with you";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (isMobile) {
      // Mobile: Open default mail app
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // Desktop: Open Gmail web in new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    }
  });
});

