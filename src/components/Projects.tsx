import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Users, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext'; // لازم يكون عندك LanguageContext

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
  const { language } = useLanguage();
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
      fullDescription: 'AMT provided a full communication infrastructure for many new buildings at KFU, including IP/MPLS switching networks, Voice Switches, Wireless LAN, Outside Plant copper/fiber, and In-building structured cabling with low voltage systems. The project involved 50 buildings, supporting NIC network, campus network, and MCCTV network.',
      technologies: ['IP/MPLS Networks', 'Voice Switches', 'Wireless LAN', 'Fiber Optic Cabling', 'Structured Cabling', 'Low Voltage Systems'],
      results: [
        { metric: 'Buildings Covered', value: '50+', description: 'Number of buildings integrated' },
        { metric: 'Users Supported', value: 'Thousands', description: 'Across campus' },
        { metric: 'Networks', value: '3', description: 'Separate NIC, campus, and MCCTV networks' },
        { metric: 'Completion', value: 'On-Time', description: 'Delivered within project schedule' }
      ],
      testimonial: "AMT's implementation has revolutionized our campus communication and connectivity. Reliable and efficient.",
      clientRole: "IT Director",
      image: '/images/project1.jpg'
    },
    {
      id: 2,
      title: 'YASREF Refinery Network',
      client: 'Yanbu Export Refinery (YASREF)',
      year: '2023',
      category: 'Industrial / Oil & Gas',
      description: 'Voice and data network across refinery including wireless LAN in a challenging safety-focused environment.',
      fullDescription: 'AMT delivered a comprehensive Voice & Data network across the YASREF refinery site, collaborating with multiple specialty contractors to meet indoor and outdoor plant communication needs. The solution ensures seamless integration with refinery sections and strict safety standards.',
      technologies: ['Voice & Data Networks', 'Wireless LAN', 'Industrial Network Integration', 'Project Management'],
      results: [
        { metric: 'Area Covered', value: 'Whole Site', description: 'Entire refinery site' },
        { metric: 'Network Types', value: 'Voice + Data', description: 'Integrated solutions' },
        { metric: 'Safety Compliance', value: '100%', description: 'Adhering to safety protocols' },
        { metric: 'Installation Success', value: 'Completed', description: 'Delivered with partners' }
      ],
      testimonial: "AMT's solution seamlessly connected our refinery network with exceptional safety compliance.",
      clientRole: "Project Manager",
      image: '/images/project2.jpg'
    }
  ];

  const projectsAr: Project[] = [
    {
      id: 1,
      title: 'شبكة جامعة الملك فيصل',
      client: 'جامعة الملك فيصل',
      year: '2024',
      category: 'تعليم / شبكة الحرم الجامعي',
      description: 'البنية التحتية الكاملة للاتصالات وحلول الشبكات لعدة مبانٍ جامعية مع آلاف المستخدمين.',
      fullDescription: 'قدمت AMT بنية تحتية كاملة للاتصالات للعديد من المباني الجديدة في جامعة الملك فيصل، بما في ذلك شبكات IP/MPLS، محولات صوتية، شبكة LAN لاسلكية، الأسلاك النحاسية والألياف الخارجية، والكابلات الهيكلية داخل المبنى مع أنظمة الجهد المنخفض. شمل المشروع 50 مبنى، دعم شبكات NIC، الشبكة الجامعية، وشبكة MCCTV.',
      technologies: ['شبكات IP/MPLS', 'محولات صوتية', 'شبكة LAN لاسلكية', 'كابلات ألياف ضوئية', 'كابلات هيكلية', 'أنظمة الجهد المنخفض'],
      results: [
        { metric: 'المباني المغطاة', value: '50+', description: 'عدد المباني المدمجة' },
        { metric: 'المستخدمون المدعومون', value: 'آلاف', description: 'على مستوى الحرم الجامعي' },
        { metric: 'الشبكات', value: '3', description: 'شبكات NIC، الجامعة، وMCCTV منفصلة' },
        { metric: 'إتمام المشروع', value: 'في الوقت المحدد', description: 'تم التسليم وفق الجدول الزمني للمشروع' }
      ],
      testimonial: 'تنفيذ AMT أحدث ثورة في اتصالات الحرم الجامعي لدينا. موثوق وفعال.',
      clientRole: 'مدير تقنية المعلومات',
      image: '/images/project1.jpg'
    },
    {
      id: 2,
      title: 'شبكة مصفاة ياسرف',
      client: 'مصفاة ينبع للتصدير (YASREF)',
      year: '2023',
      category: 'صناعة / نفط وغاز',
      description: 'شبكة صوت وبيانات عبر المصفاة بما في ذلك LAN لاسلكية في بيئة صارمة السلامة.',
      fullDescription: 'قدمت AMT شبكة صوت وبيانات شاملة عبر موقع مصفاة ياسرف، بالتعاون مع مقاولين متخصصين لتلبية احتياجات الاتصالات الداخلية والخارجية. يضمن الحل تكامل سلس مع أقسام المصفاة والالتزام الصارم بمعايير السلامة.',
      technologies: ['شبكات الصوت والبيانات', 'LAN لاسلكية', 'تكامل الشبكة الصناعية', 'إدارة المشاريع'],
      results: [
        { metric: 'المساحة المغطاة', value: 'الموقع كامل', description: 'كامل موقع المصفاة' },
        { metric: 'أنواع الشبكات', value: 'صوت + بيانات', description: 'حلول متكاملة' },
        { metric: 'الامتثال للسلامة', value: '100%', description: 'الالتزام بمعايير السلامة' },
        { metric: 'نجاح التركيب', value: 'تم الإنجاز', description: 'تم التسليم مع الشركاء' }
      ],
      testimonial: 'حل AMT ربط شبكة المصفاة بسلاسة مع التزام استثنائي بالسلامة.',
      clientRole: 'مدير المشروع',
      image: '/images/project2.jpg'
    }
  ];

  const projects = language === 'en' ? projectsEn : projectsAr;

  const nextProject = () => { setIsAutoPlaying(false); setActiveProject(prev => (prev + 1) % projects.length); };
  const prevProject = () => { setIsAutoPlaying(false); setActiveProject(prev => (prev - 1 + projects.length) % projects.length); };

  return (
    <section id="projects" dir={language === 'ar' ? 'rtl' : 'ltr'} ref={sectionRef} className="py-24 bg-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full border border-[#EB2427] mb-6">
            <Star className="w-4 h-4 text-[#EB2427]" />
            <span className="text-[#EB2427] font-semibold text-lg tracking-wide">
              {language === 'en' ? 'SIGNATURE PROJECTS' : 'مشاريع مميزة'}
            </span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-7xl text-[#941B20] mb-6 leading-tight">
            {language === 'en'
              ? <>Transformative <span className="text-[#EB2427]">Success Stories</span></>
              : <>قصص <span className="text-[#EB2427]">نجاح تحويلية</span></>}
          </h2>
          <p className="text-lg text-[#941B20]/80 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? "Discover how we've helped industry leaders achieve breakthrough results through innovative technology solutions and strategic partnerships."
              : 'اكتشف كيف ساعدنا قادة الصناعة على تحقيق نتائج مذهلة من خلال حلول تقنية مبتكرة وشراكات استراتيجية.'}
          </p>
        </div>

        {/* Main Project Showcase */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl overflow-hidden border border-[#941B20]">
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="bg-[#EB2427] px-4 py-2 rounded-full text-white text-sm font-semibold">{projects[activeProject].category}</div>
                  <div className="flex items-center text-white/90"><Calendar className="w-4 h-4 mr-2" /><span className="text-sm">{projects[activeProject].year}</span></div>
                  <div className="flex items-center text-white/90"><Users className="w-4 h-4 mr-2" /><span className="text-sm">{projects[activeProject].client}</span></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">{projects[activeProject].title}</h3>
                <p className="text-lg max-w-3xl">{projects[activeProject].description}</p>
              </div>

              {/* Navigation Arrows */}
              <button onClick={prevProject} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-[#EB2427]/80 transition-all duration-300 group">
                <ChevronLeft className="w-6 h-6 text-[#941B20] group-hover:text-white transition-transform" />
              </button>
              <button onClick={nextProject} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-[#EB2427]/80 transition-all duration-300 group">
                <ChevronRight className="w-6 h-6 text-[#941B20] group-hover:text-white transition-transform" />
              </button>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 text-[#941B20]">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">{projects[activeProject].fullDescription}</p>
                <div>
                  <h4 className="font-bold mb-4 text-lg">{language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].technologies.map((tech, idx) => (
                      <span key={idx} className="bg-[#EB2427]/20 text-[#EB2427] px-4 py-2 rounded-full text-sm font-medium border border-[#EB2427]/30">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-[#941B20]">
                  <blockquote className="italic text-lg mb-4 text-[#941B20]/90">"{projects[activeProject].testimonial}"</blockquote>
                  <cite className="font-medium text-[#EB2427]">— {projects[activeProject].clientRole}, {projects[activeProject].client}</cite>
                </div>

                {/* Key Results */}
                <div>
                  <h4 className="font-bold mb-6 text-lg">{language === 'en' ? 'Key Results' : 'النتائج الرئيسية'}</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {projects[activeProject].results.map((result, idx) => (
                      <div key={idx} className="text-center p-2 bg-white/5 rounded-xl border border-[#941B20] hover:bg-[#EB2427]/10 transition-colors duration-300 w-36">
                        <div className="text-2xl font-bold text-[#EB2427] mb-1">{result.value}</div>
                        <div className="font-medium mb-0.5">{result.metric}</div>
                        <div className="text-xs text-[#941B20]/70">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setShowModal(true)} className="w-full mt-6 bg-[#EB2427] text-white py-3 px-6 rounded-2xl font-semibold hover:bg-[#941B20] transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    {language === 'en' ? 'View Full Case Study' : 'عرض دراسة الحالة كاملة'}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsAutoPlaying(false); setActiveProject(index); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === index ? 'bg-[#EB2427] scale-125' : 'bg-[#941B20]/30 hover:bg-[#EB2427]/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-8 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#EB2427]/20">
              <X className="w-6 h-6 text-[#941B20]" />
            </button>
            <h2 className="text-3xl font-bold mb-4">{projects[activeProject].title}</h2>
            <p className="mb-4 text-[#4E4E50]/90">{projects[activeProject].fullDescription}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Technologies Used:' : 'التقنيات المستخدمة:'}</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, idx) => (
                  <span key={idx} className="bg-[#EB2427]/20 text-[#EB2427] px-3 py-1 rounded-full text-sm border border-[#EB2427]/30">{tech}</span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Key Results:' : 'النتائج الرئيسية:'}</h4>
              <ul className="list-disc list-inside text-[#4E4E50]/90">
                {projects[activeProject].results.map((res, idx) => (
                  <li key={idx}><strong>{res.metric}:</strong> {res.value} — {res.description}</li>
                ))}
              </ul>
            </div>
            <blockquote className="italic text-[#4E4E50]/80 mt-4">"{projects[activeProject].testimonial}"</blockquote>
            <cite className="block text-[#EB2427] font-medium mt-1">— {projects[activeProject].clientRole}, {projects[activeProject].client}</cite>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
