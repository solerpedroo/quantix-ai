# QUANTIX AI - Financial Intelligence Platform

![QUANTIX AI Logo](https://img.shields.io/badge/QUANTIX-AI-blue?style=for-the-badge&logo=ai)
![Version](https://img.shields.io/badge/version-2.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

Plataforma de análise financeira com IA para análise de múltiplos mercados em tempo real.

## 🚀 Funcionalidades Principais

- **Análise de 3 Mercados**
  - **95 ativos da B3** - Ações brasileiras mais negociadas
  - **99 ações americanas** - Principais empresas do mercado US
  - **96 criptomoedas** - Maiores criptos por capitalização

- **IA para Análise Financeira**
  - Análise técnica automatizada com Groq Llama 3.3
  - Recomendações de investimento (BUY/SELL/HOLD)
  - Pontuação de 0-100 baseada em tendências

- **Interface Moderna**
  - Design dark mode com gradientes
  - Grid responsivo de ativos
  - Sistema de filtros e busca

- **Dados em Tempo Real**
  - Integração com Yahoo Finance (US)
  - Brapi.dev para dados da B3
  - CoinGecko para criptomoedas

## 📋 Pré-requisitos

- Navegador atualizado (Chrome 90+, Firefox 88+)
- Conexão com internet
- API Key gratuita do [Groq Cloud](https://console.groq.com)

## 🔧 Instalação Rápida

1. **Baixe os arquivos**
```bash
git clone https://github.com/solerpedroo/quantix-ai.git
```

2. **Configure a API Key**
   - Acesse [console.groq.com](https://console.groq.com)
   - Crie conta gratuita → API Keys → Create Key
   - Abra `scripts/script.js` e cole sua chave:
   ```javascript
   GROQ_API_KEY: 'sua-chave-aqui',
   ```

3. **Execute**
   - Abra `index.html` no navegador
   - Ou use extensão Live Server no VS Code

## 🎯 Como Usar

### 1. Navegação por Categorias
- **All Markets** - Todos os 290 ativos
- **B3 Stocks** - 95 ações brasileiras
- **US Stocks** - 99 ações americanas  
- **Cryptocurrencies** - 96 criptomoedas

### 2. Seleção de Ativos
- Clique nos cards para selecionar
- Use "Select All" para selecionar todos
- Busque por nome ou símbolo
- Ordene por nome, tipo ou símbolo

### 3. Análise com IA
1. Selecione 1+ ativos
2. Clique em "Run AI Analysis"
3. Aguarde processamento (~2s por ativo)
4. Veja resultados detalhados

## 📊 Banco de Ativos

### 🇧🇷 B3 (95 ativos)
**Petróleo & Gás**: PETR3, PETR4, PRIO3, RRRP3  
**Mineração**: VALE3, CSNA3, USIM5, GGBR4  
**Bancos**: ITUB4, BBDC4, BBDC3, BBAS3  
**Varejo**: MGLU3, VVAR3, AMER3, LREN3  
**Energia**: ELET3, ENEV3, EQTL3, CPFE3  
**BDRs**: GOGL34, AAPL34, MSFT34, AMZO34  

### 🇺🇸 US Stocks (99 ativos)
**Tech**: AAPL, MSFT, GOOGL, AMZN, TSLA, NVDA, META  
**Finance**: JPM, V, MA, BAC, GS, AXP  
**Consumo**: WMT, HD, PG, KO, PEP, COST  
**Automotivo**: F, GM, TSLA, RIVN, LCID  
**Chips**: NVDA, AMD, INTC, TSM, MU, AVGO  
**Novas**: SNOW, PLTR, COIN, RBLX, U, SHOP  

### ₿ Cryptocurrencies (96 ativos)
**Top 10**: BTC, ETH, BNB, SOL, XRP, ADA, DOGE, AVAX, DOT, TRX  
**DeFi**: UNI, AAVE, MKR, COMP, SNX, CRV  
**Layer 2**: ARB, OP, MATIC, IMX  
**AI Tokens**: FET, RNDR, TAO, GRT  
**Gaming**: AXS, SAND, MANA, GALA  
**Privacy**: XMR, ZEC, DASH, MONERO  

## 🛠️ Stack Técnica

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Layout**: CSS Grid + Flexbox
- **Font**: Inter (Google Fonts)
- **APIs**:
  - Groq Cloud (Llama 3.3 70B)
  - Yahoo Finance
  - Brapi.dev
  - CoinGecko

## ⚙️ Configuração API

### 1. Obtenha Chave Groq
```bash
1. Acesse console.groq.com
2. Login com Google/GitHub  
3. API Keys → Create Key
4. Copie chave (gsk_xxxxxxxx)
```

### 2. Configure no Código
```javascript
// scripts/script.js - linha 4
const CONFIG = {
    GROQ_API_KEY: 'gsk_suaChaveAqui123456',
    // ... resto do código
};
```

### 3. Limites Gratuitos
- 30 requisições/minuto
- Rate limit por IP
- Modelo: llama-3.3-70b-versatile

## 🎨 Estrutura do Projeto

```
quantix-ai/
├── index.html          # Página principal
├── styles/
│   └── base.css       # Estilos completos
├── scripts/
│   └── script.js      # Lógica + 290 ativos
└── README.md          # Esta documentação
```

## 🚨 Troubleshooting

### Erro: "Please configure your Groq API key"
```javascript
// Solução: Verifique se a chave está correta
CONFIG.GROQ_API_KEY: 'gsk_chaveCorretaAqui',
```

### Dados Não Carregam
- APIs públicas podem ter rate limits
- Badge "DEMO DATA" = dados simulados
- Recarregue página (F5)

### Análise Lenta
- Limite: 5-10 ativos por análise
- Delay automático de 2s entre requisições
- Use filtros para reduzir lista

## 📝 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido por**: [Pedro Soler](https://github.com/solerpedroo)  
**Última atualização**: Janeiro 2026  
**Total de ativos**: 290 (95 B3 + 99 US + 96 Crypto)  

*QUANTIX AI - Análise financeira inteligente*
