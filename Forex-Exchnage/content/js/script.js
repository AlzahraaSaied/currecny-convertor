let currentChart = null;

const currencyFlags = {
    'AED': 'ae', 
    'AFN': 'af', // Afghan Afghani
    'ALL': 'al', // Albanian Lek
    'AMD': 'am', // Armenian Dram
    'ANG': 'an', // Netherlands Antillean Guilder
    'AOA': 'ao', // Angolan Kwanza
    'ARS': 'ar', // Argentine Peso
    'AUD': 'au', // Australian Dollar
    'AWG': 'aw', // Aruban Florin
    'AZN': 'az', // Azerbaijani Manat
    'BAM': 'ba', // Bosnia and Herzegovina Convertible Mark
    'BBD': 'bb', // Barbadian Dollar
    'BDT': 'bd', // Bangladeshi Taka
    'BGN': 'bg', // Bulgarian Lev
    'BHD': 'bh', // Bahraini Dinar
    'BIF': 'bi', // Burundian Franc
    'BMD': 'bm', // Bermudian Dollar
    'BND': 'bn', // Brunei Dollar
    'BOB': 'bo', // Bolivian Boliviano
    'BRL': 'br', // Brazilian Real
    'BSD': 'bs', // Bahamian Dollar
    'BTN': 'bt', // Bhutanese Ngultrum
    'BWP': 'bw', // Botswana Pula
    'BYN': 'by', // Belarusian Ruble
    'BZD': 'bz', // Belize Dollar
    'CAD': 'ca', // Canadian Dollar
    'CDF': 'cd', // Congolese Franc
    'CHF': 'ch', // Swiss Franc
    'CLP': 'cl', // Chilean Peso
    'CNY': 'cn', // Chinese Yuan
    'COP': 'co', // Colombian Peso
    'CRC': 'cr', // Costa Rican Colón
    'CUP': 'cu', // Cuban Peso
    'CVE': 'cv', // Cape Verdean Escudo
    'CZK': 'cz', // Czech Koruna
    'DKK': 'dk', // Danish Krone
    'DOP': 'do', // Dominican Peso
    'DZD': 'dz', // Algerian Dinar
    'EGP': 'eg', // Egyptian Pound
    'ERN': 'er', // Eritrean Nakfa
    'ETB': 'et', // Ethiopian Birr
    'EUR': 'eu', // Euro
    'FJD': 'fj', // Fijian Dollar
    'FKP': 'fk', // Falkland Islands Pound
    'GBP': 'gb', // British Pound Sterling
    'GEL': 'ge', // Georgian Lari
    'GHS': 'gh', // Ghanaian Cedi
    'GIP': 'gi', // Gibraltar Pound
    'GMD': 'gm', // Gambian Dalasi
    'GNF': 'gn', // Guinean Franc
    'GTQ': 'gt', // Guatemalan Quetzal
    'GYD': 'gy', // Guyanese Dollar
    'HKD': 'hk', // Hong Kong Dollar
    'HNL': 'hn', // Honduran Lempira
    'HRK': 'hr', // Croatian Kuna
    'HTG': 'ht', // Haitian Gourde
    'HUF': 'hu', // Hungarian Forint
    'IDR': 'id', // Indonesian Rupiah
    'ILS': 'il', // Israeli New Shekel
    'INR': 'in', // Indian Rupee
    'IQD': 'iq', // Iraqi Dinar
    'IRR': 'ir', // Iranian Rial
    'ISK': 'is', // Icelandic Króna
    'JMD': 'jm', // Jamaican Dollar
    'JOD': 'jo', // Jordanian Dinar
    'JPY': 'jp', // Japanese Yen
    'KES': 'ke', // Kenyan Shilling
    'KGS': 'kg', // Kyrgyzstani Som
    'KHR': 'kh', // Cambodian Riel
    'KPW': 'kp', // North Korean Won
    'KRW': 'kr', // South Korean Won
    'KWD': 'kw', // Kuwaiti Dinar
    'KYD': 'ky', // Cayman Islands Dollar
    'KZT': 'kz', // Kazakhstani Tenge
    'LAK': 'la', // Lao Kip
    'LBP': 'lb', // Lebanese Pound
    'LKR': 'lk', // Sri Lankan Rupee
    'LRD': 'lr', // Liberian Dollar
    'LSL': 'ls', // Lesotho Loti
    'LYD': 'ly', // Libyan Dinar
    'MAD': 'ma', // Moroccan Dirham
    'MDL': 'md', // Moldovan Leu
    'MGA': 'mg', // Malagasy Ariary
    'MKD': 'mk', // Macedonian Denar
    'MMK': 'mm', // Myanmar Kyat
    'MNT': 'mn', // Mongolian Tögrög
    'MOP': 'mo', // Macanese Pataca
    'MRU': 'mr', // Mauritanian Ouguiya
    'MUR': 'mu', // Mauritian Rupee
    'MVR': 'mv', // Maldivian Rufiyaa
    'MWK': 'mw', // Malawian Kwacha
    'MXN': 'mx', // Mexican Peso
    'MYR': 'my', // Malaysian Ringgit
    'MZN': 'mz', // Mozambican Metical
    'NAD': 'na', // Namibian Dollar
    'NGN': 'ng', // Nigerian Naira
    'NIO': 'ni', // Nicaraguan Córdoba
    'NOK': 'no', // Norwegian Krone
    'NPR': 'np', // Nepalese Rupee
    'NZD': 'nz', // New Zealand Dollar
    'OMR': 'om', // Omani Rial
    'PAB': 'pa', // Panamanian Balboa
    'PEN': 'pe', // Peruvian Sol
    'PGK': 'pg', // Papua New Guinean Kina
    'PHP': 'ph', // Philippine Peso
    'PKR': 'pk', // Pakistani Rupee
    'PLN': 'pl', // Polish Zloty
    'PYG': 'py', // Paraguayan Guaraní
    'QAR': 'qa', // Qatari Rial
    'RON': 'ro', // Romanian Leu
    'RSD': 'rs', // Serbian Dinar
    'RUB': 'ru', // Russian Ruble
    'RWF': 'rw', // Rwandan Franc
    'SAR': 'sa', // Saudi Riyal
    'SBD': 'sb', // Solomon Islands Dollar
    'SCR': 'sc', // Seychellois Rupee
    'SDG': 'sd', // Sudanese Pound
    'SEK': 'se', // Swedish Krona
    'SGD': 'sg', // Singapore Dollar
    'SHP': 'sh', // Saint Helena Pound
    'SLL': 'sl', // Sierra Leonean Leone
    'SOS': 'so', // Somali Shilling
    'SRD': 'sr', // Surinamese Dollar
    'SSP': 'ss', // South Sudanese Pound
    'STN': 'st', // São Tomé and Príncipe Dobra
    'SVC': 'sv', // Salvadoran Colón
    'SYP': 'sy', // Syrian Pound
    'SZL': 'sz', // Swazi Lilangeni
    'THB': 'th', // Thai Baht
    'TJS': 'tj', // Tajikistani Somoni
    'TMT': 'tm', // Turkmenistani Manat
    'TND': 'tn', // Tunisian Dinar
    'TOP': 'to', // Tongan Paʻanga
    'TRY': 'tr', // Turkish Lira
    'TTD': 'tt', // Trinidad and Tobago Dollar
    'TWD': 'tw', // New Taiwan Dollar
    'TZS': 'tz', // Tanzanian Shilling
    'UAH': 'ua', // Ukrainian Hryvnia
    'UGX': 'ug', // Ugandan Shilling
    'USD': 'us', // United States Dollar
    'UYU': 'uy', // Uruguayan Peso
    'UZS': 'uz', // Uzbekistani Som
    'VEF': 've', // Venezuelan Bolívar
    'VND': 'vn', // Vietnamese Dong
    'VUV': 'vu', // Vanuatu Vatu
    'WST': 'ws', // Samoan Tala
    'XAF': 'xaf', // Central African CFA Franc
    'XAG': 'xag', // Silver Ounce
    'XAU': 'xau', // Gold Ounce
    'XCD': 'xc', // East Caribbean Dollar
    'XOF': 'xof', // West African CFA Franc
    'XPF': 'xpf', // CFP Franc
    'YER': 'ye', // Yemeni Rial
    'ZAR': 'za', // South African Rand
    'ZMW': 'zm', // Zambian Kwacha
    'ZWL': 'zw', // Zimbabwean Dollar
};
const currencySymbols = {
    AED: "د.إ",
    ALL: "L",
    AMD: "֏",
    AOA: "Kz",
    ARS: "$",
    AUD: "$",
    BAM: "KM",
    BDT: "৳",
    BGN: "лв",
    BHD: ".د.ب",
    BIF: "FBu",
    BRL: "R$",
    BYN: "Br",
    CAD: "$",
    CHF: "CHF",
    CLP: "$",
    CNH: "¥",
    CNY: "¥",
    COP: "$",
    CZK: "Kč",
    DKK: "kr",
    EGP: "£",
    EUR: "€",
    GBP: "£",
    GHS: "₵",
    HKD: "$",
    HRK: "kn",
    HUF: "Ft",
    IDR: "Rp",
    ILS: "₪",
    INR: "₹",
    ISK: "kr",
    JOD: "د.ا",
    JPY: "¥",
    KES: "KSh",
    KRW: "₩",
    KWD: "د.ك",
    KZT: "₸",
    LBP: "ل.ل",
    LKR: "Rs",
    MAD: "د.م.",
    MUR: "₨",
    MXN: "$",
    MYR: "RM",
    NGN: "₦",
    NOK: "kr",
    NZD: "$",
    OMR: "ر.ع.",
    PEN: "S/",
    PHP: "₱",
    PKR: "₨",
    PLN: "zł",
    QAR: "ر.ق",
    RON: "lei",
    RUB: "₽",
    SAR: "﷼",
    SEK: "kr",
    SGD: "$",
    THB: "฿",
    TND: "د.ت",
    TRY: "₺",
    TWD: "NT$",
    TZS: "Sh",
    UAH: "₴",
    UGX: "USh",
    USD: "$",
    VND: "₫",
    XAF: "FCFA",
    XOF: "CFA",
    XAG: "Ag",
    XAU: "Au",
    XPD: "Pd",
    XPT: "Pt",
    ZAR: "R",
    ZWL: "$",
};
function currencyDropdown(selectElementId, available_currencies, defaultCurrency) {
    const selectElement = document.getElementById(selectElementId);
    selectElement.innerHTML = '';
    for (let currencyCode in available_currencies) {
        const selectOption = document.createElement('option');
        selectOption.classList.add("select-option");
        selectOption.value = currencyCode;
        selectOption.textContent = `${available_currencies[currencyCode]}`;

        if (available_currencies[currencyCode] === defaultCurrency) {
            selectOption.selected = true;
        }
        selectElement.appendChild(selectOption);
    }
}

function formatDateToLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() - 2).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}-${hours}:${minutes}`;
}



function fetchExchangeRateForLastHour(baseCurrency, quoteCurrency) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 2);
    const startDate = new Date(endDate.getTime() - 60 * 60 * 1000);
    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);
    /* 
        console.log("Formatted Start Date:", formattedStartDate);
        console.log("Formatted End Date:", formattedEndDate); */

    const encodedStartDate = encodeURIComponent(formattedStartDate);
    const encodedEndDate = encodeURIComponent(formattedEndDate);

    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?currency=${baseCurrency + quoteCurrency}&start_date=${encodedStartDate}&end_date=${encodedEndDate}&interval=minute&period=5&api_key=UkWxobFCeRY4JpKWyoMp`)
        .then(response => {
            console.log(response.data);

            const quotes = response.data.quotes;
            if (!quotes || quotes.length === 0) {
                console.warn('No quotes available for the selected date(s). Please check the dates.');
                return;
            }

            const totalClose = quotes.reduce((acc, quote) => acc + quote.close, 0);
            const averageClose = totalClose / quotes.length;
            const averageValue = (averageClose / 100).toFixed(6);
            document.getElementById('averg-rate').textContent = `${averageValue}`;
            document.getElementById('average').textContent = `(${averageValue}%)`;
            
            const lastQuote = quotes[quotes.length - 1];
            const exchange = lastQuote?.close;
            document.getElementById('current-rate').textContent = `${exchange}`;

            const pair = `${baseCurrency}/${quoteCurrency}`;
            document.getElementById('currency-pair').textContent = pair;
            const timestamps = quotes.map(quote => quote.date);
            const closeRates = quotes.map(quote => quote.close);

            drawChart(timestamps, closeRates, baseCurrency, quoteCurrency);
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
        });

}

