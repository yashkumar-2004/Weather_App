document.addEventListener('DOMContentLoaded',()=>{
    const getWeatherbtn=document.getElementById('get-weather-btn');
    const inputCity=document.getElementById('city-input');
    const cityName=document.getElementById('city-name');
    const cityTemp=document.getElementById('city-temp');
    const cityCondition=document.getElementById('city-desc');

    const API_Key= `abcd123`;
    getWeatherbtn.addEventListener('click',()=>{
        getWeatherData();
    })

    async function getWeatherData(){
        const city=inputCity.value.trim();
        if(city==="")return;
        const url=`http://api.weatherapi.com/v1/current.json?key=6fd3d84453c24f49a7484810261801&q=${city}&aqi=yes`;
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("City not found");
            }
            const data= await response.json();
            displayWeatherData(data);
            inputCity.value="";
            

        }catch(error){
            alert("Error fetching weather data");
            console.error(error);
        }

    }
    function displayWeatherData(data){
        cityName.textContent=data.location.name;
        cityTemp.textContent=`Temperature : ${data.current.temp_c} °C`;
        cityCondition.textContent=`Current Condition : ${data.current.condition.text}`;
    }
})