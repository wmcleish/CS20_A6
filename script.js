/*
 *   Desc: computes the sum of an array
 * Params: array arr
 * Return: int sum
 */
function sum(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

/*
 *   Desc: checks if an integer y is a factor of x
 * Params: int x, int y
 * Return: bool
 */
function is_factor (x, y) {
    return x % y == 0;
}

/*
 *   Desc: returns an array of all the factors of the integer x
 * Params: int x
 * Return: array factors
 */
function all_factors (x) {
    var factors = [];
    for (var i = 0; i < x; i++) {
        if (is_factor(x, i)){
            factors.push(i);
        }
    }
    return factors;
}

/*
 *   Desc: Checks if two numbers are Amicable (the sum of the factors of each number equals the other number)
 * Params: int x, int y
 * Return: bool
 */
function isAmicable (x, y) {
    var arrx = all_factors(x);
    var arry = all_factors(y);
    return sum(arrx) == y && sum(arry) == x
}

/*
 *   Desc: Runs javascript code to determine amicable numbers and display the proper output
 * Params: none
 * Return: none
 */
function display_script() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    if (x < 0){
        x *= -1;
    }
    if (y < 0){
        y *= -1;
    }
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