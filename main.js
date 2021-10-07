
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('MobileNet', Model_Loaded);

function Model_Loaded() {
    console.log("Model Loaded")
}

img = document.getElementById("TI");
classifier.classify(img, GotResult);

img = document.getElementById("TI2");
classifier.classify(img, GotResult2);

img = document.getElementById("TI3");
classifier.classify(img, GotResult3);

img = document.getElementById("TI4");
classifier.classify(img, GotResult4);

img = document.getElementById("TI5");
classifier.classify(img, GotResult5);

img = document.getElementById("TI6");
classifier.classify(img, GotResult6);

function GotResult(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet").innerHTML = results[0].label;
    }

}


function GotResult2(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet2").innerHTML = results[0].label;
    }

}


function GotResult3(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet3").innerHTML = results[0].label;
    }

}


function GotResult4(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet4").innerHTML = results[0].label;
    }

}


function GotResult5(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet5").innerHTML = results[0].label;
    }

}


function GotResult6(errors, results) {
    if (errors) {
        console.log(errors)
    } else {
        console.log(results)
        document.getElementById("mobileNet6").innerHTML = results[0].label;
    }

}