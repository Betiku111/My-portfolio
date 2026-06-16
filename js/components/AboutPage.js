const AboutPage = {
  template: `
    <section class="about-page container fade-in-up">
      <div class="about-header">
        <h2>About Me</h2>
        <p>Passionate about creating innovative solutions and bringing ideas to life</p>
      </div>
      
      <div class="about-content">
        <img 
          :src="profileImage" 
          alt="BETIX Profile" 
          class="profile-image"
          @error="handleImageError"
        >
        
        <div class="about-text">
          <h3>Hi, I'm BETIKU TAYE</h3>
          <p>
            A passionate software engineer with expertise in full-stack development, 
            software architecture, and freelance consulting. I specialize in building 
            scalable web applications using modern technologies.
          </p>
          <p>
            With years of experience in the industry, I've helped businesses transform 
            their ideas into robust digital solutions. My approach combines technical 
            excellence with creative problem-solving.
          </p>
          
          <div class="services-grid">
            <div class="service-card">
              <i class="fas fa-laptop-code"></i>
              <h4>Freelance</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">Available for hire</p>
            </div>
            <div class="service-card">
              <i class="fas fa-code"></i>
              <h4>Software Developer</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">Full-stack solutions</p>
            </div>
            <div class="service-card">
              <i class="fas fa-desktop"></i>
              <h4>Frontend Dev</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">UI/UX expert</p>
            </div>
            <div class="service-card">
              <i class="fas fa-server"></i>
              <h4>Backend Dev</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">API & database</p>
            </div>
            <div class="service-card">
              <i class="fas fa-sitemap"></i>
              <h4>Software Architect</h4>
              <p style="font-size: 0.9rem; color: var(--text-gray);">System design</p>
            </div>
           <div class="service-card">
  <i class="fas fa-robot"></i>
  <h4>AI Automation</h4>
  <p style="font-size: 0.9rem; color: var(--text-gray);">AI Automation</p>
</div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      profileImage: 'images/mypic.png' // Change this to your image path
    }
  },
  methods: {
    handleImageError(e) {
      // Fallback if image doesn't exist
      e.target.style.display = 'none';
    }
  }
};