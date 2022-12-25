nose_x = 0
nose_y = 0


function preload() {
mustache= loadImage("m.png")
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache,nose_x,nose_y,35,30)
}
function take_snapShot() {
    save("my_pic.png")

}


function modelLoaded(video) {
console.log("model has loaded")

}
function gotPoses(results) {
if(results.length>0)
console.log(results)
console.log(results[0].pose.nose.x)
nose_x=results[0].pose.nose.x
nose_y=results[0].pose.nose.y
}