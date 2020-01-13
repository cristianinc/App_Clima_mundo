const axios = require("axios");

const getLugarLatLng = async dir => {
  const encodeUlr = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: {
      "X-RapidAPI-Key": "6c44f3c43fmsh4ee8dea52cdd744p1a587fjsn925f8a557541"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`no hay resultado para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};
