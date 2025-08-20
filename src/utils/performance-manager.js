/**
 * Performance Manager for Light Mode Glassmorphism
 * Handles dynamic will-change management and memory optimization
 * 2025 Best Practices Implementation
 */

class PerformanceManager {
  constructor() {
    this.animatingElements = new Set();
    this.intersectionObserver = null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.lowEndDevice = this.detectLowEndDevice();
    
    this.init();
  }
  
  init() {
    // Set up intersection observer for performance optimization
    this.setupIntersectionObserver();
    
    // Listen for motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)')
      .addEventListener('change', (e) => {
        this.prefersReducedMotion = e.matches;
        this.handleMotionPreferenceChange();
      });
    
    // Clean up will-change after page load
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => this.cleanupInitialWillChange(), 2000);
    });
    
    // Handle visibility changes for battery optimization
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAnimations();
      } else {
        this.resumeAnimations();
      }
    });
  }
  
  detectLowEndDevice() {
    // Detect low-end devices for performance optimization
    const memoryInfo = navigator.deviceMemory;
    const connectionInfo = navigator.connection;
    
    return (
      (memoryInfo && memoryInfo < 4) || // Less than 4GB RAM
      (connectionInfo && connectionInfo.saveData) || // Data saver mode
      /Android.*(wv|.0.0.0)/.test(navigator.userAgent) // WebView
    );
  }
  
  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;
    
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const element = entry.target;
          
          if (entry.isIntersecting) {
            // Element is visible, enable optimizations
            this.enableElementOptimizations(element);
          } else {
            // Element is not visible, disable expensive effects
            this.disableElementOptimizations(element);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );
    
    // Observe all animated elements
    document.querySelectorAll('.post-card, .orbs-container').forEach(el => {
      this.intersectionObserver.observe(el);
    });
  }
  
  enableElementOptimizations(element) {
    if (this.prefersReducedMotion || this.lowEndDevice) return;
    
    // Add performance classes
    element.classList.add('gpu-optimized');
    
    // Set up hover handlers for cards
    if (element.classList.contains('post-card')) {
      element.addEventListener('mouseenter', this.handleCardHover.bind(this));
      element.addEventListener('mouseleave', this.handleCardLeave.bind(this));
    }
  }
  
  disableElementOptimizations(element) {
    // Remove performance classes
    element.classList.remove('gpu-optimized', 'gpu-animate');
    element.style.willChange = 'auto';
  }
  
  handleCardHover(event) {
    const card = event.target.closest('.post-card');
    if (!card || this.prefersReducedMotion) return;
    
    card.style.willChange = 'transform, opacity';
    card.classList.add('gpu-animate');
    this.animatingElements.add(card);
  }
  
  handleCardLeave(event) {
    const card = event.target.closest('.post-card');
    if (!card) return;
    
    // Delay cleanup to allow transition to complete
    setTimeout(() => {
      card.style.willChange = 'auto';
      card.classList.remove('gpu-animate');
      this.animatingElements.delete(card);
    }, 300);
  }
  
  handleMotionPreferenceChange() {
    if (this.prefersReducedMotion) {
      // Disable all animations and clean up will-change
      this.animatingElements.forEach(element => {
        element.style.willChange = 'auto';
        element.classList.remove('gpu-animate');
      });
      this.animatingElements.clear();
    }
  }
  
  cleanupInitialWillChange() {
    // Clean up will-change properties that were set for initial animations
    document.querySelectorAll('[style*="will-change"]').forEach(element => {
      if (!this.animatingElements.has(element)) {
        element.style.willChange = 'auto';
      }
    });
  }
  
  pauseAnimations() {
    // Pause animations when page is not visible (battery optimization)
    document.body.classList.add('animations-paused');
  }
  
  resumeAnimations() {
    // Resume animations when page becomes visible
    document.body.classList.remove('animations-paused');
  }
  
  destroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    
    this.animatingElements.forEach(element => {
      element.style.willChange = 'auto';
    });
    
    this.animatingElements.clear();
  }
}

// Initialize performance manager
if (typeof window !== 'undefined') {
  const performanceManager = new PerformanceManager();
  
  // Export for potential cleanup
  window.performanceManager = performanceManager;
}

export default PerformanceManager;