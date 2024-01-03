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
    image(fruits, 0, 0, 500, 500);
    
}

function preload()
{
    fruits = loadImage("fruit_backet.jpeg");
}