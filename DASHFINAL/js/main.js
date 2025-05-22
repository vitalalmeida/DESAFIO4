// Arquivo principal de JavaScript para o Dashboard de Educação Básica no Maranhão

// Variável global para armazenar o ano selecionado
let anoSelecionado = 2024;
let charts = {}; // Objeto para armazenar referências aos gráficos

// Função para formatar números grandes
function formatarNumero(numero) {
    if (numero >= 1000000) {
        return (numero / 1000000).toFixed(2) + 'M';
    } else if (numero >= 1000) {
        return (numero / 1000).toFixed(1) + 'K';
    }
    return numero.toString();
}

// Função para alternar entre seções
function alternarSecao(secaoId) {
    // Ocultar todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção selecionada
    const secaoAtiva = document.getElementById(secaoId + '-section');
    if (secaoAtiva) {
        secaoAtiva.classList.add('active');
    }
    
    // Atualizar o título do cabeçalho
    const headerTitle = document.querySelector('.header-title h1');
    switch(secaoId) {
        case 'dashboard':
            headerTitle.textContent = 'Dashboard';
            break;
        case 'matriculas':
            headerTitle.textContent = 'Matrículas';
            break;
        case 'docentes':
            headerTitle.textContent = 'Docentes';
            break;
        case 'escolas':
            headerTitle.textContent = 'Escolas';
            break;
        case 'infraestrutura':
            headerTitle.textContent = 'Infraestrutura';
            break;
        case 'relatorios':
            headerTitle.textContent = 'Relatórios';
            break;
        case 'configuracoes':
            headerTitle.textContent = 'Configurações';
            break;
        default:
            headerTitle.textContent = 'Dashboard';
            case 'ideb':
            headerTitle.textContent = 'IDEB e Fluxo Escolar';
            // Inicializar gráficos de IDEB quando a seção for ativada
            setTimeout(() => {
                inicializarGraficosIDEB();
            }, 100);
    }
        
    // Atualizar o item ativo no menu
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    const menuItem = document.querySelector(`.sidebar-menu li[data-section="${secaoId}"]`);
    if (menuItem) {
        menuItem.classList.add('active');
    }
    
    // Renderizar gráficos específicos da seção, se necessário
    if (secaoId === 'matriculas') {
        if (!charts.matriculasEvolucao) {
            inicializarGraficoMatriculasEvolucao();
            inicializarGraficoMatriculasSexo();
            inicializarGraficoMatriculasRaca();
            inicializarGraficoMatriculasIdade();
            inicializarGraficoEducacaoEspecialEvolucao();
            inicializarGraficoEducacaoEspecialTipo();
            inicializarGraficoEducacaoEspecialInclusao();
            inicializarGraficoMatriculasVariacao();
        }
    }
    if (secaoId === 'ideb') {
        if (!charts.idebEvolucao) {
            inicializarGraficosIDEB();
             inicializarGraficoIDEB();
            inicializarGraficoTaxasPromocao();
            inicializarGraficoTaxasRepetencia();
            inicializarGraficoTaxasEvasao();
        }
    } 
    else if (secaoId === 'docentes') {
        if (!charts.docentesEvolucao) {
            inicializarGraficoDocentesEvolucao();
            inicializarGraficoDocentesSexo();
            inicializarGraficoDocentesSexoRede();
            inicializarGraficoDocentesRaca();
            inicializarGraficoDocentesIdade();
            inicializarGraficoDocentesEscolaridade();
            inicializarGraficoDocentesEscolaridadeEvolucao();
            inicializarGraficoDocentesContratacao();
            inicializarGraficoDocentesVariacao();
        }
    } else if (secaoId === 'escolas') {
        if (!charts.escolasEvolucao) {
            inicializarGraficoEscolasEvolucao();
            inicializarGraficoEscolasLocalizacao();
        }
    } else if (secaoId === 'infraestrutura') {
        if (!charts.bibliotecaRede) {
            inicializarGraficoBibliotecaRede();
            inicializarGraficoMunicipiosBiblioteca();
            inicializarGraficoInfraestruturaLocalizacao();
        }
    }
}

