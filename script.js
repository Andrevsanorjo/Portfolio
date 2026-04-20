// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Smooth scroll
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Skill bars
window.addEventListener("load", () => {
  document.querySelectorAll(".bar span").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

// Typing animation
const text = ["Web Developer", "Designer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Contact form demo
function sendMessage(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Message sent! (demo)";
}

emailjs.init("service_pvvs25m");

function sendMessage(e) {
  e.preventDefault();

  emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
    from_name: document.querySelector("input").value,
    message: document.querySelector("textarea").value
  }).then(() => {
    document.getElementById("msg").textContent = "Message sent!";
  });
}
