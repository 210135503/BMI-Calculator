function calculate() {
    var bmi;
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "#ffc44d";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        result.style.color = "#0be881";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        result.style.color = "#ff884d";
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        category = "Obese";
        result.style.color = "#ff0000";
    }
    else {
        category = "Extremely Obese";
        result.style.color = "#8b0000";
    }
    document.getElementById("category").textContent = category;
}