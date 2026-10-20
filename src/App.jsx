// ============================================================
// TODO (David): Business name and contact email are TEMPORARY.
// Update BUSINESS_NAME and CONTACT_EMAIL below before submitting
// to Schwab (e.g. your LLC name and a business email).
// ============================================================
const BUSINESS_NAME = 'FoliGo' // TODO: change to final business / LLC name
const CONTACT_EMAIL = 'davidrc816@gmail.com' // TODO: change to final business email

const media = (file) => `${import.meta.env.BASE_URL}media/${file}`

const steps = [
  { title: 'Download FoliGo', body: 'Install the app from the App Store and open it.' },
  { title: 'Tap "Connect Schwab"', body: 'You choose when to link your account. Nothing connects until you start it.' },
  { title: 'Sign in on Schwab', body: "You log in on Schwab's own secure page and approve access. FoliGo never sees your Schwab password." },
  { title: 'View your data', body: 'Market data from your own Schwab connection appears in your dashboards, gauges, and backtests.' },
]

const does = [
  'Reads market data you authorize through your own Schwab account',
  'Lets you build custom metrics, like % change from the 200-week SMA',
  'Shows that data as gauges, charts, and dashboards',
  'Backtests your own metrics against historical prices',
]

const doesNot = [
  'Place, modify, or cancel orders',
  'Give investment advice or trade recommendations',
  'Auto-trade or manage money on your behalf',
  'Sell, share, or redistribute your data',
]

const screens = [
  { file: 'dashboard.jpg', label: 'Dashboard' },
  { file: 'metric-builder.jpg', label: 'Metric Builder' },
  { file: 'backtest.jpg', label: 'Backtest' },
  { file: 'distribution.jpg', label: 'Distribution Analysis' },
  { file: 'gauge-config.jpg', label: 'Gauge Setup' },
  { file: 'dashboard-dark.jpg', label: 'Dark Mode' },
]

// The FoliGo gauge mark, drawn as SVG so it stays sharp at any size.
function Mark({ className = 'h-8 w-8', needle = '#0F2B26' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M82.9 31 A38 38 0 1 1 66.06 15.56" fill="none" stroke="#C8AD7D" strokeWidth="9" strokeLinecap="round" />
      <polygon points="52.1,52.1 47.9,47.9 80,20" fill={needle} />
      <circle cx="50" cy="50" r="6.5" fill={needle} />
    </svg>
  )
}

