class Welcome {
    show() {
        console.log("Welcome class method.");
    }
}
class Bye extends Welcome {
    show() {
        console.log("Bye class method.");
    }
}
var welcome = new Welcome();
welcome.show();

var bye = new Bye();
bye.show();