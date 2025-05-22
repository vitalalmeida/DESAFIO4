# Documentação do Dashboard de Educação Básica no Maranhão

## Visão Geral

Este dashboard interativo foi desenvolvido para visualizar e analisar dados sobre a educação básica no estado do Maranhão, com base nos dados do Censo Escolar (INEP) de 2014 a 2024. O sistema permite explorar indicadores educacionais como matrículas, docentes, escolas e infraestrutura, oferecendo uma visão abrangente da situação educacional no estado.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
dashboard_educacao/
├── index.html          # Arquivo principal HTML
├── css/
│   └── styles.css      # Estilos CSS do dashboard
├── js/
│   ├── dados_estruturados.js  # Dados estruturados para visualização
│   └── main.js         # Lógica JavaScript do dashboard
└── documentacao.md     # Esta documentação
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e responsividade
- **JavaScript**: Interatividade e manipulação de dados
- **Chart.js**: Biblioteca para criação de gráficos
- **ApexCharts**: Biblioteca complementar para gráficos avançados
- **Font Awesome**: Ícones utilizados na interface

## Funcionalidades Implementadas

### 1. Interface Interativa e Responsiva

- **Menu Lateral**: Navegação entre diferentes seções do dashboard
- **Responsividade**: Adaptação para diferentes tamanhos de tela (desktop, tablet, celular)
- **Tema Claro**: Design limpo e moderno para melhor visualização dos dados

### 2. Visualizações Gráficas

- **Gráficos de Linha**: Evolução temporal de indicadores
- **Gráficos de Barras**: Comparação entre categorias
- **Gráficos de Pizza/Rosca**: Distribuição proporcional
- **Tabelas de Dados**: Visualização detalhada de informações numéricas
- **Cards Estatísticos**: Resumo de indicadores-chave

### 3. Seções do Dashboard

- **Dashboard Principal**: Visão geral com principais indicadores
- **Matrículas**: Dados detalhados sobre matrículas na educação básica
- **Docentes**: Informações sobre professores e sua formação
- **Escolas**: Dados sobre estabelecimentos de ensino
- **Infraestrutura**: Análise da infraestrutura escolar
- **Relatórios**: Tendências e observações importantes
- **Configurações**: Personalização do dashboard

### 4. Recursos de Navegação e Usabilidade

- **Pesquisa**: Busca por indicadores e seções específicas
- **Filtro por Ano**: Seleção do período de análise (2014-2024)
- **Botão Voltar ao Topo**: Facilita a navegação em páginas longas
- **Exportação**: Opções para exportar dados e gráficos

## Detalhamento das Seções

### Dashboard Principal

Apresenta uma visão geral dos principais indicadores educacionais:
- Total de matrículas, docentes e escolas
- Evolução temporal das matrículas
- Inclusão na educação especial
- Infraestrutura escolar por localização
- Mapa dos municípios com melhores indicadores de biblioteca

### Matrículas

Análise detalhada das matrículas na educação básica:
- Evolução do total de matrículas (2014-2024)
- Distribuição por sexo, faixa etária e cor/raça
- Dados específicos sobre educação especial
- Variação percentual por categoria

### Docentes

Informações sobre os professores da rede:
- Evolução do total de docentes (2014-2024)
- Distribuição por sexo, faixa etária e cor/raça
- Escolaridade e formação continuada
- Tipos de contratação por rede de ensino

### Escolas

Dados sobre os estabelecimentos de ensino:
- Evolução do número de escolas (2014-2024)
- Distribuição por localização (urbana/rural)
- Distribuição por rede de ensino

### Infraestrutura

Análise da infraestrutura escolar:
- Percentual de escolas com biblioteca/sala de leitura
- Acesso à internet e computadores
- Presença de quadras de esporte e laboratórios
- Comparação entre áreas urbanas e rurais
- Ranking de municípios com melhor infraestrutura

### Relatórios

Síntese das principais tendências e observações:
- Tendências importantes identificadas nos dados
- Observações sobre a qualidade dos dados
- Opções para exportação de relatórios completos

### Configurações

Opções para personalização do dashboard:
- Seleção de tema
- Configuração de animações
- Preferências de atualização
- Informações sobre o sistema

## Funcionalidades Interativas

### Navegação entre Seções

O menu lateral permite navegar entre as diferentes seções do dashboard. Ao clicar em um item do menu:
1. A seção correspondente é exibida
2. O título do cabeçalho é atualizado
3. O item do menu é destacado como ativo

### Pesquisa

A funcionalidade de pesquisa permite encontrar rapidamente indicadores e seções:
1. Digite o termo de busca na caixa de pesquisa
2. Os resultados aparecem em um dropdown
3. Clique em um resultado para navegar diretamente para a seção correspondente

### Filtro por Ano

O seletor de ano no cabeçalho permite filtrar os dados por período:
1. Selecione o ano desejado no dropdown
2. Os cards estatísticos e gráficos são atualizados automaticamente
3. Os dados exibidos refletem o ano selecionado

### Botão Voltar ao Topo

O botão de voltar ao topo aparece quando o usuário rola a página para baixo:
1. O botão se torna visível após rolar além de 300px
2. Ao clicar no botão, a página rola suavemente de volta ao topo
3. O botão desaparece quando o usuário está próximo ao topo da página

## Responsividade

O dashboard foi projetado para funcionar em diferentes dispositivos:

### Desktop (> 992px)
- Menu lateral expandido
- Layout em múltiplas colunas
- Visualização completa de todos os elementos

### Tablet (768px - 992px)
- Menu lateral compacto (apenas ícones)
- Layout adaptado para largura média
- Gráficos em tamanho médio

### Mobile (< 768px)
- Menu lateral compacto
- Layout em coluna única
- Elementos empilhados para melhor visualização
- Gráficos redimensionados para tela pequena

## Limitações Conhecidas

- Alguns dados específicos do IDEB e taxas de fluxo (promoção, repetência, evasão) não estavam disponíveis no relatório consultado
- A funcionalidade de exportação de dados está implementada na interface, mas requer configuração adicional no servidor para funcionar completamente
- O mapa do Maranhão é representado como um gráfico de barras simplificado, podendo ser aprimorado com uma visualização geográfica mais precisa em versões futuras

## Melhorias Futuras

- Implementação de um tema escuro para o dashboard
- Adição de mais opções de filtros (por município, rede de ensino)
- Integração com APIs para atualização automática dos dados
- Implementação de um mapa geográfico interativo do Maranhão
- Adição de análises preditivas e tendências futuras
- Exportação de dados em formatos adicionais (CSV, JSON)

## Instruções de Uso

### Navegação
- Use o menu lateral para navegar entre as diferentes seções
- Utilize a barra de pesquisa para encontrar indicadores específicos
- Selecione o ano desejado no filtro do cabeçalho

### Interação com Gráficos
- Passe o mouse sobre os gráficos para ver detalhes
- Clique nas legendas para mostrar/ocultar séries de dados
- Use os botões de exportação para salvar gráficos específicos

### Configurações
- Acesse a seção de configurações para personalizar o dashboard
- Ajuste as preferências de tema, animações e atualização
- Consulte informações sobre a versão e contato

## Créditos e Fontes de Dados

- **Dados**: Censo Escolar (INEP), 2014-2024
- **Desenvolvimento**: Equipe EduMaranhão
- **Contato**: contato@edumaranhao.gov.br
- **Versão**: 2.0 (Maio 2025)

---

Este documento serve como guia para entender a estrutura, funcionalidades e uso do Dashboard de Educação Básica no Maranhão. Para questões técnicas adicionais ou suporte, entre em contato com a equipe de desenvolvimento.
