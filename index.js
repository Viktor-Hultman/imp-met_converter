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

metToImpBtn.addEventListener("click", function() {
    if(metricNumValue < 1) {
        console.log("error");
    } else if(metricDistValue == "Centimeter" && toImperialDistValue == "Inch"){
        result = metricNumValue / 2.54
        console.log(result);
    }
})

impToMetBtn.addEventListener("click", function() {
    if(imperialNumValue < 1) {
        console.log("error");
    } else if(imperialDistValue == "Inch" && toMetricDistValue == "Centimeter") {
        result = imperialNumValue * 2.54
        console.log(result);
    }
})