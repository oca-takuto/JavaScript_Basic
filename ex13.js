class MyClass {
	constructor(size, age){
	this.size = size;
		this.age = age;
	}
	print_size(){
		console.log(this.size);
	}
	add_age(x){
		this.age += x;
	}
}


test = {}
test.__proto__

test.__proto__ = MyClass.prototype
test.__proto__

test.print_size()

test.size = 120
test.print_size()