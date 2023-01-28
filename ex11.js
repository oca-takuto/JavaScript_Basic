class Info {
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   
   print_name(){
      console.log(this.name);
   }
}



test = new Info("taro", 12);
test.print_name();


obj_info = {name:"hanako", age:22, print_age(){ console.log(this.age)} }
obj_info.print_age();