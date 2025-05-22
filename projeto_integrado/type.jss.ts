document.addEventListener('DOMContentLoaded', function() {
    // Certificando-se de que os elementos existem na página
    const regionsChartElement = document.getElementById('regionsChart');
    const resourcesChartElement = document.getElementById('resourcesChart');
    const completionChartElement = document.getElementById('completionChart');
    const technologyChartElement = document.getElementById('technologyChart');

    if (regionsChartElement && resourcesChartElement && completionChartElement && technologyChartElement) {
        
        // Regions Performance Chart
        const regionsCtx = regionsChartElement.getContext('2d');
        const regionsChart = new Chart(regionsCtx, {
            type: 'bar',
            data: {
                labels: ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte'],
                datasets: [{
                    label: 'Desempenho Acadêmico (IDEB 2025)',
                    data: [6.2, 6.0, 5.8, 5.1, 4.9],
                    backgroundColor: [
                        'rgba(0, 156, 59, 0.7)',
                        'rgba(255, 223, 0, 0.7)',
                        'rgba(0, 39, 118, 0.7)',
                        'rgba(59, 131, 246, 0.7)',
                        'rgba(14, 165, 233, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 156, 59, 1)',
                        'rgba(255, 223, 0, 1)',
                        'rgba(0, 39, 118, 1)',
                        'rgba(59, 131, 246, 1)',
                        'rgba(14, 165, 233, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 4.0,
                        max: 7.0
                    }
                }
            }
        });

        // Resources Distribution Chart
        const resourcesCtx = resourcesChartElement.getContext('2d');
        const resourcesChart = new Chart(resourcesCtx, {
            type: 'pie',
            data: {
                labels: ['Infraestrutura', 'Tecnologia', 'Material Didático', 'Formação de Professores', 'Programas Especiais'],
                datasets: [{
                    data: [30, 15, 25, 20, 10],
                    backgroundColor: [
                        'rgba(0, 156, 59, 0.7)',
                        'rgba(255, 223, 0, 0.7)',
                        'rgba(0, 39, 118, 0.7)',
                        'rgba(59, 131, 246, 0.7)',
                        'rgba(14, 165, 233, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 156, 59, 1)',
                        'rgba(255, 223, 0, 1)',
                        'rgba(0, 39, 118, 1)',
                        'rgba(59, 131, 246, 1)',
                        'rgba(14, 165, 233, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Completion Rate Chart
        const completionCtx = completionChartElement.getContext('2d');
        const completionChart = new Chart(completionCtx, {
            type: 'line',
            data: {
                labels: ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte'],
                datasets: [{
                    label: 'Taxa de Conclusão do Ensino Médio (%)',
                    data: [78, 76, 72, 65, 61],
                    fill: false,
                    borderColor: 'rgba(0, 156, 59, 1)',
                    tension: 0.1,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 50,
                        max: 90
                    }
                }
            }
        });

        // Technology Access Chart
        const technologyCtx = technologyChartElement.getContext('2d');
        const technologyChart = new Chart(technologyCtx, {
            type: 'radar',
            data: {
                labels: ['Internet de Alta Velocidade', 'Computadores por Aluno', 'Laboratórios de Informática', 'Treinamento Digital para Professores', 'Recursos Digitais'],
                datasets: [
                    {
                        label: 'Áreas Urbanas',
                        data: [85, 65, 75, 70, 78],
                        backgroundColor: 'rgba(0, 156, 59, 0.2)',
                        borderColor: 'rgba(0, 156, 59, 1)',
                        pointBackgroundColor: 'rgba(0, 156, 59, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(0, 156, 59, 1)'
                    },
                    {
                        label: 'Áreas Rurais',
                        data: [45, 30, 40, 35, 25],
                        backgroundColor: 'rgba(0, 39, 118, 0.2)',
                        borderColor: 'rgba(0, 39, 118, 1)',
                        pointBackgroundColor: 'rgba(0, 39, 118, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(0, 39, 118, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    } else {
        console.error('Elementos de gráfico não encontrados!');
    }
});
