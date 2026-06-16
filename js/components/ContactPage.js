const ContactPage = {
  template: `
    <section class="contact-page container fade-in-up">
      <div class="contact-header">
        <h2>Get In Touch</h2>
        <p style="color: var(--text-gray);">Let's work together</p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Connect With Me</h3>
          <p>
            <i class="fas fa-envelope"></i>
            <strong>Email:</strong> betikutaye760@gmail.com
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            <strong>Location:</strong> Available Worldwide
          </p>
          <p>
            <i class="fas fa-clock"></i>
            <strong>Response Time:</strong> Within 24 hours
          </p>
          
          <div class="social-links">
            <a v-for="social in socialLinks" 
               :key="social.name" 
               :href="social.url" 
               class="social-link"
               target="_blank"
               :title="social.name">
              <i :class="social.icon"></i>
              {{ social.name }}
            </a>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="Your name"
            >
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              placeholder="betikutaye760@gmail.com"
            >
          </div>
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" class="btn">
            <i class="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  `,
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      socialLinks: [
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/8123316846' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/betiku-taye-2b46b1338/' },
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Betiku111' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/betikutaye/' },
        { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@betikutaye' },
        { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/betix' },
        { name: 'X (Twitter)', icon: 'fab fa-x-twitter', url: 'https://x.com/BetikuTaye44512' },
         { name: 'Fiverr', icon: 'fiverr', url: 'https://fiverr.com/betix' },
           { name: 'Upwork', icon: 'fab fa-upwork', url: 'https://upwork.com/betix' },
      ]
    }
  },
  methods: {
    submitForm() {
      if (this.formData.name && this.formData.email && this.formData.message) {
        alert(`Thank you ${this.formData.name}! Your message has been sent.`);
        this.formData = { name: '', email: '', message: '' };
      } else {
        alert('Please fill all required fields.');
      }
    }
  }
};