function fetchExchangeRateForLastMinute(baseCurrency, quoteCurrency) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate()-1);
    const startDate = new Date(endDate.getTime() - 15 * 60 * 1000);
    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);

    const encodedStartDate = encodeURIComponent(formattedStartDate);
    const encodedEndDate = encodeURIComponent(formattedEndDate);

   
    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?currency=${baseCurrency + quoteCurrency}&start_date=${encodedStartDate}&end_date=${encodedEndDate}&interval=minute&period=1&api_key=UkWxobFCeRY4JpKWyoMp`)
        .then(response => {
            console.log(response.data);

            const quotes = response.data.quotes;
            if (!quotes || quotes.length === 0) {
                console.warn('No quotes available for the selected date(s). Please check the dates.');
                return;
            }
            
            const totalClose = quotes.reduce((acc, quote) => acc + quote.close, 0);
            const averageClose = totalClose / quotes.length;
            const averageValue = (averageClose / 100).toFixed(6);
            document.getElementById('averg-rate').textContent = `${averageValue}`;
            document.getElementById('average').textContent = `(${averageValue}%)`;

            const lastQuote = quotes[quotes.length - 1];
            const exchange = lastQuote?.close;
            document.getElementById('current-rate').textContent = `${exchange}`;
            const timestamps = quotes.map(quote => quote.date);
            const closeRates = quotes.map(quote => quote.close);

            drawChart(timestamps, closeRates, baseCurrency, quoteCurrency);
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
        });

}


function fetchExchangeRateForWeek(baseCurrency, quoteCurrency) {
    const endDate = new Date();
    const formattedEndDate = endDate.toISOString().slice(0, 10);

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const formattedStartDate = startDate.toISOString().slice(0, 10);

    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?currency=${baseCurrency + quoteCurrency}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&api_key=UkWxobFCeRY4JpKWyoMp`)
        .then(response => {
            console.log(response.data);

            const quotes = response.data.quotes;
            if (!quotes || quotes.length === 0) {
                console.warn('No quotes available for the selected date(s). Please check the dates.');
                return;
            }
            const totalClose = quotes.reduce((acc, quote) => acc + quote.close, 0);
            const averageClose = totalClose / quotes.length;
            const averageValue = (averageClose / 100).toFixed(6);
            document.getElementById('averg-rate').textContent = `${averageValue}`;
            document.getElementById('average').textContent = `(${averageValue}%)`;

            const lastQuote = quotes[quotes.length - 1];
            const exchange = lastQuote?.close;
            document.getElementById('current-rate').textContent = `${exchange}`;

            const timestamps = quotes.map(quote => quote.date);
            const closeRates = quotes.map(quote => quote.close);

            drawChart(timestamps, closeRates, baseCurrency, quoteCurrency);
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
        });
}

