// ==========================================================================
// EDIT YOUR WEBSITE HERE (CONFIGURATION OBJECT)
// ==========================================================================

const siteConfig = {
  // Website Mode / Identity Settings
  mode: "friendship", // Options: "introduction", "friendship", "romance", "birthday", "appreciation", "portfolio"
  senderName: "Ukasha Sani Zauro",
  recipientName: "Friend",
  theme: "dark", // "dark" or "light"

  // Header & Opening Intro
  introSequence: [
    "INITIALIZING PERSONAL EXPERIENCE...",
    "Loading student profile [Computer Science]...",
    "Configuring ICT/Lab Technician parameters...",
    "Connection established."
  ],
  heroTitle: "Welcome to My Digital Space",
  heroSubtitle: "Exploring technology, software engineering, and creative code.",

  // Personal Profile Info
  profile: {
    name: "Ukasha Sani Zauro",
    role: "Computer Science Student & ICT Instructor",
    description: "I specialize in software development, technical lab instruction, and modern web solutions. I enjoy building efficient, elegant digital experiences.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    socials: [
      { name: "GitHub", icon: "fab fa-github", url: "https://github.com" },
      { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { name: "Email", icon: "fas fa-envelope", url: "mailto:ukashaszauro@gmail.com" }
    ]
  },

  // Interactive Story Section Toggle & Items
  showTimeline: true,
  timeline: [
    { num: "01", title: "Who I Am", content: "I am Ukasha Sani Zauro, a Computer Science student with a passion for practical tech solutions." },
    { num: "02", title: "My Journey", content: "From exploring fundamental computing concepts to instructing in ICT labs and building web applications." },
    { num: "03", title: "What I Enjoy", content: "Software architecture, network management, teaching tech skills, and elegant UI designs." },
    { num: "04", title: "What I'm Building", content: "General-purpose digital tools, custom web interfaces, and open-source utility scripts." },
    { num: "05", title: "What's Next", content: "Expanding my software engineering expertise and contributing to scalable tech projects." }
  ],

  // Projects Section Toggle & Items
  showProjects: true,
  projects: [
    { title: "Lab Management Utilities", desc: "Scripts and tools designed for laboratory computer maintenance.", tech: "Java / Bash", link: "#" },
    { title: "Personal Web Engine", desc: "A customizable, glassmorphic dynamic personal website template.", tech: "HTML5 / CSS3 / JS", link: "#" },
    { title: "ICT Learning Portal", desc: "Resource repository for computer science and IT students.", tech: "Web Tech", link: "#" }
  ],

  // Gallery Section Toggle & Images
  showGallery: true,
  gallery: [
    { url: "https://via.placeholder.com/400x300", caption: "Work Station & Setup" },
    { url: "https://via.placeholder.com/400x300", caption: "ICT Lab Instruction Session" },
    { url: "https://via.placeholder.com/400x300", caption: "Coding & Development" }
  ],

  // Interactive Question Section
  interactiveQuestion: {
    heading: "A Quick Question",
    question: "Would you like to collaborate on a technology project or chat about software engineering?",
    btnYes: "Yes, Absolutely! 🚀",
    btnNo: "Maybe Later",
    noResponseText: "No problem at all! Feel free to explore the rest of the site at your own pace.",
    successMessage: "Awesome! I'm looking forward to connecting and sharing ideas with you."
  },

  // Response Options Component
  showResponses: true,
  responses: [
    { label: "🤝 Let's Collaborate", text: "Great! Send me an email or message and we can discuss project ideas." },
    { label: "💬 Let's Chat Tech", text: "Awesome, happy to chat about software development or ICT!" },
    { label: "☕ Catch Up Later", text: "Sounds good. My contact details are listed below whenever you're ready." }
  ],

  // Final Invitation / Contact Section
  invitation: {
    heading: "Let's Keep in Touch",
    message: "Whether you have questions, project ideas, or ICT queries, feel free to reach out.",
    buttons: [
      { label: "Send an Email", url: "mailto:ukashaszauro@gmail.com", type: "primary" },
      { label: "Connect on LinkedIn", url: "https://linkedin.com", type: "secondary" }
    ]
  },

  // Audio Configuration
  backgroundMusic: "", // Add audio file URL here (e.g., "assets/ambient.mp3")

  // Developer Secret Easter Egg
  easterEggMessage: "You found the developer's secret! Built with passion by Ukasha Sani Zauro. 🛠️"
};

