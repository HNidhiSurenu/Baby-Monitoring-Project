object=[]
function setup(){
    canvas=createCanvas(380,380)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(380, 380)
    video.hide()
    
}
function preload(){
    song=loadSound(alarm.mp3)
}
function start(){
    objectdetector=ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML="status: detecting objects"
    function playsong(){
        song.play()
        song.setVolume(1)
        song.rate(1)
    }
}
img=""
status=""
function modelloaded(){
    console.log("modelloaded")
    status=true

}


function gotresult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
    object=results
}

function draw(){for(i=0;i<object.length;i++){
    if(object="person"){
document.getElementById("person status").innerHTML="Baby Detected"
alarm.mp3.Stop()
    }
    else if(object!="person"){
        document.getElementById("person status").innerHTML="Baby Not Detected"
        alarm.mp3.play()
    }
    else{
        document.getElementById("person status").innerHTML="Baby Not Detected"
        alarm.mp3.play()
    }

    }
}

