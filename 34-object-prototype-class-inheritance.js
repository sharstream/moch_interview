// function Person(name, last, age, interests) {
//   this.name = name;
//   this.last = last;
//   this.age = age;
//   this.interests = interests;
// }

// var person1 = new Person('David', 'Perez', 32, ['biking', 'kayak']);
// var person2 = Object.create(person1);
// console.log(`person prototype: ${person2.__proto__}`);
// console.log(`object prototype: ${Object.prototype}`);

class Human {
  constructor(gender) {
    this.gender = gender;
  }

  printGender() {
    console.log(`gender: ${this.gender}`);
  }
}

class Person extends Human {
  constructor(name, last, age, interests) {
    super();
    this.name = name;
    this.last = last;
    this.age = age;
    this.interests = interests;
    this.gender = "female";
  }

  printName() {
    console.log(`name: ${this.name}`);
  }
}

const person = new Person("Linda", "Diaz", 30, ["reading", "listen music"]);
console.log(person.constructor);
console.log(`person prototype: ${person.__proto__}`);
console.log(`object prototype: ${Object.prototype}`);
// Working with Prototype Inheratance Object based-language in Javascript
var idCounter = 1;

function Employee(name, dept) {
  // this.name = name || ''; // note that this.name (a local variable) does not appear here
  this.dept = dept || "general";
  if (name) this.id = idCounter++;
}
Employee.prototype.name = ""; // A single copy
/*if you want to have default values for object properties and you want to be able to change the default values at run time, you should set the properties in the constructor's prototype, not in the constructor function itself.*/

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee(name, dept, projs) {
  this.base = Employee;
  this.base(name, dept);
  this.projects = projs || [];
}
// WorkerBee.prototype = Object.create(Employee.prototype);
// WorkerBee.prototype.constructor = WorkerBee;
WorkerBee.prototype = new Employee();

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

// Illusion of multiple inheritance
function Hobbyist(hobby) {
  this.hobby = hobby || 'scuba';
}

function Engineer(name, projs, mach, hobby) {
  this.base1 = WorkerBee;
  this.base1(name, 'engineering', projs);
  this.base2 = Hobbyist;
  this.base2(hobby);
  // this.base(name, 'engineering', projs);
  // WorkerBee.call(this, name, "engineering", projs);
  this.machine = mach || "";
}
//lookup in the prototype chain
// Engineer.prototype = Object.create(WorkerBee.prototype)
// Engineer.prototype.constructor = Engineer;
Engineer.prototype = new WorkerBee();

var jim = new Employee();

var sally = new Manager();

var mark = new WorkerBee();
mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];
Employee.prototype.specialty = "none";
mark.bonus = 3000;
mark.specialty = "Tableau";

var fred = new SalesPerson();

// var jane = new Engineer('belau');
var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
Employee.prototype.name = "Unknown";
jane.specialty = "DevOps";

function isInstanceOf(object, constructor) {
  var prototype = constructor.prototype;
  if (typeof object === "object" || typeof object === "function") {
    while (object) {
      if (object === prototype) {
        return true;
      }
      object = Object.getPrototypeOf(object);
    }
  }
  return false;
}
console.log(isInstanceOf(new WorkerBee, Engineer));
console.log(isInstanceOf(new WorkerBee, WorkerBee || Employee));
console.log(instanceOf(jane, Engineer));
console.log(instanceOf(mark, WorkerBee));
console.log(instanceOf(jim, Employee));
console.log(instanceOf(mark, Object));
// OR
function instanceOf(object, constructor) {
  object = object.__proto__;
  while (object != null) {
    if (object == constructor.prototype) return true;
    if (typeof object == "xml") {
      return constructor.prototype == XML.prototype;
    }
    object = object.__proto__;
  }
  return false;
}

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
// doesn't inherit this new property
Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd'];