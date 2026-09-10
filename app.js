/* ──────────────────────────────────────────────────────────
   Kyan Yeng — Personal Portfolio App
   Renders profile data and manages the light / dark toggle
   ────────────────────────────────────────────────────────── */

// ── Profile Data (edit this to update your page) ─────────
const profile = {
  name: 'Kyan Yeng',
  headline: 'Aspiring Leader in Technology · Fast Learner · Team Player',
  location: 'Phoenix, AZ',
  linkedin: 'https://www.linkedin.com/in/kyan-yeng-405ab0419/',

  stats: [
    { number: '5', label: 'Connections' },
    { number: 'All-Star', label: 'Profile' },
  ],

  about:
    "I am a fast learner and eager to expand my knowledge with like-minded peers. " +
    "In the future, I see myself being a leader in a technological field — perhaps aerospace engineering — " +
    "by finding opportunities along the way. Participating in various clubs and classes has taught me " +
    "the importance of being a good leader and peer.",

  experience: [
    {
      role: 'Cashier',
      company: 'Sweetheart Gourmet Donuts',
      dateRange: 'January 2026 — Present',
      description:
        'Cleaning, helping customers, and handling small cooking tasks such as making sandwiches and smoothies.',
    },
    {
      role: 'Active Member',
      company: "O'Connor Business & Finance Club",
      dateRange: 'August 2025 — Present',
      description:
        'Contributed to 197-member club; raised $1,300 via cold emails; orchestrated guest speakers; ' +
        'organized community service; led social media projects.',
    },
  ],

  education: [
    {
      school: 'Sandra Day O\'Connor High School, Phoenix, AZ',
      degree: 'Student',
      dateRange: 'August 2024 — Present',
    },
  ],

  skills: [
    'Customer Service',
    'Leadership',
    'Teamwork',
    'Cold Outreach & Fundraising',
    'Social Media Management',
    'Community Service',
    'Problem Solving',
    'Communication',
    'Event Coordination',
    'Fast Learner',
  ],

  achievements: [
    'Raised $1,300 through cold email outreach for O\'Connor Business & Finance Club.',
    'Helped organize guest speakers and community service events for a 197-member club.',
    'Led social media projects to increase club visibility and engagement.',
    'Balancing work experience at Sweetheart Gourmet Donuts while actively pursuing education.',
  ],
};

// ── DOM References ───────────────────────────────────────
const mainContent = document.getElementById('main-content');
const heroStats = document.getElementById('hero-stats');

// ── Render hero stats ────────────────────────────────────
function renderHeroStats() {
  heroStats.innerHTML = profile.stats
    .map(
      (s) => `
      <div class="hero-stat">
        <span class="number">${s.number}</span>
        <span class="label">${s.label}</span>
      </div>`
    )
    .join('');
}

// ── Render main sections ─────────────────────────────────
function renderSections() {
  let html = '';

  // About
  html += `
    <section class="section">
      <h2 class="section-title"><span class="icon">👤</span> About</h2>
      <div class="card">
        <p class="about-text">${profile.about}</p>
      </div>
    </section>`;

  // Experience
  html += `
    <section class="section">
      <h2 class="section-title"><span class="icon">💼</span> Experience</h2>
      ${profile.experience
      .map(
        (e) => `
        <div class="card">
          <h3>${e.role}</h3>
          <p class="subtitle">${e.company}</p>
          <p class="date-range">${e.dateRange}</p>
          <p class="description">${e.description}</p>
        </div>`
      )
      .join('')}
    </section>`;

  // Education
  html += `
    <section class="section">
      <h2 class="section-title"><span class="icon">🎓</span> Education</h2>
      ${profile.education
      .map(
        (e) => `
        <div class="card">
          <h3>${e.degree}</h3>
          <p class="subtitle">${e.school}</p>
          <p class="date-range">${e.dateRange}</p>
        </div>`
      )
      .join('')}
    </section>`;

  // Skills
  html += `
    <section class="section">
      <h2 class="section-title"><span class="icon">🛠</span> Skills</h2>
      <div class="card">
        <div class="skills-grid">
          ${profile.skills.map((s) => `<span class="chip">${s}</span>`).join('')}
        </div>
      </div>
    </section>`;

  // Achievements
  html += `
    <section class="section">
      <h2 class="section-title"><span class="icon">🏆</span> Achievements</h2>
      <div class="card">
        <ul class="achievement-list">
          ${profile.achievements.map((a) => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </section>`;

  mainContent.innerHTML = html;
}

// ── Theme toggle ─────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    applyTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ── Boot ─────────────────────────────────────────────────
initTheme();
renderHeroStats();
renderSections();
