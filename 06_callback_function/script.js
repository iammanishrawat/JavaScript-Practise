
function calculation(add) {
    let x = 10;
    let y = 20;
    add(x, y)
}

function add(x, y){
    console.log(x + y);
}



calculation(add)