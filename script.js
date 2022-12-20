var svar = [0, 0, 0, 0, 0]

function livesvar(){
    var selecteduenig = false;
    var selectedenig = false;
    
    for(let i = 1; i < svar.length; i++){
        if(document.getElementById("uenig"+i).checked){
            selecteduenig = true; 
            answer = document.getElementById("uenig"+i).value;
            document.getElementById("Svar"+i).innerHTML = answer;
        }
    
        if(document.getElementById("enig"+i).checked){
            selectedenig = true;
            answer = document.getElementById("enig"+i).value;
            document.getElementById("Svar"+i).innerHTML = answer;
        }
    }
}

function EndeligResultat(){
    svar[0]++
    console.log("Antall besvarelser:" + svar[0]);

    if(document.getElementById("enig1").checked){
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

function Result(){
var xValues = ["Himmelen er grønn", "Jorden er flat", "Venus er firkantet", "Saturn er rund"];
var yValues = [(svar[1]/svar[0])*100, (svar[2]/svar[0])*100, (svar[3]/svar[0])*100, (svar[4]/svar[0])*100];
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



