import { officeInfo } from '../data';
import { X } from 'lucide-react';

interface ImpressumProps {
  onClose: () => void;
}

export default function Impressum({ onClose }: ImpressumProps) {
  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-th-light max-w-3xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-th-muted hover:text-th-heading transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-light text-th-heading mb-8">
            Impressum
          </h2>

          <div className="space-y-6 text-th-body">
            <div>
              <h3 className="text-xl font-medium text-th-heading mb-3">
                Angaben gemäß § 5 TMG
              </h3>
              <p className="font-medium">{officeInfo.name}</p>
              <p>{officeInfo.fullTitle}</p>
              <p>{officeInfo.partners}</p>
              <p className="mt-2">{officeInfo.address.street}</p>
              <p>{officeInfo.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-th-heading mb-3">Kontakt</h3>
              <p>Telefon: {officeInfo.contact.phone}</p>
              <p>Telefax: {officeInfo.contact.fax}</p>
              <p>E-Mail: {officeInfo.contact.email}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-th-heading mb-3">
                Berufsrechtliche Regelungen
              </h3>
              <p>Architektenkammer Nordrhein-Westfalen, BRD</p>
              <p className="mt-2">
                Baukammergesetz NRW, Durchführungsverordnung zum Baukammergesetz,
                Satzung der Architektenkammer NRW
              </p>
              <a
                href="http://www.aknw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-th-heading hover:opacity-70 transition-opacity inline-block mt-2"
              >
                www.aknw.de
              </a>
            </div>

            <div>
              <h3 className="text-xl font-medium text-th-heading mb-3">
                Berufshaftpflichtversicherung
              </h3>
              <p>Die Berufshaftpflichtversicherung besteht bei:</p>
              <p className="mt-2">
                [Name der Versicherung]<br />
                [Anschrift]<br />
                Geltungsbereich: Deutschland
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-th-heading mb-3">
                Haftungsausschluss
              </h3>

              <h4 className="font-medium mt-4 mb-2">Haftung für Inhalte</h4>
              <p className="text-sm leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h4 className="font-medium mt-4 mb-2">Haftung für Links</h4>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich.
              </p>

              <h4 className="font-medium mt-4 mb-2">Urheberrecht</h4>
              <p className="text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
