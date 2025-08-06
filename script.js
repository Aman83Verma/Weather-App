console.log("Hello Jee!");

const API_KEY = "7ae41726f4f16135905220dccc44d5fb";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

async function Fetch_Weather_Details() {

    try{
        // let lat = 15.333;
        // let long = 74.0833;

        let city = "Goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        const data = await response.json();
        console.log("Weather data:=> ", data);

        renderWeatherInfo(data);
    }

    catch(err){
        // Handle the error...
    }
    
    
}

async function getCustomWeatherDetails() {

    try{
        let lat = 15.6333;
        let long = 18.3333;

        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);

        const data = await result.json();
        console.log(data);
    }

    catch(err){
        console.log("Error Found : ", err);
    }
    
}

function switchTab(clickedTab){

    apiErrorContainer.classList.remove("active");

    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }

        console.log("Current Tab", currentTab);
        
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}