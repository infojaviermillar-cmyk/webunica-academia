import Image from 'next/image';
import LeadButton from '@/components/ui/LeadButton';
import { 
  Rocket, 
  Target, 
  Cpu, 
  Search, 
  CheckCircle2, 
  Play,
  Users,
  Star,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Academia Webunica | Cursos y Talleres de Shopify y E-commerce 2026',
  description: 'Lidera el mercado con formación de élite. Cursos de Shopify, Dropshipping, IA aplicada y SEO para tiendas online en Chile.',
  alternates: {
    canonical: 'https://cursos.webunica.cl',
  },
  openGraph: {
    title: 'Academia Webunica | Cursos y Talleres Pro',
    description: 'Formación de élite en Shopify, IA y Dropshipping para escalar tu negocio.',
    url: 'https://cursos.webunica.cl',
    siteName: 'Webunica Academia',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function CoursesLandingPage() {
  const stats = [
    { label: 'Estudiantes', value: '+500', icon: <Users className="w-5 h-5" /> },
    { label: 'Proyectos', value: '+120', icon: <Target className="w-5 h-5" /> },
    { label: 'Satisfacción', value: '4.9/5', icon: <Star className="w-5 h-5" /> },
    { label: 'Certificados', value: 'Oficial', icon: <Award className="w-5 h-5" /> },
  ];

  const categories = [
    {
      title: "Shopify Básico",
      tag: "Para Dueños",
      description: "Operación y gestión diaria. Carga de productos, pedidos y cupones sin depender de técnicos.",
      features: ["Gestión de Productos", "Colecciones Automatizadas", "Procesamiento de Pedidos", "Cupones y Descuentos"],
      icon: <Play className="w-6 h-6 text-emerald-500" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      btnColor: "bg-emerald-600 text-white hover:bg-emerald-700"
    },
    {
      title: "Shopify Avanzado",
      tag: "Personalización",
      description: "Arquitectura de Themes, Liquid y Metafields para personalizar la experiencia total.",
      features: ["Arquitectura Liquid", "Metafields & Metaobjects", "Shopify Markets", "Optimización de Carga"],
      icon: <Cpu className="w-6 h-6 text-violet-500" />,
      color: "bg-violet-50 text-violet-700 border-violet-100",
      btnColor: "bg-violet-600 text-white hover:bg-violet-700"
    },
    {
      title: "Dropshipping + IA",
      tag: "Vanguardia 2026",
      description: "Vende sin stock en Chile usando Dropi y automatiza el marketing con Inteligencia Artificial.",
      features: ["Integración Dropi Chile", "Selección de Ganadores", "Copys con ChatGPT", "Creativos con Midjourney"],
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50 text-blue-700 border-blue-100",
      btnColor: "bg-blue-600 text-white hover:bg-blue-700"
    },
    {
      title: "SEO para Tiendas",
      tag: "Tráfico Orgánico",
      description: "Domina Google Chile. Estrategias de posicionamiento técnico para e-commerce.",
      features: ["Keyword Research", "Silos Semánticos", "Indexación Técnica", "SEO On-Page Shopify"],
      icon: <Search className="w-6 h-6 text-amber-500" />,
      color: "bg-amber-50 text-amber-700 border-amber-100",
      btnColor: "bg-amber-600 text-white hover:bg-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased overflow-x-hidden">
      
      {/* Header / Nav Mockup */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100 h-20 flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-black italic">W</div>
            <span className="text-xl font-black uppercase tracking-tighter">Webunica <span className="text-violet-600">Academia</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-500">
            <a href="#cursos" className="hover:text-violet-600 transition-colors">Cursos</a>
            <a href="#metodo" className="hover:text-violet-600 transition-colors">Metodología</a>
            <a href="#faq" className="hover:text-violet-600 transition-colors">Preguntas</a>
            <LeadButton className="px-6 py-2.5 bg-zinc-950 text-white rounded-full">Inscribirse</LeadButton>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-40">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600">Educación de Ingeniería 2026</span>
              </div>
              
              <h1 className="text-5xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 uppercase text-zinc-950">
                MASTER EN <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">SHOPIFY</span> <br/>
                & IA.
              </h1>
              
              <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                No enseñamos teoría genérica. Te entregamos la <strong className="text-zinc-950">ingeniería operativa</strong> que usamos en Webunica para escalar tiendas en Chile. Shopify Básico, Avanzado e IA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <LeadButton className="px-12 py-5 bg-zinc-950 text-white font-black rounded-2xl hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-950/20 uppercase tracking-widest text-xs">
                  Cotizar mi Taller
                </LeadButton>
                <button 
                  onClick={() => window.open('https://wa.me/56984410379', '_blank')}
                  className="px-12 py-5 border border-zinc-200 text-zinc-950 font-black rounded-2xl hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs"
                >
                  Consultar por WhatsApp
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-zinc-100">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-violet-600">
                      {stat.icon}
                      <span className="text-2xl font-black text-zinc-950">{stat.value}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group hidden lg:block">
              <div className="absolute -inset-10 bg-gradient-to-tr from-violet-600/10 to-blue-600/10 rounded-[4rem] blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-zinc-50 border border-zinc-200 rounded-[4rem] p-4 shadow-2xl overflow-hidden">
                <div className="bg-white rounded-[3rem] p-10 h-[600px] flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-violet-600 rounded-full flex items-center justify-center text-white mb-8 animate-bounce">
                    <Play className="w-12 h-12 fill-current ml-2" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Clases en Vivo</h3>
                  <p className="text-zinc-500 font-light max-w-xs mx-auto">
                    Aprende con expertos que están en la trinchera del desarrollo todos los días.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="cursos" className="py-32 bg-zinc-50 rounded-[4rem] mx-4 border border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight text-zinc-900">
                Especialízate en <br/><span className="text-violet-600 italic font-serif lowercase font-light">lo que importa.</span>
              </h2>
              <p className="text-zinc-500 text-xl font-light max-w-2xl mx-auto">
                Programas intensivos diseñados para escalar facturación y automatizar procesos complejos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat, i) => (
                <div key={i} className="group p-10 bg-white rounded-[3.5rem] border border-zinc-100 hover:border-violet-500/30 transition-all hover:shadow-2xl hover:shadow-violet-900/5 flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <div className="mb-6 flex-grow">
                    <span className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-2 block">{cat.tag}</span>
                    <h3 className="text-2xl font-black text-zinc-950 mb-4 uppercase tracking-tight leading-none">{cat.title}</h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">{cat.description}</p>
                  </div>
                  <ul className="space-y-3 mb-10">
                    {cat.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-[11px] font-bold text-zinc-700 uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all ${cat.btnColor}`}>
                    Reservar Cupo
                  </LeadButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="metodo" className="py-40 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
            <div className="bg-zinc-900 rounded-[5rem] p-12 text-white relative overflow-hidden aspect-square flex flex-col justify-center">
               <div className="absolute top-10 right-10 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6">Metodología Academy</span>
               <h3 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
                  Sesiones <br/>1 a 1 <br/>en Vivo.
               </h3>
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  No vendemos cursos grabados que nadie termina. Nos conectamos contigo, resolvemos tus dudas en tiempo real y trabajamos sobre tu propio panel de Shopify.
               </p>
            </div>
          </div>

          <div className="space-y-12">
            {[
              { t: 'Personalización Total', d: 'Adaptamos el temario a tus necesidades específicas. Si ya sabes lo básico, saltamos directo a lo avanzado.' },
              { t: 'Grabación de por Vida', d: 'Todas nuestras sesiones se graban y se entregan en calidad 4K para que puedas consultarlas siempre.' },
              { t: 'Soporte Post-Taller', d: 'No te dejamos solo. Tienes acceso a nuestro canal privado para dudas técnicas después de terminar el programa.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 text-2xl font-black">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-black text-zinc-950 mb-2 uppercase tracking-tight">{item.t}</h4>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto bg-violet-600 rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(124,58,237,0.3)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
                ¿LISTO PARA EL <br/><span className="italic font-serif lowercase font-light text-violet-200">siguiente nivel?</span>
              </h2>
              <p className="text-xl text-violet-100 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Agenda una sesión de evaluación gratuita para diagnosticar qué nivel de formación necesita tu empresa o proyecto personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <LeadButton className="px-12 py-6 bg-white text-violet-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
                  Solicitar Consultoría
                </LeadButton>
                <button className="px-12 py-6 border border-white/30 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
                  Ver Catálogo PDF
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Mockup */}
      <footer className="py-20 border-t border-zinc-100 text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">© 2026 Webunica Academia - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
