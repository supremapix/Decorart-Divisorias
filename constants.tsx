
import React from 'react';
import { Service, FAQItem, Project, Article } from './types';
import { Box, Zap, DollarSign, Truck, CheckCircle, Building2 } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Decorart Divisórias",
  phones: ["(41) 99632-4664", "(41) 98517-1966"],
  whatsapp: "https://wa.me/5541999267150?text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20*Google%20e%20gostaria%20de%20or%C3%A7amento%20de%20Divis%C3%B3rias%3A*",
  email: "contato@decorartdivisorias.com.br",
  address: "Av. Doutor Gastão Vidigal, 2950 - Capão Raso, Curitiba/PR",
  domain: "https://decorartdivisorias.com.br"
};

export const SERVICES: Service[] = [
  {
    slug: "divisorias-eucatex",
    categoria: "partitions",
    imagem: "https://img.supremasite.com.br/modern_office_curitiba.webp",
    titulo: "Divisórias em Eucatex em Curitiba",
    texto: "Divisórias modulares Eucatex de alta durabilidade e montagem limpa. Solução ideal para escritórios, salas comerciais, clínicas e empresas.",
    descricaoDetalhada: "As divisórias em Eucatex (Eucplac/Naval) são a solução líder absoluto para subdivisão de ambientes corporativos e comerciais em Curitiba e Região Metropolitana. Com postas por painéis modulares de 35mm e perfis de aço galvanizado estrutural, oferecem rápida montagem, excelente isolamento termoacústico e reaproveitamento total em caso de mudança de layout. Permitem rápida criação de salas de reunião, gerências e recepções sem a sujeira de obras tradicionais.",
    link: "/servicos/divisorias-eucatex"
  },
  {
    slug: "divisorias-escritorio",
    categoria: "partitions",
    imagem: "https://img.supremasite.com.br/eucatex_office_curitiba.webp",
    titulo: "Divisórias para Escritórios em Curitiba",
    texto: "Projetos e instalação sob medida de divisórias corporativas para salas de reunião, escritórios, consultórios e recepções no Batel, Centro e toda Curitiba.",
    descricaoDetalhada: "Especialmente desenvolvidas para o mercado corporativo de Curitiba, nossas divisórias para escritórios combinam estética refinada, privacidade acústica e versatilidade espacial. Disponíveis em acabamentos amadeirados, neutros ou com módulos de vidro, permitem organizar departamentos, estantes de trabalho e salas executivas com máximo aproveitamento de luz natural e conforto para a equipe.",
    link: "/servicos/divisorias-escritorio"
  },
  {
    slug: "divisorias-comerciais",
    categoria: "partitions",
    imagem: "https://img.supremasite.com.br/showroom_modular_partitions.webp",
    titulo: "Divisórias Comerciais em Curitiba",
    texto: "Divisórias para lojas, consultórios, clínicas, faculdades e indústrias em Curitiba. Soluções robustas para divisão rápida de espaços comerciais.",
    descricaoDetalhada: "Projetadas para atender comércios, clínicas, escritórios e galpões industriais em Curitiba e RMC, nossas divisórias comerciais garantem alta resistência ao uso intenso, facilidade de higienização e adequação às normas sanitárias e de segurança. Ideais para quem precisa inaugurar ou reestruturar um ponto comercial sem perder dias de faturamento.",
    link: "/servicos/divisorias-comerciais"
  },
  {
    slug: "drywall-profissional",
    categoria: "drywall",
    imagem: "https://img.supremasite.com.br/drywall_office_installation.webp",
    titulo: "Divisórias em Drywall e Gesso Acartonado",
    texto: "Paredes divisórias em Drywall para isolamento acústico e térmico superior. Acabamento liso pronto para pintura em residências e empresas.",
    descricaoDetalhada: "O sistema de paredes divisórias em Drywall (gesso acartonado) é a escolha perfeita para quem busca paredes com acabamento liso e idêntico à alvenaria, porém com instalação 3 vezes mais rápida. Utilizadas para separação de dormitórios, criação de closets, salas acústicas de reunião e divisões residenciais ou comerciais de alto padrão em Curitiba.",
    link: "/servicos/drywall-profissional"
  },
  {
    slug: "forro-modular-pvc",
    categoria: "walls",
    imagem: "https://img.supremasite.com.br/office_ceiling_mixed_panels.webp",
    titulo: "Forros Modulares em PVC e Mineral",
    texto: "Serviço complementar de instalação de forros em PVC e modulares, resistentes à umidade e de fácil manutenção para ambientes corporativos.",
    descricaoDetalhada: "Complementando nossas soluções de divisórias, oferecemos a instalação de forros modulares em PVC e fibra mineral para escritórios, comércios e depósitos em Curitiba. Proteção contra umidade, cupins e facilidade para passagem de fiações elétricas e dutos de ar-condicionado.",
    link: "/servicos/forro-modular-pvc"
  },
  {
    slug: "sanca-de-gesso",
    categoria: "gypsum",
    imagem: "https://img.supremasite.com.br/luxury_office_cove_lighting.webp",
    titulo: "Sancas de Gesso e Iluminação",
    texto: "Acabamentos decorativos e sancas de gesso para composição arquitetônica em projetos com divisórias e drywall em Curitiba.",
    descricaoDetalhada: "Valorização estética para tetos e ambientes integrados. Desenvolvemos sancas abertas, fechadas e rasgos de luz em LED que harmonizam perfeitamente com projetos de divisórias e drywall corporativos e residenciais.",
    link: "/servicos/sanca-de-gesso"
  }
];

