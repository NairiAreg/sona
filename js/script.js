var input = document.querySelector("#telephone");
window.intlTelInput(input,({
  // options here
  preferredCountries: ["am","us","ru"]
}));

// input.addEventListener("countrychange", function () {
//     // do something with iti.getSelectedCountryData()
// });

// input.addEventListener("open:countrydropdown", function () {
//     // triggered when the user opens the dropdown
// });

// input.addEventListener("close:countrydropdown", function () {
//     // triggered when the user closes the dropdown
// });