// ==========================================================================
// CORE ENGINE LOGIC (DO NOT MODIFY UNLESS EXTENDING FUNCTIONALITY)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  initIntroScreen();
  populateContent();
  initParticles();
  initAudio();
  initEasterEgg();
  initTimeline();
  initInteractiveSection();
  initGalleryLightbox();
});

// Theme Initialization
function applyTheme() {
  if (siteConfig.theme === "light") {
    document.body.classList.add("light-theme");
  }
}

// Typing Effect Utility
function typeWriter(element, text, speed = 40, callback) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Opening Screen Sequence
function initIntroScreen() {
  const introScreen = document.getElementById("intro-screen");
  const terminalText = document.getElementById("terminal-text");
  const progressBar = document.getElementById("progress-bar");
  const skipBtn = document.getElementById("skip-intro-btn");
  const mainContent = document.getElementById("main-content");

  let lineIndex = 0;

  function processNextLine() {
    if (lineIndex < siteConfig.introSequence.length) {
      const currentText = siteConfig.introSequence[lineIndex];
      const p = document.createElement("div");
      terminalText.appendChild(p);

      typeWriter(p, currentText, 30, () => {
        lineIndex++;
        progressBar.style.width = `${(lineIndex / siteConfig.introSequence.length) * 100}%`;
        setTimeout(processNextLine, 400);
      });
    } else {
      setTimeout(revealMain, 600);
    }
  }

  function revealMain() {
    introScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }

  skipBtn.addEventListener("click", revealMain);
  processNextLine();
}

// Populate Site Content from Configuration
function populateContent() {
  // Document Titles
  document.getElementById("nav-brand-name").innerText = `${siteConfig.senderName.split(" ")[0]}.dev`;
  document.getElementById("hero-title").innerText = siteConfig.heroTitle;
  typeWriter(document.getElementById("hero-subtitle"), siteConfig.heroSubtitle, 50);

  // Profile Section
  document.getElementById("profile-name").innerText = `Hi, I'm ${siteConfig.senderName.split(" ")[0]}`;
  document.getElementById("profile-role").innerText = siteConfig.profile.role;
  document.getElementById("profile-desc").innerText = siteConfig.profile.description;
  document.getElementById("profile-img").src = siteConfig.profile.image;

  // Social Links
  const socialContainer = document.getElementById("social-links");
  socialContainer.innerHTML = siteConfig.profile.socials.map(s => 
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}"><i class="${s.icon}"></i></a>`
  ).join("");

  // Section Visibility Toggles
  if (!siteConfig.showTimeline) document.getElementById("story").classList.add("hidden");
  if (!siteConfig.showProjects) document.getElementById("projects").classList.add("hidden");
  if (!siteConfig.showGallery) document.getElementById("gallery").classList.add("hidden");
  if (!siteConfig.showResponses) document.getElementById("response-options-section").classList.add("hidden");

  // Populate Story Timeline
  const timelineContainer = document.getElementById("timeline-container");
  timelineContainer.innerHTML = siteConfig.timeline.map((item) => `
    <div class="timeline-item">
      <div class="timeline-header">
        <span>${item.num} — ${item.title}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="timeline-body"><p>${item.content}</p></div>
    </div>
  `).join("");

  // Populate Projects Grid
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = siteConfig.projects.map(p => `
    <div class="project-card glass-panel">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="tech-tag">${p.tech}</span>
    </div>
  `).join("");

  // Populate Gallery
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = siteConfig.gallery.map(g => `
    <div class="gallery-card">
      <img src="${g.url}" alt="${g.caption}" data-caption="${g.caption}" />
      <p>${g.caption}</p>
    </div>
  `).join("");

  // Interactive Section Setup
  document.getElementById("interactive-title").innerText = siteConfig.interactiveQuestion.heading;
  document.getElementById("interactive-question").innerText = siteConfig.interactiveQuestion.question.replace("[Recipient Name]", siteConfig.recipientName);
  document.getElementById("btn-yes").innerText = siteConfig.interactiveQuestion.btnYes;
  document.getElementById("btn-no").innerText = siteConfig.interactiveQuestion.btnNo;

  // Populate Optional Response Options
  const responseGrid = document.getElementById("response-buttons-grid");
  responseGrid.innerHTML = siteConfig.responses.map((r, idx) => `
    <button class="btn-secondary btn-response" data-idx="${idx}">${r.label}</button>
  `).join("");

  document.querySelectorAll(".btn-response").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-idx");
      const box = document.getElementById("selected-response-box");
      const text = document.getElementById("selected-response-text");
      text.innerText = siteConfig.responses[idx].text;
      box.classList.remove("hidden");
    });
  });

  // Invitation Section
  document.getElementById("invitation-heading").innerText = siteConfig.invitation.heading;
  document.getElementById("invitation-message").innerText = siteConfig.invitation.message;
  const invButtons = document.getElementById("invitation-buttons");
  invButtons.innerHTML = siteConfig.invitation.buttons.map(b => `
    <a href="${b.url}" target="_blank" rel="noopener" class="btn-${b.type}">${b.label}</a>
  `).join("");

  // Footer
  document.getElementById("footer-year").innerText = new Date().getFullYear();
  document.getElementById("footer-name").innerText = siteConfig.senderName;
}

