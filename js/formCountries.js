// ********** APPEL API POUR AFFICHER LA LISTE DES PAYS **********

// je fais l'appel API avec Axios
const getCountries = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

// Je crée une variable qui permet de ranger les pays par ordre alphabétique
const sortByCountryName = (a, b) => {
  if (a.name.common < b.name.common) return -1;
  if (a.name.common > b.name.common) return 1;
  return 0;
};

// Je crée l'option du select avec un map et qui les range par ordre alphabétique grâve au sort
const createOptions = (countries) => {
  const countriesList = document.getElementById("country-select");
  {
    countries.sort(sortByCountryName).map((country) => {
      // je crée l'option
      const newOption = document.createElement("option");
      newOption.text = country.name.common;
      newOption.value = country.name.common;
      newOption.style.color = "black";
      newOption.id = "form-country";
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
