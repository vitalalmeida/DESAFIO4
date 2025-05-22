// Dados do IDEB e taxas de transição/fluxo do Maranhão

const dadosIDEB = {
    // IDEB - Anos Iniciais do Ensino Fundamental (Rede Pública)
    anosIniciais: {
        anos: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023],
        valores: [2.7, 3.5, 3.7, 3.9, 3.8, 4.4, 4.5, 4.8, 4.7, 5.1]
    },
    
    // IDEB - Anos Finais do Ensino Fundamental (Rede Pública)
    anosFinais: {
        anos: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023],
        valores: [2.8, 3.2, 3.4, 3.4, 3.4, 3.7, 3.7, 4.0, 4.2, 4.3]
    }
};

const dadosFluxo = {
    // Taxa de Promoção
    promocao: {
        anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        anosIniciais: [87.3, 88.0, 87.7, 88.9, 89.9, 91.1, 93.2, 93.5],
        anosFinais: [77.4, 78.4, 77.8, 79.9, 80.3, 82.8, 88.8, 86.8],
        ensinoMedio: [73.9, 76.8, 76.0, 81.2, 78.8, 85.7, 84.7, 83.0]
    },
    
    // Taxa de Repetência
    repetencia: {
        anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        anosIniciais: [9.5, 9.2, 9.7, 8.7, 7.8, 6.8, 4.4, 4.6],
        anosFinais: [12.8, 12.4, 13.3, 11.9, 10.9, 9.2, 4.5, 5.3],
        ensinoMedio: [11.5, 11.0, 11.3, 7.3, 7.4, 4.5, 5.2, 4.9]
    },
    
    // Taxa de Evasão
    evasao: {
        anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        anosIniciais: [2.9, 2.6, 2.4, 2.2, 2.1, 2.0, 2.3, 1.8],
        anosFinais: [6.7, 6.3, 6.0, 5.9, 5.8, 4.8, 4.9, 5.8],
        ensinoMedio: [12.9, 11.0, 11.2, 10.3, 11.9, 7.9, 8.7, 10.1]
    }
};