function fetchExchangeRate(baseCurrency, quoteCurrency) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate());

    const startDate = new Date(endDate.getTime() - 24 * 60 * 60 * 1000); 

    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);


    const encodedStartDate = encodeURIComponent(formattedStartDate);
    const encodedEndDate = encodeURIComponent(formattedEndDate);


    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?currency=${baseCurrency + quoteCurrency}&start_date=${encodedStartDate}&end_date=${encodedEndDate}&interval=hourly&period=1&api_key=UkWxobFCeRY4JpKWyoMp`)
        .then(response => {
            console.log("API Response:", response.data);

            const quotes = response.data.quotes;
            if (!quotes || quotes.length === 0) {
                console.warn('No quotes available for the selected date(s). Please check the dates.');
                return;
            }
            const totalClose = quotes.reduce((acc, quote) => acc + quote.close, 0);
            const averageClose = totalClose / quotes.length;
            const averageValue = (averageClose / 100).toFixed(6);
            document.getElementById('averg-rate').textContent = `${averageValue}`;
            document.getElementById('average').textContent = `(${averageValue}%)`;

            const lastQuote = quotes[quotes.length - 1];
            const exchange = lastQuote?.close;
            document.getElementById('current-rate').textContent = `${exchange}`;
            const timestamps = quotes.map(quote => quote.date);
            const closeRates = quotes.map(quote => quote.close);

            drawChart(timestamps, closeRates, baseCurrency, quoteCurrency);
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
        });
}

function fetchExchangeRateForLastMonth(baseCurrency, quoteCurrency) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);
    const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000);

    const formattedEndDate = formatDateToLocal(endDate);
    const formattedStartDate = formatDateToLocal(startDate);


    const encodedStartDate = encodeURIComponent(formattedStartDate);
    const encodedEndDate = encodeURIComponent(formattedEndDate);



    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?currency=${baseCurrency + quoteCurrency}&start_date=${encodedStartDate}&end_date=${encodedEndDate}&interval=daily&period=1&api_key=UkWxobFCeRY4JpKWyoMp`)
        .then(response => {
            console.log(response.data);
            
            const quotes = response.data.quotes;
            if (!quotes || quotes.length === 0) {
                console.warn('No quotes available for the selected date(s). Please check the dates.');
                return;
            }

            const totalClose = quotes.reduce((acc, quote) => acc + quote.close, 0);
            const averageClose = totalClose / quotes.length;
            const averageValue = (averageClose / 100).toFixed(6);
            document.getElementById('averg-rate').textContent = `${averageValue}`;
            document.getElementById('average').textContent = `(${averageValue}%)`;


            const lastQuote = quotes[quotes.length - 1];
            const exchange = lastQuote?.close;
            document.getElementById('current-rate').textContent = `${exchange}`;
            const timestamps = quotes.map(quote => quote.date);
            const closeRates = quotes.map(quote => quote.close);

            drawChart(timestamps, closeRates, baseCurrency, quoteCurrency);
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
        });

}
function drawChart(timestamps, closeRates, baseCurrency, quoteCurrency) {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: `${baseCurrency}/${quoteCurrency}`,
                data: closeRates,
                borderColor: '#94C64F',
                backgroundColor: '#F3F9EB', 
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute' 
                    },
                    grid: {
                        display: false 
                    },
                    ticks: {
                        color: '#999'
                    }
                },
                y: {
                    grid: {
                        display: false 
                    },
                    ticks: {
                        color: '#999'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `Rate: ${context.raw.toFixed(5)}`
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


function fetchAndStoreCurrencies() {
    const cachedCurrencies = localStorage.getItem('available_currencies');

    if (cachedCurrencies) {
        const currencies = JSON.parse(cachedCurrencies);
        currencyDropdown('base-currency', currencies, 'Euro');
        currencyDropdown('quote-currency', currencies, 'US Dollar');
        initializeExchangeRates();
    } else {
        axios.get('https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=UkWxobFCeRY4JpKWyoMp')
            .then(response => {
                const currencies = response.data.available_currencies;
                localStorage.setItem('available_currencies', JSON.stringify(currencies));

                currencyDropdown('base-currency', currencies, 'Euro');
                currencyDropdown('quote-currency', currencies, 'US Dollar');
                initializeExchangeRates();
            })
            .catch(error => {
                console.error('Error fetching the currencies:', error);
            });
    }
}

function initializeExchangeRates() {
    fetchExchangeRateForLastMinute('EUR', 'USD');
    fetchExchangeRate('EUR', 'USD');
    fetchExchangeRateForWeek('EUR', 'USD');
    fetchExchangeRateForLastHour('EUR', 'USD');
    fetchExchangeRateForLastMonth('EUR', 'USD');
}


fetchAndStoreCurrencies();


function updateFlags() {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    document.getElementById('flag1').className = `fi fi-${currencyFlags[baseCurrency]}`;
    document.getElementById('flag2').className = `fi fi-${currencyFlags[quoteCurrency]}`;
}
function updateSymbols() {
    const quoteCurrency = document.getElementById('quote-currency').value; // Get the selected quote currency
    const symbolElement = document.getElementById('symbol'); // The element to display the symbol
  
    symbolElement.textContent = currencySymbols[quoteCurrency] || ''; // Default to empty string if not found
}

document.getElementById('base-currency').addEventListener('change', function () {
    const baseCurrency = this.value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    fetchExchangeRateForLastMinute(baseCurrency, quoteCurrency);
    fetchExchangeRate(baseCurrency, quoteCurrency);
    fetchExchangeRateForWeek(baseCurrency, quoteCurrency);
    fetchExchangeRateForLastHour(baseCurrency, quoteCurrency);
    fetchExchangeRateForLastMonth(baseCurrency, quoteCurrency);
    updateFlags();
    updateSymbols();
});

document.getElementById('quote-currency').addEventListener('change', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = this.value;
    fetchExchangeRateForLastMinute(baseCurrency, quoteCurrency);
    fetchExchangeRate(baseCurrency, quoteCurrency);
    fetchExchangeRateForWeek(baseCurrency, quoteCurrency);
    fetchExchangeRateForLastHour(baseCurrency, quoteCurrency);
    fetchExchangeRateForLastMonth(baseCurrency, quoteCurrency);
    updateFlags();
    updateSymbols();
});



document.getElementById('day').addEventListener('click', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;

    fetchExchangeRate(baseCurrency, quoteCurrency);
    updateSymbols();
});
document.getElementById('week').addEventListener('click', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    fetchExchangeRateForWeek(baseCurrency, quoteCurrency);
    updateSymbols();
});

document.getElementById('min').addEventListener('click', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    fetchExchangeRateForLastMinute(baseCurrency, quoteCurrency);
    updateSymbols();
});

document.getElementById('hour').addEventListener('click', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    fetchExchangeRateForLastHour(baseCurrency, quoteCurrency);
    updateSymbols();
});

document.getElementById('month').addEventListener('click', function () {
    const baseCurrency = document.getElementById('base-currency').value;
    const quoteCurrency = document.getElementById('quote-currency').value;
    fetchExchangeRateForLastMonth(baseCurrency, quoteCurrency);
    updateSymbols();

});