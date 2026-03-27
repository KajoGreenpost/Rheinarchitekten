import { officeInfo } from '../data';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

export default function Contact() {
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section id="contact" className="py-24 bg-th-dark text-th-on-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl text-th-on-dark mb-6 ${ts.sectionHeading}`}>
            Kontakt
          </h2>
          <div className={`${ts.dividerLight} mx-auto`} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-8 tracking-wide">
              {officeInfo.name}
            </h3>
            <p className="text-th-on-dark/80 mb-2">{officeInfo.fullTitle}</p>
            <p className="text-th-on-dark/80 mb-12">{officeInfo.partners}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-th-on-dark/60 flex-shrink-0 mt-1" />
                <div>
                  <p>{officeInfo.address.street}</p>
                  <p>{officeInfo.address.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-th-on-dark/60 flex-shrink-0" />
                <a
                  href={`tel:${officeInfo.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-th-on-dark/70 transition-colors"
                >
                  {officeInfo.contact.phone}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Printer className="w-5 h-5 text-th-on-dark/60 flex-shrink-0" />
                <span>{officeInfo.contact.fax}</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-th-on-dark/60 flex-shrink-0" />
                <a
                  href={`mailto:${officeInfo.contact.email}`}
                  className="hover:text-th-on-dark/70 transition-colors"
                >
                  {officeInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
