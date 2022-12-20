var svar1 = 0;
var svar2 = 0;
var svar3 = 0;
var svar4 = 0;

var antallBesvarelser = 0; 

function livesvar(){
    var selecteduenig = false;
    var selectedenig = false;
    
    if(document.getElementById("uenig1").checked){
        selecteduenig = true; 
        answer = document.getElementById("uenig1").value;
        document.getElementById("Svar1").innerHTML = answer;
    }

    if(document.getElementById("enig1").checked){
        selectedenig = true;
        answer = document.getElementById("enig1").value;
        document.getElementById("Svar1").innerHTML = answer;
    }

    if(document.getElementById("uenig2").checked){
        selecteduenig = true; 
        answer = document.getElementById("uenig2").value;
        document.getElementById("Svar2").innerHTML = answer;
    }

    if(document.getElementById("enig2").checked){
        selectedenig = true;
        answer = document.getElementById("enig2").value;
        document.getElementById("Svar2").innerHTML = answer;
    }

    if(document.getElementById("uenig3").checked){
        selecteduenig = true; 
        answer = document.getElementById("uenig3").value;
        document.getElementById("Svar3").innerHTML = answer;
    }

    if(document.getElementById("enig3").checked){
        selectedenig = true;
        answer = document.getElementById("enig3").value;
        document.getElementById("Svar3").innerHTML = answer;
    }

    if(document.getElementById("uenig4").checked){
        selecteduenig = true; 
        answer = document.getElementById("uenig4").value;
        document.getElementById("Svar4").innerHTML = answer;
    }

    if(document.getElementById("enig4").checked){
        selectedenig = true;
        answer = document.getElementById("enig4").value;
        document.getElementById("Svar4").innerHTML = answer;
    }
}

function EndeligResultat(){
    antallBesvarelser++;
    console.log("Antall besvarelser:" + antallBesvarelser);

    if(document.getElementById("enig1").checked){
        svar1++;
    }
    if(document.getElementById("enig2").checked){
        svar2++;
    }
    if(document.getElementById("enig3").checked){
        svar3++;
    }
    if(document.getElementById("enig4").checked){
        svar4++;
    }
}

function Result(){
var xValues = ["Himmelen er grønn", "Jorden er flat", "Venus er firkantet", "Saturn er rund"];
var yValues = [(svar1/antallBesvarelser)*100, (svar2/antallBesvarelser)*100, (svar3/antallBesvarelser)*100, (svar4/antallBesvarelser)*100];
var barColors = ["red", "yellow","blue","orange","brown"];

new Chart("myChart", {
    type: "bar",
    data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
    options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Resultat i form av søylediagram"
    },
    scales: {
        yAxes: [{
            ticks:{
                beginAtZero: true,
                max: 100
            }
    }]
}}
});
}


function refresh(){
    window.location.reload("Refresh");
}




