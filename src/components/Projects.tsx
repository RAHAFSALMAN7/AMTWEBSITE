import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Users, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Project = {
  id: number;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  results: { metric: string; value: string; description: string }[];
  testimonial: string;
  clientRole: string;
  image: string;
};

const Projects = () => {
  const { t, i18n } = useTranslation();

  // ✅ FIXED LANGUAGE HANDLING (supports ar-SA, en-US etc.)
  const language = i18n.language.startsWith("ar") ? "ar" : "en";

  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const projectsEn: Project[] = [
    {
      id: 1,
      title: 'King Faisal University Network',
      client: 'King Faisal University',
      year: '2024',
      category: 'Education / Campus Network',
      description: 'Full communication infrastructure and network solutions for multiple campus buildings with thousands of users.',
      fullDescription: 'AMT provided a full communication infrastructure for many new buildings at KFU...',
      technologies: ['IP/MPLS Networks', 'Voice Switches', 'Wireless LAN'],
      results: [
        { metric: 'Buildings Covered', value: '50+', description: 'Number of buildings integrated' },
        { metric: 'Users Supported', value: 'Thousands', description: 'Across campus' }
      ],
      testimonial: "AMT's implementation has revolutionized our campus communication.",
      clientRole: "IT Director",
      image: '/images/project1.jpg'
    }
  ];

  const projectsAr: Project[] = [
    {
      id: 1,
      title: 'شبكة جامعة الملك فيصل',
      client: 'جامعة الملك فيصل',
      year: '2024',
      category: 'تعليم / شبكة الحرم الجامعي',
      description: 'البنية التحتية الكاملة للاتصالات وحلول الشبكات.',
      fullDescription: 'قدمت AMT بنية تحتية كاملة للاتصالات...',
      technologies: ['شبكات IP/MPLS', 'محولات صوتية', 'شبكة LAN لاسلكية'],
      results: [
        { metric: 'المباني المغطاة', value: '50+', description: 'عدد المباني المدمجة' },
        { metric: 'المستخدمون', value: 'آلاف', description: 'على مستوى الحرم الجامعي' }
      ],
      testimonial: 'تنفيذ AMT أحدث ثورة في اتصالات الحرم الجامعي.',
      clientRole: 'مدير تقنية المعلومات',
      image: '/images/project1.jpg'
    }
  ];

  const projects = language === 'ar' ? projectsAr : projectsEn;

  const nextProject = () => {
    setIsAutoPlaying(false);
    setActiveProject(prev => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      ref={sectionRef}
      className="py-24 bg-[#E5E5E5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="text-center mb-16">
          <span className="text-[#EB2427] font-semibold">
            {t("projects.signatureProjects")}
          </span>
          <h1 className="text-5xl text-[#941B20] font-bold mt-4">
            {t("projects.transformativeTitle")}
          </h1>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-[#941B20]">
          <div className="relative h-96 overflow-hidden">
            <OptimizedImage
              src={projects[activeProject].image}
              alt={`${projects[activeProject].title} — featured project photography for AMT portfolio`}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
              priority
            />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">
                {projects[activeProject].title}
              </h3>
              <p>{projects[activeProject].description}</p>
            </div>

            <button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2">
              <ChevronLeft />
            </button>

            <button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2">
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
