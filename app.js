console.log("How to work with APIs");

//OLD WAY to send request XML  XHR
//Doesnt support Promises

// "http://swapi.dev/api/people/1/"

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("LOADED");
  const data = JSON.parse(this.responseText);
  console.log(data.birth_year, data.gender);
};
req.onerror = function () {
  console.log("ERROR");
  console.log(this);
};

req.open("GET", "http://swapi.dev/api/people/1/");
req.send();
