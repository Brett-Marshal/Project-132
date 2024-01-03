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
    image(laptop, 0, 0, 500, 500);
    
}

function preload()
{
    laptop = loadImage("laptop.webp");
}