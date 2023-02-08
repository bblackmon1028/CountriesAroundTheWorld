class Country {
    constructor(name, officialLanguage, greeting, primaryColors) {
        this.name = name;
        this.officialLanguage = officialLanguage;
        this.greeting = greeting;
        this.primaryColors = primaryColors;
    }
}

let us = new Country("United States", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "¡Hola Mundo!", ["green", "white", "red"]);
let uganda = new Country("Uganda", "Swahili", "Salamu, Dunia!", ["black", "yellow", "red"]);
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"]);

function DisplayColors(countryName) {
    document.getElementById('Color1').style.backgroundColor = countryName.primaryColors[0]
    document.getElementById('Color2').style.backgroundColor  = countryName.primaryColors[1]
    document.getElementById('Color3').style.backgroundColor = countryName.primaryColors[2]
    document.getElementById('CountryName').innerText = `Country Name: ${countryName.name}`
    document.getElementById('OfficialLanguage').innerText = `Official Language: ${countryName.officialLanguage}`
    document.getElementById('Greeting').innerText = countryName.greeting
    document.getElementById('Selection').innerText = ""
    document.getElementById('Intro').innerText = ""
}

function SwitchCountry(countryName) {
    let input = countryName;
    let country;

    if (input === "United States") {
        country = us;
        DisplayColors(country)
        document.getElementById('Flag').setAttribute('src', 'https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg')
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(country)
        document.getElementById('Flag').setAttribute('src', 'https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg')

    }
    else if (input === "Uganda") {
        country = uganda;
        DisplayColors(country)
        document.getElementById('Flag').setAttribute('src', 'https://cdn.britannica.com/22/22-050-E5AD8F85/Flag-Uganda.jpg')
    }
    else if (input === "France") {
        country = france;
        DisplayColors(country)
        document.getElementById('Flag').setAttribute('src', 'https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg')
    }
    else {
        country = germany;
        DisplayColors(country)
        document.getElementById('Flag').setAttribute('src', 'https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg')
    }
}
