Webcam.set({

height:350,
width:450,
img_format:'png',
img_quality:90
});

camera = document.getElementById('camera');
Webcam.attach("#camera");

function picture(){
Webcam.snap(function(data_uri){
    document.getElementById('pictaken') = "<div id='capturedImg' src='"+data_uri+"'/>"
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bndpTInTr/model.json', modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}

function find(){
img = document.getElementById('capturedImg');
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.log('error');
}else{
    document.getElementById('object').innerHTML = results[0].label;
    document.getElementById('accuracy').innerHTML = results[0].confidence.toFixed(3);
}
}