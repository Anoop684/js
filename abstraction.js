// Abstraction example
// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function () {
//         return (`First name is: ${firstname} Last  name is: ${lastname}`);
//     }

//     this.getDetails_access = function () {
//         return (`First name is: ${firstname}, Last  name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());


function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary =baseSalary;

    let monthlyBonus =1000;

    let calculateSalary =()=>{
        let finalsalary = baseSalary + monthlyBonus;
        console.log('final salary ' + finalsalary);
    }
    this.getEmpDetails = ()=>{
        console.log(`name ${this.name} age ${this.age}`);
        calculateSalary();
    }
}
let emp = new Employee('anu',25,2000);
emp.getEmpDetails();