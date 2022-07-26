
var city = ['seoul', 'tokyo', 'paris', 'beijing'];

callData();

function callData() {
    for (var i = 0; i < city.length; i++) {
        var apiKey = "84bbf1bc16c21571bb35b7478e7b2d24" 
        var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=" + city[i] + "&appid=" + apiKey;

        (function (i) {
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
        })(i);
    }
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


    if (city == 'Seoul') {
        $(".seoul .city").text(city);
        $(".seoul .temp span").text(`${Math.floor(tit)}°`);
        $(".seoul .weather span").text(weather);
        $(".seoul .weather_desc span").text(weather_desc);
        $(".seoul .humidity span").text(humidity);

        $(".seoul .wind span").text(wind);
        $(".seoul .cloudy span").text(cloudy);
        $(".seoul .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == 'Tokyo') {
        $(".tokyo .city").text(city);
        $(".tokyo .temp span").text(`${Math.floor(tit)}°`);
        $(".tokyo .weather span").text(weather);
        $(".tokyo .weather_desc span").text(weather_desc);
        $(".tokyo .humidity span").text(humidity);

        $(".tokyo .wind span").text(wind);
        $(".tokyo .cloudy span").text(cloudy);
        $(".tokyo .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Beijing") {
        $(".beijing .city").text(city);
        $(".beijing .temp span").text(`${Math.floor(tit)}°`);
        $(".beijing .weather span").text(weather);
        $(".beijing .weather_desc span").text(weather_desc);
        $(".beijing .humidity span").text(humidity);

        $(".beijing .wind span").text(wind);
        $(".beijing .cloudy span").text(cloudy);
        $(".beijing .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }else if(city == "Paris") {
        $(".paris .city").text(city);
        $(".paris .temp span").text(`${Math.floor(tit)}°`);
        $(".paris .weather span").text(weather);
        $(".paris .weather_desc span").text(weather_desc);
        $(".paris .humidity span").text(humidity);

        $(".paris .wind span").text(wind);
        $(".paris .cloudy span").text(cloudy);
        $(".paris .imgSrc span").css({
            backgroundImage: "url(" + imgSrc + ")",
            width: '50px',
            height: '50px',
            display: 'inline-block'
        })
    }





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