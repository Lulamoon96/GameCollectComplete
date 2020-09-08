import axios from "axios";

export default {
  searchGame: function (game) {
    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': 'be68224bb6f48f6161aabc3fe5aaaf63',
      },
      data: `search "${game}";fields age_ratings,cover,first_release_date,name;`
    })
  },

  findGameCover: function (id) {
    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': 'be68224bb6f48f6161aabc3fe5aaaf63'
      },
      data: `fields url;
      where id=${id};`
    })
      .then(response => {
        return response.data[0].url;
      })
      .catch(err => {
        console.error(err);
      })

  }

};
