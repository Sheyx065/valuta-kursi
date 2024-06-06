

const currencies = ["USD", "EUR", "SUM", "RUB"];

const initialRates = {
    USD: 1.0,
    EUR: 0.9,
    SUM: 10650,
    RUB: 74,
};

const getStoredRates = () => {
    const storedRates = localStorage.getItem("exchangeRates");
    return storedRates ? JSON.parse(storedRates) : initialRates;
};

const setStoredRates = (rates) => {
    localStorage.setItem("exchangeRates", JSON.stringify(rates));
};

let rates = getStoredRates();

document.getElementById("updateRateBtn").addEventListener("click", () => {
    const newRate = parseFloat(document.getElementById("newRate").value);
    const rateCurrency = document.getElementById("rateCurrency").value;

    if (!isNaN(newRate)) {
        rates[rateCurrency] = newRate;
        setStoredRates(rates);
        alert(`${rateCurrency} kursi yangilandi: ${newRate}`);
    } else {
        alert("Yangi kursni kiriting.");
    }
});

document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!isNaN(amount)) {
        const rate = (rates[toCurrency] / rates[fromCurrency]);
        const result = amount * rate;
        document.getElementById("exchangeRate").innerText = `Exchange Rate: ${rate.toFixed(2)}`;
        document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
    } else {
        alert("Summani kiriting.");
    }
});
