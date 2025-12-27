
import React from 'react';
import { Service, FAQItem, Project } from './types';
import { Box, Zap, DollarSign, Truck, CheckCircle, Building2 } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Decorart Divisórias",
  phones: ["(41) 99632-4664", "(41) 98517-1966"],
  whatsapp: "https://wa.me/5541999267150?text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20*Google%20e%20gostaria%20de%3A*",
  email: "contato@decorartdivisorias.com.br",
  address: "Av. Doutor Gastão Vidigal, 2950 - Capão Raso, Curitiba/PR",
  domain: "https://decorartdivisorias.com.br"
};

export const SERVICES: Service[] = [
  {
    slug: "divisorias-eucatex",
    categoria: "partitions",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    titulo: "Divisórias em Eucatex",
    texto: "Divisórias modulares com excelente custo-benefício. Ideais para escritórios, clínicas e comércios.",
    descricaoDetalhada: "As divisórias em Eucatex são a solução líder para ambientes corporativos em Curitiba. Compostas por painéis de 35mm e perfis robustos, permitem criar salas sem a sujeira de obras tradicionais.",
    link: "/servicos/divisorias-eucatex"
  },
  {
    slug: "drywall-profissional",
    categoria: "drywall",
    imagem: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    titulo: "Drywall Profissional",
    texto: "Sistema de gesso acartonado para paredes e forros. Acabamento liso de alto padrão.",
    descricaoDetalhada: "O Drywall é a escolha premium para reformas modernas. Utilizamos placas de alta resistência, ideais para paredes acústicas e divisões de ambientes com execução 3x mais rápida.",
    link: "/servicos/drywall-profissional"
  },
  {
    slug: "forro-modular-pvc",
    categoria: "walls",
    imagem: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    titulo: "Forro Modular PVC",
    texto: "Forros em PVC resistentes à umidade e de fácil limpeza. Solução durável para áreas comerciais.",
    descricaoDetalhada: "Nossa linha de forros em PVC é projetada para oferecer durabilidade extrema em ambientes úmidos. Material imune a cupins e que não propaga chamas.",
    link: "/servicos/forro-modular-pvc"
  },
  {
    slug: "sanca-de-gesso",
    categoria: "gypsum",
    imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    titulo: "Sanca de Gesso e Iluminação",
    texto: "Valorização estética com sancas abertas e fechadas. Iluminação LED embutida.",
    descricaoDetalhada: "Transforme sua sala ou quarto com sancas de gesso personalizadas. A Decorart é especialista em acabamentos decorativos que integram iluminação indireta.",
    link: "/servicos/sanca-de-gesso"
  }
];

export const PROJECTS: Project[] = [
  {
    imagem: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    titulo: "Escritório Batel",
    descricao: "Projeto corporativo utilizando divisórias modulares com perfis de alumínio e vidro.",
    cta: "Ver Detalhes"
  },
  {
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    titulo: "Apartamento Champagnat",
    descricao: "Reforma completa de teto com drywall e sanca decorativa iluminada.",
    cta: "Solicitar Igual"
  },
  {
    imagem: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    titulo: "Clínica Ecoville",
    descricao: "Separação de salas de atendimento com drywall de alta resistência acústica.",
    cta: "Ver Detalhes"
  },
  {
    imagem: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    titulo: "Pavilhão CIC",
    descricao: "Instalação de forro modular PVC em grande escala para setor industrial.",
    cta: "Orçamento Rápido"
  }
];

export const BENEFITS = [
  { icon: <Box size={32} />, title: "Atendimento Imediato", description: "Atendimento comercial e técnico especializado" },
  { icon: <Zap size={32} />, title: "Facilidade", description: "Pagamento facilitado no cartão de crédito" },
  { icon: <DollarSign size={32} />, title: "Orçamentos", description: "Orçamentos rápidos direto de fábrica" },
  { icon: <Truck size={32} />, title: "Entrega", description: "Logística própria para agilidade na RMC" },
  { icon: <CheckCircle size={32} />, title: "Garantia", description: "Garantia estendida de cinco anos" },
  { icon: <Building2 size={32} />, title: "Tradição", description: "Equipe técnica certificada e experiente" }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    pergunta: "Quanto tempo leva para instalar divisórias em um escritório?",
    resposta: "Em média um escritório de 100m² pode ter suas divisórias instaladas em 3 a 5 dias úteis."
  },
  {
    pergunta: "Qual a diferença entre divisória de eucatex e drywall?",
    resposta: "O Eucatex é modular e rápido. O Drywall é fixo, permite pintura e oferece isolamento acústico superior."
  },
  {
    pergunta: "O forro de PVC é resistente à umidade?",
    resposta: "Sim! Totalmente imune à umidade, ideal para banheiros e cozinhas."
  }
];

export const BAIRROS: string[] = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", 
  "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", 
  "CIC Sul", "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", 
  "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", 
  "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", 
  "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", 
  "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", 
  "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", 
  "Centro", "Centro Cívico", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", 
  "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", 
  "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", 
  "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", 
  "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Vila Verde", "Vila Barigui", "Caiuá", "Vila Reno", "Vila Audi"
];

export const CIDADES: string[] = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", 
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", 
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná", "Curitiba"
];
