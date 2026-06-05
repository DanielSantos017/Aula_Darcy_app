export interface UnitData {
  id: number;
  unidade: string;
  regiao: string;
  ocupacao: number;
  estacoes: number;
  mensalidade: number;
  internet: number;
  nps: number;
  salas: number;
  eventos: number;
  tempo: number;
}

export const coworkingData: UnitData[] = [
  { id: 1, unidade: "Savassi - BH", regiao: "Sudeste", ocupacao: 82.0, estacoes: 120, mensalidade: 850, internet: 500, nps: 72, salas: 8, eventos: 12, tempo: 7 },
  { id: 2, unidade: "Vila Olímpia - SP", regiao: "Sudeste", ocupacao: 93.5, estacoes: 200, mensalidade: 1200, internet: 800, nps: 88, salas: 14, eventos: 20, tempo: 11 },
  { id: 3, unidade: "Centro - RJ", regiao: "Sudeste", ocupacao: 87.2, estacoes: 160, mensalidade: 980, internet: 650, nps: 80, salas: 10, eventos: 16, tempo: 9 },
  { id: 4, unidade: "Batel - Curitiba", regiao: "Sul", ocupacao: 76.4, estacoes: 100, mensalidade: 750, internet: 420, nps: 68, salas: 6, eventos: 10, tempo: 5 },
  { id: 5, unidade: "Moinhos - POA", regiao: "Sul", ocupacao: 72.0, estacoes: 85, mensalidade: 680, internet: 380, nps: 64, salas: 5, eventos: 8, tempo: 4 },
  { id: 6, unidade: "Pituba - Salvador", regiao: "Nordeste", ocupacao: 68.5, estacoes: 75, mensalidade: 600, internet: 320, nps: 60, salas: 4, eventos: 6, tempo: 3 },
  { id: 7, unidade: "Boa Viagem - Recife", regiao: "Nordeste", ocupacao: 65.0, estacoes: 70, mensalidade: 550, internet: 290, nps: 56, salas: 4, eventos: 5, tempo: 3 },
  { id: 8, unidade: "Asa Norte - Brasília", regiao: "Centro-Oeste", ocupacao: 80.0, estacoes: 110, mensalidade: 820, internet: 480, nps: 70, salas: 7, eventos: 11, tempo: 6 },
  { id: 9, unidade: "Setor Bueno - Goiânia", regiao: "Centro-Oeste", ocupacao: 74.5, estacoes: 90, mensalidade: 720, internet: 400, nps: 66, salas: 5, eventos: 9, tempo: 5 },
  { id: 10, unidade: "Cambuí - Campinas", regiao: "Sudeste", ocupacao: 84.0, estacoes: 130, mensalidade: 880, internet: 520, nps: 74, salas: 8, eventos: 13, tempo: 8 },
  { id: 11, unidade: "Centro - Floripa", regiao: "Sul", ocupacao: 74.0, estacoes: 88, mensalidade: 700, internet: 400, nps: 65, salas: 5, eventos: 8, tempo: 4 },
  { id: 12, unidade: "Meireles - Fortaleza", regiao: "Nordeste", ocupacao: 67.0, estacoes: 72, mensalidade: 580, internet: 310, nps: 58, salas: 4, eventos: 6, tempo: 3 },
  { id: 13, unidade: "Adrianópolis - Manaus", regiao: "Norte", ocupacao: 52.5, estacoes: 50, mensalidade: 450, internet: 200, nps: 42, salas: 3, eventos: 3, tempo: 1 },
  { id: 14, unidade: "Umarizal - Belém", regiao: "Norte", ocupacao: 50.0, estacoes: 45, mensalidade: 420, internet: 180, nps: 40, salas: 2, eventos: 2, tempo: 1 },
  { id: 15, unidade: "Faria Lima - SP", regiao: "Sudeste", ocupacao: 91.0, estacoes: 180, mensalidade: 1150, internet: 750, nps: 85, salas: 12, eventos: 18, tempo: 10 },
  { id: 16, unidade: "Botafogo - RJ", regiao: "Sudeste", ocupacao: 88.5, estacoes: 150, mensalidade: 1000, internet: 680, nps: 82, salas: 10, eventos: 15, tempo: 9 },
  { id: 17, unidade: "Água Verde - Curitiba", regiao: "Sul", ocupacao: 75.0, estacoes: 92, mensalidade: 730, internet: 410, nps: 66, salas: 5, eventos: 9, tempo: 5 },
  { id: 18, unidade: "Ponta Negra - Natal", regiao: "Nordeste", ocupacao: 60.5, estacoes: 60, mensalidade: 500, internet: 260, nps: 52, salas: 3, eventos: 4, tempo: 2 },
  { id: 19, unidade: "Praia do Canto - Vitória", regiao: "Sudeste", ocupacao: 78.0, estacoes: 105, mensalidade: 800, internet: 460, nps: 69, salas: 6, eventos: 10, tempo: 6 },
  { id: 20, unidade: "Renascença - São Luís", regiao: "Nordeste", ocupacao: 55.0, estacoes: 55, mensalidade: 470, internet: 220, nps: 45, salas: 3, eventos: 3, tempo: 2 },
  { id: 21, unidade: "Centro - Campo Grande", regiao: "Centro-Oeste", ocupacao: 70.0, estacoes: 80, mensalidade: 650, internet: 360, nps: 62, salas: 5, eventos: 7, tempo: 4 },
  { id: 22, unidade: "Manaíra - João Pessoa", regiao: "Nordeste", ocupacao: 62.5, estacoes: 65, mensalidade: 530, internet: 280, nps: 54, salas: 3, eventos: 5, tempo: 2 },
  { id: 23, unidade: "Gleba Palhano - Londrina", regiao: "Sul", ocupacao: 73.0, estacoes: 85, mensalidade: 700, internet: 390, nps: 64, salas: 5, eventos: 8, tempo: 4 },
  { id: 24, unidade: "Sul - Ribeirão Preto", regiao: "Sudeste", ocupacao: 80.5, estacoes: 110, mensalidade: 830, internet: 490, nps: 71, salas: 7, eventos: 11, tempo: 7 },
  { id: 25, unidade: "Itaim Bibi - SP", regiao: "Sudeste", ocupacao: 95.0, estacoes: 220, mensalidade: 1350, internet: 850, nps: 92, salas: 16, eventos: 22, tempo: 12 },
  { id: 26, unidade: "Jardins - Aracaju", regiao: "Nordeste", ocupacao: 58.0, estacoes: 55, mensalidade: 480, internet: 240, nps: 48, salas: 3, eventos: 4, tempo: 2 },
  { id: 27, unidade: "Popular - Cuiabá", regiao: "Centro-Oeste", ocupacao: 66.5, estacoes: 70, mensalidade: 600, internet: 330, nps: 58, salas: 4, eventos: 6, tempo: 3 },
  { id: 28, unidade: "Jóquei - Teresina", regiao: "Nordeste", ocupacao: 48.0, estacoes: 40, mensalidade: 400, internet: 170, nps: 38, salas: 2, eventos: 2, tempo: 1 },
  { id: 29, unidade: "América - Joinville", regiao: "Sul", ocupacao: 73.5, estacoes: 88, mensalidade: 710, internet: 400, nps: 65, salas: 5, eventos: 8, tempo: 4 },
  { id: 30, unidade: "Gonzaga - Santos", regiao: "Sudeste", ocupacao: 79.0, estacoes: 105, mensalidade: 810, internet: 470, nps: 70, salas: 7, eventos: 10, tempo: 6 },
  { id: 31, unidade: "Jatiúca - Maceió", regiao: "Nordeste", ocupacao: 63.0, estacoes: 65, mensalidade: 540, internet: 280, nps: 55, salas: 3, eventos: 5, tempo: 2 },
  { id: 32, unidade: "Centro - Porto Velho", regiao: "Norte", ocupacao: 45.0, estacoes: 35, mensalidade: 380, internet: 150, nps: 35, salas: 2, eventos: 1, tempo: 1 },
  { id: 33, unidade: "Zona 7 - Maringá", regiao: "Sul", ocupacao: 72.5, estacoes: 85, mensalidade: 690, internet: 390, nps: 64, salas: 5, eventos: 8, tempo: 4 },
  { id: 34, unidade: "Icaraí - Niterói", regiao: "Sudeste", ocupacao: 82.5, estacoes: 115, mensalidade: 860, internet: 510, nps: 73, salas: 8, eventos: 12, tempo: 7 },
  { id: 35, unidade: "Vila Mariana - SP", regiao: "Sudeste", ocupacao: 90.0, estacoes: 170, mensalidade: 1100, internet: 720, nps: 84, salas: 12, eventos: 17, tempo: 10 },
  { id: 36, unidade: "Centro - Uberlândia", regiao: "Sudeste", ocupacao: 75.5, estacoes: 95, mensalidade: 740, internet: 420, nps: 67, salas: 6, eventos: 9, tempo: 5 },
  { id: 37, unidade: "Derby - Recife", regiao: "Nordeste", ocupacao: 66.0, estacoes: 72, mensalidade: 560, internet: 300, nps: 57, salas: 4, eventos: 6, tempo: 3 },
  { id: 38, unidade: "Marista - Goiânia", regiao: "Centro-Oeste", ocupacao: 76.0, estacoes: 95, mensalidade: 740, internet: 430, nps: 67, salas: 6, eventos: 10, tempo: 5 },
  { id: 39, unidade: "Barra - Salvador", regiao: "Nordeste", ocupacao: 69.0, estacoes: 78, mensalidade: 620, internet: 340, nps: 61, salas: 4, eventos: 7, tempo: 3 },
  { id: 40, unidade: "Plano Diretor - Palmas", regiao: "Norte", ocupacao: 47.0, estacoes: 38, mensalidade: 390, internet: 160, nps: 36, salas: 2, eventos: 2, tempo: 1 },
];
