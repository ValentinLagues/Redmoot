// je fais l'appel API avec Axios
const getCountries = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

// Je crée l'option du select avec un map
const createOptions = (countries) => {
  const countriesList = document.getElementById("country-select");
  {
    countries.map((country) => {
      // je crée l'option
      const newOption = document.createElement("option");
      newOption.text = country.name.common;
      newOption.value = country.name.common;
      // je la rajoute au select
      countriesList.appendChild(newOption);
    });
  }
};

const selectCountries = async () => {
  const countries = await getCountries();
  createOptions(countries);
};

selectCountries();
