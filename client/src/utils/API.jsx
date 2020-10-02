import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

console.log("api_key: ", api_key);

export default {
  getSuperhero: function (name) {
    console.log("name", name);
    console.log(
      `GET https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${api_key}/search/${name}`
    );
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${api_key}/search/${name}`
    );
  },
  getComicVine: function () {
    console.log("getComicVine api hit");
    return axios.get(`http://www.comicvine.com/api`);
  },
  getRandomVillain: function () {
    console.log("POST /api/villain_data");
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/api/villain_data",
    });
  },

  addHero: function (heroToBeAdded) {
    console.log("POST /api/hero_data");
    console.log({ heroToBeAdded });
    return axios({
      method: "POST",
      data: heroToBeAdded,
      withCredentials: true,
      url: "/api/hero_data",
    });
  },
  registerUsername: function (data) {
    console.log("POST /api/signup");
    console.log({ data });
    return axios({
      method: "POST",
      data: {
        username: data.registerUsername,
        password: data.registerPassword,
      },
      withCredentials: true,
      url: "/api/signup",
    });
  },
  handleLogin: function (data) {
    console.log("POST /api/login");
    console.log({ data });
    return axios({
      method: "POST",
      data: {
        username: data.loginUsername,
        password: data.loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    });
  },
  handleLogout: function () {
    console.log("GET /logout");
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/logout",
    });
  },
};

// https://comicvine.gamespot.com/api/character/4005-75487/?api_key=b84279396e62eefae65b678fe285ad3c06e136fb&format=json
// https://comicvine.gamespot.com/api/characters/?api_key=b84279396e62eefae65b678fe285ad3c06e136fb&format=json&filter=name:
