 const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    
    .then(response => response.json())
    .then(countries => displayCountries(countries))
}



function displayCountries(countries){
    
    const countriesDiv = document.getElementById('countries-container');
    countries.forEach(country => {
        

        const div =  document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
       
        <h3> Country name: ${country.name.common}</h3>
        <p> Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.cca2}')">Details</button>
        `
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetails(data));
}

function displayCountryDetails(country){
    console.log(country[0]);

    const countryDiv = document.getElementById('selected');

    countryDiv.innerHTML = `
    <h3> Country name: ${country[0].name.common}</h3>
    <p> Capital: ${country[0].capital[0]}</p>
    <p> Region: ${country[0].region}</p>
    <img src="${country[0].flags.png}" alt="">
    `;
}
loadCountries();