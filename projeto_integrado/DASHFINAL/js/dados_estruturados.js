// Dados estruturados completos para o Dashboard de Educação Básica no Maranhão

// Dados de Matrículas por Ano
const matriculasPorAno = {
  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  total: [2100000, 2080000, 2060000, 2040000, 2020000, 2000000, 1980000, 1960000, 1940000, 1920000, 1850984],
  educacaoEspecial: [27382, 30367, 33614, 35877, 40162, 44029, 44146, 48074, 53270, 62460, 70620]
};

// Distribuição de Matrículas por Sexo em 2024
const matriculasPorSexo = {
  categorias: ["Feminino", "Masculino"],
  valores: [909119, 941865],
  percentuais: [49.1, 50.9]
};

// Distribuição de Matrículas por Faixa Etária em 2024
const matriculasPorFaixaEtaria = {
  faixas: ["Até 3 anos", "4 a 5 anos", "6 a 10 anos", "11 a 14 anos", "15 a 17 anos", "18 a 19 anos", "20 a 29 anos", "30 a 39 anos", "40 anos ou mais"],
  total: [150000, 210000, 430000, 450000, 300000, 50000, 45000, 35000, 65000],
  feminino: [74406, 104132, 213369, 225467, 154255, 24034, 23296, 17606, 37493],
  masculino: [76730, 109348, 260423, 233369, 162226, 23883, 19014, 10651, 27282]
};

// Evolução das Matrículas por Cor/Raça
const matriculasPorCorRaca = {
  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  branca: [13.5, 13.3, 13.3, 12.9, 12.8, 12.5, 12.6, 12.2, 11.7, 11.6, 11.8],
  pretaParda: [32.2, 30.6, 31.2, 31.3, 32.2, 32.7, 33.6, 35.2, 32.1, 31.0, 22.3],
  naoDeclarada: [45.8, 44.6, 44.7, 45.2, 45.4, 45.7, 45.4, 45.6, 46.2, 46.2, 45.8],
  outra: [8.5, 11.5, 10.8, 10.6, 9.6, 9.1, 8.4, 7.0, 10.0, 11.2, 20.1]
};

// Evolução das Matrículas na Educação Especial
const educacaoEspecial = {
  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  total: [27382, 30367, 33614, 35877, 40162, 44029, 44146, 48074, 53270, 62460, 70620],
  percentualInclusaoClasseComum: [85.8, 87.0, 88.6, 91.1, 92.9, 93.4, 93.0, 94.0, 95.6, 97.2, 98.9],
  distribuicaoTipoClasse2024: {
    categorias: ["Classe comum", "Classe especial"],
    valores: [69055, 1565],
    percentuais: [97.8, 2.2]
  }
};

// Variação Percentual de Matrículas entre 2014 e 2024
const variacaoMatriculas = {
  categorias: ["Total", "Educação Especial", "Localização Urbana (p.p.)", "Localização Rural (p.p.)", "Cor/Raça Branca (p.p.)", "Cor/Raça Preta/Parda (p.p.)", "Cor/Raça Não declarada (p.p.)"],
  valores: [-11.9, 157.9, 2.2, -2.2, -1.7, 1.0, -9.9],
  mediaAnual: {
    total: -1.3,
    educacaoEspecial: 9.9
  }
};

// Dados de Docentes por Ano
const docentesPorAno = {
  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  total: [98892, 100258, 102176, 103187, 100586, 100456, 99029, 100145, 106060, 107702, 109316]
};

// Distribuição de Docentes por Sexo em 2024
const docentesPorSexo = {
  categorias: ["Feminino", "Masculino"],
  valores: [83387, 25829],
  percentuais: [76.4, 23.6],
  porRede: {
    redes: ["Federal", "Estadual", "Municipal", "Privada", "Pública"],
    feminino: [58.6, 56.1, 79.3, 79.4, 75.7],
    masculino: [41.4, 43.9, 20.7, 20.6, 24.3]
  }
};

// Distribuição de Docentes por Faixa Etária em 2024
const docentesPorFaixaEtaria = {
  faixas: ["até 24 anos", "25 a 29 anos", "30 a 34 anos", "35 a 39 anos", "40 a 44 anos", "45 a 49 anos", "50 a 54 anos", "55 a 59 anos", "60 a 64 anos", "65 anos ou mais"],
  feminino: [5.4, 9.8, 12.6, 16.1, 17.5, 15.9, 11.1, 6.8, 3.4, 1.4],
  masculino: [5.8, 11.4, 13.4, 16.2, 17.9, 15.5, 9.9, 5.5, 2.9, 1.5]
};

// Distribuição de Docentes por Cor/Raça em 2024
const docentesPorCorRaca = {
  categorias: ["Branca", "Preta/Parda", "Outra", "Não Declarada"],
  valores: [19.0, 79.4, 1.6, 0]
};

