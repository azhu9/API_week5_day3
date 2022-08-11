//Selecting each button
let naruto = document.querySelector("#naruto");
let mHA = document.querySelector("#mha");
let hunter = document.querySelector("#hunter");
let random = document.querySelector("#rand");
let generate = document.querySelector("#generate");
//Defining title var
let api1;
let api2;
let qIndex = parseInt(0);
let fIndex = parseInt(0);
let randomAnswer = false;

//Assigning name to title var
naruto.onclick = function () {
  api1 = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
  api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/naruto";

};

hunter.onclick = function () {
  api1 = "https://animechan.vercel.app/api/quotes/anime?title=Hunter X Hunter";
  api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/hunter_x_hunter";
};

mHA.onclick = function () {
  api1 =
    "https://animechan.vercel.app/api/quotes/anime?title=Boku no Hero Academia";
  api2 =
    "https://anime-facts-rest-api.herokuapp.com/api/v1/boku_no_hero_academia";
};

random.onclick = function () {
  api1 = "https://animechan.vercel.app/api/random";
  api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
  randomAnswer = true;
};

//Generating quote and fact with
if(randomAnswer == false) {
generate.onclick = function () {
  fetch(api1)
    .then(function (response) {
      return response.json();
    })
    .then(function (quote) {
        let quoteLen = quote.length;
        qIndex = Math.floor(Math.random() * quoteLen);
      let quoteP = document.querySelector("#quote");
      quoteP.innerHTML ='Quote: "' + quote[qIndex].quote +'"' +"\n -" + quote[qIndex].character + ", " + quote[qIndex].anime;
      console.log(qIndex);
    });

  fetch(api2)
    .then(function (response) {
      return response.json();
    })
    .then(function (facts) {
        let factsLen = facts.data.length;
        fIndex = Math.floor(Math.random() * factsLen);
      let factsP = document.querySelector("#fact");
      factsP.innerHTML = "Fact: " + facts.data[qIndex].fact;
      console.log(fIndex);
        });
};
}

else if (randomAnswer == true) {
    randomAnswer = false;
    generate.onclick = function () {
        fetch(api1)
          .then(function (response) {
            return response.json();
          })
          .then(function (quote) {
            let quoteP = document.querySelector("#quote");
            quoteP.innerHTML ='Quote: "' + quote.quote +'"' +"\n -" + quote[0].character + ", " + quote[0].anime;
          });
      
        fetch(api2)
          .then(function (response) {
            return response.json();
          })
          .then(function (facts) {
            let factsP = document.querySelector("#fact");
            factsP.innerHTML = "Fact: " + facts.data.fact;
              });
      };
}
