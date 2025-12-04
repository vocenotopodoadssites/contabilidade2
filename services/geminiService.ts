import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    // Only initialize if the key is present. In a real scenario, we handle the missing key gracefully in the UI.
    if (process.env.API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return ai;
};

export const generateAccountingAdvice = async (userQuestion: string): Promise<string> => {
  const client = getAIClient();
  
  if (!client) {
    return "O sistema de chat está temporariamente indisponível (Chave de API não configurada). Por favor, use o WhatsApp para contato.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: `Você é um assistente virtual da '2A Contabilidade', um escritório de contabilidade localizado no Rio de Janeiro (atendendo São Gonçalo, Niterói, Maricá e Itaboraí).
        
        Seu objetivo é tirar dúvidas BÁSICAS sobre abertura de empresas, MEI, ME, EPP e regularização de CPF/CNPJ.
        
        Regras:
        1. Seja cordial, profissional e breve.
        2. Se a pergunta for complexa, recomende fortemente falar com o contador Anderson Andrade pelo WhatsApp.
        3. Se perguntarem sobre preços, diga que depende do porte da empresa e peça para chamar no WhatsApp para um orçamento.
        4. Região de atendimento: Apenas SG, Niterói, Maricá e Itaboraí.
        5. Use formatação Markdown simples (negrito, listas) para facilitar a leitura.
        
        Link do WhatsApp para recomendar: https://wa.me/andersonandradecontador`,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não consegui processar sua resposta agora. Tente novamente ou chame no WhatsApp.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve um erro de conexão. Por favor, entre em contato diretamente pelo WhatsApp.";
  }
};
