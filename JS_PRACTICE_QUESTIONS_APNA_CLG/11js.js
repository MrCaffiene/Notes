// QUESTION - you are creating a website for your college. Create a class User  with 2 properties, name and email. it also has a method called viewData() that allows user to view website data.
let data = "top secret:)";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("showing website data to User =>", data)
    }
}

let user1 = new User("Ankit", "meraemail@mera.com");
user1.viewData();

// QUESTION - Create a new class called Admin which inherits from User. add a new method called editData to Admin that allows it to edit data. 

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(newInfo){
        data = newInfo;
        console.log(`now the data has been updated to ${data}`);
    }
}

let admin1 = new Admin("admin","admin@admin.com");
admin1.editData("new Data from admin1.");