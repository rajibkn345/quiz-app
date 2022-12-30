import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Countdown from "react-countdown";

var questions = [
  {
    questionText:
      "As concentrações séricas de colesterol LDL são medidas em amostras de sangue colhidas de 25 voluntários saudáveis. Os dados seguem uma distribuição normal. A média e o desvio padrão para este grupo são 130 mg/dL e 25 mg/dL, respectivamente. O erro padrão da média é 5,0. Com um nível de confiança de 95%, a verdadeira média para a população da qual esta amostra foi colhida situa-se dentro de um dos seguintes intervalos (em mg/dL)?",
    answerOptions: [
      { answerText: "105-155", isCorrect: false },
      { answerText: "120-140", isCorrect: true },
      { answerText: "125-135", isCorrect: false },
      { answerText: "128-132", isCorrect: false },
      { answerText: "129-131", isCorrect: false },
    ],
    theme: "A",
  },
  {
    questionText:
      "Uma mulher de 51 anos, secretária numa administração hospitalar, sedentária," +
      "vem ao consultório médico por lombalgia crónica. Ela traz os resultados de" +
      "densitometria óssea, solicitada para estudo de eventual osteoporose pósmenopausa." +
      "Ela não tem antecedentes patológicos de relevo e não faz medicação" +
      "habitual. A menopausa cirúrgica ocorreu aos 48 anos. Os sinais vitais são" +
      "temperatura 36°C, frequência respiratória 14/min, frequência cardíaca 73/min e" +
      "pressão arterial 138/72 mm Hg. O exame físico e os resultados dos estudos analíticos encontram-se dentro dos parâmetros de normalidade. Os exames" +
      "radiológicos da coluna vertebral não mostram alterações degenerativas. A densitometria óssea mostra score T-2,0 (coluna) e - 1,6 (colo do fémur) com WHO" +
      "FRAX a 10 anos com probabilidade de fratura da anca ÷ 0,9 %. Qual das seguintes alternativas é o próximo passo mais adequado na gestão desta doente?",
    answerOptions: [
      { answerText: "Densitometria óssea anual", isCorrect: false },
      { answerText: "Doseamento anual de cálcio", isCorrect: false },
      { answerText: "Prescrição de bifosfonatos ", isCorrect: false },
      { answerText: "Prescrição de denosumab", isCorrect: false },
      { answerText: "Prescrição de exercício físico", isCorrect: true },
    ],
    theme: "A",
  },
  {
    questionText:
      "Uma mulher de 47 anos, empregada de limpeza, recorre novamente ao seu" +
      "médico de familia, com queixas de falta de força, cansaço, dores musculares generalizadas, ansiedade e sono não repousador. Afirma estar com grandes" +
      "dificuldades na realização do trabalho, pelo que pede «baixa para descansar». Queixa-se ainda que o marido desvaloriza as queixas, não lhe dando qualquer" +
      "atenção e contribuindo dessa forma para um ambiente familiar muito tenso. A doente apresenta estas queixas desde os seus 25 anos, altura em que se casou." +
      "Já foi referenciada a consultas de diversas especialidades, de onde teve alta, e realizado diversos estudos clínicos, que não permitiram encontrar uma causa que" +
      "explique as suas queixas. Qual dos seguintes é o próximo passo mais adequado?",
    answerOptions: [
      {
        answerText:
          "Conceder incapacidade temporária para o trabalho até que recupere",
        isCorrect: false,
      },
      {
        answerText: "Confrontar a doente com a inconsistência das suas queixas",
        isCorrect: false,
      },
      {
        answerText:
          "Introduzir a possibilidade de causalidade psicológica para os sintomas",
        isCorrect: true,
      },
      {
        answerText: "Introduzir medicação anti-inflamatória",
        isCorrect: false,
      },
      {
        answerText:
          "Solicitar exames auxiliares de diagnóstico para tranquilizar a doente",
        isCorrect: false,
      },
    ],
    theme: "A",
  },
  {
    questionText:
      "Um lactente de 4 meses é trazido à consulta de pediatria por má evolução ponderal." +
      "A mãe refere associadamente seis a oito dejeções diarreicas diárias, líquidas de cor clara, aparência oleosa e odor fétido. A gestação foi vigiada e " +
      "decorreu sem intercorrências. O parto foi de termo às 39 semanas e a antropometria adequada à idade gestacional. Há referência a três crises prévias" +
      "de pieira, desde o 1º mês de vida, com tosse persistente nos intervalos entre crises. Ele tem 52,5 cm de comprimento (P15) e pesa 5200 g(P3), Ao exame físico" +
      "apresenta crepitações dispersas bilateralmente na auscultação pulmonar, distensão abdominal e eritema perianal, sem outras alterações de relevo." +
      "Qual das seguintes alternativas é a mais adequada para estabelecer o diagnóstico etiológico mais provável?",
    answerOptions: [
      { answerText: "Doseamento de elastase fecal.", isCorrect: false },
      {
        answerText: "Exame bacteriológico de secreções respiratórias.",
        isCorrect: false,
      },
      {
        answerText: "Exame bacteriológico e parasitológico de fezes",
        isCorrect: false,
      },
      { answerText: "Prova de suor", isCorrect: true },
      { answerText: "Raio-X do tórax", isCorrect: false },
    ],
    theme: "A",
  },
  {
    questionText:
      "Um homem de 34 anos, auxiliar de ação médica, vem ao consultório médico para" +
      "exame anual de vigilância. Refere que, no último exame de saúde ocupacional, realizado há uma semana, fez uma prova cutânea de Mantoux. Hoje, tem uma" +
      "induração local de 15x15 mm. A prova de Mantoux realizada há dois anos foi negativa. A pesquisa de anticorpos contra VIH foi também negativa." +
      "Qual das seguintes alternativas é o próximo passo mais adequado, neste momento?",
    answerOptions: [
      {
        answerText:
          "Iniciar terapêutica tripla, com isoniazida, rifampicina e pirazinamida por um ano.",
        isCorrect: false,
      },
      {
        answerText: "Prescrever isoniazida e etambutol por um um ano.",
        isCorrect: false,
      },
      { answerText: "Prescrever isoniazida por seis meses.", isCorrect: false },
      {
        answerText: "Repetir teste de Mantoux ao fim de um ano.",
        isCorrect: false,
      },
      { answerText: "Solicitar raio-X do tórax.", isCorrect: true },
    ],
    theme: "A",
  },
  {
    questionText:
      "Uma mulher de 36 anos vem ao consultório médico por dificuldade progressiva" +
      "em subir escadas e em se levantar de cadeiras baixas desde há três meses. Ela refere dor nos punhos, ancas e joelhos, e ainda dificuldade ligeira na deglutição" +
      "neste período de tempo. Ela não tem antecedentes patológicos de relevo e não faz medicação. Os sinais vitais são temperatura 36,7°C, frequência respiratória" +
      "14/min, frequência cardíaca 68/min e pressão arterial 110/70 mm Hg. O exame neurológico revela fraqueza proximal discreta, reflexos preservados, sem" +
      "alterações da sensibilidade. O exame dos pares cranianos encontra-se dentro dos parâmetros de normalidade. Não há evidência de artrite ao exame fisico. A" +
      "concentração sérica de creatinoquinase é de 600 U/L. Qual dos seguintes diagnósticos é o mais provável?",
    answerOptions: [
      { answerText: "Distrofia muscular das cinturas", isCorrect: false },
      { answerText: "Hipotiroidismo", isCorrect: false },
      { answerText: "Miastenia gravjs.", isCorrect: false },
      { answerText: "Polimiosite", isCorrect: true },
      { answerText: "Triquinose", isCorrect: false },
    ],
    theme: "A",
  },
  {
    questionText:
      "Três dias após a admissão hospitalar por politraumatismo na sequência de uma" +
      "colisão de mota, um homem de 20 anos apresenta diminuição do débito urinário, via cateter vesical, nas últimas 36 horas (20 mL/8 h). As lesões incluem fratura" +
      "pélvica, laceração hepática e fratura do rim esquerdo com avulsão do pedículo vascular. À chegada ao serviço de urgência, o doente estava hemodinamicamente" +
      "instável e foi feita uma laparotomia exploradora imediata, com reparação da laceração hepática e realização de nefrectomia esquerda. Um dia depois, realizouse fixação interna da pélvis, tendo feito um total de 8U de eritrócitos desde a" +
      "admissão. Os sinais vitais estão estáveis desde a laparotomia e hoje apresenta temperatura 37.3°C, frequência respiratória 17/min, frequência cardíaca 79/min" +
      "e pressão arterial 120/70 mm Hg.Os resultados dos estudos analíticos revelam:" +
      "Creatinina 1.5 mg/dL; Ureia 17 mg/dL [N = 10-40 mg/dL]; Sódio 138 mEq/L; Potássio 4,0 mEq/L; Cloro 102 mEq/L; Bicarbonato 20 mEq/L" +
      "Qual das seguintes alternativas é a causa mais provável para a diminuição do débito urinário?",
    answerOptions: [
      { answerText: "Embolia gorda", isCorrect: false },
      {
        answerText: "Hematoma pélvico com obstrução da uretra",
        isCorrect: false,
      },
      { answerText: "Necrose tubular aguda", isCorrect: true },
      { answerText: "Nefrectomia recente", isCorrect: false },
      { answerText: "Reação à transfusão", isCorrect: false },
    ],
    theme: "B",
  },
  {
    questionText:
      "Uma adolescente de 14 anos vem ao consultório médico por exantema pruriginoso" +
      "crónico, mais exuberante durante os meses de inverno. Ela não tem antecedentes patológicos de relevo. O exame físico mostra envolvimento proeminente da face," +
      "pescoço, mãos e fossas antecubitais e poplíteas. A pele é xerótica e hiperqueratótica. O exantema é caracterizado por numerosas pápulas" +
      "eritematosas, algumas lesões de escoriação, descamação e liquenificação. Qual das seguintes alternativas é o achado histopatológico mais provável de se" +
      "encontrar nas lesões desta doente?",
    answerOptions: [
      { answerText: "Bactérias e neutrófilos", isCorrect: false },
      { answerText: "Células gigantes multinucleadas", isCorrect: false },
      { answerText: "Elementos fúngicos", isCorrect: false },
      { answerText: "Elementos parasitários", isCorrect: false },
      { answerText: "Reação de hipersensibilidade", isCorrect: true },
    ],
    theme: "B",
  },
  {
    questionText:
      "Um homem de 49 anos, empregado numa livraria, vem à consulta hospitalar para" +
      "vigilância. Ele tem antecedentes de colite ulcerosa com 20 anos de evolução e colangite esclerosante primária há 6 anos. Encontra-se assintomático. Os sinais" +
      "vitais são temperatura 36,8°C, frequência cardíaca 89/min e pressão arterial 100/55mmHg. O exame físico encontra-se dentro dos parâmetros da normalidade." +
      "Os resultados dos estudos analíticos revelam: AST 25 U/L; ALT 78 U/L; γ -glutamil transferase (GGT) 220 U/L; Cálcio total 8,0 mg/dL; Proteínas: Albumina 3,0 g/dL; Hemoglobina 11,0 g/dL; Tempo de protrombina 15 segundos" +
      "Qual das seguintes alternativas representa a estratégia de vigilância mais adequada, neste doente?",
    answerOptions: [
      { answerText: "Colonoscopia, anual.", isCorrect: true },
      {
        answerText: "Doseamento de CEA sérico, a cada seis meses.",
        isCorrect: false,
      },
      { answerText: "Enterorressonância, anual.", isCorrect: false },
      {
        answerText: "Pesquisa de sangue oculto nas fezes, a cada seis meses.",
        isCorrect: false,
      },
      { answerText: "TC abdominal, a cada dois anos.", isCorrect: false },
    ],
    theme: "B",
  },

  {
    questionText:
      "Um homem de 48 anos morre subitamente de uma arritmia cardíaca. Há seis semanas, foi ressuscitado de uma paragem cardíaca causada por doença arterial coronária e desenvolveu insuficiência renal oligúrica. Há cinco semanas (1 semana após ter sido ressuscitado), a sua concentração sérica de nitrogénio ureico (BUN) era de 40 mg/dL, a sua concentração sérica de creatinina era de 3,5 mg/dL, e a sua urina continha gessos granulares. Há quatro semanas, a sua oligúria resolvida, e as suas concentrações de BUN e creatinina sérica voltaram ao normal. O exame dos seus rins na autópsia é o mais provável que mostre qual dos seguintes?",
    answerOptions: [
      { answerText: "Inflamação aguda.", isCorrect: false },
      { answerText: "Exsudado fibrinoso.", isCorrect: false },
      { answerText: "Cicatriz fibrosa.", isCorrect: false },
      { answerText: "Tecido de granulação.", isCorrect: false },
      { answerText: "Rim normal.", isCorrect: true },
    ],
    theme: "B",
  },
  {
    questionText:
      "Numa amostra de 100 indivíduos, a contagem média de leucócitos é de 7500/mm3, com um desvio padrão de 1000/mm3. Se a contagem de leucócitos nesta população seguir uma distribuição normal (gaussiana), aproximadamente 50% dos indivíduos terão qual das seguintes contagens totais de leucócitos?",
    answerOptions: [
      { answerText: "5500-9500/mm3", isCorrect: false },
      { answerText: "<6500/mm3 ou >8500/mm3", isCorrect: false },
      { answerText: "6500–8500/mm3", isCorrect: false },
      { answerText: "<7500/mm3", isCorrect: true },
      { answerText: ">9500/mm3", isCorrect: false },
    ],
    theme: "B",
  },
  {
    questionText:
      "Um homem de 39 anos vem ao médico devido a uma história de 6 meses de progressiva falta de ar. Ele tem tido uma tosse produtiva de expectoração branca há 2 anos. Fumou 1 maço de cigarros diariamente durante 16 anos, mas deixou de fumar há 10 anos. Está em ligeira dificuldade respiratória com lábios com bolsa e peito de barril; está a usar os músculos acessórios da respiração. Os sons respiratórios são distantes e os crepitações estão presentes nos campos pulmonares inferiores bilateralmente. Os testes de função pulmonar mostram uma diminuição da relação VEF1:CVF, aumento do volume residual, e diminuição da capacidade de difusão. Uma radiografia do tórax mostra hiperinsuflação e hipertranslucidez dos lobos inferiores de ambos os pulmões. Qual dos seguintes é o diagnóstico mais provável?",
    answerOptions: [
      { answerText: "Asma", isCorrect: false },
      { answerText: "Bronquiectasia", isCorrect: false },
      { answerText: "Fibrose pulmonar crónica", isCorrect: false },
      { answerText: "Fibrose cística", isCorrect: false },
      { answerText: "Enfisema", isCorrect: true },
    ],
    theme: "B",
  },
  {
    questionText:
      "Uma mulher de 33 anos, anteriormente saudável, é levada para o departamento de emergência pelos Serviços Secretos por perseguir o presidente dos EUA durante 2 meses. Ela afirma ser casada com o irmão gémeo do presidente e afirma que o presidente acabou de ser raptado para evitar competição. Ela fala rapidamente e é difícil de interromper. As suas associações são frequentemente soltas. Ela diz: 'Não durmo há dias, mas não vou sequer tentar dormir até o meu marido ser resgatado. Deus tem-me instruído para assumir o controlo da Casa Branca. Mal posso esperar para estar reunida com o meu marido. Ouço a sua voz a dizer-me o que fazer'. Quando lhe perguntam sobre o uso de drogas, ela diz que só usa substâncias naturais. Ela recusa-se a permitir análises de sangue ou urina, dizendo: 'Não tenho tempo para esperar pelos resultados'. Qual dos seguintes é o diagnóstico mais provável?",
    answerOptions: [
      {
        answerText: "Desordem bipolar, maníaca, com características psicóticas",
        isCorrect: true,
      },
      { answerText: "Breve desordem psicótica", isCorrect: false },
      { answerText: "Desordem ilusória", isCorrect: false },
      {
        answerText: "Distúrbio psicótico devido a condição médica geral",
        isCorrect: false,
      },
      { answerText: "Esquizofrenia", isCorrect: false },
    ],
    theme: "C",
  },
  {
    questionText:
      "Um homem de 53 anos de idade vem ao médico devido a uma erupção cutânea seca e escamosa no seu corpo durante o ano passado. Ele teve uma perda de peso de 15 kg (33 lb) durante o ano passado. Tem 178 cm de altura e pesa agora 54 kg; o IMC é de 17 kg/m2. As suas fezes têm um grande volume e flutuam. Qual das seguintes deficiências nutricionais é mais provável?",
    answerOptions: [
      { answerText: "Magnésio", isCorrect: false },
      { answerText: "Vitamina A", isCorrect: true },
      { answerText: "Vitamina B12 (cobalamina)", isCorrect: false },
      { answerText: "Vitamina C", isCorrect: false },
      { answerText: "Zinco", isCorrect: false },
    ],
    theme: "C",
  },
  {
    questionText:
      "Um homem de 62 anos vem ao médico devido a uma história de 6 meses de hesitação urinária e drible após a micção. Ele tem de urinar duas a três vezes por noite. O exame físico mostra uma próstata difusamente aumentada, firme, e não sensível. Qual dos seguintes factores é mais provável que tenha contribuído para o desenvolvimento do estado deste doente?",
    answerOptions: [
      { answerText: "Activação do receptor α1-adrenérgico", isCorrect: false },
      {
        answerText: "Conversão da testosterona em diidrotestosterona",
        isCorrect: true,
      },
      {
        answerText: "Conversão da testosterona em estradiol",
        isCorrect: false,
      },
      { answerText: "Inibição do receptor α1-adrenérgico", isCorrect: false },
      {
        answerText: "Produção de antigénio específico da próstata",
        isCorrect: false,
      },
    ],
    theme: "C",
  },
  {
    questionText:
      "Uma mulher de 18 anos com doença falciforme é trazida para o departamento de emergência pelos seus pais devido a um historial de 2 horas de dores abdominais graves e náuseas. Os seus pais dizem que ela comeu um cheeseburger, batido de leite, e barra de chocolate ao almoço. A sua temperatura é de 37°C (98,6°F). O exame físico mostra ternura sobre o quadrante superior direito do abdómen, irradiando para o ombro direito. A ultra-sonografia do quadrante superior direito do abdómen mostra cálculos biliares. Qual das seguintes é a causa subjacente mais provável do estado actual deste paciente?",
    answerOptions: [
      {
        answerText: "Diminuição da secreção hepática da lecitina",
        isCorrect: false,
      },
      {
        answerText: "Diminuição da reabsorção de sais biliares",
        isCorrect: false,
      },
      {
        answerText:
          "Elevada proporção de colesterol para os ácidos biliares na bílis",
        isCorrect: false,
      },
      {
        answerText: "Infestação com parasitas que segregam β-glucuronidase",
        isCorrect: false,
      },
      {
        answerText: "Sobrecarga de bilirrubina não conjugada",
        isCorrect: true,
      },
    ],
    theme: "C",
  },
  {
    questionText:
      "Um homem de 45 anos é trazido para o departamento de emergência 30 minutos após o início súbito de dores no peito esmagadas. O seu pai, a tia materna e o tio paterno morreram todos de enfartes do miocárdio com menos de 50 anos de idade. O exame físico mostra xantomas tendíneos nas mãos e tendões de Aquiles espessados. Estudos com soro lipídico mostram uma concentração total de colesterol de 410 mg/dL, concentração de colesterol HDL de 30 mg/dL, e concentração de triglicéridos de 140 mg/dL. O diagnóstico de enfarte do miocárdio é feito. Este doente tem muito provavelmente uma deficiência de qual dos seguintes?",
    answerOptions: [
      { answerText: "Apo B48", isCorrect: false },
      { answerText: "Apo C", isCorrect: false },
      { answerText: "HMG-CoA actividade redutora", isCorrect: false },
      { answerText: "Receptor LDL", isCorrect: true },
      { answerText: "Actividade lipoproteica lipase", isCorrect: false },
    ],
    theme: "C",
  },
  {
    questionText:
      "É criado um animal experimental no qual os centros germinais dos gânglios linfáticos reactivos mostram encolhimento de células, florescimento citoplasmático, sem inflamação adjacente, e membranas plasmáticas intactas. Estes achados celulares são muito provavelmente causados por qual dos seguintes mecanismos?",
    answerOptions: [
      { answerText: "Activação da caspase", isCorrect: true },
      {
        answerText: "Diminuição da concentração de citocromo c",
        isCorrect: false,
      },
      {
        answerText: "Diminuição da concentração intracelular de Ca2+",
        isCorrect: false,
      },
      {
        answerText: "Aumento da actividade de glutatião peroxidase",
        isCorrect: false,
      },
      {
        answerText: "Aumento da actividade enzimática lisossomal",
        isCorrect: false,
      },
    ],
    theme: "C",
  },
  {
    questionText:
      "Os investigadores realizam um estudo que avalia o efeito da finasterida na incidência do cancro da próstata em 500 pacientes. Os investigadores recrutam mais 1000 pacientes para o estudo. Qual dos seguintes efeitos terá isto sobre a investigação estudar?",
    answerOptions: [
      { answerText: "Maiores hipóteses de erro de Tipo I", isCorrect: false },
      { answerText: "Maiores hipóteses de erro de Tipo II", isCorrect: false },
      { answerText: "Menos hipóteses de erro de Tipo I", isCorrect: false },
      { answerText: "Menos hipóteses de erro de Tipo II", isCorrect: true },
      { answerText: "Impossível de prever", isCorrect: false },
    ],
    theme: "C",
  },
  {
    questionText:
      "Um homem de 76 anos de idade morre de um enfarte cerebral maciço pouco depois da admissão no hospital. Durante os últimos 10 anos, teve vários enfartes cerebrais menores e dois ataques isquémicos transitórios. O exame de uma amostra do córtex cerebral obtida na autópsia mostra uma extensa gliose. Esta descoberta é muito provavelmente causada pelo crescimento e proliferação de qual dos seguintes?",
    answerOptions: [
      { answerText: "Astrocitos", isCorrect: true },
      { answerText: "Células ependymal", isCorrect: false },
      { answerText: "Fibroblastos", isCorrect: false },
      { answerText: "Células microgliais", isCorrect: false },
      { answerText: "Oligodendrócitos", isCorrect: false },
    ],
    theme: "C",
  },
  {
    questionText:
      "Uma mulher de 52 anos, anteriormente saudável, vem ao médico devido a uma história de 2 meses de fadiga, obstipação, e micção frequente. A sua temperatura é 37,1°C (98,8°F), o pulso é 80/min, as respirações são 14/min, e a pressão arterial é 140/90 mm Hg. Os crepitações difusas são ouvidas bilateralmente. A sua concentração sérica de cálcio é de 11,1 mg/dL, e a concentração sérica da hormona paratiróide é diminuída. Uma radiografia do tórax mostra linfadenopatia hilar bilateral e infiltrados intersticiais. Qual das seguintes é a causa mais provável da hipercalcemia desta doente?",
    answerOptions: [
      {
        answerText: "Produção de calcitriol por macrófagos activados",
        isCorrect: true,
      },
      {
        answerText: "Reabsorção local de osso por metástases",
        isCorrect: false,
      },
      {
        answerText:
          "Secreção do peptídeo relacionado com a hormona paratiróide",
        isCorrect: false,
      },
      { answerText: "Secreção da hormona paratiróide", isCorrect: false },
      {
        answerText: "Secreção da hormona estimulante da tiróide",
        isCorrect: false,
      },
    ],
    theme: "C",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Quiz() {
  const numberquestions = 5;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [scoreC, setScoreC] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [disable, setDisable] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const nextPrevHandler = (text) => {
    if (text === "next" && currentQuestion !== numberquestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (text === "prev" && currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestionHandler = (text) => {
    setAnswer((prev) => [...prev, text]);
  };

  const handleAnswerOptionClick = (answerOption) => {
    let { isCorrect, answerText } = answerOption;
    nextQuestionHandler(answerText);
    console.log(answer);
    console.log(currentQuestion);

    if (isCorrect && questions[currentQuestion].theme === "A") {
      setScoreA(scoreA + 1);
    }
    if (isCorrect && questions[currentQuestion].theme === "B") {
      setScoreB(scoreB + 1);
    }
    if (isCorrect && questions[currentQuestion].theme === "C") {
      setScoreC(scoreC + 1);
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numberquestions) {
      setCurrentQuestion(nextQuestion);
      console.log("hi");
    } else if (nextQuestion === numberquestions) {
      setShowScore(true);
      setDisable(true);
    }
  };

  const reviewHandler = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setShowNext(true);
    console.log(answer);
  };

  const resetStateClick = () => {
    setShowNext(false);
    setCurrentQuestion(0);
    setAnswer([]);
    setShowScore(false);
    setScore(0);
    setScoreA(0);
    setScoreB(0);
    setScoreC(0);
    setAnswer([]);
    setDisable(false);
    questions = shuffle(questions);
    // startTimer();
  };

  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ seconds }) => {
    return <span>Time Left: {seconds}</span>;
  };

  function MyCountdownTimer() {
    const [currentTimeIndex, setCurrentTimeIndex] = useState(0);

    return (
      <Countdown
        date={Date.now() + 90000}
        key={currentTimeIndex}
        onComplete={() => {
          setCurrentTimeIndex(currentTimeIndex + 1);
          if (currentQuestion + 1 < numberquestions)
            setCurrentQuestion((prev) => prev + 1);
          nextQuestionHandler("");
          if (currentQuestion + 1 === numberquestions) setShowScore(true);
        }}
        renderer={({ minutes, seconds }) => (
          <div>{"Time left: " + minutes + ":" + seconds}</div>
        )}
      />
    );
  }

  return (
    <>
      {showNext ? (
        <div className="prevnext-section">
          <button
            onClick={() => {
              nextPrevHandler("prev");
            }}
            className="next"
          >
            Previous
          </button>
          <button
            onClick={() => {
              nextPrevHandler("next");
            }}
            className="next"
          >
            Next
          </button>
          <button className="retry" onClick={resetStateClick}>
            Retry
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="app">
        {showScore ? (
          <>
            <div className="score-section">
              <button className="retry" onClick={resetStateClick}>
                Retry
              </button>

              <button className="review" onClick={reviewHandler}>
                Review
              </button>
              <h3>
                You scored {score} out of {numberquestions}
                You scored A {scoreA} out of {numberquestions}
                You scored B {scoreB} out of {numberquestions}
                You scored C {scoreC} out of {numberquestions}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div>{!showNext ? <MyCountdownTimer /> : ""}</div>
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{numberquestions}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  disabled={disable}
                  onClick={() => handleAnswerOptionClick(answerOption)}
                  className={
                    showNext
                      ? answer[currentQuestion] === answerOption.answerText &&
                        !answerOption.isCorrect
                        ? "incorrect"
                        : answerOption.isCorrect
                        ? "correct"
                        : ""
                      : ""
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link className="link" to="/quiz">
                Start Quiz
              </Link>
            </>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}
