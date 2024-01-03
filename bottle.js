function back()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center()
}

function draw()
{
    image(bottle, 0, 0, 500, 500);
    
}

function preload()
{
    bottle = loadImage("water_bottle.jpg");
}