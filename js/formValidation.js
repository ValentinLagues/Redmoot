// ********** CONDITIONS DE VALIDATION DU FORMULAIRE **********

// Je définie les variables avec un getElementById pour récupérer la value des input
const sendButton = document.getElementById("form-button");
const formCountry = document.getElementById("country-select");
const formName = document.getElementById("form-name");
const formAddress = document.getElementById("form-address");
const formMessage = document.getElementById("form-message");

// Au clic sur le bouton, je renvoies des messages d'erreur (tippy) ou de succes (sweet-alert)
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!formName.value) {
    (formName.style.borderColor = "#ed1e79"),
      tippy("#form-name", {
        content: "Fill with your name",
      });
  }
  if (!formAddress.value) {
    (formAddress.style.borderColor = "#ed1e79"),
      tippy("#form-address", {
        content: "Fill with your address",
      });
  }
  if (!formMessage.value) {
    (formMessage.style.borderColor = "#ed1e79"),
      tippy("#form-message", {
        content: "Fill with your message",
      });
  }
  if (formName.value && formAddress.value && formMessage.value) {
    // le swal est une alerte customisée avec sweet alert (bonus)
    swal("Thank you", "Your message had been successfully sent", "success");
    // je renvoies le resultat du formulaire sous forme de fichier JSON dans la console
    const result = [];
    result.push({
      country: formCountry.value,
      name: formName.value,
      address: formAddress.value,
      message: formMessage.value,
    });
    console.log(JSON.stringify(result, null, 2));
  }
});
