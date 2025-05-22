// Dados adicionais para o Dashboard de Educação Básica no Maranhão
// Incluindo IDEB, taxas de promoção, repetência e evasão

// Adicionando ao objeto existente
const dadosEducacionaisAdicionais = {
    // IDEB - Índice de Desenvolvimento da Educação Básica
    ideb: {
        anosIniciais: {
            anos: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023],
            valores: [2.7, 3.5, 3.7, 3.9, 3.8, 4.4, 4.5, 4.8, 4.7, 5.1],
            variacao: {
                periodo: "2005-2023",
                percentual: 88.9
            },
            observacoes: [
                "Pequena queda em 2013 (de 3,9 para 3,8)",
                "Pequena queda em 2021 (de 4,8 para 4,7), possivelmente relacionada à pandemia"
            ]
        },
        anosFinais: {
            anos: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023],
            valores: [2.8, 3.2, 3.4, 3.4, 3.4, 3.7, 3.7, 4.0, 4.2, 4.3],
            variacao: {
                periodo: "2005-2023",
                percentual: 53.6
            },
            observacoes: [
                "Crescimento mais lento que nos anos iniciais",
                "Estagnação entre 2009 e 2013"
            ]
        },
        comparativo: {
            categorias: ["Anos Iniciais", "Anos Finais"],
            crescimentoPercentual: [88.9, 53.6]
        }
    },
    
    // Taxas de Promoção
    taxasPromocao: {
        anosIniciais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [87.3, 88.0, 87.7, 88.9, 89.9, 91.1, 93.2, 93.5],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: 6.2
            }
        },
        anosFinais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [77.4, 78.4, 77.8, 79.9, 80.3, 82.8, 88.8, 86.8],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: 9.4
            }
        },
        ensinoMedio: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [73.9, 76.8, 76.0, 81.2, 78.8, 85.7, 84.7, 83.0],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: 9.1
            }
        },
        comparativo: {
            categorias: ["Anos Iniciais", "Anos Finais", "Ensino Médio"],
            crescimentoPontosPercentuais: [6.2, 9.4, 9.1]
        }
    },
    
    // Taxas de Repetência
    taxasRepetencia: {
        anosIniciais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [9.5, 9.2, 9.7, 8.7, 7.8, 6.8, 4.4, 4.6],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -4.9
            }
        },
        anosFinais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [12.8, 12.4, 13.3, 11.9, 10.9, 9.2, 4.5, 5.3],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -7.5
            }
        },
        ensinoMedio: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [11.5, 11.0, 11.3, 7.3, 7.4, 4.5, 5.2, 4.9],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -6.6
            }
        },
        comparativo: {
            categorias: ["Anos Iniciais", "Anos Finais", "Ensino Médio"],
            reducaoPontosPercentuais: [4.9, 7.5, 6.6]
        }
    },
    
    // Taxas de Evasão
    taxasEvasao: {
        anosIniciais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [2.9, 2.6, 2.4, 2.2, 2.1, 2.0, 2.3, 1.8],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -1.1
            }
        },
        anosFinais: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [6.7, 6.3, 6.0, 5.9, 5.8, 4.8, 4.9, 5.8],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -0.9
            },
            observacoes: ["Oscilação recente com aumento em 2021"]
        },
        ensinoMedio: {
            anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            valores: [12.9, 11.0, 11.2, 10.3, 11.9, 7.9, 8.7, 10.1],
            variacao: {
                periodo: "2014-2021",
                pontosPercentuais: -2.8
            },
            observacoes: ["Redução com oscilações significativas"]
        },
        comparativo: {
            categorias: ["Anos Iniciais", "Anos Finais", "Ensino Médio"],
            reducaoPontosPercentuais: [1.1, 0.9, 2.8]
        }
    },
    
    // Análises e Tendências
    analisesTendencias: {
        ideb: [
            "Evolução positiva do IDEB no Maranhão ao longo dos anos",
            "Crescimento mais acentuado nos anos iniciais do que nos anos finais",
            "Impacto da pandemia de COVID-19 nos resultados de 2021"
        ],
        fluxoEscolar: [
            "Aumento das taxas de promoção em todos os níveis de ensino",
            "Redução das taxas de repetência em todos os níveis",
            "Diminuição das taxas de evasão, embora com algumas oscilações",
            "Resiliência do sistema educacional maranhense frente aos desafios da crise sanitária"
        ],
        desafios: [
            "Espaço para melhorias nos anos finais do ensino fundamental e no ensino médio",
            "Necessidade de atenção às oscilações nas taxas de evasão, especialmente no ensino médio"
        ]
    },
    
    // Impacto da Pandemia
    impactoPandemia: {
        categorias: ["IDEB Anos Iniciais", "IDEB Anos Finais", "Promoção", "Repetência", "Evasão"],
        observacoes: [
            "Queda no IDEB dos anos iniciais em 2021 (de 4,8 para 4,7)",
            "Aumento nas taxas de promoção durante a pandemia",
            "Redução nas taxas de repetência durante a pandemia",
            "Oscilações nas taxas de evasão, com aumento em alguns segmentos em 2021"
        ]
    }
};

// Atualizar o objeto principal com os novos dados
if (typeof dadosEducacaoMaranhao !== 'undefined') {
    dadosEducacaoMaranhao.ideb = dadosEducacionaisAdicionais.ideb;
    dadosEducacaoMaranhao.taxasPromocao = dadosEducacionaisAdicionais.taxasPromocao;
    dadosEducacaoMaranhao.taxasRepetencia = dadosEducacionaisAdicionais.taxasRepetencia;
    dadosEducacaoMaranhao.taxasEvasao = dadosEducacionaisAdicionais.taxasEvasao;
    dadosEducacaoMaranhao.analisesTendencias = dadosEducacionaisAdicionais.analisesTendencias;
    dadosEducacaoMaranhao.impactoPandemia = dadosEducacionaisAdicionais.impactoPandemia;
} else {
    // Caso o objeto principal ainda não exista
    const dadosEducacaoMaranhao = dadosEducacionaisAdicionais;
}
