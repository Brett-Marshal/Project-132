status = "";

function back()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center()

    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function draw()
{
    image(bed, 0, 0, 500, 500);
    
}

function preload()
{
    bed = loadImage("bedroom.jpg");
}

function modelLoaded()
{
    console.log("Model is Initialized!");
    status = true;
    cocossd.detect(img, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}