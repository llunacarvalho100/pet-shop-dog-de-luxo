/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BusinessInfo,
  CustomerReview,
  FaqItem,
  NeighborhoodRate,
  PetService,
} from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Pet Shop Dog de Luxo',
  slogan: 'Cuidado exclusivo, carinho de verdade e excelência estética para o seu pet.',
  phone: '1134283376',
  phoneFormatted: '(11) 3428-3376',
  phoneCallUrl: 'tel:+551134283376',
  whatsappNumber: '551134283376',
  whatsappUrl: 'https://wa.me/551134283376',
  address: 'R. Jaroslav Hajek, 104',
  neighborhood: 'Jardim Moreira',
  city: 'Guarulhos',
  state: 'SP',
  zipCode: '07082-190',
  plusCode: 'HF62+5R Guarulhos, SP',
  googleRating: 5.0,
  reviewCount: 354,
  openingHoursDescription: 'Segunda a Sábado: 08:00 às 18:00',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Pet+Shop+Dog+de+Luxo+R.+Jaroslav+Hajek+104+Guarulhos+SP',
};

export const PET_SERVICES: PetService[] = [
  {
    id: 'banho-tosa-completo',
    title: 'Banho & Tosa Estética',
    subtitle: 'Higiene profunda e acabamento refinado com produtos hipoalergênicos',
    category: 'hygiene',
    durationMinutes: 75,
    tag: 'Mais Procurado',
    description:
      'Banho com água morna termorregulada, shampoo neutro hipoalergênico, hidratação da pelagem, corte de unhas cuidadoso, limpeza auricular e tosa da raça ou tosa bebê.',
    highlights: [
      'Shampoos e condicionadores veganos e sem parabenos',
      'Secagem acústica com protetor auricular contra estresse',
      'Corte de unhas e limpeza de ouvidos com carinho',
      'Laço ou gravatinha artesanal de brinde',
    ],
    priceFrom: 65,
    featured: true,
  },
  {
    id: 'primeiro-banho-filhotes',
    title: 'Primeiro Banho & Cuidado Especial',
    subtitle: 'Adaptação afetuosa para filhotes e acolhimento para pets idosos',
    category: 'puppy',
    durationMinutes: 90,
    tag: 'Especialidade da Casa',
    description:
      'Wesley e nossa equipe tratam filhotes com paciência redobrada, sem pressa e com reforço positivo, garantindo que o pet ame os próximos banhos. O pet volta cheiroso e com miminho!',
    highlights: [
      'Ritmo respeitoso, sem barulho brusco nem traumas',
      'Carinho incondicional e pausa para descanso do pet',
      'Presentinho especial de boas-vindas para o filhote',
      'Suporte para pets idosos ou com mobilidade reduzida',
    ],
    priceFrom: 75,
    featured: true,
  },
  {
    id: 'taxi-dog-transporte',
    title: 'Serviço de Táxi Dog',
    subtitle: 'Buscamos e levamos com segurança climatizada no conforto do seu lar',
    category: 'transport',
    durationMinutes: 40,
    tag: 'Comodidade Total',
    description:
      'Transporte pet seguro com caixas individuais higienizadas e cinto de segurança pet. Atendemos com pontualidade Jardim Moreira, Cocaia, Paraventi, Bom Clima e regiões de Guarulhos.',
    highlights: [
      'Veículo próprio com ar-condicionado e ventilação',
      'Caixas individuais higienizadas a cada transporte',
      'Avisos em tempo real via WhatsApp na saída e entrega',
      'Disponibilidade pontual de Segunda a Sábado',
    ],
    priceFrom: 15,
    featured: true,
  },
  {
    id: 'boutique-farmacia',
    title: 'Boutique & Farmácia Pet',
    subtitle: 'Acessórios exclusivos, roupinhas, snacks saudáveis e medicamentos',
    category: 'boutique',
    durationMinutes: 20,
    tag: 'Exclusividade',
    description:
      'Seleção de lacinhos artesanais confeccionados à mão, roupas quentinhas, petiscos saudáveis, panettones caninos e itens de farmácia básica para a saúde do seu pet.',
    highlights: [
      'Lacinhos e gravatas artesanais temáticas e de luxo',
      'Roupinhas sob medida de alta costura pet',
      'Snacks selecionados e panettones caninos sazonais',
      'Farmácia com antipulgas, vermífugos e dermatológicos',
    ],
    priceFrom: 12,
  },
  {
    id: 'spa-hidratacao-ozonio',
    title: 'Hidratação & Spa de Ozônio',
    subtitle: 'Recuperação intensiva de pelos ressecados e alívio dermatológico',
    category: 'spa',
    durationMinutes: 45,
    tag: 'Tratamento Vip',
    description:
      'Tratamento focado na regeneração da derme e pelagem, combate odores naturais, reduz coceiras e deixa o pelo com brilho acetinado e toque aveludado duradouro.',
    highlights: [
      'Máscara reconstrutora com óleos essenciais naturais',
      'Ação antibacteriana e calmante para peles sensíveis',
      'Pelagem sedosa e perfume suave de longa fixação',
      'Recomendado para spitz, maltês, shih-tzu e yorkshire',
    ],
    priceFrom: 45,
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Alana Silva',
    location: 'Cocaia, Guarulhos',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'Procurei de última hora para buscar meu cachorro e me surpreendi! O Táxi Dog foi super pontual, o cuidado com ele foi impecável e ele voltou extremamente cheiroso e calmo. Parabéns pelo serviço!',
    serviceCategory: 'transport',
    avatarInitials: 'AS',
    highlightPhrase: 'Táxi Dog pontual e pet extremamente cheiroso',
  },
  {
    id: 'rev-2',
    author: 'Gabrielle Rodrigues',
    location: 'Jardim Moreira, Guarulhos',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'Foi o primeiro banho da minha filhotinha Laica e eu estava com o coração na mão. O Wesley e a equipe tiveram um carinho e paciência surreais! Ela saiu feliz da vida, cheirosa e ainda ganhou um presentinho lindo. Ganharam uma cliente fiel!',
    serviceCategory: 'puppy',
    avatarInitials: 'GR',
    highlightPhrase: '1º banho da Laica: carinho surreal do Wesley',
  },
  {
    id: 'rev-3',
    author: 'Gabriele Alves',
    location: 'Guarulhos - SP',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'A variedade da boutique é maravilhosa! Sempre compro lacinhos artesanais para minhas meninas lá e o preço é super justo. Além disso, a simpatia e educação dos donos é nota 10. Recomendo de olhos fechados!',
    serviceCategory: 'boutique',
    avatarInitials: 'GA',
    highlightPhrase: 'Boutique com lacinhos lindos e simpatia nota 10',
  },
  {
    id: 'rev-4',
    author: 'Marcos Oliveira',
    location: 'Jardim Bom Clima, Guarulhos',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'Levo meu Golden Retriever há meses. A tosa é perfeita, não usam sedativos e o cachorro entra e sai abanando o rabo. Profissionalismo e respeito com os animais como poucos lugares em Guarulhos.',
    serviceCategory: 'hygiene',
    avatarInitials: 'MO',
    highlightPhrase: 'Profissionalismo e respeito com os animais',
  },
  {
    id: 'rev-5',
    author: 'Patrícia Mendes',
    location: 'Paraventi, Guarulhos',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'O serviço de busca em casa (Táxi Dog) salva a minha rotina. São de total confiança, tratam os bichinhos como filhos e o banho dura a semana inteira. Nota máxima merecida!',
    serviceCategory: 'transport',
    avatarInitials: 'PM',
    highlightPhrase: 'Buscador confiável, tratam como filhos',
  },
  {
    id: 'rev-6',
    author: 'Renata Castro',
    location: 'Vila Rio, Guarulhos',
    rating: 5,
    relativeTime: 'Avaliação verificada no Google Maps',
    text: 'Minha cachorrinha idosa tem artrose e não pode com piso escorregadio nem correria. O cuidado e a atenção que tiveram com ela me emocionaram. Lugar limpo, organizado e com alma.',
    serviceCategory: 'puppy',
    avatarInitials: 'RC',
    highlightPhrase: 'Cuidado emocionante com pets idosos',
  },
];

