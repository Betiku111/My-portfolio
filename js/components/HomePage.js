const HomePage = {
  template: `
    <section class="home-page">
      <!-- Animated Background -->
      <div class="home-background">
        <div class="bg-shape bg-shape-1"></div>
        <div class="bg-shape bg-shape-2"></div>
        <div class="bg-shape bg-shape-3"></div>
      </div>
      
      <div class="home-container">
        <!-- Left Content -->
        <div class="home-content">
          <div class="greeting">
            <span class="wave-emoji">👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 class="name">BETIX</h1>
          
          <div class="typing-container">
            <span class="static-text">I'm a </span>
            <span class="dynamic-text">{{ currentRole }}</span>
            <span class="cursor">|</span>
          </div>
          
          <p class="description">
            A passionate software engineer specializing in building exceptional digital experiences. 
            Currently focused on building accessible, human-centered products.
          </p>
          
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="$emit('navigate', 'about')">
              <i class="fas fa-user"></i>
              More About Me
              <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn btn-outline" @click="$emit('navigate', 'projects')">
              <i class="fas fa-briefcase"></i>
              View My Work
            </button>
          </div>
          
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Done</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">30+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <!-- Right Content - Profile Image/Illustration -->
        <div class="home-visual">
          <div class="profile-wrapper">
            <div class="profile-image-container">
              <img 
                :src="profileImage" 
                alt="BETIX" 
                class="profile-image"
                @error="handleImageError"
              >
              <div class="image-border"></div>
            </div>
            <div class="floating-card card-1">
              <i class="fas fa-code"></i>
              <span>Full-Stack Dev</span>
            </div>
            <div class="floating-card card-2">
              <i class="fas fa-check-circle"></i>
              <span>10+ Certificates</span>
            </div>
          </div>
        </div>
      </div>
      
     
      
      <!-- Social Links - Fixed Left -->
      <div class="social-sidebar">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" :title="social.name">
          <i :class="social.icon"></i>
        </a>
      </div>
    </section>
  `,
  emits: ['navigate'],
  data() {
    return {
      profileImage: '/images/mypic.png',
      roles: [
        'Software Engineer',
        'Full-Stack Developer',
        'Software Architect',
        'Freelancer',
        'Problem Solver'
      ],
      currentRole: 'Software Engineer',
      roleIndex: 0,
      charIndex: 0,
      isDeleting: false,
      socialLinks: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/betix' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/betix' },
        { name: 'Twitter', icon: 'fab fa-x-twitter', url: 'https://x.com/betix' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/betix' },
        { name: 'Upwork', icon: 'fab fa-upwork', url: 'https://upwork.com/betix' },
         { name: 'Fiverr', icon: 'fiverr', url: 'https://fiverr.com/betix' },
      ]
    }
  },
  mounted() {
    this.startTypingAnimation();
  },
  methods: {
    startTypingAnimation() {
      setInterval(() => {
        if (!this.isDeleting) {
          this.charIndex++;
          this.currentRole = this.roles[this.roleIndex].substring(0, this.charIndex);
          
          if (this.charIndex === this.roles[this.roleIndex].length) {
            this.isDeleting = true;
            setTimeout(() => {}, 2000);
          }
        } else {
          this.charIndex--;
          this.currentRole = this.roles[this.roleIndex].substring(0, this.charIndex);
          
          if (this.charIndex === 0) {
            this.isDeleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
          }
        }
      }, 100);
    },
    handleImageError(e) {
      e.target.style.display = 'none';
    }
  }
};
