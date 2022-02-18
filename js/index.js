const getCountriesName = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    const countriesName = response.data;
    console.log(countriesName);
    return countriesName;
  } catch (errors) {
    console.error(errors);
  }
};

getCountriesName();
