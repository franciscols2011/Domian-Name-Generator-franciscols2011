/* eslint-disable */

window.onload = function() {
  let pronouns = ["the", "our"];

  let adjs = ["great", "big"];

  let nouns = ["jogger", "racoon"];

  let end_domain = [".com", ".net", ".us", ".io"]; //.com, .net, .us, .io

  let combinaciones = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ends_domain of end_domain) {
          let nombreDominio = `${pronoun}${adj}${noun}${ends_domain}`;
          combinaciones.push(nombreDominio);
        }
      }
    }
  }

  let elementosList = "";

  for (i = 0; i < combinaciones.length; i++) {
    elementosList += "<li>" + combinaciones[i] + "</li>";
  }

  document.getElementById("dominios").innerHTML = elementosList;

  console.log(combinaciones);
};