function Logo({ dark = false }) {
  return (
    <span className="inline-flex items-center font-serif text-2xl font-bold tracking-tight">
      <span className={dark ? 'text-parchment' : 'text-pine'}>Foli</span>
      <span className="text-champagne">G</span>
      <Mark className="ml-0.5 h-6 w-6" needle={dark ? '#F7F5F1' : '#0F2B26'} />
    </span>
  )
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-champagne">{eyebrow}</p>}
        <h2 className="mb-8 font-serif text-3xl sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-pine/10 bg-parchment/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top"><Logo /></a>
          <div className="hidden gap-6 text-sm text-pine/80 sm:flex">
            <a href="#how" className="hover:text-pine">How it works</a>
            <a href="#scope" className="hover:text-pine">What it does</a>
            <a href="#privacy" className="hover:text-pine">Privacy</a>
            <a href="#contact" className="hover:text-pine">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero / Clear Purpose */}
        <section className="bg-pine px-4 py-16 text-parchment sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-champagne">Self-directed stock analysis</p>
              <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl">
                Your market data, <span className="text-champagne">at a glance.</span>
              </h1>
              <p className="mb-8 text-lg text-parchment/80">
                FoliGo is a personal stock market data and analysis tool for self-directed Schwab clients.
                You connect your own Schwab account to view market data, build custom metrics, and see them
                as simple gauges and charts.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#how" className="rounded-lg bg-champagne px-5 py-3 font-semibold text-ink hover:brightness-105">How it works</a>
                <a href="#contact" className="rounded-lg border border-parchment/30 px-5 py-3 font-semibold hover:bg-parchment/10">Contact</a>
              </div>
            </div>
            <video className="w-full rounded-2xl shadow-2xl ring-1 ring-champagne/30" src={media('jingle.mp4')} poster={media('jingle-poster.jpg')} controls playsInline preload="none" />
          </div>
        </section>

        {/* Self-Directed Statement */}
        <section className="border-b border-pine/10 bg-champagne/15 px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 font-serif text-2xl text-pine">You stay in control</h2>
            <p className="text-pine/90">
              FoliGo provides data and tools only. You make all investment decisions and place all trades
              yourself through your normal Schwab channels. FoliGo does not place orders, generate trade
              recommendations, or manage money.
            </p>
          </div>
        </section>

        {/* How It Works / User Flow */}
        <Section id="how" eyebrow="User flow" title="How it works">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-pine/10 bg-white p-5 shadow-sm">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-pine font-mono text-champagne">{i + 1}</span>
                <h3 className="mb-1 font-semibold text-pine">{s.title}</h3>
                <p className="text-sm text-ink/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">Every step is started by you. You can disconnect your Schwab account at any time.</p>
        </Section>

        {/* What the App Does / Does Not Do */}
        <Section id="scope" eyebrow="Scope" title="What FoliGo does, and does not do" className="bg-white">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-fern/30 bg-fern/5 p-6">
              <h3 className="mb-4 font-semibold text-fern">FoliGo does</h3>
              <ul className="space-y-3">
                {does.map((d) => (
                  <li key={d} className="flex gap-3"><span className="text-fern">✓</span><span>{d}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ember/30 bg-ember/5 p-6">
              <h3 className="mb-4 font-semibold text-ember">FoliGo does not</h3>
              <ul className="space-y-3">
                {doesNot.map((d) => (
                  <li key={d} className="flex gap-3"><span className="text-ember">✕</span><span>{d}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Screenshots + Demo */}
        <Section id="screens" eyebrow="Inside the app" title="See it in action">
          <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr]">
            <figure>
              <video className="w-full rounded-3xl border-4 border-ink shadow-xl" src={media('demo.mp4')} poster={media('demo-poster.jpg')} controls muted playsInline preload="none" />
              <figcaption className="mt-2 text-center text-sm text-ink/60">App walkthrough</figcaption>
            </figure>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {screens.map((s) => (
                <figure key={s.file}>
                  <img src={media(s.file)} alt={`FoliGo ${s.label} screen`} loading="lazy" className="w-full rounded-2xl border border-pine/10 shadow-md" />
                  <figcaption className="mt-2 text-center text-sm text-ink/60">{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        {/* Who It's For */}
        <Section id="who" eyebrow="Audience" title="Who it's for" className="bg-white">
          <p className="max-w-3xl text-lg text-ink/80">
            Self-directed Schwab brokerage clients who want better visibility into their own data. FoliGo is
            built for individual investors who research and make their own decisions, and want a clearer,
            faster way to track the numbers they care about.
          </p>
        </Section>

        {/* Privacy & Data Note */}
        {/* TODO (David): confirm these statements match how the app actually stores and handles data. */}
        <Section id="privacy" eyebrow="Privacy" title="Your data stays yours">
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-pine/10 bg-white p-5">
              <h3 className="mb-1 font-semibold text-pine">Your authorization only</h3>
              <p className="text-sm text-ink/70">Data is accessed only through the OAuth permission you grant on Schwab's website.</p>
            </li>
            <li className="rounded-2xl border border-pine/10 bg-white p-5">
              <h3 className="mb-1 font-semibold text-pine">No password access</h3>
              <p className="text-sm text-ink/70">You sign in directly with Schwab. FoliGo never receives or stores your Schwab credentials.</p>
            </li>
            <li className="rounded-2xl border border-pine/10 bg-white p-5">
              <h3 className="mb-1 font-semibold text-pine">Never redistributed</h3>
              <p className="text-sm text-ink/70">Your data is shown only to you. It is not sold, shared, or redistributed as a data feed.</p>
            </li>
          </ul>
        </Section>

        {/* About / Contact */}
        <section id="contact" className="bg-pine px-4 py-16 text-parchment">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-champagne">About</p>
              <h2 className="mb-4 font-serif text-3xl">{BUSINESS_NAME}</h2>
              <p className="text-parchment/80">
                FoliGo is built by an independent developer and investor who wanted a cleaner way to track
                valuation and trend metrics. The app is designed to help self-directed investors see their
                data clearly, while every decision stays with them.
              </p>
            </div>
            <div className="rounded-2xl bg-ink/40 p-6 ring-1 ring-champagne/20">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-champagne">Contact</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-lg text-parchment underline decoration-champagne underline-offset-4">{CONTACT_EMAIL}</a>
              <p className="mt-3 text-sm text-parchment/70">Questions about the app, data access, or partnership review are welcome.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-4 py-8 text-xs text-parchment/60">
        <div className="mx-auto max-w-5xl space-y-3">
          <Logo dark />
          <p>
            FoliGo is a data visualization and analysis tool and does not provide investment, tax, or legal advice.
            All investment decisions are made solely by the user. Past performance and backtests do not guarantee future results.
          </p>
          <p>
            FoliGo is not affiliated with, endorsed by, or sponsored by Charles Schwab &amp; Co., Inc. Schwab is a
            trademark of The Charles Schwab Corporation.
          </p>
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
