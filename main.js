Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = <img id="captured_image" src="'+data_uri+'"/>
    });

    
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BBXu1QEQw/',modelLoaded)


function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uQDBT_x8K/model.json', modelLoaded);

 function modelLoaded(){
     console.log('model loaded');
 }

 function identify(){
    final_img =  document.getElementById("captured_image");
    classifier.classify(final_img,gotResult);
 }

 function gotResult(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("Object_name").innerHTML = results[0].label;
         document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
 }