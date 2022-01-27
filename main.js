
function checkBlood(){
document.getElementById("details").innerHTML = "   <input type = "text" id = "details" placeholder = "mmmmm yes "+document.getElementById("details").value+"">"
}
Webcam.set({
    width : 350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
Webcam.snap(function(data_URI){
document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_URI+"'>";
});}
