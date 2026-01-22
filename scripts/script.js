// ========== CONFIGURATION ==========
const CONFIG = {
    GROQ_API_KEY: 'sua-chave-aqui', // COLE SUA CHAVE REAL DO GROQ AQUI
    GROQ_MODEL: 'llama-3.3-70b-versatile',
    GROQ_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
    COINGECKO_API: 'https://api.coingecko.com/api/v3',
    BRAPI_API: 'https://brapi.dev/api',
    YAHOO_FINANCE_API: 'https://query1.finance.yahoo.com/v8/finance/chart'
};

// ========== DATA ==========
const ASSETS = {
    b3: [
        { symbol: 'PETR4.SA', name: 'Petrobras PN', type: 'B3', market: 'Brazil' },
        { symbol: 'PETR3.SA', name: 'Petrobras ON', type: 'B3', market: 'Brazil' },
        { symbol: 'VALE3.SA', name: 'Vale ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ITUB4.SA', name: 'Itaú Unibanco PN', type: 'B3', market: 'Brazil' },
        { symbol: 'BBDC4.SA', name: 'Bradesco PN', type: 'B3', market: 'Brazil' },
        { symbol: 'BBDC3.SA', name: 'Bradesco ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ABEV3.SA', name: 'Ambev ON', type: 'B3', market: 'Brazil' },
        { symbol: 'WEGE3.SA', name: 'WEG ON', type: 'B3', market: 'Brazil' },
        { symbol: 'RENT3.SA', name: 'Localiza ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SUZB3.SA', name: 'Suzano ON', type: 'B3', market: 'Brazil' },
        { symbol: 'MGLU3.SA', name: 'Magazine Luiza ON', type: 'B3', market: 'Brazil' },
        { symbol: 'B3SA3.SA', name: 'B3 ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ELET3.SA', name: 'Eletrobras ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ELET6.SA', name: 'Eletrobras PNB', type: 'B3', market: 'Brazil' },
        { symbol: 'RADL3.SA', name: 'Raia Drogasil ON', type: 'B3', market: 'Brazil' },
        { symbol: 'RAIL3.SA', name: 'Rumo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'VIVT3.SA', name: 'Vivo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'BBAS3.SA', name: 'Banco do Brasil ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SANB11.SA', name: 'Santander Units', type: 'B3', market: 'Brazil' },
        { symbol: 'EMBR3.SA', name: 'Embraer ON', type: 'B3', market: 'Brazil' },
        { symbol: 'GGBR4.SA', name: 'Gerdau PN', type: 'B3', market: 'Brazil' },
        { symbol: 'CSNA3.SA', name: 'CSN ON', type: 'B3', market: 'Brazil' },
        { symbol: 'USIM5.SA', name: 'Usiminas PNA', type: 'B3', market: 'Brazil' },
        { symbol: 'GOAU4.SA', name: 'Metalúrgica Gerdau PN', type: 'B3', market: 'Brazil' },
        { symbol: 'CIEL3.SA', name: 'Cielo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'LREN3.SA', name: 'Lojas Renner ON', type: 'B3', market: 'Brazil' },
        { symbol: 'AMER3.SA', name: 'Americanas ON', type: 'B3', market: 'Brazil' },
        { symbol: 'PCAR3.SA', name: 'Grupo Carrefour Brasil ON', type: 'B3', market: 'Brazil' },
        { symbol: 'VVAR3.SA', name: 'Via Varejo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CRFB3.SA', name: 'Carrefour Brasil ON', type: 'B3', market: 'Brazil' },
        { symbol: 'BEEF3.SA', name: 'Minerva ON', type: 'B3', market: 'Brazil' },
        { symbol: 'JBSS3.SA', name: 'JBS ON', type: 'B3', market: 'Brazil' },
        { symbol: 'MRFG3.SA', name: 'Marfrig ON', type: 'B3', market: 'Brazil' },
        { symbol: 'BRFS3.SA', name: 'BRF ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CCRO3.SA', name: 'CCR ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CSAN3.SA', name: 'Cosan ON', type: 'B3', market: 'Brazil' },
        { symbol: 'RAIZ4.SA', name: 'Raízen PN', type: 'B3', market: 'Brazil' },
        { symbol: 'UGPA3.SA', name: 'Ultrapar ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CMIG4.SA', name: 'Cemig PN', type: 'B3', market: 'Brazil' },
        { symbol: 'CPFE3.SA', name: 'CPFL Energia ON', type: 'B3', market: 'Brazil' },
        { symbol: 'EGIE3.SA', name: 'Engie Brasil ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ENEV3.SA', name: 'Eneva ON', type: 'B3', market: 'Brazil' },
        { symbol: 'EQTL3.SA', name: 'Equatorial ON', type: 'B3', market: 'Brazil' },
        { symbol: 'NEOE3.SA', name: 'Neoenergia ON', type: 'B3', market: 'Brazil' },
        { symbol: 'TAEE11.SA', name: 'Taesa Units', type: 'B3', market: 'Brazil' },
        { symbol: 'TRPL4.SA', name: 'Transmissão Paulista PN', type: 'B3', market: 'Brazil' },
        { symbol: 'CPLE6.SA', name: 'Copel PNB', type: 'B3', market: 'Brazil' },
        { symbol: 'SBSP3.SA', name: 'Sabesp ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CSMG3.SA', name: 'Copasa ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SAPR11.SA', name: 'Sanepar Units', type: 'B3', market: 'Brazil' },
        { symbol: 'ECOR3.SA', name: 'Ecorodovias ON', type: 'B3', market: 'Brazil' },
        { symbol: 'TIMS3.SA', name: 'TIM ON', type: 'B3', market: 'Brazil' },
        { symbol: 'OIBR3.SA', name: 'Oi ON', type: 'B3', market: 'Brazil' },
        { symbol: 'KLBN11.SA', name: 'Klabin Units', type: 'B3', market: 'Brazil' },
        { symbol: 'RANI3.SA', name: 'Irani ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SLCE3.SA', name: 'SLC Agrícola ON', type: 'B3', market: 'Brazil' },
        { symbol: 'BRML3.SA', name: 'BR Malls ON', type: 'B3', market: 'Brazil' },
        { symbol: 'IGTI11.SA', name: 'Iguatemi Units', type: 'B3', market: 'Brazil' },
        { symbol: 'MULT3.SA', name: 'Multiplan ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CYRE3.SA', name: 'Cyrela ON', type: 'B3', market: 'Brazil' },
        { symbol: 'MRVE3.SA', name: 'MRV ON', type: 'B3', market: 'Brazil' },
        { symbol: 'EZTC3.SA', name: 'EZ Tec ON', type: 'B3', market: 'Brazil' },
        { symbol: 'JHSF3.SA', name: 'JHSF ON', type: 'B3', market: 'Brazil' },
        { symbol: 'TEND3.SA', name: 'Tenda ON', type: 'B3', market: 'Brazil' },
        { symbol: 'AZUL4.SA', name: 'Azul PN', type: 'B3', market: 'Brazil' },
        { symbol: 'GOLL4.SA', name: 'Gol PN', type: 'B3', market: 'Brazil' },
        { symbol: 'PRIO3.SA', name: 'Prio ON', type: 'B3', market: 'Brazil' },
        { symbol: 'RECV3.SA', name: 'PetroReconcavo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'RRRP3.SA', name: '3R Petroleum ON', type: 'B3', market: 'Brazil' },
        { symbol: 'BRKM5.SA', name: 'Braskem PNA', type: 'B3', market: 'Brazil' },
        { symbol: 'UNIP6.SA', name: 'Unipar PNB', type: 'B3', market: 'Brazil' },
        { symbol: 'ARZZ3.SA', name: 'Arezzo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SOMA3.SA', name: 'Grupo Soma ON', type: 'B3', market: 'Brazil' },
        { symbol: 'GMAT3.SA', name: 'G2D Investments ON', type: 'B3', market: 'Brazil' },
        { symbol: 'PETZ3.SA', name: 'Petz ON', type: 'B3', market: 'Brazil' },
        { symbol: 'VIIA3.SA', name: 'Via ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ASAI3.SA', name: 'Assaí ON', type: 'B3', market: 'Brazil' },
        { symbol: 'POMO4.SA', name: 'Marcopolo PN', type: 'B3', market: 'Brazil' },
        { symbol: 'RAPT4.SA', name: 'Randon PN', type: 'B3', market: 'Brazil' },
        { symbol: 'SIMH3.SA', name: 'Simpar ON', type: 'B3', market: 'Brazil' },
        { symbol: 'TOTS3.SA', name: 'Totvs ON', type: 'B3', market: 'Brazil' },
        { symbol: 'LWSA3.SA', name: 'Locaweb ON', type: 'B3', market: 'Brazil' },
        { symbol: 'POSI3.SA', name: 'Positivo ON', type: 'B3', market: 'Brazil' },
        { symbol: 'QUAL3.SA', name: 'Qualicorp ON', type: 'B3', market: 'Brazil' },
        { symbol: 'GNDI3.SA', name: 'Notre Dame ON', type: 'B3', market: 'Brazil' },
        { symbol: 'FLRY3.SA', name: 'Fleury ON', type: 'B3', market: 'Brazil' },
        { symbol: 'DASA3.SA', name: 'Dasa ON', type: 'B3', market: 'Brazil' },
        { symbol: 'ODPV3.SA', name: 'Odontoprev ON', type: 'B3', market: 'Brazil' },
        { symbol: 'SMTO3.SA', name: 'São Martinho ON', type: 'B3', market: 'Brazil' },
        { symbol: 'CMIN3.SA', name: 'CSN Mineração ON', type: 'B3', market: 'Brazil' },
        { symbol: 'GOGL34.SA', name: 'Alphabet BDR', type: 'B3', market: 'Brazil' },
        { symbol: 'AAPL34.SA', name: 'Apple BDR', type: 'B3', market: 'Brazil' },
        { symbol: 'MSFT34.SA', name: 'Microsoft BDR', type: 'B3', market: 'Brazil' },
        { symbol: 'AMZO34.SA', name: 'Amazon BDR', type: 'B3', market: 'Brazil' },
        { symbol: 'TSLA34.SA', name: 'Tesla BDR', type: 'B3', market: 'Brazil' }
    ],
    us: [
        { symbol: 'AAPL', name: 'Apple', type: 'US Stock', market: 'USA' },
        { symbol: 'MSFT', name: 'Microsoft', type: 'US Stock', market: 'USA' },
        { symbol: 'GOOGL', name: 'Alphabet (Google)', type: 'US Stock', market: 'USA' },
        { symbol: 'AMZN', name: 'Amazon', type: 'US Stock', market: 'USA' },
        { symbol: 'TSLA', name: 'Tesla', type: 'US Stock', market: 'USA' },
        { symbol: 'NVDA', name: 'NVIDIA', type: 'US Stock', market: 'USA' },
        { symbol: 'META', name: 'Meta (Facebook)', type: 'US Stock', market: 'USA' },
        { symbol: 'NFLX', name: 'Netflix', type: 'US Stock', market: 'USA' },
        { symbol: 'AMD', name: 'AMD', type: 'US Stock', market: 'USA' },
        { symbol: 'DIS', name: 'Disney', type: 'US Stock', market: 'USA' },
        { symbol: 'INTC', name: 'Intel', type: 'US Stock', market: 'USA' },
        { symbol: 'BA', name: 'Boeing', type: 'US Stock', market: 'USA' },
        { symbol: 'JPM', name: 'JPMorgan Chase', type: 'US Stock', market: 'USA' },
        { symbol: 'V', name: 'Visa', type: 'US Stock', market: 'USA' },
        { symbol: 'MA', name: 'Mastercard', type: 'US Stock', market: 'USA' },
        { symbol: 'WMT', name: 'Walmart', type: 'US Stock', market: 'USA' },
        { symbol: 'HD', name: 'Home Depot', type: 'US Stock', market: 'USA' },
        { symbol: 'PG', name: 'Procter & Gamble', type: 'US Stock', market: 'USA' },
        { symbol: 'JNJ', name: 'Johnson & Johnson', type: 'US Stock', market: 'USA' },
        { symbol: 'UNH', name: 'UnitedHealth', type: 'US Stock', market: 'USA' },
        { symbol: 'BAC', name: 'Bank of America', type: 'US Stock', market: 'USA' },
        { symbol: 'XOM', name: 'Exxon Mobil', type: 'US Stock', market: 'USA' },
        { symbol: 'CVX', name: 'Chevron', type: 'US Stock', market: 'USA' },
        { symbol: 'KO', name: 'Coca-Cola', type: 'US Stock', market: 'USA' },
        { symbol: 'PEP', name: 'PepsiCo', type: 'US Stock', market: 'USA' },
        { symbol: 'COST', name: 'Costco', type: 'US Stock', market: 'USA' },
        { symbol: 'AVGO', name: 'Broadcom', type: 'US Stock', market: 'USA' },
        { symbol: 'ORCL', name: 'Oracle', type: 'US Stock', market: 'USA' },
        { symbol: 'CSCO', name: 'Cisco', type: 'US Stock', market: 'USA' },
        { symbol: 'ADBE', name: 'Adobe', type: 'US Stock', market: 'USA' },
        { symbol: 'CRM', name: 'Salesforce', type: 'US Stock', market: 'USA' },
        { symbol: 'ACN', name: 'Accenture', type: 'US Stock', market: 'USA' },
        { symbol: 'TXN', name: 'Texas Instruments', type: 'US Stock', market: 'USA' },
        { symbol: 'QCOM', name: 'Qualcomm', type: 'US Stock', market: 'USA' },
        { symbol: 'NKE', name: 'Nike', type: 'US Stock', market: 'USA' },
        { symbol: 'MCD', name: 'McDonalds', type: 'US Stock', market: 'USA' },
        { symbol: 'SBUX', name: 'Starbucks', type: 'US Stock', market: 'USA' },
        { symbol: 'PYPL', name: 'PayPal', type: 'US Stock', market: 'USA' },
        { symbol: 'ABNB', name: 'Airbnb', type: 'US Stock', market: 'USA' },
        { symbol: 'UBER', name: 'Uber', type: 'US Stock', market: 'USA' },
        { symbol: 'LYFT', name: 'Lyft', type: 'US Stock', market: 'USA' },
        { symbol: 'SHOP', name: 'Shopify', type: 'US Stock', market: 'USA' },
        { symbol: 'SQ', name: 'Block (Square)', type: 'US Stock', market: 'USA' },
        { symbol: 'SNAP', name: 'Snap', type: 'US Stock', market: 'USA' },
        { symbol: 'SPOT', name: 'Spotify', type: 'US Stock', market: 'USA' },
        { symbol: 'ZM', name: 'Zoom', type: 'US Stock', market: 'USA' },
        { symbol: 'DOCU', name: 'DocuSign', type: 'US Stock', market: 'USA' },
        { symbol: 'TWLO', name: 'Twilio', type: 'US Stock', market: 'USA' },
        { symbol: 'SNOW', name: 'Snowflake', type: 'US Stock', market: 'USA' },
        { symbol: 'PLTR', name: 'Palantir', type: 'US Stock', market: 'USA' },
        { symbol: 'COIN', name: 'Coinbase', type: 'US Stock', market: 'USA' },
        { symbol: 'RBLX', name: 'Roblox', type: 'US Stock', market: 'USA' },
        { symbol: 'U', name: 'Unity Software', type: 'US Stock', market: 'USA' },
        { symbol: 'DKNG', name: 'DraftKings', type: 'US Stock', market: 'USA' },
        { symbol: 'PENN', name: 'Penn Entertainment', type: 'US Stock', market: 'USA' },
        { symbol: 'MGM', name: 'MGM Resorts', type: 'US Stock', market: 'USA' },
        { symbol: 'LUV', name: 'Southwest Airlines', type: 'US Stock', market: 'USA' },
        { symbol: 'DAL', name: 'Delta Air Lines', type: 'US Stock', market: 'USA' },
        { symbol: 'UAL', name: 'United Airlines', type: 'US Stock', market: 'USA' },
        { symbol: 'AAL', name: 'American Airlines', type: 'US Stock', market: 'USA' },
        { symbol: 'CCL', name: 'Carnival', type: 'US Stock', market: 'USA' },
        { symbol: 'RCL', name: 'Royal Caribbean', type: 'US Stock', market: 'USA' },
        { symbol: 'MAR', name: 'Marriott', type: 'US Stock', market: 'USA' },
        { symbol: 'HLT', name: 'Hilton', type: 'US Stock', market: 'USA' },
        { symbol: 'F', name: 'Ford', type: 'US Stock', market: 'USA' },
        { symbol: 'GM', name: 'General Motors', type: 'US Stock', market: 'USA' },
        { symbol: 'RIVN', name: 'Rivian', type: 'US Stock', market: 'USA' },
        { symbol: 'LCID', name: 'Lucid', type: 'US Stock', market: 'USA' },
        { symbol: 'NIO', name: 'NIO', type: 'US Stock', market: 'USA' },
        { symbol: 'XPEV', name: 'XPeng', type: 'US Stock', market: 'USA' },
        { symbol: 'LI', name: 'Li Auto', type: 'US Stock', market: 'USA' },
        { symbol: 'BABA', name: 'Alibaba', type: 'US Stock', market: 'USA' },
        { symbol: 'JD', name: 'JD.com', type: 'US Stock', market: 'USA' },
        { symbol: 'PDD', name: 'PDD Holdings', type: 'US Stock', market: 'USA' },
        { symbol: 'BIDU', name: 'Baidu', type: 'US Stock', market: 'USA' },
        { symbol: 'TME', name: 'Tencent Music', type: 'US Stock', market: 'USA' },
        { symbol: 'NTES', name: 'NetEase', type: 'US Stock', market: 'USA' },
        { symbol: 'SONY', name: 'Sony', type: 'US Stock', market: 'USA' },
        { symbol: 'TM', name: 'Toyota', type: 'US Stock', market: 'USA' },
        { symbol: 'HMC', name: 'Honda', type: 'US Stock', market: 'USA' },
        { symbol: 'SAP', name: 'SAP', type: 'US Stock', market: 'USA' },
        { symbol: 'TSM', name: 'Taiwan Semiconductor', type: 'US Stock', market: 'USA' },
        { symbol: 'ASML', name: 'ASML', type: 'US Stock', market: 'USA' },
        { symbol: 'ARM', name: 'ARM Holdings', type: 'US Stock', market: 'USA' },
        { symbol: 'MU', name: 'Micron', type: 'US Stock', market: 'USA' },
        { symbol: 'LRCX', name: 'Lam Research', type: 'US Stock', market: 'USA' },
        { symbol: 'KLAC', name: 'KLA', type: 'US Stock', market: 'USA' },
        { symbol: 'SNPS', name: 'Synopsys', type: 'US Stock', market: 'USA' },
        { symbol: 'CDNS', name: 'Cadence', type: 'US Stock', market: 'USA' },
        // 10 AÇÕES ADICIONAIS
        { symbol: 'GS', name: 'Goldman Sachs', type: 'US Stock', market: 'USA' },
        { symbol: 'IBM', name: 'IBM', type: 'US Stock', market: 'USA' },
        { symbol: 'CAT', name: 'Caterpillar', type: 'US Stock', market: 'USA' },
        { symbol: 'DE', name: 'Deere & Company', type: 'US Stock', market: 'USA' },
        { symbol: 'AXP', name: 'American Express', type: 'US Stock', market: 'USA' },
        { symbol: 'MDT', name: 'Medtronic', type: 'US Stock', market: 'USA' },
        { symbol: 'ISRG', name: 'Intuitive Surgical', type: 'US Stock', market: 'USA' },
        { symbol: 'NOW', name: 'ServiceNow', type: 'US Stock', market: 'USA' },
        { symbol: 'RTX', name: 'Raytheon Technologies', type: 'US Stock', market: 'USA' },
        { symbol: 'UPS', name: 'United Parcel Service', type: 'US Stock', market: 'USA' }
    ],
    crypto: [
        { symbol: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ethereum', name: 'Ethereum', ticker: 'ETH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'tether', name: 'Tether', ticker: 'USDT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'binancecoin', name: 'BNB', ticker: 'BNB', type: 'Crypto', market: 'Crypto' },
        { symbol: 'solana', name: 'Solana', ticker: 'SOL', type: 'Crypto', market: 'Crypto' },
        { symbol: 'usd-coin', name: 'USD Coin', ticker: 'USDC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ripple', name: 'XRP', ticker: 'XRP', type: 'Crypto', market: 'Crypto' },
        { symbol: 'staked-ether', name: 'Lido Staked Ether', ticker: 'STETH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'cardano', name: 'Cardano', ticker: 'ADA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'dogecoin', name: 'Dogecoin', ticker: 'DOGE', type: 'Crypto', market: 'Crypto' },
        { symbol: 'tron', name: 'TRON', ticker: 'TRX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'avalanche-2', name: 'Avalanche', ticker: 'AVAX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'the-open-network', name: 'Toncoin', ticker: 'TON', type: 'Crypto', market: 'Crypto' },
        { symbol: 'shiba-inu', name: 'Shiba Inu', ticker: 'SHIB', type: 'Crypto', market: 'Crypto' },
        { symbol: 'wrapped-bitcoin', name: 'Wrapped Bitcoin', ticker: 'WBTC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'polkadot', name: 'Polkadot', ticker: 'DOT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'chainlink', name: 'Chainlink', ticker: 'LINK', type: 'Crypto', market: 'Crypto' },
        { symbol: 'bitcoin-cash', name: 'Bitcoin Cash', ticker: 'BCH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'dai', name: 'Dai', ticker: 'DAI', type: 'Crypto', market: 'Crypto' },
        { symbol: 'near', name: 'NEAR Protocol', ticker: 'NEAR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'litecoin', name: 'Litecoin', ticker: 'LTC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'uniswap', name: 'Uniswap', ticker: 'UNI', type: 'Crypto', market: 'Crypto' },
        { symbol: 'leo-token', name: 'LEO Token', ticker: 'LEO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'internet-computer', name: 'Internet Computer', ticker: 'ICP', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ethereum-classic', name: 'Ethereum Classic', ticker: 'ETC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'fetch-ai', name: 'Fetch.ai', ticker: 'FET', type: 'Crypto', market: 'Crypto' },
        { symbol: 'aptos', name: 'Aptos', ticker: 'APT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'hedera-hashgraph', name: 'Hedera', ticker: 'HBAR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'kaspa', name: 'Kaspa', ticker: 'KAS', type: 'Crypto', market: 'Crypto' },
        { symbol: 'stellar', name: 'Stellar', ticker: 'XLM', type: 'Crypto', market: 'Crypto' },
        { symbol: 'cronos', name: 'Cronos', ticker: 'CRO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'okb', name: 'OKB', ticker: 'OKB', type: 'Crypto', market: 'Crypto' },
        { symbol: 'filecoin', name: 'Filecoin', ticker: 'FIL', type: 'Crypto', market: 'Crypto' },
        { symbol: 'cosmos', name: 'Cosmos Hub', ticker: 'ATOM', type: 'Crypto', market: 'Crypto' },
        { symbol: 'immutable-x', name: 'Immutable', ticker: 'IMX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'mantle', name: 'Mantle', ticker: 'MNT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'arbitrum', name: 'Arbitrum', ticker: 'ARB', type: 'Crypto', market: 'Crypto' },
        { symbol: 'the-graph', name: 'The Graph', ticker: 'GRT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'vechain', name: 'VeChain', ticker: 'VET', type: 'Crypto', market: 'Crypto' },
        { symbol: 'optimism', name: 'Optimism', ticker: 'OP', type: 'Crypto', market: 'Crypto' },
        { symbol: 'render-token', name: 'Render', ticker: 'RNDR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'injective-protocol', name: 'Injective', ticker: 'INJ', type: 'Crypto', market: 'Crypto' },
        { symbol: 'aave', name: 'Aave', ticker: 'AAVE', type: 'Crypto', market: 'Crypto' },
        { symbol: 'maker', name: 'Maker', ticker: 'MKR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'polygon', name: 'Polygon', ticker: 'MATIC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'bittensor', name: 'Bittensor', ticker: 'TAO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'algorand', name: 'Algorand', ticker: 'ALGO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'fantom', name: 'Fantom', ticker: 'FTM', type: 'Crypto', market: 'Crypto' },
        { symbol: 'theta-token', name: 'Theta Network', ticker: 'THETA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'thorchain', name: 'THORChain', ticker: 'RUNE', type: 'Crypto', market: 'Crypto' },
        { symbol: 'quant-network', name: 'Quant', ticker: 'QNT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'eos', name: 'EOS', ticker: 'EOS', type: 'Crypto', market: 'Crypto' },
        { symbol: 'flow', name: 'Flow', ticker: 'FLOW', type: 'Crypto', market: 'Crypto' },
        { symbol: 'axie-infinity', name: 'Axie Infinity', ticker: 'AXS', type: 'Crypto', market: 'Crypto' },
        { symbol: 'the-sandbox', name: 'The Sandbox', ticker: 'SAND', type: 'Crypto', market: 'Crypto' },
        { symbol: 'decentraland', name: 'Decentraland', ticker: 'MANA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'tezos', name: 'Tezos', ticker: 'XTZ', type: 'Crypto', market: 'Crypto' },
        { symbol: 'elrond-erd-2', name: 'MultiversX', ticker: 'EGLD', type: 'Crypto', market: 'Crypto' },
        { symbol: 'neo', name: 'NEO', ticker: 'NEO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'iota', name: 'IOTA', ticker: 'IOTA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'kucoin-shares', name: 'KuCoin', ticker: 'KCS', type: 'Crypto', market: 'Crypto' },
        { symbol: 'gatechain-token', name: 'Gate', ticker: 'GT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'pancakeswap-token', name: 'PancakeSwap', ticker: 'CAKE', type: 'Crypto', market: 'Crypto' },
        { symbol: 'sushi', name: 'Sushi', ticker: 'SUSHI', type: 'Crypto', market: 'Crypto' },
        { symbol: 'curve-dao-token', name: 'Curve DAO', ticker: 'CRV', type: 'Crypto', market: 'Crypto' },
        { symbol: 'compound-ether', name: 'cETH', ticker: 'CETH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'yearn-finance', name: 'Yearn Finance', ticker: 'YFI', type: 'Crypto', market: 'Crypto' },
        { symbol: '1inch', name: '1inch', ticker: '1INCH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'synthetix-network-token', name: 'Synthetix', ticker: 'SNX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'compound-governance-token', name: 'Compound', ticker: 'COMP', type: 'Crypto', market: 'Crypto' },
        { symbol: 'enjincoin', name: 'Enjin Coin', ticker: 'ENJ', type: 'Crypto', market: 'Crypto' },
        { symbol: 'chiliz', name: 'Chiliz', ticker: 'CHZ', type: 'Crypto', market: 'Crypto' },
        { symbol: 'basic-attention-token', name: 'Basic Attention', ticker: 'BAT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'zilliqa', name: 'Zilliqa', ticker: 'ZIL', type: 'Crypto', market: 'Crypto' },
        { symbol: 'loopring', name: 'Loopring', ticker: 'LRC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ravencoin', name: 'Ravencoin', ticker: 'RVN', type: 'Crypto', market: 'Crypto' },
        { symbol: 'zcash', name: 'Zcash', ticker: 'ZEC', type: 'Crypto', market: 'Crypto' },
        { symbol: 'dash', name: 'Dash', ticker: 'DASH', type: 'Crypto', market: 'Crypto' },
        { symbol: 'bitcoin-gold', name: 'Bitcoin Gold', ticker: 'BTG', type: 'Crypto', market: 'Crypto' },
        { symbol: 'monero', name: 'Monero', ticker: 'XMR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'nervos-network', name: 'Nervos Network', ticker: 'CKB', type: 'Crypto', market: 'Crypto' },
        { symbol: 'harmony', name: 'Harmony', ticker: 'ONE', type: 'Crypto', market: 'Crypto' },
        { symbol: 'celo', name: 'Celo', ticker: 'CELO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'osmosis', name: 'Osmosis', ticker: 'OSMO', type: 'Crypto', market: 'Crypto' },
        { symbol: 'kava', name: 'Kava', ticker: 'KAVA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'waves', name: 'Waves', ticker: 'WAVES', type: 'Crypto', market: 'Crypto' },
        { symbol: 'helium', name: 'Helium', ticker: 'HNT', type: 'Crypto', market: 'Crypto' },
        { symbol: 'iotex', name: 'IoTeX', ticker: 'IOTX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'arweave', name: 'Arweave', ticker: 'AR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'stacks', name: 'Stacks', ticker: 'STX', type: 'Crypto', market: 'Crypto' },
        { symbol: 'skale', name: 'SKALE', ticker: 'SKL', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ankr', name: 'Ankr', ticker: 'ANKR', type: 'Crypto', market: 'Crypto' },
        { symbol: 'band-protocol', name: 'Band Protocol', ticker: 'BAND', type: 'Crypto', market: 'Crypto' },
        { symbol: 'uma', name: 'UMA', ticker: 'UMA', type: 'Crypto', market: 'Crypto' },
        { symbol: 'ocean-protocol', name: 'Ocean Protocol', ticker: 'OCEAN', type: 'Crypto', market: 'Crypto' },
        { symbol: 'livepeer', name: 'Livepeer', ticker: 'LPT', type: 'Crypto', market: 'Crypto' }
    ]
};

// ========== STATE ==========
let state = {
    selectedAssets: [],
    currentCategory: 'all',
    allAssets: [],
    filteredAssets: []
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeAssets();
    renderAssetGrid();
    attachEventListeners();
    updateStats();
});

function initializeAssets() {
    state.allAssets = [...ASSETS.b3, ...ASSETS.us, ...ASSETS.crypto];
    state.filteredAssets = state.allAssets;
}

// ========== EVENT LISTENERS ==========
function attachEventListeners() {
    // Category navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const category = e.currentTarget.dataset.category;
            state.currentCategory = category;
            filterAssets(category);
        });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchAssets(query);
    });

    // Sort
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        sortAssets(e.target.value);
    });

    // Select all
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        if (state.selectedAssets.length === state.filteredAssets.length) {
            state.selectedAssets = [];
        } else {
            state.selectedAssets = [...state.filteredAssets];
        }
        renderAssetGrid();
        updateStats();
    });

    // Analyze button
    document.getElementById('analyzeBtn').addEventListener('click', analyzeAssets);
}

// ========== FILTERING & SORTING ==========
function filterAssets(category) {
    if (category === 'all') {
        state.filteredAssets = state.allAssets;
    } else if (category === 'b3') {
        state.filteredAssets = ASSETS.b3;
    } else if (category === 'us') {
        state.filteredAssets = ASSETS.us;
    } else if (category === 'crypto') {
        state.filteredAssets = ASSETS.crypto;
    }
    renderAssetGrid();
    updateStats();
}

function searchAssets(query) {
    if (!query) {
        filterAssets(state.currentCategory);
        return;
    }

    state.filteredAssets = state.allAssets.filter(asset => 
        asset.name.toLowerCase().includes(query) ||
        asset.symbol.toLowerCase().includes(query) ||
        (asset.ticker && asset.ticker.toLowerCase().includes(query))
    );
    renderAssetGrid();
    updateStats();
}

function sortAssets(sortBy) {
    state.filteredAssets.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'type') {
            return a.type.localeCompare(b.type);
        } else if (sortBy === 'symbol') {
            return a.symbol.localeCompare(b.symbol);
        }
        return 0;
    });
    renderAssetGrid();
}

// ========== RENDERING ==========
function renderAssetGrid() {
    const grid = document.getElementById('assetGrid');
    grid.innerHTML = '';

    state.filteredAssets.forEach(asset => {
        const isSelected = state.selectedAssets.some(a => a.symbol === asset.symbol);
        const card = createAssetCard(asset, isSelected);
        grid.appendChild(card);
    });
}

function createAssetCard(asset, isSelected) {
    const card = document.createElement('div');
    card.className = `asset-card ${isSelected ? 'selected' : ''}`;
    card.innerHTML = `
        <div class="asset-type-badge">${asset.type}</div>
        <div class="asset-name">${asset.name}</div>
        <div class="asset-symbol">${asset.ticker || asset.symbol}</div>
    `;
    
    card.addEventListener('click', () => toggleAssetSelection(asset));
    return card;
}

function toggleAssetSelection(asset) {
    const index = state.selectedAssets.findIndex(a => a.symbol === asset.symbol);
    
    if (index > -1) {
        state.selectedAssets.splice(index, 1);
    } else {
        state.selectedAssets.push(asset);
    }
    
    renderAssetGrid();
    updateStats();
}

function updateStats() {
    document.getElementById('totalAssets').textContent = state.filteredAssets.length;
    document.getElementById('selectedCount').textContent = state.selectedAssets.length;
}

// ========== ALERTS ==========
function showAlert(message, type = 'info') {
    const container = document.getElementById('alertContainer');
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;
    
    container.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
}

// ========== API CALLS ==========
async function fetchStockData(symbol) {
    try {
        // Para ações da B3, usa Brapi
        if (symbol.includes('.SA')) {
            const cleanSymbol = symbol.replace('.SA', '');
            const response = await fetch(`https://brapi.dev/api/quote/${cleanSymbol}?range=1d&interval=1d&fundamental=false`);
            
            if (!response.ok) {
                throw new Error(`Brapi error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                const stock = data.results[0];
                return {
                    price: stock.regularMarketPrice || 0,
                    change: stock.regularMarketChangePercent || 0,
                    volume: stock.regularMarketVolume || 0,
                    high: stock.regularMarketDayHigh || stock.regularMarketPrice || 0,
                    low: stock.regularMarketDayLow || stock.regularMarketPrice || 0,
                    name: stock.longName || stock.shortName || symbol
                };
            }
        } else {
            // Para ações US, usa API alternativa gratuita
            const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`);
            
            if (!response.ok) {
                throw new Error(`Yahoo Finance error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.chart && data.chart.result && data.chart.result.length > 0) {
                const result = data.chart.result[0];
                const meta = result.meta;
                const quote = result.indicators.quote[0];
                
                const currentPrice = meta.regularMarketPrice || meta.previousClose;
                const previousClose = meta.chartPreviousClose || meta.previousClose;
                const change = previousClose ? ((currentPrice - previousClose) / previousClose) * 100 : 0;
                
                return {
                    price: currentPrice,
                    change: change,
                    volume: meta.regularMarketVolume || quote.volume[quote.volume.length - 1] || 0,
                    high: meta.regularMarketDayHigh || Math.max(...quote.high.filter(v => v !== null)) || currentPrice,
                    low: meta.regularMarketDayLow || Math.min(...quote.low.filter(v => v !== null)) || currentPrice,
                    name: meta.longName || meta.symbol
                };
            }
        }
        
        throw new Error('No valid data received');
    } catch (error) {
        console.error(`Error fetching stock data for ${symbol}:`, error);
        
        // Retorna dados simulados em caso de erro para não bloquear o fluxo
        return {
            price: Math.random() * 100 + 10,
            change: (Math.random() - 0.5) * 10,
            volume: Math.random() * 10000000,
            high: Math.random() * 100 + 15,
            low: Math.random() * 100 + 5,
            name: symbol,
            simulated: true
        };
    }
}

async function fetchCryptoData(symbol) {
    try {
        const response = await fetch(
            `${CONFIG.COINGECKO_API}/coins/${symbol}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
        );
        
        if (!response.ok) {
            throw new Error(`CoinGecko error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.market_data) {
            return {
                price: data.market_data.current_price.usd,
                change: data.market_data.price_change_percentage_24h || 0,
                volume: data.market_data.total_volume.usd || 0,
                high: data.market_data.high_24h.usd || data.market_data.current_price.usd,
                low: data.market_data.low_24h.usd || data.market_data.current_price.usd,
                marketCap: data.market_data.market_cap.usd || 0,
                name: data.name
            };
        }
        
        throw new Error('No valid market data');
    } catch (error) {
        console.error(`Error fetching crypto data for ${symbol}:`, error);
        
        // Retorna dados simulados em caso de erro
        return {
            price: Math.random() * 50000 + 100,
            change: (Math.random() - 0.5) * 15,
            volume: Math.random() * 1000000000,
            high: Math.random() * 50000 + 200,
            low: Math.random() * 50000 + 50,
            marketCap: Math.random() * 100000000000,
            name: symbol,
            simulated: true
        };
    }
}

async function analyzeWithGroq(assetData, assetInfo) {
    // Verificação simplificada - só verifica se a chave está vazia ou muito curta
    if (!CONFIG.GROQ_API_KEY || CONFIG.GROQ_API_KEY.trim().length < 20) {
        throw new Error('Please configure your Groq API key in scripts/script.js');
    }

    const prompt = `Analyze the following financial asset and provide technical analysis:

Asset: ${assetInfo.name} (${assetInfo.symbol})
Type: ${assetInfo.type}
Market: ${assetInfo.market}
Current Price: $${assetData.price}
24h Change: ${assetData.change.toFixed(2)}%
Volume: $${assetData.volume}
24h High: $${assetData.high}
24h Low: $${assetData.low}

Provide:
1. Score (0-100) based on momentum, trend, and strength
2. Technical analysis (2-3 sentences)
3. Recommendation: BUY, SELL, or HOLD
4. Justification (1-2 sentences)

Respond ONLY in JSON format:
{
  "score": number,
  "analysis": "text",
  "recommendation": "BUY|SELL|HOLD",
  "justification": "text"
}`;

    try {
        const response = await fetch(CONFIG.GROQ_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: CONFIG.GROQ_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert financial analyst. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Groq API error');
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        
        throw new Error('Invalid AI response format');
    } catch (error) {
        console.error('Groq API error:', error);
        throw error;
    }
}

// ========== ANALYSIS ==========
async function analyzeAssets() {
    if (state.selectedAssets.length === 0) {
        showAlert('Please select at least one asset', 'error');
        return;
    }

    // Verificação simplificada
    if (!CONFIG.GROQ_API_KEY || CONFIG.GROQ_API_KEY.trim().length < 20) {
        showAlert('Please configure your Groq API key in scripts/script.js', 'error');
        return;
    }

    const loadingDiv = document.getElementById('loadingContainer');
    const resultsDiv = document.getElementById('resultsContainer');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    resultsDiv.innerHTML = '';
    loadingDiv.style.display = 'block';
    analyzeBtn.disabled = true;

    let successCount = 0;
    let failCount = 0;

    try {
        for (const asset of state.selectedAssets) {
            try {
                let marketData;
                
                if (asset.type === 'Crypto') {
                    marketData = await fetchCryptoData(asset.symbol);
                } else {
                    marketData = await fetchStockData(asset.symbol);
                }
                
                if (marketData) {
                    const aiAnalysis = await analyzeWithGroq(marketData, asset);
                    displayResult(asset, marketData, aiAnalysis);
                    successCount++;
                } else {
                    failCount++;
                    console.error(`No data for ${asset.name}`);
                }
            } catch (error) {
                failCount++;
                console.error(`Error analyzing ${asset.name}:`, error);
                showAlert(`Skipped ${asset.name}: ${error.message}`, 'error');
            }
            
            // Delay entre requisições para respeitar rate limits
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        if (successCount > 0) {
            showAlert(`Analysis completed: ${successCount} successful, ${failCount} failed`, 'success');
        } else {
            showAlert('All analyses failed. Please check your API configuration.', 'error');
        }
    } catch (error) {
        showAlert(`Critical error: ${error.message}`, 'error');
    } finally {
        loadingDiv.style.display = 'none';
        analyzeBtn.disabled = false;
    }
}

function displayResult(assetInfo, marketData, aiAnalysis) {
    const container = document.getElementById('resultsContainer');
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const changeClass = marketData.change >= 0 ? 'positive' : 'negative';
    const changeSymbol = marketData.change >= 0 ? '+' : '';
    
    let recommendationClass = 'hold';
    if (aiAnalysis.recommendation.includes('BUY')) recommendationClass = 'buy';
    if (aiAnalysis.recommendation.includes('SELL')) recommendationClass = 'sell';
    
    // Adiciona badge se dados forem simulados
    const simulatedBadge = marketData.simulated ? 
        '<span style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; margin-left: 8px;">DEMO DATA</span>' : '';
    
    card.innerHTML = `
        <div class="result-header">
            <div class="result-info">
                <h3>${assetInfo.name}${simulatedBadge}</h3>
                <div class="result-meta">${assetInfo.ticker || assetInfo.symbol} • ${assetInfo.type}</div>
            </div>
            <div class="price-section">
                <div class="current-price">${marketData.price.toFixed(2)}</div>
                <div class="price-change ${changeClass}">${changeSymbol}${marketData.change.toFixed(2)}%</div>
            </div>
        </div>
        
        <div class="score-section">
            <div class="score-header">
                <span class="score-label">AI Score</span>
                <span class="score-value">${aiAnalysis.score}/100</span>
            </div>
            <div class="score-bar-container">
                <div class="score-bar-fill" style="width: ${aiAnalysis.score}%"></div>
            </div>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Volume 24h</div>
                <div class="metric-value">${(marketData.volume / 1000000).toFixed(2)}M</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">24h High</div>
                <div class="metric-value">${marketData.high.toFixed(2)}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">24h Low</div>
                <div class="metric-value">${marketData.low.toFixed(2)}</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Change</div>
                <div class="metric-value ${changeClass}">${changeSymbol}${marketData.change.toFixed(2)}%</div>
            </div>
        </div>
        
        <div class="analysis-card">
            <div class="analysis-title">Technical Analysis</div>
            <p class="analysis-text">${aiAnalysis.analysis}</p>
            <p class="analysis-text"><strong>Justification:</strong> ${aiAnalysis.justification}</p>
            <div class="recommendation ${recommendationClass}">
                ${aiAnalysis.recommendation}
            </div>
        </div>
    `;
    
    container.appendChild(card);
}