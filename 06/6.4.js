class Person{
    constructor(firstname,lastname){
        this.lastname = lastname;
        this.firstname= firstname;
    }
    get Name(){
        return  console.log(`${this.firstname} ${this.lastname}`)
    }
    set Name(Fullname){
        let array = Fullname.split(" ");
        this.firstname = array[0];
        this.lastname = array[1];
    }
}

MyPerson = new Person("Marlene","Bouvard");
MyPerson.Name
MyPerson.Name="Llyllyra Nydaleniel";
MyPerson.Name