/**
 * Variant A – Human & Clear
 * Playfair Display (headings) + Inter (body)
 * Palette: warm cream bg, sage-green accents, golden warmth
 * Feel: empathic, approachable, professionally warm
 */
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, AnimatePresence } from 'framer-motion'
import {
  Brain, HandHeart, Heart, Leaf, Eye, HeartHandshake, Activity, PersonStanding,
  ChevronDown, ChevronLeft, ChevronRight,
  Phone, Mail, MapPin, Star, Check, Plus, Minus
} from 'lucide-react'
import Logo from './Logo'

// ─── Shared animation helpers ───────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = '',
  y = 28,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Leaf,
    title: 'Traumayoga',
    desc: 'Traumayoga oder traumasensibles Yoga ist eine achtsame Praxis, die Körperwahrnehmungen nutzt, um traumatisierten Menschen zu helfen, Sicherheit im eigenen Körper zu finden. Es fördert die Selbstregulation des Nervensystems, löst Verspannungen, baut Vertrauen auf und bietet Wahlfreiheit statt Leistungsdruck.',
    badge: null,
  },
  {
    icon: Eye,
    title: 'EMDR',
    desc: 'EMDR (Eye Movement Desensitization and Reprocessing) ist eine hochwirksame Methode zur Behandlung von Traumafolgestörungen, insbesondere der PTBS. Durch bilaterale Stimulation, oft schnelle Augenbewegungen, während das Trauma erinnert wird, verarbeitet das Gehirn belastende Erlebnisse. Die von Francine Shapiro entwickelte Methode ist wissenschaftlich anerkannt und aktiviert Selbstheilungskräfte.',
    badge: null,
  },
  {
    icon: HandHeart,
    title: 'Traumafachberatung',
    desc: 'Traumafachberatung ist ein beratendes, nichttherapeutisches Angebot zur Stabilisierung von Menschen nach traumatischen Erlebnissen. Der Fokus liegt auf der Förderung von Sicherheit, Alltagsbewältigung und Ressourcenstärkung, um Symptome zu lindern, ohne das Trauma tiefenpsychologisch aufzuarbeiten. Sie richtet sich auch an Angehörige.',
    badge: null,
  },
  {
    icon: Brain,
    title: 'Psychologische Beratung',
    desc: 'Psychologische Beratung ist eine professionelle, lösungs- und ressourcenorientierte Unterstützung für psychisch gesunde Menschen in schwierigen Lebenslagen, Krisen oder bei konkreten Konflikten. Sie hilft dabei, Handlungskompetenzen zu fördern, Stress abzubauen und persönliche Ziele zu erreichen.',
    badge: null,
  },
  {
    icon: Activity,
    title: 'Traumasensibler Sport',
    desc: 'Traumasensible Bewegungsangebote wirken traumatischen Beeinträchtigungen entgegen, indem das Sicherheitserleben gefördert, Angst- und Stressreaktionen reduziert und die Fähigkeit zur Selbstregulation gestärkt wird.',
    badge: null,
  },
  {
    icon: Heart,
    title: 'Tantra Yoga',
    desc: 'Tantra Yoga ist eine ganzheitliche spirituelle Praxis, die Körper, Geist und Seele integriert. Tantra zielt auf die Erweiterung des Bewusstseins durch verschiedene Techniken ab, um die direkte Erfahrung der göttlichen Realität im täglichen Leben durch die Einheit von Bewusstsein und Energien zu erkennen.',
    badge: null,
  },
  {
    icon: HeartHandshake,
    title: 'Klientenzentrierte Therapie nach Carl Rogers',
    desc: 'Klientenzentrierte Therapie ist ein humanistisches Verfahren, das den Menschen statt das Problem in den Mittelpunkt stellt. Durch Empathie, bedingungslose Wertschätzung und Echtheit des Therapeuten wird der Klient befähigt, sein Selbstbild zu verbessern und Potenziale zur Selbstentfaltung zu nutzen.',
    badge: null,
  },
  {
    icon: PersonStanding,
    title: 'Seniorenfitnesstraining',
    desc: 'Bewegungen für Senioren – Erleben Sie ein Training, das Körper und Geist stärkt – mit Raum für Ruhe und neue Energie. Mehr Lebensqualität durch sanfte Bewegungen.',
    badge: null,
  },
]

