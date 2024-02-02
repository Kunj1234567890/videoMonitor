video = "";
object = []
status1 = "";
function modelloaded(){
    console.log("Model loaded");
    status1 = true; 
    video.loop();
    video.volume(0);
    video.speed(1);
}
function PauseVideo(){
    video.pause();
}
function StopVideo(){
    video.stop();
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function gotResults(error,results){
if (error) {
console.error(error)


}
console.log(results)
object = results

}

function draw(){
    image(video,0,0,480,380);
    if (status1 != ""){
objectDetector.detect(video , gotResults)
 for(i = 0; i < object.length;i++){
  document.getElementById("statusupdate").innerHTML = "Status : Detected object(s)";
  document.getElementById("numofobjects").innerHTML = "Numbers of objects detected are " + object.length;

  fill("#7FC7D9")
  percent = floor(object[i].confidence * 100)
  text(object[i].label + percent , object[i].x , objects[i].y )
  noFill()
  stroke("#365486")
  rect(object[i].x , object[i].y , object[i].width , object[i].height)
 }
}
}

function ScanVideo(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("statusupdate").innerHTML = "Dectecting objects";
}
