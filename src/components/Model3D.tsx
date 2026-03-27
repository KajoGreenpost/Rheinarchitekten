import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RotateCcw, ZoomIn, Move } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

export default function Model3D() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section className="py-24 bg-gradient-to-b from-th-dark to-th-darker text-th-on-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl text-th-on-dark mb-6 ${ts.sectionHeading}`}>
            3D Visualisierung
          </h2>
          <div className={`${ts.dividerLight} mx-auto mb-8`} />
          <p className="text-lg text-th-on-dark/70 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie Architektur in einer neuen Dimension. Drehen Sie das Modell mit der Maus,
            zoomen Sie hinein und erkunden Sie jedes architektonische Detail in Echtzeit.
          </p>
        </div>

        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative bg-gradient-to-br from-th-dark to-th-darker overflow-hidden shadow-2xl h-[500px] md:h-[700px] border border-th-on-dark/10">
            {/* @ts-ignore */}
            <model-viewer
              src={`${import.meta.env.BASE_URL}building2.glb`}
              alt="Architektonisches 3D-Modell"
              auto-rotate
              camera-controls
              shadow-intensity="1.2"
              shadow-softness="0.8"
              exposure="0.9"
              camera-orbit="45deg 65deg 105%"
              min-camera-orbit="auto auto 50%"
              max-camera-orbit="auto auto 300%"
              field-of-view="50deg"
              environment-image="neutral"
              interaction-prompt="auto"
              interaction-prompt-threshold="3000"
              loading="eager"
              touch-action="pan-y"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                outline: 'none',
              }}
            />

            <div className="absolute bottom-6 left-6 right-6 bg-th-darker/60 backdrop-blur-md p-5 rounded-lg border border-th-on-dark/10 pointer-events-none">
              <p className="text-sm text-th-on-dark/95 mb-2">
                <span className="font-semibold text-th-on-dark">Steuerung:</span>{' '}
                Ziehen zum Drehen &bull; Scroll/Pinch zum Zoomen &bull; Auto-Rotation aktiviert
              </p>
              <p className="text-xs text-th-on-dark/70">
                Interaktives Gebäude-Modell mit voller 3D-Navigation
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className={`${ts.featureCard} flex items-start gap-4`}>
              <div className="p-3 rounded-full bg-th-on-dark/10 shrink-0">
                <RotateCcw className="w-5 h-5 text-th-on-dark/80" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-th-on-dark mb-2">360° Ansicht</h4>
                <p className="text-th-on-dark/60 text-sm">
                  Vollständige Kontrolle über die Kameraansicht
                </p>
              </div>
            </div>
            <div className={`${ts.featureCard} flex items-start gap-4`}>
              <div className="p-3 rounded-full bg-th-on-dark/10 shrink-0">
                <ZoomIn className="w-5 h-5 text-th-on-dark/80" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-th-on-dark mb-2">Detail-Zoom</h4>
                <p className="text-th-on-dark/60 text-sm">
                  Erkunden Sie jedes Detail aus der Nähe
                </p>
              </div>
            </div>
            <div className={`${ts.featureCard} flex items-start gap-4`}>
              <div className="p-3 rounded-full bg-th-on-dark/10 shrink-0">
                <Move className="w-5 h-5 text-th-on-dark/80" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-th-on-dark mb-2">Hochauflösend</h4>
                <p className="text-th-on-dark/60 text-sm">
                  Detaillierte 3D-Darstellung in Echtzeit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
