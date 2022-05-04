console.log("How to work with APIs");

//OLD WAY to send request XML  XHR
//Doesnt support Promises

// "http://swapi.dev/api/people/1/"

// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("LOADED");
//   const data = JSON.parse(this.responseText);
//   console.log(data.birth_year, data.gender);
// };
// req.onerror = function () {
//   console.log("ERROR");
//   console.log(this);
// };

// req.open("GET", "http://swapi.dev/api/people/1/");
// req.send();

//FETCH
fetch("http://swapi.dev/api/people/2/")
  .then((res) => {
    console.log("1st fetch resolved", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("http://swapi.dev/api/people/3/");
  })
  .then((res) => {
    console.log("2nd fetch resolved");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR", e);
  });

//ASYNC

const loadStarWars = async () => {
  try {
    const res = await fetch("http://swapi.dev/api/people/4/");
    const data = await res.json();
    console.log(data);
    const res1 = await fetch("http://swapi.dev/api/people/5/");
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch("http://swapi.dev/api/people/6/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR", e);
  }
};
loadStarWars();
