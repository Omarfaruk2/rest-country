
const loadcountry = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displaycountry(data))

}
console.log("hello tumi aso");
const displaycountry = countries => {

    const countryHtml = countries.map(country => getcountryHtml(country))
    const container = document.getElementById("countries")
    container.innerHTML = countryHtml.join(" ")
}

const getcountryHtml = country => {
    return `
        <div class='country'>
            <h2> ${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>

    `
}
loadcountry()

















