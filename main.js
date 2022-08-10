//Selecting each button
let naruto = document.querySelector("#naruto");
let mHA = document.querySelector("#mha");
let hunter = document.querySelector("#hunter");
let random = document.querySelector("#rand");
let generate = document.querySelector("#generate");
//Defining title var
let api1;
let api2;

//Assigning name to title var
naruto.onclick = function(){
    api1 = "https://animechan.vercel.app/api/quotes/anime?title=naruto";
    api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/naruto";
}

hunter.onclick = function(){
    api1 = "https://animechan.vercel.app/api/quotes/anime?title=Hunter X Hunter";
    api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/hunter_x_hunter";
}

mHA.onclick = function(){
    api1 = "https://animechan.vercel.app/api/quotes/anime?title=Boku no Hero Academia";
    api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/boku_no_hero_academia";

}

random.onclick = function(){
    api1 = "https://animechan.vercel.app/api/random";
    api2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
}


//Generating quote and fact with 
generate.onclick = function(){
    fetch(api1).then(function(response) {
        return response.json();
    })
    .then(function(quote) {
        let quoteP = document.querySelector("#quote");
        quoteP.innerHTML = quote[0].quote;
        // console.log(quote[0].quote);
    });
    
    fetch(api2).then(function(response) {
        return response.json();
    })
    .then(function(facts) {
        let factsP = document.querySelector("#facts");
        factsP.innerHTML = facts.data[0];
        // console.log(facts.data[0]);
    });
    
    
}
