let api = "https://api.openweathermap.org/data/2.5/onecall?lat=50.74144029659163&lon=33.480140896463645&exclude=minutely,hourly,alerts&appid=2fdd2bbcef632e28a0019ea87b983fcd"
let container = document.getElementById("container")

fetch(api)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(info) {
        for(let i = 0; i < info.daily.length - 1; i++) {
            let currentDayDiv = document.createElement("div")
            let currentDate = formatData(new Date(info.daily[i].dt * 1000))

            currentDayDiv.setAttribute("class", "day")
            currentDayDiv.innerHTML += `<h1>${currentDate}</h1>
                                        <hr>
                                        <img src="https://openweathermap.org/img/wn/${info.daily[i].weather[0].icon}@2x.png">
                                        <p class="degree">min: ${Math.round(info.daily[i].temp.min-273)}&deg;</p>
                                        <p class="degree">max: ${Math.round(info.daily[i].temp.max-273)}&deg;</p>`
            container.append(currentDayDiv)
        }
    })

function formatData(info) {
    let day = info.getDate(),   
        month = info.getMonth()
    if(month < 9)
        month = `0${month}`
    
    return (`${day}.${month}`)

}
