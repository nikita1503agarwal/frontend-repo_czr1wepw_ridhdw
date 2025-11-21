import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Menu, Play, Sparkles, Star, Twitter } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const primary = '#8C00FF'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/60 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="InkSpired Home">
          <div className="w-8 h-8 rounded-xl bg-[rgba(140,0,255,0.12)] ring-1 ring-[rgba(140,0,255,0.35)] grid place-items-center">
            <Sparkles size={18} color={primary} />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900">InkSpired</span>
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700" aria-label="Primary">
          <a href="#features" className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.5)] rounded-md px-1 py-1">Features</a>
          <a href="#pricing" className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.5)] rounded-md px-1 py-1">Pricing</a>
          <a href="#resources" className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.5)] rounded-md px-1 py-1">Resources</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/40 bg-white/70 text-slate-700">
            <Menu size={18} />
          </button>
          <a
            href="#pricing"
            aria-label="Start Free Trial"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[rgb(140,0,255)] text-white px-4 py-2 font-semibold shadow-lg shadow-purple-500/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(140,0,255,0.7)]"
          >
            Start Free Trial
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Background gradient meshes */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-60" style={{ background: 'radial-gradient(closest-side, rgba(140,0,255,0.18), rgba(140,0,255,0.08), transparent)' }} />

      {/* Spline 3D scene */}
      <div className="absolute inset-x-0 top-0 h-[520px] sm:h-[600px] md:h-[720px] lg:h-[760px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur-lg">
            <Star size={14} color={primary} />
            Trusted by 15,000+ creators
          </motion.div>
          <motion.h1 variants={item} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Write months of content in minutes.
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto">
            The only AI copywriter that learns your unique voice and optimizes for SEO instantly.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#pricing" aria-label="Start Free Trial"
               className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(140,0,255)] px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-[1.01] active:scale-[0.99] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(140,0,255,0.7)]">
              Start Free Trial
              <ArrowRight size={18} />
            </a>
            <button aria-label="Play Demo" className="inline-flex items-center gap-2 rounded-2xl border border-white/50 bg-white/70 px-6 py-3 text-slate-800 backdrop-blur-lg hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.6)]">
              <Play size={18} />
              Play Demo
            </button>
          </motion.div>

          {/* Floating glass mock UI */}
          <motion.div variants={item} className="mt-12 sm:mt-16 mx-auto max-w-4xl">
            <div className="relative rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg shadow-[0_10px_60px_-15px_rgba(140,0,255,0.25)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/40">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                <span className="ml-2 text-xs text-slate-500">InkSpired • AI Draft</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Sparkles size={16} color={primary} /> AI is typing…
                </div>
                <div className="mt-3 grid gap-3">
                  <div className="h-3 rounded bg-slate-900/10 w-[92%]" />
                  <div className="h-3 rounded bg-slate-900/10 w-[82%]" />
                  <div className="h-3 rounded bg-slate-900/10 w-[88%]" />
                  <div className="h-3 rounded bg-slate-900/10 w-[64%]" />
                </div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-50 text-[12px] text-slate-700 px-3 py-1 border border-white/60">
                  <span className="font-semibold" style={{ color: primary }}>Voice Match:</span>
                  99%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust logos */}
          <motion.div variants={item} className="mt-10 sm:mt-14">
            <p className="text-sm text-slate-500">As seen in</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
              {['IndieHacker','TechDaily','CreatorHub','RankMaster'].map((name) => (
                <div key={name} className="h-10 rounded-xl border border-white/50 bg-white/70 backdrop-blur-lg grid place-items-center text-slate-600 text-sm font-semibold">
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const cardBase = 'rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg p-6 md:p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]'
  return (
    <section id="features" className="relative py-20 sm:py-28" aria-label="Features">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Built to make you go viral</h2>
          <p className="mt-3 text-slate-600">Clone your voice, repurpose everywhere, and score higher on SEO — all in one place.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large card spanning 2 cols on desktop */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className={`md:col-span-2 ${cardBase}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Brand Voice Cloning</h3>
                <p className="mt-2 text-slate-600">Train InkSpired on your past posts. It learns to sound exactly like you—never robotic.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm text-slate-700 border border-white/60">
                  <Sparkles size={16} color={primary} /> Voice Match: <span className="font-semibold">99%</span>
                </div>
              </div>
              <div className="hidden md:block w-36 h-36 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-50 ring-1 ring-white/50" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.05 }} className={cardBase}>
            <h3 className="text-xl font-bold text-slate-900">Omnichannel Repurposing</h3>
            <p className="mt-2 text-slate-600">Turn 1 Blog into 10 Tweets, 1 LinkedIn post, and an IG caption instantly.</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-slate-600">
              {['Blog','X/Twitter','LinkedIn','Instagram','YouTube','Newsletter'].map(t => (
                <div key={t} className="rounded-xl border border-white/60 bg-white/70 px-3 py-2 text-center">{t}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className={cardBase}>
            <h3 className="text-xl font-bold text-slate-900">SEO & Virality Score</h3>
            <p className="mt-2 text-slate-600">Real-time grading for keyword density and hook strength.</p>
            <div className="mt-5">
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span>SEO Score</span>
                <span className="font-semibold" style={{ color: primary }}>A+</span>
              </div>
              <div className="mt-2 h-3 rounded-full bg-slate-200">
                <div className="h-3 rounded-full" style={{ width: '86%', background: 'linear-gradient(90deg, rgba(140,0,255,1), rgba(140,0,255,0.6))' }} />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
                <Sparkles size={16} color={primary} /> Hook strength: 9.2/10
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const step = (n, title, desc) => (
    <div className="rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg p-6">
      <div className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: 'rgba(140,0,255,0.12)', border: '1px solid rgba(140,0,255,0.35)' }}>
        <span className="font-bold text-slate-900">{n}</span>
      </div>
      <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  )
  return (
    <section className="relative py-16 sm:py-24" aria-label="How it works">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">From idea to publish in 60 seconds</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {step(1, 'Pick Topic', 'Tell InkSpired what you want to write about or paste a link.')}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-0.5 border-t-2 border-dashed border-purple-300" aria-hidden="true" />
          </div>
          {step(2, 'Choose Tone', 'Select your voice — witty, bold, professional, or your own.')}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-0.5 border-t-2 border-dashed border-purple-300" aria-hidden="true" />
          </div>
          {step(3, 'Generate & Publish', 'Review, tweak, then publish everywhere with one click.')}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const tweets = [
    { name: 'Ava Moore', handle: '@avawrites', text: 'Scheduled a month of posts in one coffee break. Engagement up 3x. Wild.', avatar: '🅰️' },
    { name: 'Leo Carter', handle: '@leocreates', text: 'Voice cloning is scary good — my audience thought I wrote every word.', avatar: '🦁' },
    { name: 'Maya Chen', handle: '@maya_chen', text: 'The virality score is my new secret weapon. Two posts went viral this week.', avatar: '🌟' },
    { name: 'Dan Parker', handle: '@danbuilds', text: 'From blog to Twitter and LinkedIn in minutes. Saves me hours daily.', avatar: '🚀' },
  ]
  return (
    <section className="relative py-20" aria-label="Testimonials">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Creators are saving hours — and going viral</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tweets.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/40 bg-white/50 backdrop-blur-lg p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 grid place-items-center text-lg" aria-hidden="true">{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-600">{t.handle}</p>
                </div>
                <div className="ml-auto text-slate-400"><Twitter size={16} /></div>
              </div>
              <p className="mt-4 text-slate-700">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(false)
  const price = yearly ? 14.99 * 12 * 0.8 : 14.99
  const per = yearly ? 'yr' : 'mo'
  return (
    <section id="pricing" className="relative py-20 sm:py-28" aria-label="Pricing">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Start free, upgrade when you love it.</p>
        </div>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <span className={!yearly ? 'text-slate-900 font-semibold' : 'text-slate-600'}>Monthly</span>
          <button aria-label="Toggle billing period" onClick={() => setYearly(v => !v)} className="relative w-14 h-8 rounded-full bg-slate-200 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.6)]">
            <span className={`block w-6 h-6 rounded-full bg-white shadow transition-transform ${yearly ? 'translate-x-6' : ''}`} />
          </button>
          <span className={yearly ? 'text-slate-900 font-semibold' : 'text-slate-600'}>Yearly <span className="ml-1 rounded-full bg-purple-100 text-[10px] text-slate-800 px-2 py-0.5 align-middle">Save 20%</span></span>
        </div>

        {/* Main card */}
        <div className="mt-10 grid place-items-center">
          <div className="relative rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(140,0,255,0.35)] ring-1 ring-purple-200/60">
            <div className="absolute -inset-px rounded-3xl pointer-events-none" style={{ boxShadow: '0 0 80px -10px rgba(140,0,255,0.35) inset' }} />
            <h3 className="text-xl font-bold text-slate-900">Pro</h3>
            <p className="mt-1 text-slate-600">Everything you need to create, repurpose, and rank.</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-slate-900">${price.toFixed(yearly ? 0 : 2)}</span>
              <span className="mb-1 text-slate-600">/{per}</span>
            </div>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {['Unlimited words','SEO Mode','All templates','Brand voice cloning','One-click repurposing'].map(f => (
                <li key={f} className="flex items-center gap-2"><Check size={16} color={primary} /><span>{f}</span></li>
              ))}
            </ul>
            <a href="#" aria-label="Start Free Trial" className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[rgb(140,0,255)] px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(140,0,255,0.7)]">
              Start Free Trial
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Can I cancel anytime?', a: 'Yes, manage your subscription from settings and cancel whenever you like.' },
    { q: 'Does InkSpired learn my brand voice?', a: 'Upload samples of your content and InkSpired adapts to your style with Voice Cloning.' },
    { q: 'Is there a free trial?', a: 'Yes, start with a free trial. No credit card required to begin.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="relative py-20" aria-label="FAQ">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-center">FAQs</h2>
        <div className="mt-8 divide-y divide-purple-200/50 rounded-2xl border border-purple-200/60 bg-white/70 backdrop-blur-lg">
          {faqs.map((f, i) => (
            <div key={i}>
              <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(140,0,255,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{f.q}</span>
                  <span className="text-slate-500">{open === i ? '−' : '+'}</span>
                </div>
              </button>
              <div id={`faq-${i}`} className={`px-6 pb-5 text-slate-700 ${open === i ? 'block' : 'hidden'}`}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="resources" className="relative mt-10 border-t border-white/40 bg-white/70 backdrop-blur-xl" aria-label="Footer">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[rgba(140,0,255,0.12)] ring-1 ring-[rgba(140,0,255,0.35)] grid place-items-center">
              <Sparkles size={18} color={primary} />
            </div>
            <div>
              <p className="font-extrabold text-slate-900">InkSpired</p>
              <p className="text-sm text-slate-600">Write months of content in minutes.</p>
            </div>
          </div>

          <form className="w-full max-w-md ml-auto" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup form">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex items-center gap-2">
              <input id="email" type="email" required placeholder="Enter your email" className="flex-1 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[rgba(140,0,255,0.5)]" />
              <button aria-label="Subscribe" className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(140,0,255)] px-5 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(140,0,255,0.7)]">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} InkSpired. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
