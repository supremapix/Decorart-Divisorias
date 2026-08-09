
export interface Service {
  slug: string;
  imagem: string;
  titulo: string;
  texto: string; // Descrição curta para cards
  descricaoDetalhada: string; // Texto longo para a página de detalhes
  link: string;
  categoria: 'partitions' | 'drywall' | 'gypsum' | 'walls';
}

export interface Project {
  imagem: string;
  titulo: string;
  descricao: string;
  cta: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface FormularioContato {
  nome: string;
  telefone: string;
  email: string;
  bairro: string;
  servico: 'divisorias' | 'drywall' | 'forro-pvc' | 'sanca-gesso' | 'outro';
  mensagem: string;
}

export interface LocationData {
  name: string;
  slug: string;
  type: 'bairro' | 'cidade';
}

export interface Article {
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  data: string;
  imagem: string;
  tempoLeitura: string;
  categoria: string;
}
