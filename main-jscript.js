// JavaScript to handle dashboard animation
const showDashboardBtn = document.getElementById('showAboutMe');
const showSkillsDashboardBtn = document.getElementById('showSkills');
const showProjectsDashboardBtn = document.getElementById('showProjects');
const showContacts = document.getElementById('showContacts');
const dashboard = document.getElementById('dashboard');
const skillboard = document.getElementById('skillsDashboard');
const projectboard = document.getElementById('showProjectsboard');
const contactboard = document.getElementById('showContactsboard');
const overlay = document.getElementById('overlay');

// Dashboard Buttons
showDashboardBtn.addEventListener('click', () => {
  dashboard.classList.add('visible');
  overlay.classList.add('active');
});

showSkillsDashboardBtn.addEventListener('click', () => {
    skillboard.classList.add('visible');
    overlay.classList.add('active');
});

showProjectsDashboardBtn.addEventListener('click', () => {
    projectboard.classList.add('visible');
    overlay.classList.add('active');
});

showContacts.addEventListener('click', () => {
    contactboard.classList.add('visible');
    overlay.classList.add('active');
});

// Close Dashboard when clicking on overlay
overlay.addEventListener('click', () => {
  dashboard.classList.remove('visible');
  skillboard.classList.remove('visible');
  projectboard.classList.remove('visible');
  contactboard.classList.remove('visible');
  overlay.classList.remove('active');
});