// Função para implementar a funcionalidade de pesquisa
function implementarPesquisa() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Dados para pesquisa
    const searchData = [
        { title: 'Dashboard', section: 'dashboard' },
        { title: 'Matrículas', section: 'matriculas' },
        { title: 'Matrículas por Sexo', section: 'matriculas' },
        { title: 'Matrículas por Faixa Etária', section: 'matriculas' },
        { title: 'Matrículas por Cor/Raça', section: 'matriculas' },
        { title: 'Educação Especial', section: 'matriculas' },
        { title: 'Docentes', section: 'docentes' },
        { title: 'Docentes por Sexo', section: 'docentes' },
        { title: 'Docentes por Faixa Etária', section: 'docentes' },
        { title: 'Docentes por Cor/Raça', section: 'docentes' },
        { title: 'Escolaridade e Formação', section: 'docentes' },
        { title: 'Contratação de Docentes', section: 'docentes' },
        { title: 'Escolas', section: 'escolas' },
        { title: 'Escolas por Localização', section: 'escolas' },
        { title: 'Infraestrutura', section: 'infraestrutura' },
        { title: 'Biblioteca/Sala de Leitura', section: 'infraestrutura' },
        { title: 'Municípios com Bibliotecas', section: 'infraestrutura' },
        { title: 'Relatórios', section: 'relatorios' },
        { title: 'Considerações Finais', section: 'relatorios' },
        { title: 'Configurações', section: 'configuracoes' }
    ];
    
    // Evento de input para pesquisa
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        // Limpar resultados anteriores
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        // Filtrar resultados
        const filteredResults = searchData.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        
        // Mostrar resultados
        if (filteredResults.length > 0) {
            searchResults.classList.add('active');
            
            filteredResults.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.textContent = result.title;
                resultItem.addEventListener('click', function() {
                    alternarSecao(result.section);
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                });
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.classList.remove('active');
        }
    });
    
    // Fechar resultados ao clicar fora
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.classList.remove('active');
        }
    });
}

// Função para implementar o botão de voltar ao topo
function implementarBotaoVoltarTopo() {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
    
    // Mostrar/ocultar botão com base na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnVoltarTopo.classList.add('visible');
        } else {
            btnVoltarTopo.classList.remove('visible');
        }
    });
    
    // Ação de clique para voltar ao topo
    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Função para atualizar os cards de estatísticas
function atualizarStatsCards() {
    const anoIndex = dadosEducacaoMaranhao.matriculasPorAno.anos.indexOf(parseInt(anoSelecionado));
    
    // Atualizar card de matrículas
    document.querySelector('.stat-card:nth-child(1) .stat-value').textContent = 
        formatarNumero(dadosEducacaoMaranhao.matriculasPorAno.total[anoIndex]);
    
    // Atualizar card de docentes
    document.querySelector('.stat-card:nth-child(2) .stat-value').textContent = 
        formatarNumero(dadosEducacaoMaranhao.docentesPorAno.total[anoIndex]);
    
    // Atualizar card de escolas
    document.querySelector('.stat-card:nth-child(3) .stat-value').textContent = 
        formatarNumero(dadosEducacaoMaranhao.escolasPorAno.total[anoIndex]);
    
    // Atualizar card de educação especial
    document.querySelector('.stat-card:nth-child(4) .stat-value').textContent = 
        formatarNumero(dadosEducacaoMaranhao.educacaoEspecial.total[anoIndex]);
}

