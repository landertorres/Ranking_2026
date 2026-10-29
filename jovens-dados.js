// Base de dados da aba Jovens — Resultados Classificação Geral
// area: "AVT" = Aventureiros | "DBV" = Desbravadores | "JA" = Jovens
// classificacao: calculada pelos pontos (regras do Ranking do AAmaR); vazio = abaixo de 2.000 pontos
const JOVENS_DADOS = [
  {
    "id": 8036,
    "clube": "ESTRELINHA DO REI",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 8046,
    "clube": "PEDRINHA ANGULAR - RP",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 8051,
    "clube": "TESOUROS DE JESUS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 10800
  },
  {
    "id": 8053,
    "clube": "GETSÊMANI AVT",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12400
  },
  {
    "id": 8054,
    "clube": "JÓIAS DE ISRAEL",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6800
  },
  {
    "id": 8055,
    "clube": "PRIMÍCIAS DO REINO",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8200
  },
  {
    "id": 8059,
    "clube": "PEQUENOS ARCANJOS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 10900
  },
  {
    "id": 8061,
    "clube": "CORDEIRINHOS DE CRISTO",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 7100
  },
  {
    "id": 8086,
    "clube": "QUERUBINS DO ÉDEN",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9600
  },
  {
    "id": 8091,
    "clube": "ÁGAPE - [12ª /AVT]",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8400
  },
  {
    "id": 8092,
    "clube": "PEQUENINOS DO REI",
    "area": "AVT",
    "regiao": "23ª R – ÁREA 10 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4500
  },
  {
    "id": 8093,
    "clube": "PEQUENOS GIGANTES",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9900
  },
  {
    "id": 8094,
    "clube": "PEQUENOS GIDEÕES",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4400
  },
  {
    "id": 8096,
    "clube": "LUMINARES",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 8097,
    "clube": "ESTRELA CELESTE",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 8101,
    "clube": "REINO CELESTE",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5100
  },
  {
    "id": 8110,
    "clube": "ARCO-ÍRIS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 8111,
    "clube": "PEQUENOS EXPLORADORES",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 8200
  },
  {
    "id": 8121,
    "clube": "ESTRELA",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11900
  },
  {
    "id": 8304,
    "clube": "GUARDIÕES DO PARAÍSO",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4800
  },
  {
    "id": 8306,
    "clube": "HERANÇA DO SENHOR - URUCURITUBA I",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9100
  },
  {
    "id": 8308,
    "clube": "JÓIAS DE CRISTO - PSP",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6200
  },
  {
    "id": 8310,
    "clube": "PEQUENOS ARAUTOS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12400
  },
  {
    "id": 8312,
    "clube": "LUZ FULGURANTE",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2600
  },
  {
    "id": 8318,
    "clube": "JÓIAS DE CRISTO - BEIJA FLOR",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5800
  },
  {
    "id": 8329,
    "clube": "PEQUENOS MENSAGEIROS",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3700
  },
  {
    "id": 8415,
    "clube": "SEMENTINHAS DE JESUS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 10400
  },
  {
    "id": 8461,
    "clube": "VOZ DO ARCANJO",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 10000
  },
  {
    "id": 8468,
    "clube": "ANAVILHANAS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12200
  },
  {
    "id": 8477,
    "clube": "AMIGOS DE JESUS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4900
  },
  {
    "id": 8482,
    "clube": "FRUTOS DA VIDEIRA",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 14806,
    "clube": "SEMEADORES",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5800
  },
  {
    "id": 16988,
    "clube": "TESOURO DO SENHOR",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6000
  },
  {
    "id": 17509,
    "clube": "PEQUENOS SENTINELAS",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6100
  },
  {
    "id": 17534,
    "clube": "PIONEIROS DO ADVENTO",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 17541,
    "clube": "PEQUENOS DISCIPULOS",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3800
  },
  {
    "id": 17560,
    "clube": "PROFETINHAS DE CRISTO",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12700
  },
  {
    "id": 17572,
    "clube": "ALIANÇA DO SENHOR",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2600
  },
  {
    "id": 17575,
    "clube": "FRUTO DA CRIAÇÃO",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8200
  },
  {
    "id": 17860,
    "clube": "ANDORINHAS",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4100
  },
  {
    "id": 17869,
    "clube": "FILHOS DE ISRAEL - PARQUE SOLIMÕES",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3100
  },
  {
    "id": 21045,
    "clube": "MENSAGEIROS DO REI KIDS",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11500
  },
  {
    "id": 21095,
    "clube": "SEMENTES DO AMOR",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 21148,
    "clube": "ANJOS CELESTES",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4300
  },
  {
    "id": 21587,
    "clube": "FILHOS DO REI",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 10000
  },
  {
    "id": 21591,
    "clube": "PEQUENOS CORAÇÕES",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 21682,
    "clube": "CRIANÇAS MISSIONARIAS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 22326,
    "clube": "ESTRELINHAS DO NORTE",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7900
  },
  {
    "id": 23368,
    "clube": "CRISÓLITO - ITAÚNA III",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 24682,
    "clube": "GERAÇÃO DE DAVI KIDS",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 7900
  },
  {
    "id": 24683,
    "clube": "PEQUENOS REMANESCENTES",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6400
  },
  {
    "id": 28852,
    "clube": "HERÓIS DA BÍBLIA",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3100
  },
  {
    "id": 29267,
    "clube": "SEMENTINHAS DE JESUS- NHAMUNDÁ",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3500
  },
  {
    "id": 29315,
    "clube": "PEQUENO HERDEIROS",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 30933,
    "clube": "VERDADEIROS ADORADORES",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 13000
  },
  {
    "id": 31153,
    "clube": "JÓIAS PRECIOSAS DO REI",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 32948,
    "clube": "JARDIM DO ÉDEN - ITA_AC",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 33098,
    "clube": "ÓRION - AC",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 34614,
    "clube": "ÁGAPE KIDS",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5800
  },
  {
    "id": 34651,
    "clube": "QUERUBINS DO AMANHÃ",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "PADRÃO EXCELÊNCIA",
    "pontos": 13500
  },
  {
    "id": 38096,
    "clube": "PEQUENOS HERÓIS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 38100,
    "clube": "JÓIAS DA NATUREZA",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4500
  },
  {
    "id": 39188,
    "clube": "FORMIGUINHAS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "PADRÃO EXCELÊNCIA",
    "pontos": 13200
  },
  {
    "id": 39448,
    "clube": "INTEGRANTES DO REINO",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 41671,
    "clube": "GIGANTES DO REI",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4500
  },
  {
    "id": 41939,
    "clube": "ESCRITORES DA VERDADE",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 43946,
    "clube": "ANJOS DE LUZ",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 7900
  },
  {
    "id": 44061,
    "clube": "HERDEIROS DA ALIANÇA",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4800
  },
  {
    "id": 44084,
    "clube": "ARCO ÍRIS DO SENHOR",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 44205,
    "clube": "JÓIAS DE CRISTO BELA VISTA",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 45129,
    "clube": "HERANÇA DO SENHOR - BV",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9200
  },
  {
    "id": 45273,
    "clube": "HERÓIS DA VIDA",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9000
  },
  {
    "id": 46316,
    "clube": "PEDRAS PRECIOSAS RR",
    "area": "AVT",
    "regiao": "23ª R – ÁREA 10 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5900
  },
  {
    "id": 48165,
    "clube": "NASCIDOS PARA CRISTO",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 8500
  },
  {
    "id": 48496,
    "clube": "PEQUENOS GIDEÕES - PRICUMÃ",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3800
  },
  {
    "id": 49199,
    "clube": "TESOUROS NO CÉU",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 50984,
    "clube": "ESTRELINHAS DO AMANHÃ",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2600
  },
  {
    "id": 51118,
    "clube": "GUARDIÕES DE CRISTO",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 7400
  },
  {
    "id": 51431,
    "clube": "LUZES DA AURORA",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 10400
  },
  {
    "id": 51657,
    "clube": "LUZEIRINHOS DO REI",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3600
  },
  {
    "id": 52066,
    "clube": "AQUARELA KIDS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8200
  },
  {
    "id": 53747,
    "clube": "PEQUENOS GUARDIÕES",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11200
  },
  {
    "id": 8028,
    "clube": "EBENÉZER",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 8045,
    "clube": "QUERUBINS GUARDADORES",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4800
  },
  {
    "id": 8128,
    "clube": "ÁGUIAS DO ALTÍSSIMO",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8600
  },
  {
    "id": 8130,
    "clube": "ÁGAPE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11700
  },
  {
    "id": 8133,
    "clube": "MAANAIM",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4800
  },
  {
    "id": 8135,
    "clube": "ÁGATA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9300
  },
  {
    "id": 8141,
    "clube": "LEÕES DA MONTANHA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "PADRÃO EXCELÊNCIA",
    "pontos": 12700
  },
  {
    "id": 8152,
    "clube": "ESTRELAS DE PODER",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6200
  },
  {
    "id": 8159,
    "clube": "OS VALDENSES",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7100
  },
  {
    "id": 8163,
    "clube": "PIONEIROS DA FÉ BV",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11000
  },
  {
    "id": 8171,
    "clube": "ARAUTOS DO REI",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9800
  },
  {
    "id": 8173,
    "clube": "ATLÂNTICO NORTE - ITAÚNA I",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4800
  },
  {
    "id": 8174,
    "clube": "AMIGOS DE CRISTO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4500
  },
  {
    "id": 8179,
    "clube": "IDE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "PADRÃO EXCELÊNCIA",
    "pontos": 12800
  },
  {
    "id": 8186,
    "clube": "JÓIAS PRECIOSAS",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9100
  },
  {
    "id": 8188,
    "clube": "ARAUTOS DA VERDADE",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3500
  },
  {
    "id": 8192,
    "clube": "FRUTOS DO ESPIRITO",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4500
  },
  {
    "id": 8195,
    "clube": "VIGILANTES",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3500
  },
  {
    "id": 8196,
    "clube": "GUARDIÕES CELESTES - MUNDO NOVO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7800
  },
  {
    "id": 8198,
    "clube": "NOVA JERUSALÉM",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11300
  },
  {
    "id": 8203,
    "clube": "PLÊIADES",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11000
  },
  {
    "id": 8205,
    "clube": "SANTA CRUZ",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7300
  },
  {
    "id": 8207,
    "clube": "VANGUARDA DO REI",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4600
  },
  {
    "id": 8213,
    "clube": "GUERREIROS DE DAVI",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8700
  },
  {
    "id": 8214,
    "clube": "GUARDIÕES CELESTES  - ARAÚJO COSTA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6900
  },
  {
    "id": 8215,
    "clube": "ITA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9000
  },
  {
    "id": 8226,
    "clube": "ALBATROZ",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7600
  },
  {
    "id": 8229,
    "clube": "LEÃO DE JUDÁ",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 8300
  },
  {
    "id": 8233,
    "clube": "LUZEIROS DO VALE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4300
  },
  {
    "id": 8244,
    "clube": "PEDRA ANGULAR",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11000
  },
  {
    "id": 8253,
    "clube": "FALCÕES DO NORTE",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9700
  },
  {
    "id": 8270,
    "clube": "TRILHA DOS PIONEIROS",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7300
  },
  {
    "id": 8278,
    "clube": "ÔNIX",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4900
  },
  {
    "id": 8279,
    "clube": "300 DE GIDEÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4300
  },
  {
    "id": 8288,
    "clube": "MONTE SINAI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11100
  },
  {
    "id": 8355,
    "clube": "SENTINELAS DA RENDENÇÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5500
  },
  {
    "id": 8357,
    "clube": "GUARDIÕES DO GENESIS",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5200
  },
  {
    "id": 8374,
    "clube": "MENSAGEIROS  DAS NAÇÕES",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12100
  },
  {
    "id": 8396,
    "clube": "MASTER",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2600
  },
  {
    "id": 8398,
    "clube": "HERDEIROS DO REINO",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2600
  },
  {
    "id": 8399,
    "clube": "FILHOS DA SELVA",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 8400,
    "clube": "ADVENTURES - ITAÚNA II",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3800
  },
  {
    "id": 8406,
    "clube": "ARMADURA DE DEUS",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5000
  },
  {
    "id": 8407,
    "clube": "GOLFINHO",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6600
  },
  {
    "id": 8410,
    "clube": "NASCIDOS PARA BRILHAR",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3800
  },
  {
    "id": 8413,
    "clube": "APOCALIPSE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7400
  },
  {
    "id": 8421,
    "clube": "GETSEMANI.SANTA TEREZA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 8000
  },
  {
    "id": 8425,
    "clube": "GUARDIÕES DO PARAÍSO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9900
  },
  {
    "id": 8449,
    "clube": "GUERREIROS DA FRONTEIRA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3100
  },
  {
    "id": 8502,
    "clube": "GETSÊMANI - RP",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7300
  },
  {
    "id": 8511,
    "clube": "MENSAGEIROS DO SENHOR",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5700
  },
  {
    "id": 8545,
    "clube": "MONTE SINAI (ITA)",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5000
  },
  {
    "id": 8569,
    "clube": "GUERREIROS DE ISRAEL - ISMAIL AZIZ",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 10500
  },
  {
    "id": 8601,
    "clube": "EMUNAH",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6600
  },
  {
    "id": 14152,
    "clube": "INFANTES DE DAVI",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 10500
  },
  {
    "id": 14299,
    "clube": "NASCENTE DE ANTARES",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 10500
  },
  {
    "id": 14426,
    "clube": "GUARDIÕES DO NORTE",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6700
  },
  {
    "id": 14688,
    "clube": "ÁGUIAS DO REI - ITA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4400
  },
  {
    "id": 15984,
    "clube": "PÉROLAS DO REI",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 17576,
    "clube": "EXÉRCITO CELESTIAL",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "PADRÃO EXCELÊNCIA",
    "pontos": 13100
  },
  {
    "id": 21098,
    "clube": "GUERREIROS DO ANDIRÁ",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 21649,
    "clube": "OS PIONEIROS",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 21650,
    "clube": "GUERREIROS DA ESPERANÇA",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11300
  },
  {
    "id": 21670,
    "clube": "GERAÇÃO DO ADVENTO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11500
  },
  {
    "id": 22129,
    "clube": "GUERREIROS DO SENHOR - BVR",
    "area": "DBV",
    "regiao": "09ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2300
  },
  {
    "id": 23053,
    "clube": "FILHOS DE ISRAEL-  SILVIO BOTELHO",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4200
  },
  {
    "id": 23849,
    "clube": "CASTELO FORTE - 13 DE SETEMBRO",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6000
  },
  {
    "id": 24045,
    "clube": "HERDEIROS DE ISRAEL  - CENTENÁRIO",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 8200
  },
  {
    "id": 24684,
    "clube": "ASES DE RORAIMA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 8500
  },
  {
    "id": 24958,
    "clube": "CONSTELAÇÃO DO REI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 25026,
    "clube": "MILÊNIO",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5600
  },
  {
    "id": 25410,
    "clube": "ANGÉLON PHOS",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 26002,
    "clube": "ADVENTHUS",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5300
  },
  {
    "id": 26228,
    "clube": "GUARDIÃO DO ADVENTO",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 9400
  },
  {
    "id": 26278,
    "clube": "ÔMEGA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 7000
  },
  {
    "id": 29325,
    "clube": "LOCOMOTIVA",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 7700
  },
  {
    "id": 30002,
    "clube": "LEÕES DO NORTE",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3000
  },
  {
    "id": 33216,
    "clube": "BEM AVENTURADOS",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 33518,
    "clube": "GUERREIROS DA VIDA",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11800
  },
  {
    "id": 33654,
    "clube": "GIGANTES DA FÉ",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2100
  },
  {
    "id": 34619,
    "clube": "ÁGUIA DO NORTE",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 36561,
    "clube": "O VÔO DA ÁGUIA",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 36769,
    "clube": "PORTADORES DA UNIÃO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2500
  },
  {
    "id": 39542,
    "clube": "ÁGUIAS DO MONTE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3000
  },
  {
    "id": 43672,
    "clube": "FILHOS DO REINO",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11200
  },
  {
    "id": 43944,
    "clube": "ESTRELA DE DAVI",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 44127,
    "clube": "BETEL",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5400
  },
  {
    "id": 47860,
    "clube": "ESCUDEIROS DA PALAVRA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4100
  },
  {
    "id": 48486,
    "clube": "ALPHAS DO PRICUMÃ",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6800
  },
  {
    "id": 50267,
    "clube": "ALVORECER",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 12300
  },
  {
    "id": 51018,
    "clube": "NEVIIM",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 4100
  },
  {
    "id": 52086,
    "clube": "ALFORJE",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE MODELO",
    "pontos": 7700
  },
  {
    "id": 54136,
    "clube": "PIONEIROS DA MONTANHA",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2000
  },
  {
    "id": 54269,
    "clube": "HERÓIS DE  SIÃO",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 6600
  },
  {
    "id": 55572,
    "clube": "GUARDIÕES DA VERDADE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "classificacao": "CLUBE DESTAQUE",
    "pontos": 11000
  },
  {
    "id": 55677,
    "clube": "GUARDIÕES DA PROMESSA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9600
  },
  {
    "id": 55996,
    "clube": "YESHUÁ",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 3300
  },
  {
    "id": 56122,
    "clube": "MANANCIAL DE LUZ",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 2800
  },
  {
    "id": 57045,
    "clube": "MENSAGEIROS DA LUZ",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE MODELO",
    "pontos": 9500
  },
  {
    "id": 57382,
    "clube": "GUARDIÕES DA ESPERANÇA",
    "area": "DBV",
    "regiao": "16ª R – ÁREA 6 / DBV RR",
    "classificacao": "CLUBE INICIANTE",
    "pontos": 5600
  },
  {
    "id": 608,
    "clube": "JOVEM 10 - PARQUE 10",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT PRO",
    "pontos": 11400
  },
  {
    "id": 713,
    "clube": "ESTRELAS DE ÓRION - VIVER MELHOR",
    "area": "JA",
    "regiao": "05ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT ADVANCE",
    "pontos": 7500
  },
  {
    "id": 726,
    "clube": "ÁGUIAS DO ALTÍSSIMO - MONTE PASCOAL II",
    "area": "JA",
    "regiao": "01ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT ADVANCE",
    "pontos": 10900
  },
  {
    "id": 753,
    "clube": "APÓSTOLOS - MUNDO NOVO",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT ADVANCE",
    "pontos": 10800
  },
  {
    "id": 810,
    "clube": "MENSAGEIROS DO ADVENTO - LIBERDADE",
    "area": "JA",
    "regiao": "17ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 6200
  },
  {
    "id": 841,
    "clube": "DUNAMIS - JARDIM PRIMAVERA II",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT ADVANCE",
    "pontos": 7500
  },
  {
    "id": 844,
    "clube": "UNIDOS EM CRISTO - JAUC",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT PRO",
    "pontos": 12400
  },
  {
    "id": 845,
    "clube": "BETEL",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT BASIC",
    "pontos": 3300
  },
  {
    "id": 846,
    "clube": "SOCIEDADE JOVEM DÁDIVAS",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 4600
  },
  {
    "id": 849,
    "clube": "GERAÇÃO PULSAR - CENTRAL  DO CARANÃ",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 5100
  },
  {
    "id": 894,
    "clube": "ARAUTOS DO MONTE - MONTE DAS OLIVEIRAS III",
    "area": "JA",
    "regiao": "03ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 5900
  },
  {
    "id": 915,
    "clube": "NEW JOVEM - NOVA CIDADE I",
    "area": "JA",
    "regiao": "05ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 3500
  },
  {
    "id": 1008,
    "clube": "NOVA SIÃO - CENTRAL AAMAR",
    "area": "JA",
    "regiao": "01ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT PRO",
    "pontos": 11900
  },
  {
    "id": 1011,
    "clube": "QUERUBINS CELESTES - PARQUE SÃO PEDRO II",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 3800
  },
  {
    "id": 1014,
    "clube": "GUARDIÕES DO MONTE - MONTE DAS OLIVEIRAS I",
    "area": "JA",
    "regiao": "03ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 6100
  },
  {
    "id": 1021,
    "clube": "BEIJA-FLOR - BEIJA FLOR I",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT PRO",
    "pontos": 12200
  },
  {
    "id": 1024,
    "clube": "SAL E LUZ - ISMAIL AZIZ",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT ADVANCE",
    "pontos": 8300
  },
  {
    "id": 1035,
    "clube": "ELOS DO ALTÍSSIMO - NOVA CANAÃ",
    "area": "JA",
    "regiao": "01ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 5000
  },
  {
    "id": 1060,
    "clube": "PRIMICIAS DO REI - PARQUE SÃO PEDRO III",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 2500
  },
  {
    "id": 1077,
    "clube": "ADVENTUS - JESUS ME DEU II",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 4900
  },
  {
    "id": 1080,
    "clube": "SUNLIGHT - JOSÉ BONIFÁCIO",
    "area": "JA",
    "regiao": "01ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 2900
  },
  {
    "id": 1102,
    "clube": "JOVENS PROFETAS",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT BASIC",
    "pontos": 3800
  },
  {
    "id": 1145,
    "clube": "MOCIDADE ADVENTISTA UNIDA EM CRISTO- MAUC",
    "area": "JA",
    "regiao": "15ª R – ÁREA 6 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 5600
  },
  {
    "id": 1153,
    "clube": "ADVIR - ALVORADA",
    "area": "JA",
    "regiao": "18ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT BASIC",
    "pontos": 2800
  },
  {
    "id": 1156,
    "clube": "UNIJAD  - UNIÃO",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 5600
  },
  {
    "id": 1161,
    "clube": "EMBAIXADORES - CONJ. CIDADÃO XII",
    "area": "JA",
    "regiao": "05ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 3300
  },
  {
    "id": 1162,
    "clube": "RELUZ - REDENÇÃO III",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 4100
  },
  {
    "id": 1525,
    "clube": "ALIANÇA JOVEM - CAMPOS SALES",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 3600
  },
  {
    "id": 3603,
    "clube": "KERYGMA",
    "area": "JA",
    "regiao": "17ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 4800
  },
  {
    "id": 5486,
    "clube": "LIBERTOS",
    "area": "JA",
    "regiao": "22ª R – ÁREA 9 / MJ RR",
    "classificacao": "MRNT STANDARD",
    "pontos": 4500
  },
  {
    "id": 8343,
    "clube": "MASTER",
    "area": "JA",
    "regiao": "17ª R – ÁREA 7 / MJ RR",
    "classificacao": "MRNT BASIC",
    "pontos": 2500
  },
  {
    "id": 17198,
    "clube": "OFIR - BARREIRINHA",
    "area": "JA",
    "regiao": "13ª R – ÁREA 5 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 2000
  },
  {
    "id": 17354,
    "clube": "MINISTÉRIO JOVEM - BAIRRO DA PAZ I",
    "area": "JA",
    "regiao": "02ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 2500
  },
  {
    "id": 17516,
    "clube": "KAIRÓS",
    "area": "JA",
    "regiao": "19ª R – ÁREA 8 / MJ RR",
    "classificacao": "MRNT BASIC",
    "pontos": 2000
  },
  {
    "id": 22474,
    "clube": "VALOROSOS - CAMPOS SALES III",
    "area": "JA",
    "regiao": "04ª R – ÁREA 2 / MJ AM",
    "classificacao": "MRNT BASIC",
    "pontos": 3500
  },
  {
    "id": 70496,
    "clube": "GERAÇÃO APLHA",
    "area": "JA",
    "regiao": "01ª R – ÁREA 1 / MJ AM",
    "classificacao": "MRNT STANDARD",
    "pontos": 4900
  }
];
