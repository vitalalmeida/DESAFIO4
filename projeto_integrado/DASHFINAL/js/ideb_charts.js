// Funções para inicializar os gráficos de IDEB e Fluxo Escolar

// Função para inicializar o gráfico de IDEB
function inicializarGraficoIDEB() {
    const ctx = document.getElementById('ideb-chart');
    if (!ctx) {
        console.error('Elemento canvas ideb-chart não encontrado');
        return;
    }
    
    charts.ideb = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosIDEB.anosIniciais.anos,
            datasets: [
                {
                    label: 'Anos Iniciais',
                    data: dadosIDEB.anosIniciais.valores,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Anos Finais',
                    data: dadosIDEB.anosFinais.valores,
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 6,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de Taxas de Promoção
function inicializarGraficoTaxasPromocao() {
    const ctx = document.getElementById('promocao-chart');
    if (!ctx) {
        console.error('Elemento canvas promocao-chart não encontrado');
        return;
    }
    
    charts.promocao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosFluxo.promocao.anos,
            datasets: [
                {
                    label: 'Anos Iniciais',
                    data: dadosFluxo.promocao.anosIniciais,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Anos Finais',
                    data: dadosFluxo.promocao.anosFinais,
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Ensino Médio',
                    data: dadosFluxo.promocao.ensinoMedio,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de Taxas de Repetência
function inicializarGraficoTaxasRepetencia() {
    const ctx = document.getElementById('repetencia-chart');
    if (!ctx) {
        console.error('Elemento canvas repetencia-chart não encontrado');
        return;
    }
    
    charts.repetencia = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosFluxo.repetencia.anos,
            datasets: [
                {
                    label: 'Anos Iniciais',
                    data: dadosFluxo.repetencia.anosIniciais,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Anos Finais',
                    data: dadosFluxo.repetencia.anosFinais,
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Ensino Médio',
                    data: dadosFluxo.repetencia.ensinoMedio,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 15,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de Taxas de Evasão
function inicializarGraficoTaxasEvasao() {
    const ctx = document.getElementById('evasao-chart');
    if (!ctx) {
        console.error('Elemento canvas evasao-chart não encontrado');
        return;
    }
    
    charts.evasao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosFluxo.evasao.anos,
            datasets: [
                {
                    label: 'Anos Iniciais',
                    data: dadosFluxo.evasao.anosIniciais,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Anos Finais',
                    data: dadosFluxo.evasao.anosFinais,
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Ensino Médio',
                    data: dadosFluxo.evasao.ensinoMedio,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 15,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Função para inicializar todos os gráficos da seção IDEB
function inicializarGraficosIDEB() {
    console.log('Inicializando gráficos IDEB');
    inicializarGraficoIDEB();
    inicializarGraficoTaxasPromocao();
    inicializarGraficoTaxasRepetencia();
    inicializarGraficoTaxasEvasao();
}
