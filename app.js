// get photos from unsplash api for background and author name
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=beach")
.then(resp => resp.json())
.catch(err => {
    if(!resp.ok){
    throw err("Something went wrong");
    }
})
.then(data => {
    document.body.style.background = `url(${data.urls.regular})`;
    document.body.style.backgroundSize = "cover";
    document.getElementById("author").innerHTML = `Photo by ${data.user.name}`;
})



// get crypto's data from coingeko api
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(response => response.json())
    .catch(err => {
        if(!resp.ok){
        throw err("Something went wrong");
        }
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = 
        `<img src="${data.image.small}" alt="" class="bitcoin" /> 
        <span>${data.name}</span>`
   
        document.getElementById("crypto").innerHTML += `
        <span><p> Price: $ ${data.market_data.current_price.usd}</p></span>
        `
    })


    // get current time from time api
    function getCurrentTime(){
        const date = new Date()
        document.getElementById("time").innerHTML = `${date.toLocaleTimeString("en-US")}`
    }

    setInterval(getCurrentTime, 1000)


    
    // get current weather from weather api
    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(response => response.json())
        .catch(err => {
            if(!resp.ok){
            throw err("weather data not available");
            }
        })
        .then(data => {
           const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
           document.getElementById("weather").innerHTML = `
              <img src="${iconUrl}" alt="" class="weather-icon" />
                <p class="city">${data.name}</p>
                <p class="temp">${Math.round(data.main.temp)}&deg;F</p>
           `
        })
    })
