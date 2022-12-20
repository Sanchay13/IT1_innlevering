var svar = [0, 0, 0, 0, 0];

function livesvar(){
    var selecteduenig = false;
    var selectedenig = false;
    
    for(let i = 1; i < svar.length; i++){ // loop som kjører 4 ganger (fordi det er fire spørsmål)
        if(document.getElementById("uenig"+i).checked){ // Hvis uenig er checked så skal valuen for dette displayes på skjermen.
            selecteduenig = true; 
            answer = document.getElementById("uenig"+i).value;
            document.getElementById("Svar"+i).innerHTML = answer;
        }
    
        if(document.getElementById("enig"+i).checked){ // Hvis enig er checked så skal valuen for dette displayes på skjermen.
            selectedenig = true;
            answer = document.getElementById("enig"+i).value;
            document.getElementById("Svar"+i).innerHTML = answer;
        }
    }
}

function EndeligResultat(){ // Når svar knappen trykkes skal følgende kode kjøre:
    svar[0]++ // Vi trekker index 0 fra arrayen i svar variablen, dette bruker vi for å registrere antall besvarelser med svar[0]++.
    console.log("Antall besvarelser:" + svar[0]);

    if(document.getElementById("enig1").checked){ // På samme måte så trekker vi restværende index-ene fra arrayen. Vi kjører fire if-statement som sjekker om enig er checked, hvis det er det skal det plusses på med en.
        svar[1]++;
    }
    if(document.getElementById("enig2").checked){
        svar[2]++;
    }
    if(document.getElementById("enig3").checked){
        svar[3]++;
    }
    if(document.getElementById("enig4").checked){
        svar[4]++;
    }
    console.log(svar);
}

function Result(){ // Når vis resultat knappen trykkes på skal følgende kode kjøres: // Vi bruker chart.js som er importert i html. 
var xValues = ["Himmelen er grønn", "Jorden er flat", "Venus er firkantet", "Saturn er rund"]; // Array med verdiene for tekst i søyle diagrammet
var yValues = [(svar[1]/svar[0])*100, (svar[2]/svar[0])*100, (svar[3]/svar[0])*100, (svar[4]/svar[0])*100]; // bruker prosent regning for å få svaret prosentvis.
var barColors = ["red", "yellow","blue","orange","brown"]; // Definerer fargen på bar-ene.

new Chart("myChart", { // Kode som creater chart:
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