const testimonials = [
  {
    quote: 'Das Coaching mit Corinna hat mir geholfen, endlich wieder Vertrauen in mich selbst zu finden. Sie schafft einen Raum, in dem ich mich wirklich gesehen und verstanden fühle.',
    name: 'Sarah M.',
    city: 'München',
    stars: 5,
  },
  {
    quote: 'Corinna hat eine besondere Gabe, das Wesentliche zu erkennen. Nach nur wenigen Sitzungen spürte ich eine deutliche und nachhaltige Veränderung in meinem Alltag.',
    name: 'Thomas K.',
    city: 'Schwabing',
    stars: 5,
  },
  {
    quote: 'Ich hatte lange Angst, professionelle Hilfe zu suchen. Aber Corinna hat mir gezeigt, dass Stärke auch darin liegt, sich Unterstützung zu holen. Eine lebensverändernde Erfahrung.',
    name: 'Anna L.',
    city: 'München',
    stars: 5,
  },
  {
    quote: 'Die Kombination aus Gespräch und Körperarbeit hat mir geholfen, meine Anspannungen wirklich loszulassen. Ich fühle mich freier und lebendiger als je zuvor.',
    name: 'Michael S.',
    city: 'Maxvorstadt',
    stars: 5,
  },
]

const faqs = [
  {
    q: 'Wie läuft eine erste Sitzung ab?',
    a: 'Das kostenlose Erstgespräch dauert ca. 20 Minuten und findet telefonisch oder per Video statt. Wir lernen uns kennen, besprechen dein Anliegen und klären, ob wir gut zusammenpassen.',
  },
  {
    q: 'Nehmen Sie Kassenpatienten an?',
    a: 'Aktuell arbeite ich ausschließlich mit Privatversicherten und Selbstzahlern.',
  },
  {
    q: 'Was unterscheidet Coaching von Therapie?',
    a: 'Coaching fokussiert auf konkrete Ziele, persönliches Wachstum und Ressourcenaktivierung – ideal für Menschen ohne klinische Diagnose. Therapie adressiert tieferliegende psychische Erkrankungen und Traumata.',
  },
  {
    q: 'Wie viele Sitzungen werde ich brauchen?',
    a: 'Das ist sehr individuell. Für spezifische Coaching-Ziele reichen oft 5–10 Sitzungen. Bei tieferer Traumaarbeit planen wir gemeinsam einen längerfristigen Prozess.',
  },
  {
    q: 'Was ist EMDR und für wen ist es geeignet?',
    a: 'EMDR (Eye Movement Desensitization and Reprocessing) ist eine wissenschaftlich anerkannte Methode zur Verarbeitung von Traumata und belastenden Erinnerungen.',
  },
]

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let prev = scrollY.get()
    return scrollY.on('change', (v) => {
      setScrolled(v > 60)
      if (v > prev && v > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      prev = v
    })
  }, [scrollY])

  const navLinks = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Preise', href: '#preise' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        y: (hidden && !menuOpen) ? '-100%' : '0%',
        backgroundColor: (scrolled || menuOpen) ? 'rgba(250,248,245,1)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 1px 32px rgba(0,0,0,0.06)' : 'none',
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#">
          <Logo
            className={`h-20 w-auto transition-colors duration-300 ${
              (scrolled || menuOpen) ? 'text-heading-a' : 'text-white'
            }`}
          />
        </a>

        {/* Desktop nav — absolut zentriert */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 h-24">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative h-full flex items-center text-sm font-inter font-medium tracking-[1px] transition-colors duration-300 group ${
                scrolled ? 'text-moss-800 hover:text-sage-600' : 'text-white/90'
              }`}
            >
              {l.label}
              <span className={`absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                scrolled ? 'bg-sage-600 h-0.5' : 'bg-white h-px'
              }`} />
            </a>
          ))}
        </nav>

        {/* CTA rechts + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden md:inline-block px-5 py-2.5 rounded-button-a bg-sage-500 text-white text-sm font-inter font-semibold tracking-[0.75px] hover:bg-sage-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Erstgespräch
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-6 h-6 gap-[5px] transition-colors ${(scrolled || menuOpen) ? 'text-heading-a' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <span className={`block w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50 border-t border-cream-200"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMenuOpen(false)
                    setTimeout(() => {
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                    }, 300)
                  }}
                  className="text-moss-800 font-inter font-medium text-base tracking-[0.75px] py-1"
                >
                  {l.label}
                </a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  setTimeout(() => {
                    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
                  }, 300)
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="mt-2 px-5 py-3 rounded-button-a bg-sage-500 text-white text-sm font-inter font-semibold tracking-[0.75px] text-center"
              >
                Erstgespräch vereinbaren
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            'url(/hero-bg.jpg)',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-moss-900/80 via-moss-800/50 to-sage-600/30" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        style={{ left: '-9px', top: '-23px' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 text-xs uppercase tracking-[0.22em] font-inter font-medium text-white/80 border border-white/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          Psychologisches Coaching &amp; Beratung · München
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-playfair font-bold text-5xl md:text-7xl text-white leading-[1.1] mb-6 text-balance"
        >
          Dein Weg zur<br />
          <em className="italic not-italic text-highlight-hero-a">inneren Stärke.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-inter text-base text-white/85 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Ein sicherer Raum, um zu heilen, zu wachsen und ganz zu dir selbst zu finden.
          Einfühlsam, professionell, vertrauensvoll.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="px-8 h-14 flex items-center justify-center rounded-button-a bg-sage-500 hover:bg-sage-600 text-white font-inter font-semibold tracking-[0.75px] text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Kostenloses Erstgespräch
          </a>
          <a
            href="#leistungen"
            className="px-8 h-14 flex items-center justify-center rounded-button-a border border-white/50 text-white font-inter font-medium tracking-[0.75px] text-base hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
          >
            Leistungen entdecken
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-white/50 text-xs font-inter tracking-widest uppercase">Mehr entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="leistungen" className="py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-600 font-inter font-medium">
            Mein Angebot
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-heading-a mt-3 mb-4">
            Leistungen & Schwerpunkte
          </h2>
          <p className="font-inter text-moss-700/70 max-w-xl mx-auto leading-relaxed">
            Jeder Mensch trägt seine eigene Geschichte. Gemeinsam finden wir den Weg,
            der zu dir passt.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07} className="h-full">
              <div className="group h-full bg-white rounded-card-a p-7 border border-sage-100 hover:border-sage-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center group-hover:bg-sage-100 transition-colors">
                    <s.icon size={22} className="text-sage-600" />
                  </div>
                  {s.badge && (
                    <span className="text-[10px] uppercase tracking-widest font-inter font-semibold text-gold-600 bg-gold-300/20 px-2.5 py-1 rounded-full border border-gold-300/40">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-heading-a mb-2">{s.title}</h3>
                <p className="font-inter text-sm text-moss-700/65 leading-relaxed flex-1">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const qualifications = [
    'Master of Science, Psychologie',
    'Ausbildung zur Heilpraktikerin (Psychotherapie)',
    'EMDR-Zertifizierung',
    'Systemische Beratung & Coaching',
    'Traumasensible Yoga-Ausbildung',
    'Zertifizierte Achtsamkeitslehrerin (MBSR)',
  ]

  return (
    <section id="ueber-mich" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <FadeIn className="relative" y={40}>
            <div className="relative max-w-sm mx-auto lg:mx-0 outline-none">
              <div className="relative aspect-[3/4] rounded-card-a overflow-hidden shadow-2xl">
                <img
                  src="/corinna_portrait.jpeg"
                  alt="Portrait Corinna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-900/20 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-card-a shadow-xl px-5 py-4 border border-cream-100">
                <p className="font-playfair font-semibold text-heading-a text-sm">Corinna</p>
                <p className="font-inter text-sage-600 text-xs mt-0.5">Coach · Beratung und Begleitung</p>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.15}>
            <span className="text-xs uppercase tracking-[0.2em] text-sage-600 font-inter font-medium">
              Über mich
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-heading-a mt-3 mb-6 leading-[1.15]">
              Ein Herz für<br />
              <em className="italic font-medium text-highlight-about-a">echte Begegnung.</em>
            </h2>
            <div className="space-y-4 font-inter text-moss-700/75 leading-relaxed mb-8">
              <p>
                Ich weiß, wie es sich anfühlt, keinen sicheren Ort in sich zu haben. Wenn Nähe nicht wirklich Halt gibt – und man früh lernt, stark zu sein, statt gehalten zu werden.
              </p>
              <p>
                Meine eigene Geschichte ist geprägt von fehlender sicherer Bindung und schmerzhaften Erfahrungen, die lange keinen Raum hatten. Und gleichzeitig war da schon früh ein leiser, aber klarer Wunsch: verstehen, fühlen, helfen.
              </p>
              <p>
                Dieser Weg hat mich zunächst ins Ehrenamt geführt – unter anderem in die Arbeit mit Geflüchteten, wo ich Entspannungsangebote gegeben habe. Dort bin ich dem Thema Trauma auf eine tiefere Weise begegnet. Und ich habe erkannt, wie viele Menschen nicht „zu schwach", sondern zutiefst überfordert sind – von dem, was sie erlebt haben.
              </p>
              <p>
                Heute begleite ich Menschen auf ihrem Weg zurück in ein Gefühl von innerer Sicherheit. In Einzelstunden, im Paar- oder Gruppensetting schaffe ich einen Raum, in dem alles sein darf – ohne Druck, ohne Bewertung.
              </p>
              <p>
                In meine Arbeit fließen verschiedene Ansätze ein: Traumafachberatung, EMDR-Coaching, körperorientierte Methoden, Traumayoga sowie mein Hintergrund im Fitnesstraining. Denn ich bin überzeugt: Heilung passiert nicht nur im Verstehen – sondern vor allem im Körper.
              </p>
              <p>
                Ich glaube daran, dass Heilung möglich ist. Nicht, weil wir die Vergangenheit ungeschehen machen können – sondern weil wir lernen können, uns heute anders zu begegnen. Der erste Schritt beginnt oft ganz leise. Mit dem Wunsch, dass es so, wie es gerade ist, nicht bleiben muss.
              </p>
              <p>
                In meiner Begleitung geht es nicht darum, Dich „zu verändern" oder zu „reparieren". Sondern darum, gemeinsam einen Weg zu finden, auf dem Du Dich sicherer fühlen kannst – in Dir selbst und im Kontakt mit anderen.
              </p>
              <p>
                Wenn Du Dir einen Raum wünscht, in dem Du nichts leisten musst, sondern einfach da sein darfst – dann bist Du bei mir willkommen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {qualifications.map((q) => (
                <div key={q} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-sage-600" />
                  </div>
                  <span className="font-inter text-sm text-moss-700/70">{q}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > idx ? 1 : -1)
    setIdx((next + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const t = setInterval(() => go((idx + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [idx])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  }

  return (
    <section className="py-28 bg-gradient-to-br from-moss-800 to-moss-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-300 font-inter font-medium">
            Erfahrungen
          </span>
          <h2 className="font-playfair font-normal italic text-4xl md:text-5xl text-white mt-3">
            Was meine Klient:innen sagen
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Large quote mark */}
          <span className="absolute -top-6 -left-2 font-playfair text-[160px] leading-none text-sage-700/30 select-none pointer-events-none">
            "
          </span>

          <div className="relative min-h-[200px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={idx}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full text-center px-8"
              >
                <div className="flex justify-center mb-4 gap-1">
                  {Array.from({ length: testimonials[idx].stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-playfair text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
                  "{testimonials[idx].quote}"
                </p>
                <div>
                  <p className="font-inter font-semibold text-white text-sm">{testimonials[idx].name}</p>
                  <p className="font-inter text-white/50 text-xs mt-0.5">{testimonials[idx].city}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(idx - 1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === idx ? 'bg-sage-400 w-6' : 'bg-white/25 w-1.5'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(idx + 1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing & FAQ ────────────────────────────────────────────────────────────

function PricingFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pricing = [
    {
      title: 'Privatversicherung & Beihilfe',
      price: '100',
      unit: '/ 50 Min.',
      features: ['Erstattung durch private KV', 'Alle Leistungen', 'Kostenloser Erstkontakt'],
      cta: 'Termin anfragen',
      highlighted: false,
    },
    {
      title: 'Selbstzahler',
      price: '85',
      unit: '/ 50 Min.',
      features: ['Flexible Zahlungsarten', 'Alle Leistungen', 'Kostenloser Erstkontakt'],
      cta: 'Termin anfragen',
      highlighted: true,
    },
  ]

  return (
    <section id="preise" className="py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Pricing */}
        <FadeIn className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-600 font-inter font-medium">
            Transparenz
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-heading-a mt-3 mb-4">
            Preise & Konditionen
          </h2>
          <p className="font-inter text-moss-700/70 max-w-lg mx-auto">
            Keine versteckten Kosten. Ein kostenloses Erstgespräch ist immer möglich.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
          {pricing.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div
                className={`rounded-card-a p-8 h-full flex flex-col ${
                  p.highlighted
                    ? 'bg-sage-500 text-white shadow-xl shadow-sage-300/30'
                    : 'bg-white border border-sage-100 shadow-sm'
                }`}
              >
                <h3
                  className={`font-inter font-semibold text-sm mb-6 ${
                    p.highlighted ? 'text-white/80' : 'text-moss-700'
                  }`}
                >
                  {p.title}
                </h3>
                <div className="flex items-end gap-2 mb-6">
                  <span
                    className={`font-playfair font-bold text-5xl ${
                      p.highlighted ? 'text-white' : 'text-heading-a'
                    }`}
                  >
                    {p.price}€
                  </span>
                  <span
                    className={`font-inter text-sm mb-2 ${
                      p.highlighted ? 'text-white/60' : 'text-moss-600/60'
                    }`}
                  >
                    {p.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check
                        size={14}
                        className={p.highlighted ? 'text-white/80' : 'text-sage-500'}
                      />
                      <span
                        className={`font-inter text-sm ${
                          p.highlighted ? 'text-white/80' : 'text-moss-700/70'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`block text-center py-3 rounded-button-a font-inter font-semibold tracking-[0.75px] text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                    p.highlighted
                      ? 'bg-white text-sage-600 hover:bg-cream-50'
                      : 'bg-sage-500 text-white hover:bg-sage-600'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* FAQ */}
        <FadeIn className="text-center mb-10">
          <h2 className="font-playfair font-bold text-3xl text-heading-a">
            Häufige Fragen
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.05}>
              <div className="bg-white rounded-accordion-a border border-sage-100 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-inter font-medium text-heading-a text-sm">{f.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    {openFaq === i ? (
                      <Minus size={16} className="text-sage-500 flex-shrink-0" />
                    ) : (
                      <Plus size={16} className="text-sage-500 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="font-inter text-sm text-moss-700/70 leading-relaxed">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="kontakt" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.2em] text-sage-600 font-inter font-medium">
            Kontakt
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-heading-a mt-3 mb-4">
            Lass uns sprechen.
          </h2>
          <p className="font-inter text-moss-700/70 max-w-lg mx-auto mb-12 leading-relaxed">
            Das Erstgespräch ist kostenlos und unverbindlich. Melde dich einfach —
            ich freue mich auf dich.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { icon: Phone, label: 'Telefon', value: '+49 89 / 000 00 00', href: 'tel:+498900000000' },
              { icon: Mail, label: 'E-Mail', value: 'hallo@cnc-coaching.de', href: 'mailto:hallo@cnc-coaching.de' },
              { icon: MapPin, label: 'Adresse', value: 'Hiltensberger Str. 48, 80796 München', href: 'https://www.google.com/maps/search/?api=1&query=Hiltensberger+Str.+48,+80796+München' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === 'Adresse' ? '_blank' : undefined}
                rel={c.label === 'Adresse' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-6 p-6 bg-cream-50 rounded-card-a transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:bg-white group"
              >
                <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center transition-colors duration-200 group-hover:bg-sage-200">
                  <c.icon size={20} className="text-sage-600" />
                </div>
                <div>
                  <p className="font-inter text-xs text-sage-600 uppercase tracking-[1px] mb-0.5">{c.label}</p>
                  <p className="font-inter text-sm font-medium text-heading-a">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="mailto:hallo@cnc-coaching.de?subject=Anfrage%20Kostenloses%20Erstgespr%C3%A4ch"
            className="inline-block px-10 py-4 rounded-button-a bg-sage-500 hover:bg-sage-600 text-white font-inter font-semibold tracking-[0.75px] text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Jetzt Erstgespräch anfragen
          </a>
          <p className="font-inter text-sm text-moss-600/50 mt-4">
            Kostenlos · Unverbindlich · Ca. 20 Minuten
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-moss-900 text-white/60 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo className="text-white h-16 w-auto mb-4" />
            <p className="font-inter text-sm leading-relaxed">
              Psychologisches Coaching &amp; Traumafachberatung in München. Eröffnung Juni 2026.
            </p>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Leistungen', href: '#leistungen' },
                { label: 'Über mich', href: '#ueber-mich' },
                { label: 'Preise', href: '#preise' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-inter text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-white text-sm mb-4 uppercase tracking-widest">Adresse</h4>
            <address className="not-italic font-inter text-sm leading-loose">
              Hiltensberger Straße 48<br />
              80796 München<br />
              <a href="mailto:hallo@cnc-coaching.de" className="hover:text-white transition-colors">hallo@cnc-coaching.de</a>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-inter text-xs">© 2026 CnC – Corinna Coaching. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="font-inter text-xs hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function LandingA() {
  return (
    <div className="font-inter bg-cream-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <PricingFAQ />
      <Contact />
      <Footer />
    </div>
  )
}
