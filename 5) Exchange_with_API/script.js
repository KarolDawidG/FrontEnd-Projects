const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`).then(res =>res.json()).then(data=>{
        const curr1 = currencyOne.value;
        const curr2 = currencyTwo.value;

        const rate = data.rates[curr2];
        rateInfo.textContent = `1 ${curr1} = ${rate.toFixed(4)} ${curr2}`

        amountTwo.value = (amountOne.value * rate).toFixed(2);
    })
}

const swap = () => {
    const lastvalueOfCurrOne = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = lastvalueOfCurrOne;
    calculate();
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap);
calculate();

