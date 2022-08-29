let form = document.getElementById("formulaire");
let meteo = [];
let res = document.getElementById("resultat");
const apiKey = `92239360087c7345d68282673188454d`;

form.addEventListener("submit", e => {
let city_raw = document.getElementById("value");
let city = city_raw.value;

const displayMeteo = async () => {
    await fetchMeteo()
    if (!meteo.succes === false) {
        res.innerHTML = `<div class="alert-primary"> Veuillez  saisir une ville valide :(</div>`
    } else {
        res.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${meteo.current.weather_icons[0]}" class="card-img-top" alt="meteo_du_jour">
        <div class="card-body text-center">
          <h5 class="card-title"> ${meteo.location.name} , ${meteo.location.country} , ${meteo.location.region}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${meteo.current.weather_descriptions[0]}</h6>
          <p class="card-text">temperature : ${meteo.current.temperature}°</p>
          <p class="card-text">humidité : ${meteo.current.humidity}</p>
          <p class="card-text">force du vent : ${meteo.current.wind_speed} km/h</p>
          <p class="card-text">Index uv : ${meteo.current.uv_index}</p>
          <p class="card-text">precipitation : ${meteo.current.precip}</p>
        </div>
      </div> `
    }
}


e.preventDefault();
if (city.length >= 3) {
    displayMeteo()
} else {
    const alert = "<div class='alert-primary'>Veuillez entrer le nom d'une ville :)</div>";
    res.innerHTML = alert;
}
})


const fetchMeteo = async () => {
    let city_raw = document.getElementById("value");
    let city = city_raw.value;
    const apiKey = `92239360087c7345d68282673188454d`;
    const apiUri = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    meteo = await fetch(apiUri).then((response) => response.json())
    console.log(meteo);
}