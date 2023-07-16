//complete this code
class Person {
	name;
	age;
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(){
		return this.age;
	}
}
const p1=new Person('bhanu',21);

class Student extends Person {
	super(name,age);
	function study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	super(name,age);
	function teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