export const ARTICLES: Article[] = [
  {
    slug: "tipos-de-divisorias-para-escritorios",
    titulo: "Tipos de Divisórias para Escritórios em Curitiba: Guia Completo 2026",
    resumo: "Descubra qual é a melhor opção de divisória para a sua empresa em Curitiba: Eucatex, Drywall, Vidro ou Biombos Modulares.",
    data: "05/02/2026",
    tempoLeitura: "5 min de leitura",
    categoria: "Divisórias Corporativas",
    imagem: "https://img.supremasite.com.br/office_dividers_showroom.webp",
    conteudo: `Organizar um ambiente corporativo exige planejamento inteligente do espaço. Em Curitiba, onde o mercado empresarial exige agilidade e requinte, a escolha do tipo certo de divisória impacta diretamente a produtividade e a acústica das equipes.

### 1. Divisórias de Eucatex (Naval)
A divisória de Eucatex é a mais utilizada em escritórios comerciais pela sua incrível relação custo-benefício. Composta por painéis modulares e perfis de aço galvanizado, permite montagem ultra-rápida sem geração de entulho. É ideal para salas administrativas, recepções e consultórios.

### 2. Divisórias em Drywall
Se o seu objetivo é um acabamento idêntico ao de uma parede de alvenaria, com pintura lisa ou papel de parede, o Drywall é a indicação perfeita. Permite a inclusão de lã de rocha no miolo para isolamento acústico de alto padrão em salas de reunião executivas.

### 3. Divisórias com Módulos de Vidro
Combinar divisórias de Eucatex ou Drywall com visores em vidro temperado ou laminado permite a passagem de luz natural entre salas, garantindo sensação de amplitude e elegância para escritórios modernos.

### Como escolher para sua empresa em Curitiba?
Considere o prazo disponível para a obra, a necessidade de isolamento acústico e se o imóvel é próprio ou alugado. As divisórias de Eucatex, por exemplo, podem ser 100% desmontadas e reaproveitadas em outro imóvel.`
  },
  {
    slug: "como-escolher-divisorias-para-empresas",
    titulo: "Como Escolher Divisórias para Empresas e Ambientes Corporativos",
    resumo: "Passo a passo prático para gestores e arquitetos planejarem divisórias em salas comerciais e escritórios em Curitiba.",
    data: "28/01/2026",
    tempoLeitura: "4 min de leitura",
    categoria: "Guia Empresarial",
    imagem: "https://img.supremasite.com.br/eucatex_office_curitiba.webp",
    conteudo: `Mudar o layout ou criar novos departamentos na sua empresa não precisa ser sinônimo de pesadelo com obras demoradas. As divisórias modulares transformam metros quadrados em espaços funcionais em questão de poucas horas.

### Fatores cruciais na escolha:
1. **Intenção do Espaço**: Salas de diretoria pedem privacidade e isolamento acústico superior (Drywall com lã mineral ou Eucatex reforçado).
2. **Flexibilidade Futura**: Se sua equipe costuma crescer ou mudar de layout, opte por sistemas modulares Eucatex que aceitam remanejamento rápido.
3. **Prazo de Execução**: Com a Decorart Divisórias, uma sala comercial de 100m² pode ser totalmente dividida em apenas 2 a 3 dias úteis.
4. **Adequação às Normas**: Verifique os requisitos de circulação, saídas de emergência e iluminação do seu condomínio comercial em Curitiba.`
  },
  {
    slug: "divisoria-eucatex-ou-drywall",
    titulo: "Divisória de Eucatex ou Drywall: Qual Escolher para Seu Projeto?",
    resumo: "Comparativo técnico completo entre divisória de Eucatex e parede em Drywall para você tomar a decisão certa.",
    data: "15/01/2026",
    tempoLeitura: "6 min de leitura",
    categoria: "Comparativo Técnico",
    imagem: "https://img.supremasite.com.br/drywall_office_installation.webp",
    conteudo: `Uma das dúvidas mais comuns de quem vai reformar um imóvel comercial ou residencial em Curitiba é: **devo instalar divisória de Eucatex ou parede de Drywall?**

### Divisória de Eucatex:
- **Instalação**: Pronta entrega, vem com acabamento de fábrica (branca, areia, carvalho, cinza).
- **Montagem**: Extremamente rápida, sem poeira ou necessidade de pintura.
- **Remoção**: Pode ser desmontada e remontada sem perda de peças.
- **Melhor Uso**: Escritórios, lojas, clínicas, depósitos e galpões.

### Paredes em Drywall:
- **Acabamento**: Liso e uniforme, pronto para receber pintura, textura ou papel de parede.
- **Desempenho Acústico**: Excelente quando instalado com lã de rocha interior.
- **Tubulações**: Permite embutir facilmente fiações elétricas, hidráulica e dutos.
- **Melhor Uso**: Salas executivas, divisões residenciais, clínicas médicas e salas de reunião.

Na Decorart Divisórias, auxiliamos você a selecionar a melhor opção para o seu orçamento e necessidade técnica.`
  },
  {
    slug: "quanto-custa-instalar-divisorias-curitiba",
    titulo: "Quanto Custa Instalar Divisórias em Curitiba em 2026?",
    resumo: "Entenda como é calculado o preço por metro quadrado de divisórias em Curitiba e como economizar sem perder qualidade.",
    data: "10/01/2026",
    tempoLeitura: "4 min de leitura",
    categoria: "Orçamento & Custo",
    imagem: "https://img.supremasite.com.br/showroom_modular_partitions.webp",
    conteudo: `O custo para instalação de divisórias em Curitiba varia de acordo com o tipo de material escolhido, a metragem total do ambiente, os acessórios (portas, visores de vidro, fechaduras) e o local da instalação.

### O que influencia no valor do m²?
1. **Tipo de Painel**: Painéis de Eucatex possuem custo por m² muito competitivo por virem pré-acabados. O Drywall exige etapas adicionais de tratamento de junta e pintura.
2. **Inclusão de Portas e Visores**: Cada porta completa com aduela e fechadura, ou módulo de vidro embutido, ajusta o valor total do orçamento.
3. **Acessibilidade e Horário da Obra**: Obras noturnas em shopping centers ou prédios com horários restritos exigem logística diferenciada.

Solicite um orçamento rápido com a equipe da Decorart Divisórias via WhatsApp para receber a cotação exata do seu projeto em poucas horas.`
  }
];

