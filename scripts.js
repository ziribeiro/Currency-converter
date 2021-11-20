const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.61
const euro = 6.33
const bitcoin = 326032.84

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const result = document.getElementById('convert-result')

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReal);

    if (select.value === "US$ Dólar americano") {
        result.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReal / dolar);

    }

    if (select.value === "€ Euro") {
        result.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReal / euro);

    }

    if (select.value === "Bitcoin") {
        result.innerHTML = inputReal / bitcoin
    }

}



const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-image')

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }
    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}


button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)