import React, { useRef, useState, useEffect } from 'react';
import { 
  Menu, X, Check, MapPin, Star, ChevronDown, 
  ArrowRight, Phone, FileCheck,
  Calculator, TrendingUp, Coins, Building2, Percent, Users, ShieldCheck
} from 'lucide-react';
import { BENEFITS, SERVICES, CITIES, TESTIMONIALS, FAQS, WHATSAPP_LINK } from './constants';
import { Button } from './components/ui/Button';

// --- Hook for Scroll Animations ---
function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
}

// --- Navbar (Fixed) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 bg-[#0232ba] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0232ba]/20">2A</div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#0232ba]' : 'text-[#0232ba]'}`}>Contabilidade</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('benefits')} className="text-gray-600 hover:text-[#0232ba] font-medium transition-colors text-sm uppercase tracking-wide">Benefícios</button>
            <button onClick={() => scrollTo('about')} className="text-gray-600 hover:text-[#0232ba] font-medium transition-colors text-sm uppercase tracking-wide">Sobre</button>
            <button onClick={() => scrollTo('services')} className="text-gray-600 hover:text-[#0232ba] font-medium transition-colors text-sm uppercase tracking-wide">Serviços</button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-600 hover:text-[#0232ba] font-medium transition-colors text-sm uppercase tracking-wide">Depoimentos</button>
            <Button variant="whatsapp" onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="py-2 px-5 text-sm rounded-full font-bold">
              Falar no WhatsApp
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0232ba] p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl top-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollTo('benefits')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-[#0232ba] hover:bg-blue-50 rounded-lg">Benefícios</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-[#0232ba] hover:bg-blue-50 rounded-lg">Sobre</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-[#0232ba] hover:bg-blue-50 rounded-lg">Serviços</button>
            <button onClick={() => scrollTo('testimonials')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-[#0232ba] hover:bg-blue-50 rounded-lg">Depoimentos</button>
            <div className="pt-2">
              <Button variant="whatsapp" fullWidth onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="rounded-lg">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Content Sections ---

const Hero = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  // Generate random positions for background elements
  const floatingElements = React.useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 10}s`,
      size: 20 + Math.random() * 40,
      icon: i % 2 === 0 ? <Coins className="w-full h-full" /> : <Percent className="w-full h-full" />
    }));
  }, []);

  return (
    <div id="hero" ref={ref} className="bg-white min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Main Background Image - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden">
           <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
              alt="Contabilidade Mobile" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/60"></div>
        </div>

        {/* Main Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
           <img 
              src="https://images.unsplash.com/photo-1554224154-260327c00c19?auto=format&fit=crop&q=80&w=2072" 
              alt="Contabilidade Desktop" 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-[linear-gradient(to_right,#0232ba_1px,transparent_1px),linear-gradient(to_bottom,#0232ba_1px,transparent_1px)] animate-moving-grid"></div>
        
        {/* Rising Financial Symbols (Coins & Percents) */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((el) => (
            <div 
              key={el.id}
              className="animate-rise text-[#0232ba]/10 absolute"
              style={{
                left: el.left,
                animationDelay: el.delay,
                animationDuration: el.duration,
                width: `${el.size}px`,
                height: `${el.size}px`,
              }}
            >
              {el.icon}
            </div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center max-w-7xl mx-auto px-4 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mx-auto max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#0232ba] text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-blue-100">
            Especializado em PMEs
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0232ba] leading-tight mb-8 drop-shadow-sm">
            Contabilidade <br/><span className="text-[#0232ba] bg-blue-50/50 px-2 rounded-lg">Ágil e Segura</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Exclusiva para SG, Niterói, Maricá e Itaboraí. <br/>
            <strong className="font-semibold text-[#0232ba]">Cuidamos da burocracia</strong> enquanto você foca no crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button variant="whatsapp" onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="text-lg px-10 py-5 rounded-full shadow-xl shadow-[#0232ba]/10 hover:scale-105 transition-transform">
                👉 Fale Agora com o Contador
            </Button>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#0232ba]/30 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

const Benefits = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div id="benefits" ref={ref} className="py-24 bg-white px-4 relative">
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0232ba] tracking-tight">Por que escolher a 2A?</h2>
        <div className="w-24 h-1.5 bg-[#0232ba] mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {BENEFITS.map((benefit, index) => (
          <div 
            key={index} 
            className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="p-5 bg-blue-50 rounded-2xl shadow-inner group-hover:bg-[#0232ba] transition-colors duration-300">
                <div className="text-[#0232ba] group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-[#0232ba] transition-colors">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div id="about" ref={ref} className="py-24 bg-gray-50 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Equipe 2A Contabilidade" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0232ba]/50 to-transparent"></div>
             </div>
             {/* Float Card */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-float-slow hidden md:block border border-blue-50">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="w-10 h-10 text-[#0232ba]" />
                   <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Confiança</p>
                      <p className="text-lg font-bold text-[#0232ba]">100% Seguro</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
             <div className="inline-block px-4 py-1 bg-blue-100 text-[#0232ba] rounded-full text-sm font-bold mb-4">
                Sobre Nós
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-[#0232ba] mb-6 leading-tight">
                Mais do que contadores, <br/> parceiros do seu negócio.
             </h2>
             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A 2A Contabilidade nasceu com a missão de simplificar a vida do empreendedor. Sabemos que a burocracia pode ser um obstáculo, por isso oferecemos um atendimento ágil, humanizado e focado em resultados.
             </p>
             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa equipe é especializada nas particularidades fiscais de São Gonçalo, Niterói, Maricá e Itaboraí, garantindo que sua empresa esteja sempre em dia e pronta para crescer.
             </p>
             
             <ul className="space-y-4 mb-8">
                {[
                   "Atendimento personalizado via WhatsApp",
                   "Especialistas em Simples Nacional e PMEs",
                   "Tecnologia para agilizar seus processos"
                ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0232ba] flex items-center justify-center">
                         <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                   </li>
                ))}
             </ul>

             <Button onClick={() => window.open(WHATSAPP_LINK, '_blank')} className="rounded-full px-8 shadow-lg hover:shadow-xl">
                Conheça a 2A Contabilidade
             </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

const ServicesList = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div id="services" ref={ref} className="py-24 bg-[#0232ba] text-white relative overflow-hidden px-4">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
         <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Background Texture" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-10 animate-blob pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">Serviços Completos <br/> <span className="text-blue-200">Para sua Empresa</span></h2>
          <p className="text-blue-100 mb-10 text-lg">
             Deixe a parte chata com a gente. Oferecemos tudo o que você precisa para manter seu CNPJ regular e saudável.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 gap-y-4">
                {SERVICES.map((service, index) => (
                <div 
                    key={index} 
                    className={`flex items-center gap-4 group p-3 rounded-lg hover:bg-white/10 transition-colors`}
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#0232ba] flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-white">{service.title}</span>
                </div>
                ))}
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
           {/* Visual Cards */}
           <div className="relative group">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                 alt="Gestão Financeira" 
                 className="rounded-3xl shadow-2xl w-full h-64 object-cover border-4 border-white/20 group-hover:scale-[1.02] transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-xl">Gestão Eficiente</span>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                    className="bg-white text-[#0232ba] p-6 rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col justify-between h-48" 
                    onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                >
                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">Abertura</h4>
                        <p className="text-sm text-gray-500">CNPJ rápido e sem dor de cabeça.</p>
                    </div>
                    <ArrowRight className="self-end" />
                </div>

                <div 
                    className="bg-[#1e40af] text-white p-6 rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col justify-between h-48 border border-white/20" 
                    onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                >
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">Regularização</h4>
                        <p className="text-sm text-blue-100">Resolva pendências e evite multas.</p>
                    </div>
                    <ArrowRight className="self-end" />
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Region = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div id="region" ref={ref} className="py-24 bg-white px-4 relative overflow-hidden">
        {/* Subtle Map Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rio_de_Janeiro_in_Brazil.svg/1200px-Rio_de_Janeiro_in_Brazil.svg.png')] bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>

      <div className="text-center w-full max-w-4xl mx-auto transition-all duration-1000 relative z-10">
        <div className={`mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block p-4 rounded-full bg-blue-50 mb-6 shadow-sm">
                <MapPin className="w-8 h-8 text-[#0232ba]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0232ba] mb-6">Onde Atendemos</h2>
            <p className="text-xl text-gray-600">
            Foco regional para garantir um serviço <strong className="text-[#0232ba]">próximo e eficiente</strong>.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {CITIES.map((city, index) => (
            <div 
                key={index} 
                className={`bg-white aspect-square p-6 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col items-center justify-center hover:scale-105 transition-all duration-500 group cursor-default`}
                style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.8)',
                    transitionDelay: `${index * 150}ms`
                }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0232ba] transition-colors duration-300 shadow-sm">
                <MapPin className="text-[#0232ba] w-8 h-8 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-bold text-gray-800 text-lg group-hover:text-[#0232ba] transition-colors">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialProof = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div id="testimonials" ref={ref} className="py-24 bg-blue-50/50 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center text-[#0232ba] mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
                key={i} 
                className={`bg-white p-10 rounded-[2rem] relative hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-blue-50`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : i % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)',
                    transitionDelay: `${i * 200}ms`
                }}
            >
              <div className="absolute top-8 right-8 opacity-20">
                <Star size={48} className="text-[#0232ba] fill-[#0232ba]" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, r) => (
                  <Star key={r} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0232ba] to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                  {String.fromCharCode(65 + i)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Cliente Satisfeito</div>
                  <div className="text-xs text-[#0232ba] font-semibold uppercase tracking-wider">Verificado</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQAndFooter = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div ref={ref} className="py-24 bg-[#0232ba] text-white px-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Side: FAQ */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Dúvidas Frequentes</h2>
          <p className="text-blue-100 mb-8 text-lg">Respostas rápidas para você não perder tempo.</p>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-white text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-200 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 text-blue-100 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 py-5 pt-0' : 'max-h-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Final CTA & Footer */}
        <div className={`flex flex-col justify-between h-full space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
           <div className="bg-white text-[#0232ba] rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h3>
                <p className="text-gray-600 text-lg mb-10 max-w-sm mx-auto">Facilite sua vida empresarial hoje mesmo com a 2A Contabilidade.</p>
                <button 
                  onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                  className="bg-[#0232ba] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-full md:w-auto"
                >
                  <Phone className="w-6 h-6" />
                  Chamar no WhatsApp
                </button>
              </div>
           </div>

           <div className="text-center lg:text-right border-t border-white/20 pt-8">
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0232ba] font-bold text-xl">2A</div>
                <span className="text-white font-semibold text-xl tracking-tight">Contabilidade</span>
              </div>
              <p className="text-blue-200 text-sm">
                © {new Date().getFullYear()} Todos os direitos reservados. <br/>
                Atendendo São Gonçalo, Niterói, Maricá e Itaboraí.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

const WhatsAppFloater = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Contato WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
};

// --- Main Application ---

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Benefits />
      <AboutUs />
      <ServicesList />
      <Region />
      <SocialProof />
      <FAQAndFooter />
      
      {/* Fixed overlays */}
      <WhatsAppFloater />
    </div>
  );
}

export default App;