// Função para inicializar o gráfico de evolução de matrículas (Dashboard)
function inicializarGraficoMatriculas() {
    const ctx = document.getElementById('matriculas-chart').getContext('2d');
    
    charts.matriculas = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.matriculasPorAno.anos,
            datasets: [
                {
                    label: 'Total de Matrículas',
                    data: dadosEducacaoMaranhao.matriculasPorAno.total,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Educação Especial',
                    data: dadosEducacaoMaranhao.educacaoEspecial.total,
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
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
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

// Função para inicializar o gráfico de inclusão em educação especial (Dashboard)
function inicializarGraficoInclusao() {
    const ctx = document.getElementById('inclusao-chart').getContext('2d');
    
    charts.inclusao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.educacaoEspecial.anos,
            datasets: [
                {
                    label: 'Inclusão em Classe Comum (%)',
                    data: dadosEducacaoMaranhao.educacaoEspecial.percentualInclusaoClasseComum,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
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
                    beginAtZero: false,
                    min: 80,
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

// Função para inicializar o gráfico de metas vs realidade (Dashboard)
function inicializarGraficoMetas() {
    const options = {
        series: [
            {
                name: 'Realidade',
                data: dadosEducacaoMaranhao.infraestruturaEscolar.total
            },
            {
                name: 'Meta',
                data: [50, 60, 55, 40, 45]
            }
        ],
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: dadosEducacaoMaranhao.infraestruturaEscolar.categorias.map(cat => cat.split('/')[0]),
        },
        yaxis: {
            title: {
                text: 'Percentual (%)'
            },
            max: 100
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        colors: ['#f8961e', '#4361ee']
    };

    charts.metas = new ApexCharts(document.querySelector("#metas-chart"), options);
    charts.metas.render();
}

// Função para inicializar o mapa do Maranhão (Dashboard)
function inicializarMapa() {
    // Dados simplificados para o mapa
    const dadosMunicipios = dadosEducacaoMaranhao.municipiosComMaisBibliotecas.municipios.map((municipio, index) => {
        return {
            nome: municipio,
            valor: dadosEducacaoMaranhao.municipiosComMaisBibliotecas.percentuais[index]
        };
    });

    // Criando um mapa simples com ApexCharts (heatmap como representação)
    const options = {
        series: [{
            name: 'Bibliotecas (%)',
            data: dadosMunicipios.map(m => m.valor)
        }],
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: dadosMunicipios.map(m => m.nome),
        },
        colors: ['#4361ee'],
        title: {
            text: 'Municípios com Maior % de Escolas com Biblioteca',
            align: 'center',
            style: {
                fontSize: '14px',
                fontWeight: 'normal'
            }
        }
    };

    charts.mapa = new ApexCharts(document.querySelector("#map-chart"), options);
    charts.mapa.render();
}

// Função para inicializar o gráfico de distribuição por localização (Dashboard)
function inicializarGraficoVolume() {
    const options = {
        series: [
            {
                name: 'Urbana',
                data: dadosEducacaoMaranhao.infraestruturaEscolar.urbana
            },
            {
                name: 'Rural',
                data: dadosEducacaoMaranhao.infraestruturaEscolar.rural
            }
        ],
        chart: {
            type: 'bar',
            height: 350,
            stacked: false,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: dadosEducacaoMaranhao.infraestruturaEscolar.categorias.map(cat => cat.split('/')[0]),
        },
        yaxis: {
            title: {
                text: 'Percentual (%)'
            },
            max: 100
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        colors: ['#4361ee', '#f72585']
    };

    charts.volume = new ApexCharts(document.querySelector("#volume-chart"), options);
    charts.volume.render();
}

// GRÁFICOS DA SEÇÃO DE MATRÍCULAS

// Função para inicializar o gráfico de evolução de matrículas (Seção Matrículas)
function inicializarGraficoMatriculasEvolucao() {
    const ctx = document.getElementById('matriculas-evolucao-chart').getContext('2d');
    
    charts.matriculasEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.matriculasPorAno.anos,
            datasets: [
                {
                    label: 'Total de Matrículas',
                    data: dadosEducacaoMaranhao.matriculasPorAno.total,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
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
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
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

// Função para inicializar o gráfico de matrículas por sexo (Seção Matrículas)
function inicializarGraficoMatriculasSexo() {
    const ctx = document.getElementById('matriculas-sexo-chart').getContext('2d');
    
    charts.matriculasSexo = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dadosEducacaoMaranhao.matriculasPorSexo.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.matriculasPorSexo.valores,
                    backgroundColor: ['#4cc9f0', '#f72585'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = dadosEducacaoMaranhao.matriculasPorSexo.percentuais[context.dataIndex];
                            return `${label}: ${formatarNumero(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de matrículas por cor/raça (Seção Matrículas)
function inicializarGraficoMatriculasRaca() {
    const ctx = document.getElementById('matriculas-raca-chart').getContext('2d');
    
    const anos = dadosEducacaoMaranhao.matriculasPorCorRaca.anos;
    const branca = dadosEducacaoMaranhao.matriculasPorCorRaca.branca;
    const pretaParda = dadosEducacaoMaranhao.matriculasPorCorRaca.pretaParda;
    const naoDeclarada = dadosEducacaoMaranhao.matriculasPorCorRaca.naoDeclarada;
    const outra = dadosEducacaoMaranhao.matriculasPorCorRaca.outra;
    
    charts.matriculasRaca = new Chart(ctx, {
        type: 'line',
        data: {
            labels: anos,
            datasets: [
                {
                    label: 'Branca',
                    data: branca,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
                },
                {
                    label: 'Preta/Parda',
                    data: pretaParda,
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
                },
                {
                    label: 'Não Declarada',
                    data: naoDeclarada,
                    borderColor: '#f8961e',
                    backgroundColor: 'rgba(248, 150, 30, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
                },
                {
                    label: 'Outra',
                    data: outra,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
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

// Função para inicializar o gráfico de matrículas por faixa etária (Seção Matrículas)
function inicializarGraficoMatriculasIdade() {
    const ctx = document.getElementById('matriculas-idade-chart').getContext('2d');
    
    charts.matriculasIdade = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.matriculasPorFaixaEtaria.faixas,
            datasets: [
                {
                    label: 'Total',
                    data: dadosEducacaoMaranhao.matriculasPorFaixaEtaria.total,
                    backgroundColor: '#4361ee',
                    borderWidth: 1
                },
                {
                    label: 'Feminino',
                    data: dadosEducacaoMaranhao.matriculasPorFaixaEtaria.feminino,
                    backgroundColor: '#4cc9f0',
                    borderWidth: 1
                },
                {
                    label: 'Masculino',
                    data: dadosEducacaoMaranhao.matriculasPorFaixaEtaria.masculino,
                    backgroundColor: '#f72585',
                    borderWidth: 1
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
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de evolução da educação especial (Seção Matrículas)
function inicializarGraficoEducacaoEspecialEvolucao() {
    const ctx = document.getElementById('educacao-especial-evolucao-chart').getContext('2d');
    
    charts.educacaoEspecialEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.educacaoEspecial.anos,
            datasets: [
                {
                    label: 'Matrículas na Educação Especial',
                    data: dadosEducacaoMaranhao.educacaoEspecial.total,
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
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
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

// Função para inicializar o gráfico de tipo de classe na educação especial (Seção Matrículas)
function inicializarGraficoEducacaoEspecialTipo() {
    const ctx = document.getElementById('educacao-especial-tipo-chart').getContext('2d');
    
    charts.educacaoEspecialTipo = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: dadosEducacaoMaranhao.educacaoEspecial.distribuicaoTipoClasse2024.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.educacaoEspecial.distribuicaoTipoClasse2024.valores,
                    backgroundColor: ['#4cc9f0', '#f72585'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = dadosEducacaoMaranhao.educacaoEspecial.distribuicaoTipoClasse2024.percentuais[context.dataIndex];
                            return `${label}: ${formatarNumero(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de inclusão na educação especial (Seção Matrículas)
function inicializarGraficoEducacaoEspecialInclusao() {
    const ctx = document.getElementById('educacao-especial-inclusao-chart').getContext('2d');
    
    charts.educacaoEspecialInclusao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.educacaoEspecial.anos,
            datasets: [
                {
                    label: 'Inclusão em Classe Comum (%)',
                    data: dadosEducacaoMaranhao.educacaoEspecial.percentualInclusaoClasseComum,
                    borderColor: '#4cc9f0',
                    backgroundColor: 'rgba(76, 201, 240, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
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
                    beginAtZero: false,
                    min: 80,
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

// Função para inicializar o gráfico de variação percentual de matrículas (Seção Matrículas)
function inicializarGraficoMatriculasVariacao() {
    const ctx = document.getElementById('matriculas-variacao-chart').getContext('2d');
    
    charts.matriculasVariacao = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.variacaoMatriculas.categorias,
            datasets: [
                {
                    label: 'Variação (%)',
                    data: dadosEducacaoMaranhao.variacaoMatriculas.valores,
                    backgroundColor: dadosEducacaoMaranhao.variacaoMatriculas.valores.map(valor => 
                        valor >= 0 ? '#4cc9f0' : '#f72585'
                    ),
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw || 0;
                            return `Variação: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// GRÁFICOS DA SEÇÃO DE DOCENTES

// Função para inicializar o gráfico de evolução de docentes (Seção Docentes)
function inicializarGraficoDocentesEvolucao() {
    const ctx = document.getElementById('docentes-evolucao-chart').getContext('2d');
    
    charts.docentesEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.docentesPorAno.anos,
            datasets: [
                {
                    label: 'Total de Docentes',
                    data: dadosEducacaoMaranhao.docentesPorAno.total,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
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
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
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

// Função para inicializar o gráfico de docentes por sexo (Seção Docentes)
function inicializarGraficoDocentesSexo() {
    const ctx = document.getElementById('docentes-sexo-chart').getContext('2d');
    
    charts.docentesSexo = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dadosEducacaoMaranhao.docentesPorSexo.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.docentesPorSexo.valores,
                    backgroundColor: ['#4cc9f0', '#f72585'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = dadosEducacaoMaranhao.docentesPorSexo.percentuais[context.dataIndex];
                            return `${label}: ${formatarNumero(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de docentes por sexo e rede (Seção Docentes)
function inicializarGraficoDocentesSexoRede() {
    const ctx = document.getElementById('docentes-sexo-rede-chart').getContext('2d');
    
    charts.docentesSexoRede = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.docentesPorSexo.porRede.redes,
            datasets: [
                {
                    label: 'Feminino',
                    data: dadosEducacaoMaranhao.docentesPorSexo.porRede.feminino,
                    backgroundColor: '#4cc9f0',
                    borderWidth: 1
                },
                {
                    label: 'Masculino',
                    data: dadosEducacaoMaranhao.docentesPorSexo.porRede.masculino,
                    backgroundColor: '#f72585',
                    borderWidth: 1
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de docentes por cor/raça (Seção Docentes)
function inicializarGraficoDocentesRaca() {
    const ctx = document.getElementById('docentes-raca-chart').getContext('2d');
    
    charts.docentesRaca = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: dadosEducacaoMaranhao.docentesPorCorRaca.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.docentesPorCorRaca.valores,
                    backgroundColor: ['#4361ee', '#f72585', '#f8961e', '#4cc9f0'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de docentes por faixa etária (Seção Docentes)
function inicializarGraficoDocentesIdade() {
    const ctx = document.getElementById('docentes-idade-chart').getContext('2d');
    
    charts.docentesIdade = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.docentesPorFaixaEtaria.faixas,
            datasets: [
                {
                    label: 'Feminino',
                    data: dadosEducacaoMaranhao.docentesPorFaixaEtaria.feminino,
                    backgroundColor: '#4cc9f0',
                    borderWidth: 1
                },
                {
                    label: 'Masculino',
                    data: dadosEducacaoMaranhao.docentesPorFaixaEtaria.masculino,
                    backgroundColor: '#f72585',
                    borderWidth: 1
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de escolaridade dos docentes (Seção Docentes)
function inicializarGraficoDocentesEscolaridade() {
    const ctx = document.getElementById('docentes-escolaridade-chart').getContext('2d');
    
    charts.docentesEscolaridade = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: dadosEducacaoMaranhao.escolaridadeDocentes.detalhada.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.escolaridadeDocentes.detalhada.valores,
                    backgroundColor: ['#4361ee', '#f72585', '#f8961e', '#4cc9f0'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de evolução da escolaridade dos docentes (Seção Docentes)
function inicializarGraficoDocentesEscolaridadeEvolucao() {
    const ctx = document.getElementById('docentes-escolaridade-evolucao-chart').getContext('2d');
    
    charts.docentesEscolaridadeEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.escolaridadeDocentes.evolucao.anos,
            datasets: [
                {
                    label: 'Superior Licenciatura',
                    data: dadosEducacaoMaranhao.escolaridadeDocentes.evolucao.licenciatura,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 40,
                    max: 70,
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

// Função para inicializar o gráfico de contratação de docentes (Seção Docentes)
function inicializarGraficoDocentesContratacao() {
    const ctx = document.getElementById('docentes-contratacao-chart').getContext('2d');
    
    charts.docentesContratacao = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.contratacaoDocentes.redes,
            datasets: [
                {
                    label: 'Concursado/Efetivo',
                    data: dadosEducacaoMaranhao.contratacaoDocentes.concursadoEfetivo,
                    backgroundColor: '#4361ee',
                    borderWidth: 1
                },
                {
                    label: 'Contrato Temporário',
                    data: dadosEducacaoMaranhao.contratacaoDocentes.contratoTemporario,
                    backgroundColor: '#f72585',
                    borderWidth: 1
                },
                {
                    label: 'Contrato Terceirizado',
                    data: dadosEducacaoMaranhao.contratacaoDocentes.contratoTerceirizado,
                    backgroundColor: '#f8961e',
                    borderWidth: 1
                },
                {
                    label: 'CLT',
                    data: dadosEducacaoMaranhao.contratacaoDocentes.clt,
                    backgroundColor: '#4cc9f0',
                    borderWidth: 1
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    stacked: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    stacked: true
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Função para inicializar o gráfico de variação percentual de docentes (Seção Docentes)
function inicializarGraficoDocentesVariacao() {
    const ctx = document.getElementById('docentes-variacao-chart').getContext('2d');
    
    charts.docentesVariacao = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.variacaoDocentes.categorias,
            datasets: [
                {
                    label: 'Variação (%)',
                    data: dadosEducacaoMaranhao.variacaoDocentes.valores,
                    backgroundColor: dadosEducacaoMaranhao.variacaoDocentes.valores.map(valor => 
                        valor >= 0 ? '#4cc9f0' : '#f72585'
                    ),
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw || 0;
                            return `Variação: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// GRÁFICOS DA SEÇÃO DE ESCOLAS

// Função para inicializar o gráfico de evolução de escolas (Seção Escolas)
function inicializarGraficoEscolasEvolucao() {
    const ctx = document.getElementById('escolas-evolucao-chart').getContext('2d');
    
    charts.escolasEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dadosEducacaoMaranhao.escolasPorAno.anos,
            datasets: [
                {
                    label: 'Total de Escolas',
                    data: dadosEducacaoMaranhao.escolasPorAno.total,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
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
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatarNumero(value);
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

// Função para inicializar o gráfico de escolas por localização (Seção Escolas)
function inicializarGraficoEscolasLocalizacao() {
    const ctx = document.getElementById('escolas-localizacao-chart').getContext('2d');
    
    charts.escolasLocalizacao = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dadosEducacaoMaranhao.escolasPorLocalizacao.categorias,
            datasets: [
                {
                    data: dadosEducacaoMaranhao.escolasPorLocalizacao.valores,
                    backgroundColor: ['#4cc9f0', '#f72585'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

// GRÁFICOS DA SEÇÃO DE INFRAESTRUTURA

// Função para inicializar o gráfico de biblioteca por rede (Seção Infraestrutura)
function inicializarGraficoBibliotecaRede() {
    const ctx = document.getElementById('biblioteca-rede-chart').getContext('2d');
    
    charts.bibliotecaRede = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.escolasComBiblioteca.redes,
            datasets: [
                {
                    label: 'Escolas com Biblioteca/Sala de Leitura',
                    data: dadosEducacaoMaranhao.escolasComBiblioteca.percentuais,
                    backgroundColor: '#4361ee',
                    borderWidth: 1
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
                    callbacks: {
                        label: function(context) {
                            const value = context.raw || 0;
                            return `Percentual: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Função para inicializar o gráfico de municípios com biblioteca (Seção Infraestrutura)
function inicializarGraficoMunicipiosBiblioteca() {
    const options = {
        series: [{
            name: 'Bibliotecas (%)',
            data: dadosEducacaoMaranhao.municipiosComMaisBibliotecas.percentuais
        }],
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return val + '%';
            }
        },
        xaxis: {
            categories: dadosEducacaoMaranhao.municipiosComMaisBibliotecas.municipios,
            labels: {
                formatter: function(val) {
                    return val + '%';
                }
            }
        },
        colors: ['#4361ee'],
        title: {
            text: 'Municípios com Maior % de Escolas com Biblioteca',
            align: 'center',
            style: {
                fontSize: '14px',
                fontWeight: 'normal'
            }
        }
    };

    charts.municipiosBiblioteca = new ApexCharts(document.querySelector("#municipios-biblioteca-chart"), options);
    charts.municipiosBiblioteca.render();
}

// Função para inicializar o gráfico de infraestrutura por localização (Seção Infraestrutura)
function inicializarGraficoInfraestruturaLocalizacao() {
    const ctx = document.getElementById('infraestrutura-localizacao-chart').getContext('2d');
    
    charts.infraestruturaLocalizacao = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dadosEducacaoMaranhao.infraestruturaEscolar.categorias,
            datasets: [
                {
                    label: 'Urbana',
                    data: dadosEducacaoMaranhao.infraestruturaEscolar.urbana,
                    backgroundColor: '#4361ee',
                    borderWidth: 1
                },
                {
                    label: 'Rural',
                    data: dadosEducacaoMaranhao.infraestruturaEscolar.rural,
                    backgroundColor: '#f72585',
                    borderWidth: 1
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
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Função para preencher as tendências e observações na seção de relatórios
function preencherConsideracoesFinais() {
    const tendenciasList = document.getElementById('tendencias-list');
    const observacoesList = document.getElementById('observacoes-list');
    
    // Limpar listas
    tendenciasList.innerHTML = '';
    observacoesList.innerHTML = '';
    
    // Preencher tendências
    dadosEducacaoMaranhao.consideracoesFinais.tendencias.forEach(tendencia => {
        const li = document.createElement('li');
        li.textContent = tendencia;
        tendenciasList.appendChild(li);
    });
    
    // Preencher observações
    dadosEducacaoMaranhao.consideracoesFinais.observacoes.forEach(observacao => {
        const li = document.createElement('li');
        li.textContent = observacao;
        observacoesList.appendChild(li);
    });
}

// Função para preencher a tabela de faixa etária
function preencherTabelaFaixaEtaria() {
    const tabela = document.getElementById('tabela-faixa-etaria');
    
    // Limpar tabela
    tabela.innerHTML = '';
    
    // Preencher dados
    dadosEducacaoMaranhao.matriculasPorFaixaEtaria.faixas.forEach((faixa, index) => {
        const tr = document.createElement('tr');
        
        const tdFaixa = document.createElement('td');
        tdFaixa.textContent = faixa;
        
        const tdTotal = document.createElement('td');
        tdTotal.textContent = formatarNumero(dadosEducacaoMaranhao.matriculasPorFaixaEtaria.total[index]);
        
        const tdFeminino = document.createElement('td');
        tdFeminino.textContent = formatarNumero(dadosEducacaoMaranhao.matriculasPorFaixaEtaria.feminino[index]);
        
        const tdMasculino = document.createElement('td');
        tdMasculino.textContent = formatarNumero(dadosEducacaoMaranhao.matriculasPorFaixaEtaria.masculino[index]);
        
        tr.appendChild(tdFaixa);
        tr.appendChild(tdTotal);
        tr.appendChild(tdFeminino);
        tr.appendChild(tdMasculino);
        
        tabela.appendChild(tr);
    });
}

// Função para atualizar o dashboard com base no ano selecionado
function atualizarDashboard() {
    atualizarStatsCards();
    
    // Atualizar outros componentes conforme necessário
    // Aqui você pode adicionar lógica para atualizar os gráficos com base no ano selecionado
}

// Inicializar o dashboard quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Configurar navegação do menu lateral
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const secaoId = this.getAttribute('data-section');
            alternarSecao(secaoId);
        });
    });
    
    // Configurar botão de sair
    document.getElementById('btn-sair').addEventListener('click', function(e) {
        e.preventDefault();
    });
    
    // Configurar o filtro de ano
    const anoFilter = document.getElementById('ano-filter');
    anoFilter.addEventListener('change', function() {
        anoSelecionado = parseInt(this.value);
        atualizarDashboard();
    });
    
    // Implementar funcionalidade de pesquisa
    implementarPesquisa();
    
    // Implementar botão de voltar ao topo
    implementarBotaoVoltarTopo();
    
    // Inicializar gráficos do dashboard principal
    inicializarGraficoMatriculas();
    inicializarGraficoInclusao();
    inicializarGraficoMetas();
    inicializarMapa();
    inicializarGraficoVolume();
    
    // Preencher dados adicionais
    preencherConsideracoesFinais();
    preencherTabelaFaixaEtaria();
    
    // Atualizar os cards de estatísticas iniciais
    atualizarStatsCards();
});

// Função para lidar com o redimensionamento da janela
window.addEventListener('resize', function() {
    // Redimensionar gráficos se necessário
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.render === 'function') {
            chart.render();
        }
    });
});
 // Função para carregar configurações salvas
function carregarConfiguracoes() {
    const configSalvas = localStorage.getItem('dashboardConfiguracoes');
    
    if (configSalvas) {
        configuracoesGlobais = JSON.parse(configSalvas);
        
        // Aplicar tema
        aplicarTema(configuracoesGlobais.tema);
        
        // Atualizar seletores de configuração
        if (document.getElementById('tema')) {
            document.getElementById('tema').value = configuracoesGlobais.tema;
        }
        
        if (document.getElementById('animacoes')) {
            document.getElementById('animacoes').value = configuracoesGlobais.animacoes;
        }
        
        if (document.getElementById('atualizacao')) {
            document.getElementById('atualizacao').value = configuracoesGlobais.atualizacao;
        }
        
        if (document.getElementById('precisao')) {
            document.getElementById('precisao').value = configuracoesGlobais.precisao;
        }
    }
}
// Função para salvar configurações
function salvarConfiguracoes() {
    localStorage.setItem('dashboardConfiguracoes', JSON.stringify(configuracoesGlobais));
    mostrarNotificacao('Configurações salvas com sucesso!', 'success');
}
