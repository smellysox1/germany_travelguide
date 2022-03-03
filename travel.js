
nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybDnOblfIPLD8CKj1sdRYT-VvOKKS6ITnVKHZuAhDE22UFxJK4CoyCylzut65s-VXTls&usqp=CAU");
}
function setup(){
canvas = createCanvas(400,300);
canvas.center();
video = createCapture(VIDEO);
video.size(400,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
image(video, 0,0, 400,300);
fill(255,0,0);
stroke(254,0,0);
//circle(nosex,nosey,20);
image(clown_nose,nosex,nosey,100,100);
}
function take_snapshot(){
    save("funny_moustache.png");
}
function modelLoaded(){
    console.log("poseNet initialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-30;
        nosey=results[0].pose.nose.y-13;
        console.log("nose x: "+nosex);
        console.log("nose y: "+nosey);
        
    }
}
