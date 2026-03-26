import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { createIcons, Menu, X, ArrowRight, Calendar, Users, Shield, Star } from 'lucide'

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize Lucide Icons
createIcons({
  icons: {
    Menu,
    X,
    ArrowRight,
    Calendar,
    Users,
    Shield,
    Star
  }
})

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  autoRaf: true,
})

// --- Animations ---

// Hero Animation
const heroTl = gsap.timeline({
  defaults: { ease: "power4.out", duration: 2 }
})

heroTl
  .to('#hero-img', { scale: 1, duration: 3 }, 0)
  .to('#hero-sub', { opacity: 1, y: 0 }, 0.5)
  .to('#hero-title', { opacity: 1, y: 0 }, 0.7)
  .to('#hero-cta', { opacity: 1, y: 0 }, 0.9)

// Navbar scroll effect
ScrollTrigger.create({
  start: "top top",
  onUpdate: (self) => {
    const nav = document.querySelector('#main-nav')
    if (self.direction === 1) {
      nav.style.transform = "translateY(-100%)"
    } else {
      nav.style.transform = "translateY(0)"
      if (self.progress > 0.05) {
        nav.classList.add('bg-brand-bg/90', 'backdrop-blur-md', 'py-6')
      } else {
        nav.classList.remove('bg-brand-bg/90', 'backdrop-blur-md', 'py-6')
      }
    }
  }
})

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal-img, h2, .stat-item')
revealElements.forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  })
})

// Gallery Parallax
gsap.utils.toArray('#gallery img').forEach((img) => {
  gsap.to(img, {
    y: -30,
    scrollTrigger: {
      trigger: img,
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    }
  })
})

// Form handling (Visual only)
const form = document.querySelector('form')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button')
    btn.innerText = "Inquiry Sent"
    btn.classList.add('bg-brand-accent', 'text-white')
    form.reset()
  })
}
