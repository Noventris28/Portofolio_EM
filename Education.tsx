import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import logoNobel from "@assets/Logo_nobel_1775542348793.png";
import logoDqLab from "@assets/Logo_Dq_lab_1775542348792.png";
import logoSGB from "@assets/logo_sgb_1775542348790.jpg";
import nobelCert1 from "@assets/Transkip_Nilai_nobel_1_1775542565313.jpg";
import nobelCert2 from "@assets/Transkip_Nilai_nobel_2_1775542565314.jpg";
import sgbCert1 from "@assets/Certifacte_Participation_SGB_1775542587905.png";
import sgbCert2 from "@assets/Certification_Completion_SGB_1775542587906.png";

type CertItem = { type: "image"; src: string } | { type: "pdf"; src: string };

const educations = [
  {
    degree: "BACHELOR OF MANAGEMENT",
    period: "2022-2024",
    institution: "Institut Teknologi dan Bisnis Nobel",
    logo: logoNobel,
    color: "bg-red-50",
    certs: [
      { type: "image" as const, src: nobelCert1 },
      { type: "image" as const, src: nobelCert2 },
    ],
  },
  {
    degree: "DATA ANALYST WITH MIC EXCEL",
    period: "Aug 2023 – Oct 2023",
    institution: "DqLab (Online Course)",
    logo: logoDqLab,
    color: "bg-cyan-50",
    certs: [
      { type: "pdf" as const, src: "/certificate-dqlab.pdf" },
    ],
  },
  {
    degree: "VIRTUAL ASSISTANT",
    period: "Sept 2025 – Nov 2025",
    institution: "SGB (Online Course)",
    logo: logoSGB,
    color: "bg-rose-50",
    certs: [
      { type: "image" as const, src: sgbCert1 },
      { type: "image" as const, src: sgbCert2 },
    ],
  },
];

function CertificateModal({
  certs,
  title,
  onClose,
}: {
  certs: CertItem[];
  title: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-border/40 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-4">
            {certs.map((cert, i) =>
              cert.type === "image" ? (
                <img
                  key={i}
                  src={cert.src}
                  alt={`${title} certificate ${i + 1}`}
                  className="w-full rounded-xl shadow-sm border border-border/30"
                />
              ) : (
                <div key={i} className="flex flex-col items-center gap-4 py-6">
                  <p className="text-muted-foreground text-sm">
                    This certificate is in PDF format.
                  </p>
                  <a
                    href={cert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    Open Certificate PDF
                  </a>
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Education() {
  const [activeCerts, setActiveCerts] = useState<{ certs: CertItem[]; title: string } | null>(null);

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            EDUCATION
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border/40 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-24 h-24 rounded-2xl ${edu.color} flex items-center justify-center mb-6 shadow-inner overflow-hidden p-2`}>
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                {edu.degree}
              </h3>

              <p className="text-sm font-semibold text-primary/80 mb-4 tracking-wide">
                {edu.period}
              </p>

              <p className="text-muted-foreground mb-6">
                {edu.institution}
              </p>

              <button
                onClick={() => setActiveCerts({ certs: edu.certs, title: edu.degree })}
                className="mt-auto inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <Award className="w-4 h-4" />
                Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {activeCerts && (
        <CertificateModal
          certs={activeCerts.certs}
          title={activeCerts.title}
          onClose={() => setActiveCerts(null)}
        />
      )}
    </section>
  );
}