// Story Timeline Expand/Collapse
function initTimeline() {
  document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}

// Interactive Message Component (YES / MAYBE Handlers)
function initInteractiveSection() {
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");
  const noMsgBox = document.getElementById("no-response-msg");
  const successBox = document.getElementById("success-screen");

  btnYes.addEventListener("click", () => {
    noMsgBox.classList.add("hidden");
    successBox.classList.remove("hidden");
    document.getElementById("success-text").innerText = `${siteConfig.recipientName}, ${siteConfig.interactiveQuestion.successMessage}`;
    
    // Trigger Confetti Animation
    if (typeof confetti === "function") {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  });

  btnNo.addEventListener("click", () => {
    successBox.classList.add("hidden");
    noMsgBox.classList.remove("hidden");
    document.getElementById("no-response-text").innerText = siteConfig.interactiveQuestion.noResponseText;
  });
}

// Gallery Lightbox Component
function initGalleryLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("close-lightbox");

  document.querySelectorAll(".gallery-card img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxCaption.innerText = img.getAttribute("data-caption");
      lightbox.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });
}

// Developer Easter Egg (3-Click Handler)
function initEasterEgg() {
  const trigger = document.getElementById("secret-trigger");
  const modal = document.getElementById("secret-modal");
  const closeBtn = document.getElementById("close-secret");
  let clickCount = 0;

  trigger.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 3) {
      document.getElementById("secret-text").innerText = siteConfig.easterEggMessage;
      modal.classList.remove("hidden");
      clickCount = 0;
    }
  });

  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
}

// Background Particle Canvas Rendering
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.fillStyle = siteConfig.theme === "light" ? `rgba(9, 105, 218, ${this.alpha})` : `rgba(0, 242, 254, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Optional Audio Player Management
function initAudio() {
  const audioContainer = document.getElementById("audio-container");
  const bgAudio = document.getElementById("bg-audio");
  const audioToggle = document.getElementById("audio-toggle");
  const audioVolume = document.getElementById("audio-volume");

  if (siteConfig.backgroundMusic) {
    bgAudio.src = siteConfig.backgroundMusic;
    audioContainer.classList.remove("hidden");

    let isPlaying = false;
    audioToggle.addEventListener("click", () => {
      if (isPlaying) {
        bgAudio.pause();
        audioToggle.innerHTML = '<i class="fas fa-music"></i>';
      } else {
        bgAudio.play();
        audioToggle.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isPlaying = !isPlaying;
    });

    audioVolume.addEventListener("input", (e) => {
      bgAudio.volume = e.target.value;
    });
  }
}
