import { officeInfo } from '../data';
import { X } from 'lucide-react';

interface DatenschutzProps {
  onClose: () => void;
}

export default function Datenschutz({ onClose }: DatenschutzProps) {
  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-th-light max-w-3xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-th-muted hover:text-th-heading transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-light text-th-heading mb-8">
            Datenschutzerklärung
          </h2>

          <div className="space-y-6 text-th-body text-sm leading-relaxed">
            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                1. Datenschutz auf einen Blick
              </h3>
              <h4 className="font-medium mt-4 mb-2">Allgemeine Hinweise</h4>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                2. Verantwortliche Stelle
              </h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-3">
                {officeInfo.name}<br />
                {officeInfo.partners}<br />
                {officeInfo.address.street}<br />
                {officeInfo.address.city}
              </p>
              <p className="mt-3">
                Telefon: {officeInfo.contact.phone}<br />
                E-Mail: {officeInfo.contact.email}
              </p>
              <p className="mt-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                3. Datenerfassung auf dieser Website
              </h3>

              <h4 className="font-medium mt-4 mb-2">Server-Log-Dateien</h4>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                4. Ihre Rechte
              </h3>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen
                  Daten zu verlangen
                </li>
                <li>
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung
                  Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen
                </li>
                <li>
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten
                  zu verlangen
                </li>
                <li>
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen
                </li>
                <li>
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen
                  und maschinenlesbaren Format zu erhalten
                </li>
                <li>
                  gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns
                  zu widerrufen
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                5. SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt
                und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-th-heading mb-3">
                6. Widerspruch gegen Werbe-Mails
              </h3>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
                wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
                rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
                etwa durch Spam-E-Mails, vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
