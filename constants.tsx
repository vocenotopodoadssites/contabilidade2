import React from 'react';
import { FAQItem, ServiceItem, Testimonial } from './types';
import { CheckCircle2, FileText, TrendingUp, Users, ShieldCheck, MapPin, Calculator, Building2 } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/andersonandradecontador";

export const BENEFITS = [
  { text: "Atendimento rápido e humanizado", icon: <Users className="w-6 h-6 text-[#0232ba]" /> },
  { text: "Especializada em pequenas e médias empresas", icon: <Building2 className="w-6 h-6 text-[#0232ba]" /> },
  { text: "Contador disponível no WhatsApp", icon: <MessageCircleIcon className="w-6 h-6 text-[#0232ba]" /> },
  { text: "Suporte completo para CNPJ e obrigações", icon: <ShieldCheck className="w-6 h-6 text-[#0232ba]" /> },
  { text: "Preços acessíveis e planos mensais", icon: <TrendingUp className="w-6 h-6 text-[#0232ba]" /> },
  { text: "Experiência em negócios locais da região", icon: <MapPin className="w-6 h-6 text-[#0232ba]" /> },
];

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}

export const SERVICES: ServiceItem[] = [
  { title: "Abertura de empresas", icon: "building" },
  { title: "Emissão de nota fiscal", icon: "file" },
  { title: "Regularização de CNPJ e CPF", icon: "check" },
  { title: "Declarações mensais e anuais", icon: "calendar" },
  { title: "Escrituração e folha de pagamento", icon: "users" },
  { title: "Assessoria tributária e planejamento", icon: "chart" },
  { title: "Consultorias para MEI, ME e EPP", icon: "briefcase" },
];

export const CITIES = ["São Gonçalo", "Niterói", "Maricá", "Itaboraí"];

export const TESTIMONIALS: Testimonial[] = [
  { text: "Serviço rápido e muito atencioso.", rating: 5 },
  { text: "Abertura de empresa em menos de 48h!", rating: 5 },
  { text: "Me ajudou a colocar meu CNPJ em dia.", rating: 5 },
];

export const FAQS: FAQItem[] = [
  {
    question: "Quanto tempo demora para abrir minha empresa?",
    answer: "Depende da cidade, mas normalmente entre 24h e 72h."
  },
  {
    question: "Vocês atendem empresas MEI, ME e EPP?",
    answer: "Sim! Somos especialistas em pequenos e médios negócios."
  },
  {
    question: "Posso tirar dúvidas pelo WhatsApp?",
    answer: "Sim, atendimento direto com o contador."
  },
  {
    question: "O atendimento é somente local?",
    answer: "Sim, atuamos exclusivamente em SG / Niterói / Maricá / Itaboraí para garantir qualidade."
  }
];