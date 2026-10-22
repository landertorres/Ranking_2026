// Dados dos clubes — edite esta lista para atualizar o dashboard
// area: "DBV" = Desbravadores | "AVT" = Aventureiros
const CLUBES = [
  {
    "id": 39188,
    "clube": "FORMIGUINHAS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 1000
  },
  {
    "id": 21670,
    "clube": "GERAÇÃO DO ADVENTO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 1000
  },
  {
    "id": 51657,
    "clube": "LUZEIRINHOS DO REI",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 1000
  },
  {
    "id": 17576,
    "clube": "EXÉRCITO CELESTIAL",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 997
  },
  {
    "id": 21045,
    "clube": "MENSAGEIROS DO REI KIDS",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 997
  },
  {
    "id": 55572,
    "clube": "GUARDIÕES DA VERDADE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 995
  },
  {
    "id": 30933,
    "clube": "VERDADEIROS ADORADORES",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 988
  },
  {
    "id": 8163,
    "clube": "PIONEIROS DA FÉ BV",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 985
  },
  {
    "id": 33518,
    "clube": "GUERREIROS DA VIDA",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "sgc": 984
  },
  {
    "id": 14152,
    "clube": "INFANTES DE DAVI",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "sgc": 983
  },
  {
    "id": 50267,
    "clube": "ALVORECER",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 982
  },
  {
    "id": 8203,
    "clube": "PLÊIADES",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 982
  },
  {
    "id": 8288,
    "clube": "MONTE SINAI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 977
  },
  {
    "id": 8198,
    "clube": "NOVA JERUSALÉM",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 975
  },
  {
    "id": 8569,
    "clube": "GUERREIROS DE ISRAEL - ISMAIL AZIZ",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 970
  },
  {
    "id": 8179,
    "clube": "IDE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 969
  },
  {
    "id": 17560,
    "clube": "PROFETINHAS DE CRISTO",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 960
  },
  {
    "id": 57432,
    "clube": "QUERUBINS DO ADVENTO",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 960
  },
  {
    "id": 34651,
    "clube": "QUERUBINS DO AMANHÃ",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 959
  },
  {
    "id": 55677,
    "clube": "GUARDIÕES DA PROMESSA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 954
  },
  {
    "id": 14299,
    "clube": "NASCENTE DE ANTARES",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "sgc": 950
  },
  {
    "id": 57045,
    "clube": "MENSAGEIROS DA LUZ",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "sgc": 945
  },
  {
    "id": 53747,
    "clube": "PEQUENOS GUARDIÕES",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 935
  },
  {
    "id": 8244,
    "clube": "PEDRA ANGULAR",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 935
  },
  {
    "id": 8104,
    "clube": "BRILHO DO SOL",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 931
  },
  {
    "id": 8229,
    "clube": "LEÃO DE JUDÁ",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 930
  },
  {
    "id": 43672,
    "clube": "FILHOS DO REINO",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 927
  },
  {
    "id": 8059,
    "clube": "PEQUENOS ARCANJOS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 919
  },
  {
    "id": 8128,
    "clube": "ÁGUIAS DO ALTÍSSIMO",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 914
  },
  {
    "id": 8135,
    "clube": "ÁGATA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 913
  },
  {
    "id": 8186,
    "clube": "JÓIAS PRECIOSAS",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 901
  },
  {
    "id": 8310,
    "clube": "PEQUENOS ARAUTOS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 898
  },
  {
    "id": 24691,
    "clube": "BRAVOS",
    "area": "DBV",
    "regiao": "20ª R – ÁREA 8 / DBV RR",
    "sgc": 892
  },
  {
    "id": 8130,
    "clube": "ÁGAPE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 891
  },
  {
    "id": 8196,
    "clube": "GUARDIÕES CELESTES - MUNDO NOVO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 888
  },
  {
    "id": 34619,
    "clube": "ÁGUIA DO NORTE",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 882
  },
  {
    "id": 8213,
    "clube": "GUERREIROS DE DAVI",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 878
  },
  {
    "id": 24045,
    "clube": "HERDEIROS DE ISRAEL  - CENTENÁRIO",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 877
  },
  {
    "id": 24684,
    "clube": "ASES DE RORAIMA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 876
  },
  {
    "id": 8468,
    "clube": "ANAVILHANAS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 874
  },
  {
    "id": 8400,
    "clube": "ADVENTURES - ITAÚNA II",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 869
  },
  {
    "id": 34614,
    "clube": "ÁGAPE KIDS",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "sgc": 868
  },
  {
    "id": 8171,
    "clube": "ARAUTOS DO REI",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 864
  },
  {
    "id": 8413,
    "clube": "APOCALIPSE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 862
  },
  {
    "id": 8141,
    "clube": "LEÕES DA MONTANHA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 860
  },
  {
    "id": 8233,
    "clube": "LUZEIROS DO VALE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 860
  },
  {
    "id": 24683,
    "clube": "PEQUENOS REMANESCENTES",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 859
  },
  {
    "id": 8045,
    "clube": "QUERUBINS GUARDADORES",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 859
  },
  {
    "id": 8053,
    "clube": "GETSÊMANI AVT",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 858
  },
  {
    "id": 8152,
    "clube": "ESTRELAS DE PODER",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 856
  },
  {
    "id": 8402,
    "clube": "ASTROS",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 854
  },
  {
    "id": 8306,
    "clube": "HERANÇA DO SENHOR - URUCURITUBA I",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 852
  },
  {
    "id": 8477,
    "clube": "AMIGOS DE JESUS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 851
  },
  {
    "id": 17509,
    "clube": "PEQUENOS SENTINELAS",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 850
  },
  {
    "id": 21148,
    "clube": "ANJOS CELESTES",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 848
  },
  {
    "id": 14426,
    "clube": "GUARDIÕES DO NORTE",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 846
  },
  {
    "id": 47600,
    "clube": "PIONEIRO",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 836
  },
  {
    "id": 8511,
    "clube": "MENSAGEIROS DO SENHOR",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 835
  },
  {
    "id": 52066,
    "clube": "AQUARELA KIDS",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 828
  },
  {
    "id": 8415,
    "clube": "SEMENTINHAS DE JESUS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 828
  },
  {
    "id": 52086,
    "clube": "ALFORJE",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 825
  },
  {
    "id": 22326,
    "clube": "ESTRELINHAS DO NORTE",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 825
  },
  {
    "id": 48496,
    "clube": "PEQUENOS GIDEÕES - PRICUMÃ",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 822
  },
  {
    "id": 8407,
    "clube": "GOLFINHO",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 821
  },
  {
    "id": 8094,
    "clube": "PEQUENOS GIDEÕES",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 820
  },
  {
    "id": 45273,
    "clube": "HERÓIS DA VIDA",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "sgc": 818
  },
  {
    "id": 8421,
    "clube": "GETSEMANI.SANTA TEREZA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 818
  },
  {
    "id": 51118,
    "clube": "GUARDIÕES DE CRISTO",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 818
  },
  {
    "id": 48486,
    "clube": "ALPHAS DO PRICUMÃ",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 818
  },
  {
    "id": 8396,
    "clube": "MASTER",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 816
  },
  {
    "id": 8374,
    "clube": "MENSAGEIROS  DAS NAÇÕES",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 811
  },
  {
    "id": 26278,
    "clube": "ÔMEGA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 809
  },
  {
    "id": 28852,
    "clube": "HERÓIS DA BÍBLIA",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 808
  },
  {
    "id": 54269,
    "clube": "HERÓIS DE  SIÃO",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 808
  },
  {
    "id": 8399,
    "clube": "FILHOS DA SELVA",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 805
  },
  {
    "id": 47853,
    "clube": "FALCÕES DO REINO",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "sgc": 803
  },
  {
    "id": 8392,
    "clube": "FALCÕES DA AMAZÔNIA",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 803
  },
  {
    "id": 14806,
    "clube": "SEMEADORES",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 803
  },
  {
    "id": 29325,
    "clube": "LOCOMOTIVA",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 802
  },
  {
    "id": 45129,
    "clube": "HERANÇA DO SENHOR - BV",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 797
  },
  {
    "id": 8111,
    "clube": "PEQUENOS EXPLORADORES",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 794
  },
  {
    "id": 51431,
    "clube": "LUZES DA AURORA",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 793
  },
  {
    "id": 21591,
    "clube": "PEQUENOS CORAÇÕES",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 792
  },
  {
    "id": 8159,
    "clube": "OS VALDENSES",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 787
  },
  {
    "id": 8030,
    "clube": "CASTELO FORTE - PRES. FIGUEREDO I",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 774
  },
  {
    "id": 8253,
    "clube": "FALCÕES DO NORTE",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 773
  },
  {
    "id": 24682,
    "clube": "GERAÇÃO DE DAVI KIDS",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 766
  },
  {
    "id": 8215,
    "clube": "ITA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 765
  },
  {
    "id": 8055,
    "clube": "PRIMÍCIAS DO REINO",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 764
  },
  {
    "id": 21650,
    "clube": "GUERREIROS DA ESPERANÇA",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 761
  },
  {
    "id": 43946,
    "clube": "ANJOS DE LUZ",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 761
  },
  {
    "id": 22761,
    "clube": "GUERREIROS DO VALE",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 759
  },
  {
    "id": 8092,
    "clube": "PEQUENINOS DO REI",
    "area": "AVT",
    "regiao": "23ª R – ÁREA 10 / AVT RR",
    "sgc": 746
  },
  {
    "id": 8279,
    "clube": "300 DE GIDEÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 737
  },
  {
    "id": 8091,
    "clube": "ÁGAPE - [12ª /AVT]",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 735
  },
  {
    "id": 8270,
    "clube": "TRILHA DOS PIONEIROS",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 733
  },
  {
    "id": 22123,
    "clube": "KADOSH",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 732
  },
  {
    "id": 8145,
    "clube": "ABRAÃO",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 729
  },
  {
    "id": 8174,
    "clube": "AMIGOS DE CRISTO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 728
  },
  {
    "id": 44084,
    "clube": "ARCO ÍRIS DO SENHOR",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 725
  },
  {
    "id": 48165,
    "clube": "NASCIDOS PARA CRISTO",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 720
  },
  {
    "id": 8458,
    "clube": "AGUELLÓS",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 716
  },
  {
    "id": 26228,
    "clube": "GUARDIÃO DO ADVENTO",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 715
  },
  {
    "id": 8121,
    "clube": "ESTRELA",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 714
  },
  {
    "id": 8356,
    "clube": "EMBAIXADORES DE CRISTO - BV",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 713
  },
  {
    "id": 44061,
    "clube": "HERDEIROS DA ALIANÇA",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 712
  },
  {
    "id": 21682,
    "clube": "CRIANÇAS MISSIONARIAS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 710
  },
  {
    "id": 8061,
    "clube": "CORDEIRINHOS DE CRISTO",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 701
  },
  {
    "id": 43944,
    "clube": "ESTRELA DE DAVI",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 692
  },
  {
    "id": 8461,
    "clube": "VOZ DO ARCANJO",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 692
  },
  {
    "id": 46316,
    "clube": "PEDRAS PRECIOSAS RR",
    "area": "AVT",
    "regiao": "23ª R – ÁREA 10 / AVT RR",
    "sgc": 685
  },
  {
    "id": 21587,
    "clube": "FILHOS DO REI",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "sgc": 681
  },
  {
    "id": 55996,
    "clube": "YESHUÁ",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 679
  },
  {
    "id": 8133,
    "clube": "MAANAIM",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 676
  },
  {
    "id": 8304,
    "clube": "GUARDIÕES DO PARAÍSO",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 673
  },
  {
    "id": 8425,
    "clube": "GUARDIÕES DO PARAÍSO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 671
  },
  {
    "id": 8205,
    "clube": "SANTA CRUZ",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 669
  },
  {
    "id": 57382,
    "clube": "GUARDIÕES DA ESPERANÇA",
    "area": "DBV",
    "regiao": "16ª R – ÁREA 6 / DBV RR",
    "sgc": 669
  },
  {
    "id": 17393,
    "clube": "ÁGUIA BRANCA SENEI",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 668
  },
  {
    "id": 17575,
    "clube": "FRUTO DA CRIAÇÃO",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "sgc": 665
  },
  {
    "id": 8173,
    "clube": "ATLÂNTICO NORTE - ITAÚNA I",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 664
  },
  {
    "id": 8406,
    "clube": "ARMADURA DE DEUS",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 659
  },
  {
    "id": 44205,
    "clube": "JÓIAS DE CRISTO BELA VISTA",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 652
  },
  {
    "id": 33654,
    "clube": "GIGANTES DA FÉ",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "sgc": 650
  },
  {
    "id": 8226,
    "clube": "ALBATROZ",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 637
  },
  {
    "id": 21649,
    "clube": "OS PIONEIROS",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 634
  },
  {
    "id": 33098,
    "clube": "ÓRION - AC",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 634
  },
  {
    "id": 8502,
    "clube": "GETSÊMANI - RP",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 630
  },
  {
    "id": 17541,
    "clube": "PEQUENOS DISCIPULOS",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 622
  },
  {
    "id": 8054,
    "clube": "JÓIAS DE ISRAEL",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 620
  },
  {
    "id": 14688,
    "clube": "ÁGUIAS DO REI - ITA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 619
  },
  {
    "id": 23849,
    "clube": "CASTELO FORTE - 13 DE SETEMBRO",
    "area": "DBV",
    "regiao": "15ª R – ÁREA 6 / DBV RR",
    "sgc": 619
  },
  {
    "id": 8097,
    "clube": "ESTRELA CELESTE",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 617
  },
  {
    "id": 36769,
    "clube": "PORTADORES DA UNIÃO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 613
  },
  {
    "id": 8266,
    "clube": "ALFA E ÔMEGA-BV",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 611
  },
  {
    "id": 44127,
    "clube": "BETEL",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 608
  },
  {
    "id": 8086,
    "clube": "QUERUBINS DO ÉDEN",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 606
  },
  {
    "id": 25026,
    "clube": "MILÊNIO",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 604
  },
  {
    "id": 22129,
    "clube": "GUERREIROS DO SENHOR - BVR",
    "area": "DBV",
    "regiao": "09ª R – ÁREA 4 / DBV AM",
    "sgc": 595
  },
  {
    "id": 29267,
    "clube": "SEMENTINHAS DE JESUS- NHAMUNDÁ",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 589
  },
  {
    "id": 30002,
    "clube": "LEÕES DO NORTE",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 577
  },
  {
    "id": 8601,
    "clube": "EMUNAH",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 577
  },
  {
    "id": 34635,
    "clube": "SÉTIMUS",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 576
  },
  {
    "id": 8308,
    "clube": "JÓIAS DE CRISTO - PSP",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 574
  },
  {
    "id": 8278,
    "clube": "ÔNIX",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 564
  },
  {
    "id": 8188,
    "clube": "ARAUTOS DA VERDADE",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 557
  },
  {
    "id": 16988,
    "clube": "TESOURO DO SENHOR",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "sgc": 556
  },
  {
    "id": 8312,
    "clube": "LUZ FULGURANTE",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 554
  },
  {
    "id": 8036,
    "clube": "ESTRELINHA DO REI",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 551
  },
  {
    "id": 43113,
    "clube": "NOVA JERUSALÉM CDNJ",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 549
  },
  {
    "id": 8377,
    "clube": "REDENÇÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 545
  },
  {
    "id": 8101,
    "clube": "REINO CELESTE",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 543
  },
  {
    "id": 24958,
    "clube": "CONSTELAÇÃO DO REI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 543
  },
  {
    "id": 41671,
    "clube": "GIGANTES DO REI",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 541
  },
  {
    "id": 43124,
    "clube": "SANTOS DO SENHOR",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 540
  },
  {
    "id": 47681,
    "clube": "GUARDIÕES DO REINO",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 540
  },
  {
    "id": 51018,
    "clube": "NEVIIM",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 540
  },
  {
    "id": 17869,
    "clube": "FILHOS DE ISRAEL - PARQUE SOLIMÕES",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 526
  },
  {
    "id": 36561,
    "clube": "O VÔO DA ÁGUIA",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "sgc": 525
  },
  {
    "id": 8318,
    "clube": "JÓIAS DE CRISTO - BEIJA FLOR",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 525
  },
  {
    "id": 17860,
    "clube": "ANDORINHAS",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 525
  },
  {
    "id": 8051,
    "clube": "TESOUROS DE JESUS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 524
  },
  {
    "id": 8046,
    "clube": "PEDRINHA ANGULAR - RP",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "sgc": 520
  },
  {
    "id": 21098,
    "clube": "GUERREIROS DO ANDIRÁ",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 520
  },
  {
    "id": 8194,
    "clube": "ISRAEL",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 519
  },
  {
    "id": 8192,
    "clube": "FRUTOS DO ESPIRITO",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 514
  },
  {
    "id": 49199,
    "clube": "TESOUROS NO CÉU",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 514
  },
  {
    "id": 21544,
    "clube": "QUERUBINS - ITAUNA",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 512
  },
  {
    "id": 26619,
    "clube": "ESTRELAS DO NORTE 55ª",
    "area": "AVT",
    "regiao": "24ª R – ÁREA 10 / AVT RR",
    "sgc": 511
  },
  {
    "id": 8207,
    "clube": "VANGUARDA DO REI",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 510
  },
  {
    "id": 8355,
    "clube": "SENTINELAS DA RENDENÇÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 508
  },
  {
    "id": 55997,
    "clube": "PEQUENOS DO ALTISSIMO",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 508
  },
  {
    "id": 22375,
    "clube": "GUARDIÕES DA PALAVRA - LIBERDADE",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 501
  },
  {
    "id": 8208,
    "clube": "FALCÕES DA SERRA",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 501
  },
  {
    "id": 39542,
    "clube": "ÁGUIAS DO MONTE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 501
  },
  {
    "id": 17534,
    "clube": "PIONEIROS DO ADVENTO",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "sgc": 498
  },
  {
    "id": 38100,
    "clube": "JÓIAS DA NATUREZA",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 497
  },
  {
    "id": 36459,
    "clube": "GUARDIÕES DA MORADA",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 496
  },
  {
    "id": 50984,
    "clube": "ESTRELINHAS DO AMANHÃ",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "sgc": 493
  },
  {
    "id": 17572,
    "clube": "ALIANÇA DO SENHOR",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 489
  },
  {
    "id": 38096,
    "clube": "PEQUENOS HERÓIS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 487
  },
  {
    "id": 23368,
    "clube": "CRISÓLITO - ITAÚNA III",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 486
  },
  {
    "id": 8200,
    "clube": "NOVO TEMPO",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 486
  },
  {
    "id": 39164,
    "clube": "ATALAIA",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 485
  },
  {
    "id": 31153,
    "clube": "JÓIAS PRECIOSAS DO REI",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 479
  },
  {
    "id": 8449,
    "clube": "GUERREIROS DA FRONTEIRA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 477
  },
  {
    "id": 39448,
    "clube": "INTEGRANTES DO REINO",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 474
  },
  {
    "id": 8316,
    "clube": "TRILHA DOS AMIGUINHOS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 471
  },
  {
    "id": 15984,
    "clube": "PÉROLAS DO REI",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 470
  },
  {
    "id": 8357,
    "clube": "GUARDIÕES DO GENESIS",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 469
  },
  {
    "id": 32948,
    "clube": "JARDIM DO ÉDEN - ITA_AC",
    "area": "AVT",
    "regiao": "12ª R – ÁREA 4 / AVT AM",
    "sgc": 467
  },
  {
    "id": 51120,
    "clube": "PIONEIROS DO REI ETERNO",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "sgc": 467
  },
  {
    "id": 52885,
    "clube": "PEQUENO GUARDIÃO DO ADVETHUS",
    "area": "AVT",
    "regiao": "11ª R – ÁREA 4 / AVT AM",
    "sgc": 466
  },
  {
    "id": 34907,
    "clube": "ANJINHOS DA ESPERANÇA",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 465
  },
  {
    "id": 29221,
    "clube": "ILUMINADOS EM CRISTO",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 463
  },
  {
    "id": 8398,
    "clube": "HERDEIROS DO REINO",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 462
  },
  {
    "id": 8161,
    "clube": "BANDEIRANTES DA FÉ",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 460
  },
  {
    "id": 33040,
    "clube": "GUARDIÕES DA LIBERDADE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 458
  },
  {
    "id": 8605,
    "clube": "ANJOS DO REI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 456
  },
  {
    "id": 8073,
    "clube": "DEFENSORES DA NATUREZA",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 456
  },
  {
    "id": 8175,
    "clube": "PRIMÍCIAS DO UNIVERSO",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 451
  },
  {
    "id": 23053,
    "clube": "FILHOS DE ISRAEL-  SILVIO BOTELHO",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 449
  },
  {
    "id": 44924,
    "clube": "BETELGEUSE",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 448
  },
  {
    "id": 51269,
    "clube": "LUZEIRINHOS",
    "area": "AVT",
    "regiao": "06ª R – ÁREA 3 / AVT AM",
    "sgc": 448
  },
  {
    "id": 17070,
    "clube": "ABELHINHAS DO REI",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "sgc": 445
  },
  {
    "id": 8210,
    "clube": "GUERREIROS DE JUDÁ",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 445
  },
  {
    "id": 22376,
    "clube": "UNIVERSO - PARINTINS CENTRAL",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 444
  },
  {
    "id": 49741,
    "clube": "PIONEIROS DA SUDAM",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 440
  },
  {
    "id": 8410,
    "clube": "NASCIDOS PARA BRILHAR",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 439
  },
  {
    "id": 8028,
    "clube": "EBENÉZER",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 439
  },
  {
    "id": 8070,
    "clube": "FONTE DE ÁGUA VIVA",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 438
  },
  {
    "id": 34204,
    "clube": "GUARDIÕES NA FÉ",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 438
  },
  {
    "id": 8223,
    "clube": "GUARDIÕES DA FÉ",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 437
  },
  {
    "id": 8093,
    "clube": "PEQUENOS GIGANTES",
    "area": "AVT",
    "regiao": "03ª R – ÁREA 2 / AVT AM",
    "sgc": 434
  },
  {
    "id": 57274,
    "clube": "ÁGUA DA VIDA",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 434
  },
  {
    "id": 26061,
    "clube": "REMANESCENTE (PARINTINS)",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 434
  },
  {
    "id": 8579,
    "clube": "PORTAL DE ÓRION",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 434
  },
  {
    "id": 17536,
    "clube": "MISSIONEIROS KIDS",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 433
  },
  {
    "id": 29755,
    "clube": "QUERUBINS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 430
  },
  {
    "id": 43227,
    "clube": "JASPE - PEROLA II",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 428
  },
  {
    "id": 8167,
    "clube": "DYNAMUS",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 427
  },
  {
    "id": 8214,
    "clube": "GUARDIÕES CELESTES  - ARAÚJO COSTA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 427
  },
  {
    "id": 28466,
    "clube": "LUZEIROS DO MASSAUARI",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 427
  },
  {
    "id": 8553,
    "clube": "PEQUENOS CURIOSOS",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 423
  },
  {
    "id": 48769,
    "clube": "SEGUNDO CORAÇÃO DE DEUS",
    "area": "AVT",
    "regiao": "24ª R – ÁREA 10 / AVT RR",
    "sgc": 422
  },
  {
    "id": 14150,
    "clube": "MALAKHIM",
    "area": "DBV",
    "regiao": "20ª R – ÁREA 8 / DBV RR",
    "sgc": 421
  },
  {
    "id": 17608,
    "clube": "PEQUENOS CORAJOSOS",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 421
  },
  {
    "id": 47676,
    "clube": "VALDENSES DE MOURA",
    "area": "DBV",
    "regiao": "08ª R – ÁREA 3 / DBV AM",
    "sgc": 421
  },
  {
    "id": 8269,
    "clube": "GAVIÕES DO NORTE - REDENÇÃO",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 419
  },
  {
    "id": 25410,
    "clube": "ANGÉLON PHOS",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 419
  },
  {
    "id": 8195,
    "clube": "VIGILANTES",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 418
  },
  {
    "id": 43238,
    "clube": "JASPE RR",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 418
  },
  {
    "id": 49388,
    "clube": "AJURICABA",
    "area": "DBV",
    "regiao": "08ª R – ÁREA 3 / DBV AM",
    "sgc": 416
  },
  {
    "id": 8273,
    "clube": "ROCHA ETERNA",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 416
  },
  {
    "id": 42118,
    "clube": "HERDEIROS DA ETERNIDADE",
    "area": "DBV",
    "regiao": "22ª R – ÁREA 9 / DBV RR",
    "sgc": 415
  },
  {
    "id": 8149,
    "clube": "BEIJA-FLOR",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 410
  },
  {
    "id": 29309,
    "clube": "ADORADORES DO REI 16° (PARINTINS)",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 405
  },
  {
    "id": 34585,
    "clube": "JÓIAS PRECIOSAS - BVR",
    "area": "AVT",
    "regiao": "09ª R – ÁREA 4 / AVT AM",
    "sgc": 405
  },
  {
    "id": 41939,
    "clube": "ESCRITORES DA VERDADE",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 402
  },
  {
    "id": 43400,
    "clube": "BEER LAAI ROI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 401
  },
  {
    "id": 23953,
    "clube": "ÁGUIA REAL",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 400
  },
  {
    "id": 30006,
    "clube": "UNGIDOS DO REI",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 400
  },
  {
    "id": 8405,
    "clube": "ARIRAMBA",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 398
  },
  {
    "id": 26777,
    "clube": "PEQUENOS GUERREIROS 5ª REGIÃO",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 397
  },
  {
    "id": 47860,
    "clube": "ESCUDEIROS DA PALAVRA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 397
  },
  {
    "id": 47902,
    "clube": "GUERREIROS DE ÓRION RR",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 397
  },
  {
    "id": 8123,
    "clube": "PUREZA DE CRISTO",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 397
  },
  {
    "id": 17639,
    "clube": "HERDEIROS DO REI - SILVIO LEITE",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 396
  },
  {
    "id": 8096,
    "clube": "LUMINARES",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 395
  },
  {
    "id": 8545,
    "clube": "MONTE SINAI (ITA)",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 393
  },
  {
    "id": 8281,
    "clube": "RESGATE",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 393
  },
  {
    "id": 52030,
    "clube": "ESCOLHIDOS",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 392
  },
  {
    "id": 33216,
    "clube": "BEM AVENTURADOS",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 391
  },
  {
    "id": 33038,
    "clube": "ATALAIA DE DEUS",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 391
  },
  {
    "id": 8251,
    "clube": "ESTRELA DO MAR",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 390
  },
  {
    "id": 35043,
    "clube": "MENSAGEIROS DO REI- AC",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 390
  },
  {
    "id": 23974,
    "clube": "REMANESCENTES -52º",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 390
  },
  {
    "id": 21521,
    "clube": "PEDRAS DE JASPE",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 390
  },
  {
    "id": 23248,
    "clube": "CASTELO FORTE - ITACOATIARA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 388
  },
  {
    "id": 44207,
    "clube": "FILHINHOS DO REI",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 387
  },
  {
    "id": 22316,
    "clube": "PEQUENOS ADORADORES -  PARINTINS I",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 387
  },
  {
    "id": 8535,
    "clube": "ESTRELA GUIA",
    "area": "AVT",
    "regiao": "09ª R – ÁREA 4 / AVT AM",
    "sgc": 387
  },
  {
    "id": 8482,
    "clube": "FRUTOS DA VIDEIRA",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 387
  },
  {
    "id": 28894,
    "clube": "ESPERANÇA",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 382
  },
  {
    "id": 8187,
    "clube": "ESTRELA DA MANHÃ",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 380
  },
  {
    "id": 8578,
    "clube": "HERÓIS DA FÉ - 13 DE SETEMBRO",
    "area": "AVT",
    "regiao": "15ª R – ÁREA 6 / AVT RR",
    "sgc": 379
  },
  {
    "id": 8138,
    "clube": "HERÓIS DA FÉ",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 379
  },
  {
    "id": 8178,
    "clube": "ESTRELINHAS DE JESUS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 378
  },
  {
    "id": 23748,
    "clube": "ESTRELINHA DE DAVI",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 375
  },
  {
    "id": 29365,
    "clube": "HERDEIROS DO REI - ITAPIRANGA",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "sgc": 375
  },
  {
    "id": 8110,
    "clube": "ARCO-ÍRIS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 375
  },
  {
    "id": 37545,
    "clube": "GUERREIRO DO REI",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 374
  },
  {
    "id": 25342,
    "clube": "PUMA",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 374
  },
  {
    "id": 8495,
    "clube": "MARANATA",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 370
  },
  {
    "id": 8384,
    "clube": "ÁGUIAS DE FOGO - PALMARES",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 369
  },
  {
    "id": 41279,
    "clube": "O CIDADÃO DOS CÉUS",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 367
  },
  {
    "id": 8170,
    "clube": "RAIO DE LUZ",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 366
  },
  {
    "id": 8219,
    "clube": "AMAZÔNIA",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 365
  },
  {
    "id": 25177,
    "clube": "RUMO CERTO",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 365
  },
  {
    "id": 47594,
    "clube": "ÁGUIA DO NORTE KIDS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 365
  },
  {
    "id": 8329,
    "clube": "PEQUENOS MENSAGEIROS",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 365
  },
  {
    "id": 8164,
    "clube": "PILARES DE ESPERANÇA",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 364
  },
  {
    "id": 8160,
    "clube": "GUERREIROS DA VERDADE",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 363
  },
  {
    "id": 8526,
    "clube": "GERAÇÃO DE DAVI",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 362
  },
  {
    "id": 39420,
    "clube": "REI DA GLÓRIA",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 362
  },
  {
    "id": 8332,
    "clube": "EMBAIXADORES DO ADVENTO",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 361
  },
  {
    "id": 47377,
    "clube": "BRILHO CELESTE - BC",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 360
  },
  {
    "id": 26944,
    "clube": "ACARÍ",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "sgc": 359
  },
  {
    "id": 47572,
    "clube": "TOCHA DA LIBERDADE",
    "area": "DBV",
    "regiao": "20ª R – ÁREA 8 / DBV RR",
    "sgc": 358
  },
  {
    "id": 26552,
    "clube": "PEQUENINOS DO PAI",
    "area": "AVT",
    "regiao": "24ª R – ÁREA 10 / AVT RR",
    "sgc": 358
  },
  {
    "id": 8342,
    "clube": "ARAUTOS DA TRINDADE",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 357
  },
  {
    "id": 8139,
    "clube": "EXÉRCITO REAL",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 357
  },
  {
    "id": 54136,
    "clube": "PIONEIROS DA MONTANHA",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 357
  },
  {
    "id": 49061,
    "clube": "ATALAIAS KIDS - BARCELOS",
    "area": "AVT",
    "regiao": "08ª R – ÁREA 3 / AVT AM",
    "sgc": 355
  },
  {
    "id": 8191,
    "clube": "PIONEIROS DO ADVENTO",
    "area": "DBV",
    "regiao": "01ª R – ÁREA 1 / DBV AM",
    "sgc": 355
  },
  {
    "id": 8119,
    "clube": "CORDEIRINHOS DE JESUS",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 355
  },
  {
    "id": 43729,
    "clube": "ESQUADRÃO ÁGUIA",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 354
  },
  {
    "id": 17075,
    "clube": "FRUTOS DO ESPÍRITO",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 354
  },
  {
    "id": 8084,
    "clube": "CORDEIROS DO REI",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 352
  },
  {
    "id": 56122,
    "clube": "MANANCIAL DE LUZ",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 352
  },
  {
    "id": 23064,
    "clube": "REMANESCENTES DO MONTE",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 350
  },
  {
    "id": 42015,
    "clube": "SANTUÁRIO CELESTIAL",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 350
  },
  {
    "id": 29315,
    "clube": "PEQUENO HERDEIROS",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 349
  },
  {
    "id": 8387,
    "clube": "PIONEIROS DA FLORESTA-IAAI",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 348
  },
  {
    "id": 25033,
    "clube": "MENSAGEIROS DO REI - 3ª R",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 347
  },
  {
    "id": 8572,
    "clube": "GUERREIROS",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 346
  },
  {
    "id": 8375,
    "clube": "GERAÇÃO LUZ",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 345
  },
  {
    "id": 8234,
    "clube": "PROFETAS DE CRISTO",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 344
  },
  {
    "id": 8083,
    "clube": "CORDEIROS DE DEUS",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 343
  },
  {
    "id": 8599,
    "clube": "GERAÇÃO DE HÉROIS",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 343
  },
  {
    "id": 21593,
    "clube": "ABELHINHAS",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 343
  },
  {
    "id": 17112,
    "clube": "SOLDADINHOS DE CRISTO",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 343
  },
  {
    "id": 8492,
    "clube": "FALCÕES DA ILHA",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 341
  },
  {
    "id": 41857,
    "clube": "EMBAIXADORES DO REI",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "sgc": 341
  },
  {
    "id": 21095,
    "clube": "SEMENTES DO AMOR",
    "area": "AVT",
    "regiao": "13ª R – ÁREA 5 / AVT AM",
    "sgc": 341
  },
  {
    "id": 42768,
    "clube": "GUARDIÕES DA VERDADE - RR",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 340
  },
  {
    "id": 24069,
    "clube": "ATALAIAS DE CRISTO",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 336
  },
  {
    "id": 44123,
    "clube": "BRUNIR",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 336
  },
  {
    "id": 55103,
    "clube": "JAGUAR",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 336
  },
  {
    "id": 41785,
    "clube": "UNGIDOS DO SENHOR",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 334
  },
  {
    "id": 21099,
    "clube": "JAPIIM DO ANDIRÁ",
    "area": "DBV",
    "regiao": "13ª R – ÁREA 5 / DBV AM",
    "sgc": 334
  },
  {
    "id": 29935,
    "clube": "CORDEIRINHOS DE JESUS RR",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 333
  },
  {
    "id": 20674,
    "clube": "FILHOS DE ISRAEL - ITAPIRANGA II",
    "area": "DBV",
    "regiao": "11ª R – ÁREA 4 / DBV AM",
    "sgc": 332
  },
  {
    "id": 8124,
    "clube": "ANJOS MENSAGEIROS",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 331
  },
  {
    "id": 8154,
    "clube": "RUMO AO ÓRION",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 331
  },
  {
    "id": 8172,
    "clube": "MENSAGEIROS DA FÉ",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 328
  },
  {
    "id": 8142,
    "clube": "FALCÕES CELESTES",
    "area": "DBV",
    "regiao": "02ª R – ÁREA 1 / DBV AM",
    "sgc": 326
  },
  {
    "id": 20980,
    "clube": "HERDEIROS DE ISRAEL - NOVO MILÊNIO",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 325
  },
  {
    "id": 8088,
    "clube": "PEQUENOS ADORADORES",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 325
  },
  {
    "id": 8463,
    "clube": "ZIP-ZAP LUZ",
    "area": "AVT",
    "regiao": "18ª R – ÁREA 7 / AVT RR",
    "sgc": 324
  },
  {
    "id": 35138,
    "clube": "GUARDIÕES DA FÉ - CARACARAÍ",
    "area": "DBV",
    "regiao": "21ª R – ÁREA 9 / DBV RR",
    "sgc": 322
  },
  {
    "id": 18885,
    "clube": "SANSERAI",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 322
  },
  {
    "id": 29012,
    "clube": "GUERREIROS DE DEUS",
    "area": "DBV",
    "regiao": "14ª R – ÁREA 5 / DBV AM",
    "sgc": 320
  },
  {
    "id": 35931,
    "clube": "ÁGUIA CENTRAL",
    "area": "DBV",
    "regiao": "07ª R – ÁREA 3 / DBV AM",
    "sgc": 317
  },
  {
    "id": 55044,
    "clube": "AMIGUINHOS DE JESUS",
    "area": "AVT",
    "regiao": "09ª R – ÁREA 4 / AVT AM",
    "sgc": 317
  },
  {
    "id": 8473,
    "clube": "PEQUENINOS DE CRISTO",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 315
  },
  {
    "id": 48128,
    "clube": "ESTRELAS LUZENTES",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 315
  },
  {
    "id": 8348,
    "clube": "PEQUENOS CALEBES",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 314
  },
  {
    "id": 14829,
    "clube": "PIONEIROS DA FÉ - 5°",
    "area": "DBV",
    "regiao": "05ª R – ÁREA 2 / DBV AM",
    "sgc": 311
  },
  {
    "id": 8394,
    "clube": "GUERREIROS DA FÉ",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 308
  },
  {
    "id": 8456,
    "clube": "GUARDIÕES DA ALIANÇA",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 307
  },
  {
    "id": 8302,
    "clube": "AMIGOS DA NATUREZA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 306
  },
  {
    "id": 8334,
    "clube": "SOLDADOS DO REI",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 306
  },
  {
    "id": 51952,
    "clube": "PEDRAS LAPIDADAS",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "sgc": 305
  },
  {
    "id": 8460,
    "clube": "PAKARAIMÃ",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 302
  },
  {
    "id": 26002,
    "clube": "ADVENTHUS",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 301
  },
  {
    "id": 25431,
    "clube": "DESCENDENTES DE ABRAÃO",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 300
  },
  {
    "id": 8048,
    "clube": "PIONEIROS DA FÉ",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 300
  },
  {
    "id": 43269,
    "clube": "ATALAIAS DO RIO NEGRO",
    "area": "AVT",
    "regiao": "08ª R – ÁREA 3 / AVT AM",
    "sgc": 299
  },
  {
    "id": 46983,
    "clube": "JEOVÁ SHAMMAH",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 298
  },
  {
    "id": 8206,
    "clube": "HERDEIROS DA PROMESSA",
    "area": "DBV",
    "regiao": "04ª R – ÁREA 2 / DBV AM",
    "sgc": 297
  },
  {
    "id": 44515,
    "clube": "OVELHINHAS DE CRISTO",
    "area": "AVT",
    "regiao": "11ª R – ÁREA 4 / AVT AM",
    "sgc": 295
  },
  {
    "id": 56452,
    "clube": "LUZEIROS DO REINO",
    "area": "AVT",
    "regiao": "14ª R – ÁREA 5 / AVT AM",
    "sgc": 293
  },
  {
    "id": 44963,
    "clube": "ÁGUIA DE FOGO - SANTO ANTÔNIO",
    "area": "DBV",
    "regiao": "21ª R – ÁREA 9 / DBV RR",
    "sgc": 293
  },
  {
    "id": 49554,
    "clube": "UNIVERSO PARA CRISTO",
    "area": "DBV",
    "regiao": "24ª R – ÁREA 10 / DBV RR",
    "sgc": 293
  },
  {
    "id": 41823,
    "clube": "WOLF PACK",
    "area": "DBV",
    "regiao": "21ª R – ÁREA 9 / DBV RR",
    "sgc": 291
  },
  {
    "id": 14838,
    "clube": "GUARDIÕES DE ÓRION",
    "area": "DBV",
    "regiao": "03ª R – ÁREA 2 / DBV AM",
    "sgc": 289
  },
  {
    "id": 47605,
    "clube": "PEQUENOS DICIPULOS DE JESUS",
    "area": "AVT",
    "regiao": "02ª R – ÁREA 1 / AVT AM",
    "sgc": 286
  },
  {
    "id": 21141,
    "clube": "TESOUROS DE CRISTO",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 284
  },
  {
    "id": 49180,
    "clube": "AMIGUINHOS DO REI - PACARAIMA",
    "area": "AVT",
    "regiao": "25ª R – ÁREA 11 / AVT RR",
    "sgc": 283
  },
  {
    "id": 53270,
    "clube": "ESTRELAS DO RIO BRANCO",
    "area": "DBV",
    "regiao": "21ª R – ÁREA 9 / DBV RR",
    "sgc": 276
  },
  {
    "id": 21188,
    "clube": "CONSTELAÇÃO",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 267
  },
  {
    "id": 8034,
    "clube": "MANÁ",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 266
  },
  {
    "id": 21592,
    "clube": "VAGA - LUMES",
    "area": "AVT",
    "regiao": "07ª R – ÁREA 3 / AVT AM",
    "sgc": 257
  },
  {
    "id": 47568,
    "clube": "GUERREIROS DE CRISTO",
    "area": "AVT",
    "regiao": "23ª R – ÁREA 10 / AVT RR",
    "sgc": 255
  },
  {
    "id": 8476,
    "clube": "001 CAMPO AAMAR -  DESBRAVADORES",
    "area": "DBV",
    "regiao": "AAMAR AM (VERIFICAR)",
    "sgc": 248
  },
  {
    "id": 8140,
    "clube": "RAIOS DO NORTE",
    "area": "DBV",
    "regiao": "22ª R – ÁREA 9 / DBV RR",
    "sgc": 245
  },
  {
    "id": 8604,
    "clube": "ÁGUA DA VIDA",
    "area": "DBV",
    "regiao": "17ª R – ÁREA 7 / DBV RR",
    "sgc": 245
  },
  {
    "id": 39862,
    "clube": "SEMEADORES MIRINS",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 244
  },
  {
    "id": 40957,
    "clube": "LUZEIROS DO UATUMÃ",
    "area": "DBV",
    "regiao": "10ª R – ÁREA 4 / DBV AM",
    "sgc": 240
  },
  {
    "id": 28758,
    "clube": "EMBAIXADORES MIRINS",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 234
  },
  {
    "id": 8063,
    "clube": "RAIOS DE LUZ",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 233
  },
  {
    "id": 24690,
    "clube": "VALENTES",
    "area": "AVT",
    "regiao": "20ª R – ÁREA 8 / AVT RR",
    "sgc": 233
  },
  {
    "id": 26094,
    "clube": "MONTANHA",
    "area": "DBV",
    "regiao": "18ª R – ÁREA 7 / DBV RR",
    "sgc": 228
  },
  {
    "id": 34700,
    "clube": "SETE ESTRELO",
    "area": "DBV",
    "regiao": "09ª R – ÁREA 4 / DBV AM",
    "sgc": 227
  },
  {
    "id": 8371,
    "clube": "ÁGUIA DA PAZ",
    "area": "DBV",
    "regiao": "06ª R – ÁREA 3 / DBV AM",
    "sgc": 225
  },
  {
    "id": 53099,
    "clube": "FALCÕES DA FÉ",
    "area": "DBV",
    "regiao": "22ª R – ÁREA 9 / DBV RR",
    "sgc": 219
  },
  {
    "id": 46585,
    "clube": "BEM-TE-VIS",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 213
  },
  {
    "id": 46207,
    "clube": "GUARDIÕES CELESTES - BONFIM",
    "area": "DBV",
    "regiao": "16ª R – ÁREA 6 / DBV RR",
    "sgc": 212
  },
  {
    "id": 52805,
    "clube": "O PEQUENO CIDADÃO DOS CÉUS",
    "area": "AVT",
    "regiao": "04ª R – ÁREA 2 / AVT AM",
    "sgc": 199
  },
  {
    "id": 34559,
    "clube": "CONEXÃO CELESTE",
    "area": "DBV",
    "regiao": "08ª R – ÁREA 3 / DBV AM",
    "sgc": 195
  },
  {
    "id": 21219,
    "clube": "AMIGOS DE JESUS - 66°",
    "area": "AVT",
    "regiao": "17ª R – ÁREA 7 / AVT RR",
    "sgc": 195
  },
  {
    "id": 8411,
    "clube": "JÓIAS DO SENHOR",
    "area": "AVT",
    "regiao": "05ª R – ÁREA 2 / AVT AM",
    "sgc": 189
  },
  {
    "id": 8598,
    "clube": "TRIBOS",
    "area": "DBV",
    "regiao": "25ª R – ÁREA 11 / DBV RR",
    "sgc": 188
  },
  {
    "id": 46592,
    "clube": "BRILHO DO SOL - CARACARAI",
    "area": "AVT",
    "regiao": "21ª R – ÁREA 9 / AVT RR",
    "sgc": 180
  },
  {
    "id": 36121,
    "clube": "MENSAGEIRO DO APOCALIPSE",
    "area": "DBV",
    "regiao": "19ª R – ÁREA 8 / DBV RR",
    "sgc": 177
  },
  {
    "id": 46963,
    "clube": "EXÉRCITO DO NORTE",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 169
  },
  {
    "id": 8575,
    "clube": "ARCO ÍRIS DA ESPERANÇA",
    "area": "AVT",
    "regiao": "01ª R – ÁREA 1 / AVT AM",
    "sgc": 150
  },
  {
    "id": 50390,
    "clube": "FILHOS DA LUZ",
    "area": "DBV",
    "regiao": "23ª R – ÁREA 10 / DBV RR",
    "sgc": 121
  },
  {
    "id": 8389,
    "clube": "NASCIDOS PARA BRILHAR - 49º",
    "area": "AVT",
    "regiao": "19ª R – ÁREA 8 / AVT RR",
    "sgc": 100
  },
  {
    "id": 24687,
    "clube": "ESTRELINHAS DO NORTE KIDS",
    "area": "AVT",
    "regiao": "22ª R – ÁREA 9 / AVT RR",
    "sgc": 72
  },
  {
    "id": 29581,
    "clube": "SEVENTH DAY",
    "area": "DBV",
    "regiao": "12ª R – ÁREA 4 / DBV AM",
    "sgc": 71
  },
  {
    "id": 39621,
    "clube": "PEQUENOS SERVOS",
    "area": "AVT",
    "regiao": "22ª R – ÁREA 9 / AVT RR",
    "sgc": 13
  }
];
