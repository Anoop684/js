// var i = 1;

/* while (i <= 10) {
     console.log(i);
     i++;
 }
 */

/*do {
    console.log(i);
    i++;

} while (i <= 10);
*/

array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/*
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);

}
*/
/*
for (i in array) {
    console.log(array[i]);
}
*/

array.forEach(function (value, index) {
    console.log(index +" "+ value);
});