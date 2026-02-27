import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Send, 
  Search, 
  FileCheck, 
  UserCheck,
  MessageCircle,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Pencil
} from "lucide-react";
import { useState } from "react";
import React from "react";

const WHATSAPP_NUMBER = "5521993889435";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20solicitar%20uma%20análise%20gratuita%20para%20emissão%20de%20DECORE.`;

const WHATSAPP_LINK_1 = `https://wa.me/5521993889435?text=Olá,%20gostaria%20de%20falar%20com%20o%20Contador%201.`;
const WHATSAPP_LINK_2 = `https://wa.me/5521968996088?text=Olá,%20gostaria%20de%20falar%20com%20o%20Contador%202.`;

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded-[2rem] p-8 md:p-12 max-w-lg w-full shadow-2xl"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl text-primary mb-4">Selecione um Contador</h3>
              <p className="text-slate-600">Escolha um de nossos especialistas disponíveis para iniciar seu atendimento imediato.</p>
            </div>
            <div className="grid gap-4">
              <a 
                href={WHATSAPP_LINK_1} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <UserCheck size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-primary group-hover:text-accent transition-colors">Contador Disponível 1</p>
                    <p className="text-xs text-success font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span> Online Agora
                    </p>
                  </div>
                </div>
                <MessageCircle size={20} className="text-slate-300 group-hover:text-accent" />
              </a>
              <a 
                href={WHATSAPP_LINK_2} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <UserCheck size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-primary group-hover:text-accent transition-colors">Contador Disponível 2</p>
                    <p className="text-xs text-success font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span> Online Agora
                    </p>
                  </div>
                </div>
                <MessageCircle size={20} className="text-slate-300 group-hover:text-accent" />
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
                <Pencil size={24} />
              </div>
              <span className="text-xl font-display font-bold text-primary">DECORE<span className="text-accent">Express</span></span>
            </div>

            {/* WhatsApp Button */}
            <div className="flex items-center">
              <button onClick={openSelection} className="btn-whatsapp py-2 px-4 text-sm">
                <MessageCircle size={18} />
                Fale no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                  100% Online & Seguro
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
                  Emitimos sua <span className="text-accent underline decoration-accent/30 underline-offset-8">DECORE</span> com rapidez e validade nacional
                </h1>
                <p className="text-lg text-slate-600 mb-8 mx-auto">
                  Comprove renda de forma ágil, 100% online, com suporte dedicado e contador certificado pelo CRC. Ideal para financiamentos, vistos e aberturas de conta.
                </p>
                <div className="flex justify-center">
                  <button onClick={openSelection} className="btn-whatsapp text-lg px-12 py-4 shadow-xl shadow-success/20 hover:scale-105 transition-transform">
                    <MessageCircle size={24} />
                    Falar com um Contador Agora
                  </button>
                </div>
                <div className="mt-10 flex flex-col items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                        className="w-8 h-8 rounded-full border-2 border-white" 
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <p>Mais de <span className="font-bold text-primary">2.500 DECOREs</span> emitidas este ano.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O que é DECORE Section */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl text-primary mb-6">O que é a DECORE?</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    A <span className="font-bold text-primary">DECORE</span> (Declaração Comprobatória de Percepção de Rendimentos) é o documento oficial utilizado por profissionais liberais, autônomos e empresários para comprovar seus rendimentos.
                  </p>
                  <p>
                    Diferente do holerite, que é exclusivo para funcionários CLT, a DECORE é emitida obrigatoriamente por um <span className="font-bold text-primary">Contador habilitado</span> através do sistema do Conselho Federal de Contabilidade (CFC).
                  </p>
                  <p>
                    Este documento tem validade jurídica e é amplamente aceito por bancos e instituições financeiras para:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-success shrink-0" />
                      Financiamentos e Empréstimos
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-success shrink-0" />
                      Abertura de Contas Bancárias
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-success shrink-0" />
                      Solicitação de Vistos
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-success shrink-0" />
                      Aluguel de Imóveis
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-200 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                  <FileCheck size={24} />
                </div>
                <h3 className="text-xl text-primary mb-4 font-bold">Importante saber:</h3>
                <p className="text-slate-600 text-sm mb-6">
                  A DECORE só pode ser emitida com base em documentação hábil e idônea, como extratos bancários, declarações de imposto de renda, notas fiscais ou livros-caixa.
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Segurança Garantida</p>
                  <p className="text-sm text-slate-700">
                    Cada DECORE possui um selo de <span className="font-bold">DHP (Declaração de Habilitação Profissional)</span>, garantindo que foi emitida por um profissional regularizado.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Por que escolher a DECORE Express?</h2>
              <p className="text-slate-600">Oferecemos a solução mais completa e segura para profissionais liberais, autônomos e empresários.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <ShieldCheck className="text-accent" size={32} />,
                  title: "Segurança Total",
                  desc: "Emitida por contador certificado com registro ativo no CRC."
                },
                {
                  icon: <Clock className="text-accent" size={32} />,
                  title: "Rapidez",
                  desc: "Análise imediata e entrega em até 24h úteis após envio dos dados."
                },
                {
                  icon: <Globe className="text-accent" size={32} />,
                  title: "100% Online",
                  desc: "Sem burocracia física. Tudo resolvido via WhatsApp ou e-mail."
                },
                {
                  icon: <CheckCircle2 className="text-accent" size={32} />,
                  title: "Validade Nacional",
                  desc: "Aceita em todas as instituições financeiras, públicas e privadas."
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-slate-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all group"
                >
                  <div className="mb-6 p-3 bg-slate-50 rounded-xl inline-block group-hover:bg-accent/10 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="processo" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">Como funciona o processo?</h2>
              <p className="text-slate-600">Simples, direto e transparente. Veja as etapas para ter seu documento em mãos.</p>
            </div>

            <div className="relative">
              {/* Connection Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    icon: <Send size={24} />,
                    title: "Envio de Dados",
                    desc: "Você envia os documentos básicos (CPF, extratos, IR)."
                  },
                  {
                    step: "02",
                    icon: <Search size={24} />,
                    title: "Análise Técnica",
                    desc: "Nossa equipe contábil valida as informações enviadas."
                  },
                  {
                    step: "03",
                    icon: <UserCheck size={24} />,
                    title: "Lançamento CFC",
                    desc: "Registramos a declaração no sistema oficial do Conselho."
                  },
                  {
                    step: "04",
                    icon: <FileCheck size={24} />,
                    title: "Emissão Digital",
                    desc: "Você recebe a DECORE assinada digitalmente pronta para uso."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-accent/20 relative">
                      {item.icon}
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl text-white mb-6">Pronto para comprovar sua renda sem complicações?</h2>
                <p className="text-slate-300 text-lg mb-10">
                  Evite atrasos, burocracia ou perda de oportunidades. Receba sua DECORE rápida, segura e com suporte de quem entende do assunto.
                </p>
                <div className="flex justify-center">
                  <button onClick={openSelection} className="btn-whatsapp bg-white text-success hover:bg-slate-100 text-lg px-12 py-4">
                    <MessageCircle size={24} />
                    Falar no WhatsApp Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl text-primary mb-4">O que dizem nossos clientes</h2>
              <p className="text-slate-600">Confiança se constrói com resultados. Veja a experiência de quem já utilizou nossos serviços.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ricardo Santos",
                  role: "Empresário Autônomo",
                  text: "Precisava de uma DECORE urgente para um financiamento imobiliário. O atendimento foi impecável e recebi o documento em menos de 12 horas."
                },
                {
                  name: "Mariana Lima",
                  role: "Profissional Liberal",
                  text: "Excelente serviço. Tudo muito transparente e seguro. O contador tirou todas as minhas dúvidas antes da emissão. Recomendo fortemente!"
                },
                {
                  name: "Carlos Eduardo",
                  role: "Consultor de Vendas",
                  text: "Fiquei surpreso com a facilidade. Enviei os documentos pelo WhatsApp e no dia seguinte já estava com a declaração válida em mãos."
                }
              ].map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://picsum.photos/seed/${idx + 50}/100/100`} 
                      className="w-12 h-12 rounded-full" 
                      alt={t.name}
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-bold text-primary">{t.name}</p>
                      <p className="text-xs text-slate-500 uppercase font-semibold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl text-primary mb-6">Solicite sua análise gratuita hoje mesmo</h2>
                <p className="text-slate-600 mb-10 text-lg">
                  Preencha o formulário ao lado ou entre em contato diretamente pelo WhatsApp. Nossa equipe está pronta para te atender.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Abrangência</p>
                      <p className="text-slate-500">Atendimento em todo o território nacional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Telefone / WhatsApp</p>
                      <p className="text-slate-500">(21) 99388-9435</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">E-mail</p>
                      <p className="text-slate-500">contato@decoreexpress.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center text-success mb-6">
                  <MessageCircle size={40} />
                </div>
                <h3 className="text-2xl text-primary mb-4">Atendimento Humanizado</h3>
                <p className="text-slate-600 mb-8">
                  Nossos contadores estão prontos para analisar sua documentação e emitir sua DECORE com total segurança.
                </p>
                <button onClick={openSelection} className="btn-whatsapp w-full text-lg py-5 shadow-lg shadow-success/20">
                  <MessageCircle size={24} />
                  Iniciar Atendimento via WhatsApp
                </button>
                <p className="mt-6 text-xs text-slate-400">
                  Tempo médio de resposta: menos de 5 minutos.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white">
                  <Pencil size={18} />
                </div>
                <span className="text-xl font-display font-bold">DECORE<span className="text-accent">Express</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Especialistas em emissão de DECORE online com rapidez, segurança e conformidade total com as normas do CFC. Atendimento em todo o território nacional.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Informações Legais</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-6">Atendimento</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent" />
                  (21) 99388-9435
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  contato@decoreexpress.com.br
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={16} className="text-accent" />
                  Atendimento em todo o Brasil
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} DECORE Express. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
            <p>Desenvolvido com foco em conversão.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noreferrer"
          className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle size={32} />
        </a>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noreferrer"
          className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