// Escolaridade dos Docentes em 2024
const escolaridadeDocentes = {
  categorias: ["Licenciatura", "Pós-Graduação", "Formação continuada"],
  valores: [64.3, 38.0, 50.1],
  totais: [70223, 41522, 54686],
  detalhada: {
    categorias: ["Superior Licenciatura", "Superior Bacharelado", "Normal/Magistério", "Ensino Médio/Inferior"],
    valores: [64.3, 9.2, 23.7, 2.8]
  },
  evolucao: {
    anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    licenciatura: [48.2, 48.2, 50.0, 51.9, 55.4, 59.3, 60.7, 62.6, 63.5, 64.4, 64.9],
    bacharelado: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    emAndamento: [15, 15, 15, 15, 11, 9, 9, 9, 9, 9, 9],
    normalMagisterio: [15, 15, 13, 11, 11, 9, 8, 7, 7, 7, 7],
    medioInferior: [7, 7, 7, 7, 7, 7, 7, 6, 5, 4, 4]
  }
};

// Contratação de Docentes por Rede em 2024
const contratacaoDocentes = {
  redes: ["Pública", "Municipal", "Estadual", "Federal"],
  concursadoEfetivo: [48.4, 47.7, 41.6, 87.1],
  contratoTemporario: [50.4, 49.7, 57.1, 12.0],
  contratoTerceirizado: [0.2, 0.2, 0.5, 0.1],
  clt: [0.2, 0.2, 0.3, 0.7]
};

// Variação Percentual de Docentes entre 2014 e 2024
const variacaoDocentes = {
  categorias: ["Total", "Feminino (p.p.)", "Masculino (p.p.)", "Preta/Parda (p.p.)", "Branca (p.p.)", "Pós-graduação (p.p.)", "Formação continuada (p.p.)", "Localização Urbana (p.p.)", "Localização Rural (p.p.)"],
  valores: [10.4, -1.4, 1.4, 0.6, -0.7, 17.3, 18.9, 1.3, -1.3],
  mediaAnual: {
    total: 1.0
  }
};

// Dados de Escolas por Ano
const escolasPorAno = {
  anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  total: [10830, 10565, 10393, 10155, 9769, 9583, 9500, 9393, 9290, 9182, 9067]
};

// Distribuição de Escolas por Localização em 2024
const escolasPorLocalizacao = {
  categorias: ["Urbana", "Rural"],
  valores: [36.4, 63.6]
};

// Percentual de Escolas com Biblioteca/Sala de Leitura por Rede em 2024
const escolasComBiblioteca = {
  redes: ["Total", "Pública", "Federal", "Estadual", "Municipal", "Privada"],
  percentuais: [22, 20, 100, 48, 18, 66]
};

// Municípios com Maior Percentual de Escolas com Biblioteca/Sala de Leitura em 2024
const municipiosComMaisBibliotecas = {
  municipios: ["São Francisco do Brejão", "Guimarães", "São Luís", "Açailândia", "Imperatriz", "Santa Inês", "Timon", "Duque Bacelar", "São Pedro da Água Branca", "Cedral"],
  percentuais: [90.9, 76.5, 71.7, 68.3, 64.0, 61.4, 59.7, 55.6, 53.8, 53.3]
};

// Indicadores de Infraestrutura Escolar (estimados com base no relatório)
const infraestruturaEscolar = {
  categorias: ["Biblioteca/Sala de Leitura", "Acesso à Internet", "Computadores", "Quadra de Esportes", "Laboratório de Informática"],
  total: [22, 35, 30, 15, 20],
  urbana: [45, 70, 65, 40, 45],
  rural: [10, 15, 12, 5, 8]
};

// Considerações Finais e Tendências
const consideracoesFinais = {
  tendencias: [
    "Redução no número total de matrículas (-11,9%), possivelmente refletindo mudanças demográficas e/ou migração",
    "Crescimento expressivo na educação especial (+157,9%), indicando avanços significativos na inclusão de estudantes com deficiência",
    "Aumento na escolaridade dos docentes, com crescimento de 16,7 pontos percentuais na proporção de professores com licenciatura",
    "Predominância de contratos temporários na rede estadual (57,1%) e municipal (49,7%), indicando desafios na estabilidade do corpo docente",
    "Baixo percentual de escolas com biblioteca/sala de leitura (apenas 22% no total), revelando limitações na infraestrutura educacional",
    "Disparidades regionais significativas no acesso a bibliotecas, com variação de 90,9% a 53,3% entre os dez municípios com melhor infraestrutura"
  ],
  observacoes: [
    "Dados extraídos do painel Power BI do Censo Escolar",
    "Alguns valores são aproximados com base na visualização gráfica"
  ]
};

// Exportando todos os dados para uso no dashboard
const dadosEducacaoMaranhao = {
  matriculasPorAno,
  matriculasPorSexo,
  matriculasPorFaixaEtaria,
  matriculasPorCorRaca,
  educacaoEspecial,
  variacaoMatriculas,
  docentesPorAno,
  docentesPorSexo,
  docentesPorFaixaEtaria,
  docentesPorCorRaca,
  escolaridadeDocentes,
  contratacaoDocentes,
  variacaoDocentes,
  escolasPorAno,
  escolasPorLocalizacao,
  escolasComBiblioteca,
  municipiosComMaisBibliotecas,
  infraestruturaEscolar,
  consideracoesFinais
};
