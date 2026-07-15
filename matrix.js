const canvas = document.createElement("canvas");

canvas.id = "matrix";

document.body.prepend(canvas);


const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


let letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";


letters = letters.split("");


let fontSize = 16;

let columns = canvas.width / fontSize;


let drops = [];


for(let i=0;i<columns;i++){

    drops[i]=1;

}



function draw(){

ctx.fillStyle =
"rgba(2,6,23,0.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="#22c55e";

ctx.font =
fontSize+"px Arial";



for(let i=0;i<drops.length;i++){

let text =
letters[
Math.floor(
Math.random()*letters.length
)
];


ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);



if(
drops[i]*fontSize >
canvas.height &&
Math.random()>0.975
){

drops[i]=0;

}


drops[i]++;

}


}



setInterval(draw,50);



window.onresize=function(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

};
