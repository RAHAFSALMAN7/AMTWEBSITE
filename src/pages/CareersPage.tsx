import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Award,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Wrench,
  Users,
  Send,
  Paperclip,
} from "lucide-react";

const BENEFIT_ICONS = [Award, GraduationCap, HeartPulse, Briefcase, Wrench, Users];
const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;

export default function CareersPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    linkedin: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_CV_SIZE_BYTES) {
      setCvError(t("careers.form.cvHint"));
      setCvFile(null);
      return;
    }
    setCvError("");
    setCvFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      areaOfInterest: "",
      linkedin: "",
      message: "",
    });
    setConsent(false);
    setCvFile(null);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const values = t("careers.values", { returnObjects: true }) as { title: string; text: string }[];
  const benefits = t("careers.benefits", { returnObjects: true }) as string[];
  const areas = t("careers.areas", { returnObjects: true }) as string[];
  const steps = t("careers.steps", { returnObjects: true }) as { title: string; text: string }[];

  const pageStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative w-full font-sans overflow-x-hidden text-white" style={pageStyle}>
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative py-40 flex items-center justify-center overflow-hidden">
          <div className="text-center px-6 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.15em]">
              {t("careers.heroTitle")}
            </h1>
            <div className="mt-4 w-24 h-[2px] bg-white/40 mx-auto rounded-full" />
            <p className="mt-8 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed">
              {t("careers.heroSubtitle")}
            </p>
            <a
              href="#apply"
              className="inline-block mt-10 bg-[#B3261E] hover:bg-[#8f1f19] text-white px-8 py-3 rounded font-semibold transition"
            >
              {t("careers.applyTitle")}
            </a>
          </div>
        </section>

        {/* WHY WORK WITH AMT */}
        <section className="py-24">
          <div className="container mx-auto px-6 fade-in">
            <div className="p-10 md:p-14 bg-white rounded-3xl shadow-xl text-[#1F2937] max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6B2C32]">
                {t("careers.introTitle")}
              </h2>
              <p className="text-lg leading-relaxed">{t("careers.introText")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values?.map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl shadow-xl text-center text-[#1F2937]"
                >
                  <h3 className="text-lg font-bold mb-3 text-[#6B2C32]">{value.title}</h3>
                  <p className="text-sm leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24">
          <div className="container mx-auto px-6 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
              {t("careers.benefitsTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits?.map((benefit, idx) => {
                const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-6 bg-white/10 border border-white/20 rounded-2xl"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#851A18] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </span>
                    <span className="text-white/90 font-medium">{benefit}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AREAS WE HIRE FOR */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">{t("careers.areasTitle")}</h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {areas?.map((area, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-white rounded-full text-[#1F2937] font-semibold shadow-lg"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section id="apply" className="py-24 scroll-mt-24">
          <div className="container mx-auto px-6 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {t("careers.applyTitle")}
            </h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t("careers.applyIntro")}
            </p>

            <div className="max-w-3xl mx-auto p-8 md:p-10 bg-white rounded-3xl shadow-xl text-[#1F2937]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    placeholder={t("careers.form.firstNamePlaceholder")}
                    aria-label={t("careers.form.firstName")}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border rounded"
                  />
                  <input
                    name="lastName"
                    placeholder={t("careers.form.lastNamePlaceholder")}
                    aria-label={t("careers.form.lastName")}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border rounded"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("careers.form.emailPlaceholder")}
                    aria-label={t("careers.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border rounded"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("careers.form.phonePlaceholder")}
                    aria-label={t("careers.form.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border rounded"
                  />
                </div>

                <select
                  name="areaOfInterest"
                  aria-label={t("careers.form.areaOfInterest")}
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded bg-white"
                >
                  <option value="" disabled>
                    {t("careers.form.areaOfInterestPlaceholder")}
                  </option>
                  {(t("careers.areas", { returnObjects: true }) as string[])?.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                  <option value="other">{t("careers.form.areaOfInterestOther")}</option>
                </select>

                <input
                  name="linkedin"
                  placeholder={t("careers.form.linkedinPlaceholder")}
                  aria-label={t("careers.form.linkedin")}
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-4 border rounded"
                />

                <textarea
                  name="message"
                  placeholder={t("careers.form.messagePlaceholder")}
                  aria-label={t("careers.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded h-28"
                />

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {t("careers.form.cvLabel")}
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer font-medium transition">
                      <Paperclip className="w-4 h-4" />
                      {t("careers.form.cvButton")}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                    </label>
                    <span className="text-sm text-[#1F2937]/70 truncate">
                      {cvFile ? cvFile.name : t("careers.form.cvNoFile")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#1F2937]/60">{t("careers.form.cvHint")}</p>
                  {cvError && <p className="mt-2 text-xs text-red-600">{cvError}</p>}
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1"
                  />
                  <span>{t("careers.form.consent")}</span>
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B3261E] hover:bg-[#8f1f19] text-white px-8 py-3 rounded font-semibold transition"
                >
                  <Send className="w-4 h-4" />
                  {t("careers.form.submitButton")}
                </button>
              </form>
            </div>
          </div>

          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="bg-green-600 text-white px-8 py-6 rounded-lg shadow-xl">
                {t("careers.form.successMessage")}
              </div>
            </div>
          )}
        </section>

        {/* HOW TO APPLY */}
        <section className="py-24 pb-32">
          <div className="container mx-auto px-6 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
              {t("careers.howToApplyTitle")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps?.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white text-[#851A18] font-bold text-xl flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
