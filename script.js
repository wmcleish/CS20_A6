
function sum(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function is_factor (x, y) {
    return x % y == 0;
}

function all_factors (x) {
    var factors = [];
    for (var i = 0; i < x; i++) {
        if (is_factor(x, i)){
            factors.push(i);
        }
    }
    return factors;
}

function isAmicable (x, y) {
    if (x < 0){
        x *= -1;
    }else if (y < 0){
        y *= -1;
    }
    var arrx = all_factors(x);
    var arry = all_factors(y);
    return sum(arrx) == y && sum(arry) == x
}

function display_script() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    console.log(x + y);
    if (x == y){
        document.getElementById("result").innerHTML = "The numbers: " + x + " and " + y + " are the same number!</div>";
    }else if (isAmicable(x, y)) {
        arrx = all_factors(x);
        arry = all_factors(y);
        document.getElementById("result").innerHTML = "The numbers: " + x + " and " + y + " are amicable <br>The factors of " + x + " are " + arrx + "<br>The factors of " + y + " are " + arry + "<br>";
    }else{
        document.getElementById("result").innerHTML = "The numbers: " + x + " and " + y + " are not amicable";
    }
}