class Person{
    constructor(firstname,lastname){
        this.lastname = lastname;
        this.firstname= firstname;
    }
    get getName(){
        return  console.log(`${this.firstname} ${this.lastname}`)
    }
    set setName(Fullname){
        let array = Fullname.split(" ");
        this.firstname = array[0];
        this.lastname = array[1];
    }
}

MyPerson = new Person("Marlene","Bouvard");
MyPerson.getName
MyPerson.setName="Llyllyra Nydaleniel";
MyPerson.getName