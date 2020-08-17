// fetch('https://api.openweathermap.org/data/2.5/weather?q=chittagong&appid=85d095bb430dfc6b3eedd36382884c5f')


document.getElementById('btn').addEventListener("click", function () {
    const input = document.getElementById('input').value;
    const myKey = "85d095bb430dfc6b3eedd36382884c5f";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const getCityName = data['name'];
            const tempValue = data['main']['temp'];
            const cloudData = data['weather'][0]['description'];
            const iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";


            document.getElementById('cityName').innerHTML = getCityName;
            document.getElementById('deg').innerText = tempValue;
            document.getElementById('icon').setAttribute('src', iconUrl);
            document.getElementById('lead').innerHTML = cloudData;
        })
})


