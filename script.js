document.getElementById('search-btn').addEventListener('click', searchCountry);

function searchCountry() {
    const countryInput = document.getElementById('country-input').value.trim().toLowerCase();
    const errorMessage = document.getElementById('error-message');
    const countryInfo = document.getElementById('country-info');

    // Clear previous error or result
    errorMessage.innerText = '';
    countryInfo.innerHTML = '';

    // Input validation
    if (!countryInput) {
        errorMessage.innerText = 'Please enter a country name.';
        return;
    }

    // Fetch country data from the REST API
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryInput)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Country not found. Please check the spelling.');
            }
            return response.json();
        })
        .then(data => {
            const country = data[0]; // Get the first result
            const countryHtml = formatCountryData(country);
            countryInfo.innerHTML = countryHtml;
        })
        .catch(error => {
            errorMessage.innerText = error.message;
        });
}

// Function to format the country data
function formatCountryData(country) {
    const { name, flags, capital, population, languages } = country;
    const languageList = languages ? Object.values(languages).join(', ') : 'N/A';

    return `
        <div class="card">
            <h2>${name.common}</h2>
            <img src="${flags.svg}" alt="Flag of ${name.common}">
            <table>
                <tr><td><strong>Capital:</strong></td><td>${capital ? capital[0] : 'N/A'}</td></tr>
                <tr><td><strong>Population:</strong></td><td>${population.toLocaleString()}</td></tr>
                <tr><td><strong>Languages:</strong></td><td>${languageList}</td></tr>
            </table>
        </div>
    `;
}
