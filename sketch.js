var circles = [];
function setup()
{
    createCanvas(800,600);
    for(var i = 0; i < 1000; i++)
    {
        circles[i] = floor(random(0,100));
    }
}

function draw()
{
    for(var i = 0; i < circles.length; i++)
    {
        if (circles[i] < 10)
        {
            continue;
        }
        if(circles[i] > 50)
        {
            fill(200,0,0,100);
        }
        else
        {
            fill(0,0,200,100);
        }
        ellipse(random(0,width), random(0,height),circles[i]);
    }
    noLoop();
}