export const PROJECTS: Project[] = [
  {
    imagem: "https://img.supremasite.com.br/batel_office_interior.webp",
    titulo: "Escritório Corporativo Batel",
    descricao: "Projeto com divisórias de Eucatex e módulos com visores de vidro temperado para salas executivas no Batel.",
    cta: "Solicitar Orçamento Similar"
  },
  {
    imagem: "https://img.supremasite.com.br/corporate_hallway_curitiba.webp",
    titulo: "Centro Empresarial Rebouças",
    descricao: "Instalação de 350m² de divisórias modulares para criação de estações de trabalho e salas de reunião no Rebouças.",
    cta: "Ver Solução em Divisórias"
  },
  {
    imagem: "https://img.supremasite.com.br/clinic_interior_ecoville.webp",
    titulo: "Clínica Médica Ecoville",
    descricao: "Divisórias em Drywall acústico com isolamento em lã de rocha para consultórios no Ecoville / Campo Comprido.",
    cta: "Solicitar Igual"
  },
  {
    imagem: "https://img.supremasite.com.br/industrial_pavilion_interior.webp",
    titulo: "Pavilhão Industrial CIC",
    descricao: "Montagem de divisórias comerciais e forro modular para área administrativa de grande indústria na CIC.",
    cta: "Orçamento para Indústria"
  }
];