export const NEIGHBORHOOD_RATES: NeighborhoodRate[] = [
  {
    id: 'jardim-moreira',
    name: 'Jardim Moreira (Sede)',
    estimatedMinutes: '5 a 10 min',
    feeAmount: 10,
    coverageArea: 'Zona Central / Próximo à loja',
    isHeadquarterZone: true,
  },
  {
    id: 'cocaia',
    name: 'Jardim Cocaia',
    estimatedMinutes: '10 a 15 min',
    feeAmount: 15,
    coverageArea: 'Zona Norte de Guarulhos',
    isHeadquarterZone: false,
  },
  {
    id: 'bom-clima',
    name: 'Jardim Bom Clima',
    estimatedMinutes: '10 a 15 min',
    feeAmount: 15,
    coverageArea: 'Zona Norte / Prefeitura',
    isHeadquarterZone: false,
  },
  {
    id: 'paraventi',
    name: 'Jardim Paraventi',
    estimatedMinutes: '10 a 18 min',
    feeAmount: 15,
    coverageArea: 'Região do Bosque',
    isHeadquarterZone: false,
  },
  {
    id: 'macedo',
    name: 'Macedo',
    estimatedMinutes: '15 a 20 min',
    feeAmount: 20,
    coverageArea: 'Região Central Leste',
    isHeadquarterZone: false,
  },
  {
    id: 'maia',
    name: 'Jardim Maia / Parque Renato Maia',
    estimatedMinutes: '12 a 20 min',
    feeAmount: 20,
    coverageArea: 'Região Nobre',
    isHeadquarterZone: false,
  },
  {
    id: 'centro',
    name: 'Centro de Guarulhos',
    estimatedMinutes: '15 a 25 min',
    feeAmount: 20,
    coverageArea: 'Região Central',
    isHeadquarterZone: false,
  },
  {
    id: 'vila-rio',
    name: 'Vila Rio de Janeiro',
    estimatedMinutes: '12 a 20 min',
    feeAmount: 18,
    coverageArea: 'Zona Norte',
    isHeadquarterZone: false,
  },
  {
    id: 'picanço',
    name: 'Picanço',
    estimatedMinutes: '15 a 22 min',
    feeAmount: 18,
    coverageArea: 'Região Oeste / Shopping',
    isHeadquarterZone: false,
  },
  {
    id: 'taboao',
    name: 'Taboão',
    estimatedMinutes: '20 a 30 min',
    feeAmount: 25,
    coverageArea: 'Zona Leste de Guarulhos',
    isHeadquarterZone: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funciona o serviço de Táxi Dog?',
    answer:
      'Nós agendamos o horário ideal para você. Nossa equipe busca seu pet no seu portão em caixa de transporte higienizada, climatizada e segura. Após o banho e tosa, avisamos pelo WhatsApp e devolvemos seu pet quentinho e perfumado na sua porta.',
  },
  {
    question: 'Meu filhote nunca tomou banho em pet shop. Ele vai ter medo?',
    answer:
      'Não se preocupe! O Wesley e toda a equipe do Dog de Luxo são especialistas em primeiro banho. A adaptação é gradual, com água na temperatura exata, secador silencioso em velocidade reduzida, muitos mimos e carinho para que seja uma memória positiva e gostosa.',
  },
  {
    question: 'Vocês atendem cães idosos ou com necessidades especiais?',
    answer:
      'Sim, com prioridade e cuidado redobrado! Adaptamos a mesa com tapetes antiderrapantes, respeitamos pausas caso o pet canse e realizamos a tosa higiênica e corte de unhas com delicadeza máxima para evitar desconfortos.',
  },
  {
    question: 'Qual é o horário de atendimento e localização?',
    answer:
      'Estamos na R. Jaroslav Hajek, 104 - Jardim Moreira, Guarulhos - SP (próximo ao Cocaia). Funcionamos de segunda a sábado das 08:00 às 18:00. Atendemos também ligações no (11) 3428-3376.',
  },
  {
    question: 'Quais produtos e cosméticos são utilizados no banho?',
    answer:
      'Utilizamos exclusivamente linhas profissionais hipoalergênicas, sem corantes agressivos nem parabenos, apropriadas para a pele sensível dos animais. Contamos também com hidratação profunda e tratamentos de ozonioterapia.',
  },
  {
    question: 'Como faço para agendar um horário com agilidade?',
    answer:
      'Basta clicar no botão "Agendar no WhatsApp" aqui na página. Você pode preencher os dados do pet pelo nosso formulário inteligente ou conversar diretamente com a nossa equipe no WhatsApp (11) 3428-3376.',
  },
];

export const getBusinessInfo = (): BusinessInfo => BUSINESS_DATA;
export const getPetServices = (): PetService[] => PET_SERVICES;
export const getCustomerReviews = (): CustomerReview[] => CUSTOMER_REVIEWS;
export const getNeighborhoodRates = (): NeighborhoodRate[] => NEIGHBORHOOD_RATES;
export const getFrequentlyAskedQuestions = (): FaqItem[] => FAQ_ITEMS;
