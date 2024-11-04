Square(2,cube);
function Square(l,callback){
    var Square = l*l;
    console.log(`the Square of number ${l} is ${Square}`);
    callback(Square,l);

};
function cube(a,b){
    var cube=a*b;
    console.log(`the cube is ${cube}`);
} 

findarea(2,findcircumference);
function findarea (r,callback){
    var area=Math.PI*r*r;
    console.log(`the area is ${area}`);
    callback (r);
}

function findcircumference(r){
    var circumference=2*Math.PI*r;
    console.log(`the circumference is ${circumference}`);
}