export const BENEFITS = [
  { icon: <Box size={32} />, title: "Especialista em Divisórias", description: "Foco absoluto no fornecimento e montagem de divisórias corporativas e comerciais." },
  { icon: <Zap size={32} />, title: "Montagem Rápida e Limpa", description: "Sistemas modulares sem entulho e sem necessidade de paralisação da sua empresa." },
  { icon: <DollarSign size={32} />, title: "Preço Direto de Fábrica", description: "Excelente custo-benefício por m² para projetos de todos os portes em Curitiba." },
  { icon: <Truck size={32} />, title: "Frota Própria e Agilidade", description: "Logística ágil garantindo cumprimento rigoroso de prazos em toda a RMC." },
  { icon: <CheckCircle size={32} />, title: "Garantia Estendida de 5 Anos", description: "Cobertura total com suporte técnico especializado e nota fiscal garantida." },
  { icon: <Building2 size={32} />, title: "Mais de 15 Anos de Tradição", description: "Tradição em Curitiba atendendo escritórios, clínicas, comércios e indústrias." }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    pergunta: "Quanto tempo leva para instalar divisórias em um escritório em Curitiba?",
    resposta: "Em média, um ambiente comercial de 100m² pode ter suas divisórias modulares de Eucatex instaladas em apenas 2 a 3 dias úteis, sem a poeira de obras tradicionais."
  },
  {
    pergunta: "Qual a diferença entre divisória de Eucatex e divisória em Drywall?",
    resposta: "A divisória de Eucatex é modular, rápida de montar, já vem pré-acabada de fábrica e permite reaproveitamento em caso de mudança. O Drywall é fixo, oferece acabamento idêntico à alvenaria e permite excelente isolamento acústico com lã mineral."
  },
  {
    pergunta: "A Decorart instala divisórias em escritórios e salas comerciais alugadas?",
    resposta: "Sim! Nossos sistemas de divisórias modulares de Eucatex são perfeitos para imóveis alugados, pois são fixados de forma não destrutiva e podem ser 100% removidos ao término do contrato de locação."
  },
  {
    pergunta: "Como solicitar um orçamento de divisórias em Curitiba?",
    resposta: "Basta entrar em contato via WhatsApp (41 99926-7150) ou telefone. Caso tenha a metragem ou planta baixa, enviamos o orçamento em poucas horas. Também realizamos visitas técnicas gratuitas em Curitiba e RMC."
  },
  {
    pergunta: "As divisórias de Eucatex possuem opção com portas e visores de vidro?",
    resposta: "Sim! Disponibilizamos portas completas combinando com a cor dos painéis, bem como quadros com visores de vidro simples, duplo ou temperado para passagem de iluminação natural."
  },
  {
    pergunta: "Qual é a garantia oferecida pela Decorart Divisórias?",
    resposta: "Oferecemos garantia de 5 anos em todas as nossas instalações de divisórias em Curitiba e Região Metropolitana, cobrindo alinhamento, estrutura e materiais."
  }
];

export const BAIRROS: string[] = [
  "Água Verde", "Batel", "Centro", "Rebouças", "Portão", "Capão Raso", 
  "CIC", "Boqueirão", "Xaxim", "Hauer", "Bigorrilho", "Cabral", 
  "Juvevê", "Alto da XV", "Cristo Rei", "Prado Velho", "Pinheirinho", 
  "Novo Mundo", "Fanny", "Guaíra", "Ecoville", "Campo Comprido", 
  "Santa Felicidade", "Pilarzinho", "Boa Vista", "Bacacheri", "Tarumã", 
  "Jardim Botânico", "Jardim das Américas", "Cajuru", "Mercês", "São Francisco",
  "Bom Retiro", "Centro Cívico", "Ahú", "Alto da Glória", "Hugo Lange",
  "Jardim Social", "Campina do Siqueira", "Seminário", "Santa Quitéria", "Fazendinha",
  "Sítio Cercado", "Alto Boqueirão", "Bairro Alto", "Santa Cândida", "Atuba", "Uberaba"
];

export const CIDADES: string[] = [
  "Curitiba", "São José dos Pinhais", "Araucária", "Pinhais", "Colombo", 
  "Fazenda Rio Grande", "Campo Largo", "Campina Grande do Sul", "Almirante Tamandaré", 
  "Quatro Barras", "Piraquara", "Campo Magro", "Balsa Nova", "Contenda", "Mandirituba"
];

