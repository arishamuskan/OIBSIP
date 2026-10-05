function convertTemperature() {

    // Get the input value
    let temperature =
        parseFloat(document.getElementById("temperature").value);

    // Get selected units
    let fromUnit =
        document.getElementById("fromUnit").value;

    let toUnit =
        document.getElementById("toUnit").value;

    // Get result box
    let result =
        document.getElementById("result");


    // Check if input is empty
    if (isNaN(temperature)) {

        result.innerHTML =
            "⚠️ Please enter a temperature.";

        return;
    }


    // First convert everything to Celsius
    let celsius;


    if (fromUnit === "celsius") {

        celsius = temperature;

    }

    else if (fromUnit === "fahrenheit") {

        celsius =
            (temperature - 32) * 5 / 9;

    }

    else if (fromUnit === "kelvin") {

        celsius =
            temperature - 273.15;

    }


    // Convert Celsius to the selected unit
    let convertedTemperature;


    if (toUnit === "celsius") {

        convertedTemperature = celsius;

    }

    else if (toUnit === "fahrenheit") {

        convertedTemperature =
            (celsius * 9 / 5) + 32;

    }

    else if (toUnit === "kelvin") {

        convertedTemperature =
            celsius + 273.15;

    }


    // Get unit symbol
    let unitSymbol;


    if (toUnit === "celsius") {

        unitSymbol = "°C";

    }

    else if (toUnit === "fahrenheit") {

        unitSymbol = "°F";

    }

    else {

        unitSymbol = "K";

    }


    // Display result
    result.innerHTML =
        `${convertedTemperature.toFixed(2)} ${unitSymbol}`;

}



// Clear everything
function clearConverter() {

    document.getElementById("temperature").value = "";

    document.getElementById("fromUnit").value = "celsius";

    document.getElementById("toUnit").value = "fahrenheit";

    document.getElementById("result").innerHTML =
        "Your result will appear here";
}