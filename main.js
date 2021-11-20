function setup() {
    canvas = createCanvas(1000, 400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function clearCanvas() {
    background("white");
    console.log("Debug: The Canvas Has Been Reset Into New Canvas.");
}
function view() {
    console.log("Debug: You Are Viewing The Cheatcodes.");
    console.log("Debug: You can see the images");
    console.log("Debug: These are useful and are hand drawn images.");
    console.log("Debug: This will be useful.");
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label : '+results[0].label;
    document.getElementById('confidence').innerHTML='Confidence : '+Math.round(results[0].confidence*100)+' %';
    utterThis = newSpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}