import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import AnimatedText from "./AnimatedText";

const certificates = [
  {
    id: 1,
    title: "Development & UI/UX Internship Program",
    issuer: "Alive LLC",
    date: "July 2026 – September 2026",
    description:
      "Completed Alive's 12-week Development & UI/UX Internship Program, designing screens, prototypes, and animations in Figma within the company's design system.",
    imageSrc: "./images/alive-certificate.jpg",
  },
];

const CertificatesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 px-6 bg-secondary/50 transition-opacity duration-1000 opacity-0 translate-y-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText>
            <h2 className="text-3xl font-bold">
              <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4">
                Certificates
              </span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={300}>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Recognition & Completed Programs
            </h3>
          </AnimatedText>
        </div>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <AnimatedText key={cert.id} delay={500 + index * 200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl border border-border bg-background shadow-sm p-6 md:p-8">
                {/* Opens the full-size certificate in a new tab */}
                <a
                  href={cert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden border shadow-md transition-transform duration-500 hover:-translate-y-1"
                  aria-label={`View full ${cert.title} certificate`}
                >
                  <img
                    src={cert.imageSrc}
                    alt={`${cert.title} certificate from ${cert.issuer} awarded to Paige Swarthout`}
                    className="w-full h-auto"
                  />
                </a>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <Award className="h-5 w-5" />
                    <span className="text-sm font-semibold">{cert.issuer}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                  <a
                    href={cert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
