import { ArrowLeft } from 'lucide-react'
import Logo from './Logo'

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream-50 font-inter">
      {/* Header */}
      <header className="bg-white border-b border-cream-200">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo />
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-moss-700 hover:text-moss-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-playfair font-bold text-4xl text-heading-a mb-10">
          Impressum
        </h1>

        <section className="space-y-8 text-moss-700/80 leading-relaxed">
          <div>
            <h2 className="font-semibold text-moss-900 text-base mb-1">
              Angaben gemäß § 5 DDG
            </h2>
          </div>

          <div>
            <h3 className="font-semibold text-moss-900 text-sm uppercase tracking-wider mb-2">
              Name
            </h3>
            <p>Corinna [Nachname]</p>
          </div>

          <div>
            <h3 className="font-semibold text-moss-900 text-sm uppercase tracking-wider mb-2">
              Anschrift
            </h3>
            <p>
              [Strasse + Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-moss-900 text-sm uppercase tracking-wider mb-2">
              Kontakt
            </h3>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: <a
                href="mailto:[E-Mail-Adresse]"
                className="text-sage-600 hover:text-sage-800 transition-colors"
              >
                [E-Mail-Adresse]
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
