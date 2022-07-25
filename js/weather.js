
var city = ['seoul', 'tokyo', 'paris', 'beijing'];

callData();


function callData() {
    city.forEach(function (item, index) {
        var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=" + city[index] + "&appid=" + "84bbf1bc16c21571bb35b7478e7b2d24";

        $.ajax({
            url: apiURI,
            dataType: "json",
            type: "GET",
            success: function (data) {
                console.log(data);
                createList(data);
            },
            error: function (error) {
                console.error(error);
            }
        })
    });
}



function createList(data) {
    var city = data.name;
    var tit = data.main.temp - 273.15;
    var weather = data.weather[0].main;
    var weather_desc = data.weather[0].description;
    var humidity = data.main.humidity + "%";
    var wind = data.wind.speed + "m/s SSW";
    var cloudy = (data.clouds.all) + "%";
    var imgSrc = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $("html컴포넌트").attr("src", imgSrc);


    console.log(city)
        // $(".temp span").text(`${Math.floor(tit)}°`);
        // $(".weather span").text(weather);
        // $(".weather_desc span").text(weather_desc);
        // $(".humidity span").text(humidity);

        // $(".wind span").text(wind);
        // $(".cloudy span").text(cloudy);
        // $(".imgSrc span").css({
        //     backgroundImage: "url(" + imgSrc + ")",
        //     width: '50px',
        //     height: '50px',
        //     display: 'inline-block'
        // })



    // console.log("현재온도 : " + (data.main.temp - 273.15));
    // console.log("현재습도 : " + data.main.humidity);
    // console.log("날씨 : " + data.weather[0].main);
    // console.log("상세날씨설명 : " + data.weather[0].description);
    // console.log("날씨 이미지 : " + data.weather[0].icon);
    // console.log("바람   : " + data.wind.speed);
    // console.log("나라   : " + data.sys.country);
    // console.log("도시이름  : " + data.name);
    // console.log("구름  : " + (data.clouds.all) + "%");
}