// let metToImpDistForm = document.getElementById("metric-to-imperial-dist")
let metricDistValue = document.getElementById("metric-dist").value;
let metricNumValue = document.getElementById("metric-number").value;
let toImperialDistValue = document.getElementById("to-imperial-dist").value;
let metToImpBtn = document.getElementById("met-to-imp-btn")


let imperialDistValue = document.getElementById("imperial-dist").value;
let imperialNumValue = document.getElementById("imperial-number").value;
let toMetricDistValue = document.getElementById("to-metric-dist").value;
let impToMetBtn = document.getElementById("imp-to-met-btn")

let result

//Metric distance functions
function getMetricDistVal() {
    metricDistValue = document.getElementById("metric-dist").value;
    console.log(metricDistValue);
}

function getMetricNumVal() {
    metricNumValue = document.getElementById("metric-number").value;
    console.log(metricNumValue);
}

function getToImperialDistVal() {
    toImperialDistValue = document.getElementById("to-imperial-dist").value;
    console.log(toImperialDistValue);
}

//Imperial distance functions
function getImperialDistVal() {
    imperialDistValue = document.getElementById("imperial-dist").value;
    console.log("ImpDist: " + imperialDistValue);
}

function getImperialNumVal() {
    imperialNumValue = document.getElementById("imperial-number").value;
    console.log("ImpNum " + imperialNumValue);
}

function getToMetricDistVal() {
    toMetricDistValue = document.getElementById("to-metric-dist").value;
    console.log(toMetricDistValue);
}

//If statements for calculating the "Metric to Imperial convertion"
metToImpBtn.addEventListener("click", function() {
    if(metricNumValue <= 0) {
        console.log("error");
    } else if(metricDistValue == "Centimeter" && toImperialDistValue == "Inch") {
        result = metricNumValue / 2.54
        console.log(result);
    } else if(metricDistValue == "Centimeter" && toImperialDistValue == "Foot") {
        result = metricNumValue * 0.032808
        console.log(result);
    } else if(metricDistValue == "Centimeter" && toImperialDistValue == "Yard") {
        result = metricNumValue * 0.010936
        console.log(result);
    } else if(metricDistValue == "Centimeter" && toImperialDistValue == "Mile") {
        result = metricNumValue * (62137/10000000000)
        console.log(result);
    } else if(metricDistValue == "Meter" && toImperialDistValue == "Inch") {
        result = metricNumValue * 39.3700787402
        console.log(result);
    } else if(metricDistValue == "Meter" && toImperialDistValue == "Foot") {
        result = metricNumValue * 3.280839895
        console.log(result);
    } else if(metricDistValue == "Meter" && toImperialDistValue == "Yard") {
        result = metricNumValue * 1.0936132983
        console.log(result);
    } else if(metricDistValue == "Meter" && toImperialDistValue == "Mile") {
        result = metricNumValue * 0.0006213712
        console.log(result);
    } else if(metricDistValue == "Kilometer" && toImperialDistValue == "Inch") {
        result = metricNumValue * 39370.078740157
        console.log(result);
    } else if(metricDistValue == "Kilometer" && toImperialDistValue == "Foot") {
        result = metricNumValue * 3280.8398950131
        console.log(result);
    } else if(metricDistValue == "Kilometer" && toImperialDistValue == "Yard") {
        result = metricNumValue * 1093.6132983377
        console.log(result);
    } else if(metricDistValue == "Kilometer" && toImperialDistValue == "Mile") {
        result = metricNumValue *  0.6213711922
        console.log(result);
    }
})

//If statements for calculating the "Imperial to Metric convertion"
impToMetBtn.addEventListener("click", function() {
    if(imperialNumValue < 1) {
        console.log("error");
    } else if(imperialDistValue == "Inch" && toMetricDistValue == "Centimeter") {
        result = imperialNumValue * 2.54
        console.log(result);
    } else if(imperialDistValue == "Foot" && toMetricDistValue == "Centimeter") {
        result = imperialNumValue * 30.48
        console.log(result);
    } else if(imperialDistValue == "Yard" && toMetricDistValue == "Centimeter") {
        result = imperialNumValue * 91.44
        console.log(result);
    } else if(imperialDistValue == "Mile" && toMetricDistValue == "Centimeter") {
        result = imperialNumValue * 160934.4
        console.log(result);
    } else if(imperialDistValue == "Inch" && toMetricDistValue == "Meter") {
        result = imperialNumValue * 0.0254
        console.log(result);
    } else if(imperialDistValue == "Foot" && toMetricDistValue == "Meter") {
        result = imperialNumValue * 0.3048
        console.log(result);
    } else if(imperialDistValue == "Yard" && toMetricDistValue == "Meter") {
        result = imperialNumValue * 0.9144
        console.log(result);
    } else if(imperialDistValue == "Mile" && toMetricDistValue == "Meter") {
        result = imperialNumValue * 1609.344
        console.log(result);
    } else if(imperialDistValue == "Inch" && toMetricDistValue == "Kilometer") {
        result = imperialNumValue * 0.0000254
        console.log(result);
    } else if(imperialDistValue == "Foot" && toMetricDistValue == "Kilometer") {
        result = imperialNumValue * 0.0003048
        console.log(result);
    } else if(imperialDistValue == "Yard" && toMetricDistValue == "Kilometer") {
        result = imperialNumValue * 0.0009144
        console.log(result);
    } else if(imperialDistValue == "Mile" && toMetricDistValue == "Kilometer") {
        result = imperialNumValue * 1.609344
        console.log(result);
    }
})