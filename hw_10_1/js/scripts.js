function CreateUser(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function() {
        return {name, age, address};
    }

    this.showUserDetails = function() {
        console.log(`${name} ${age} ${address}`)
    }
}

const user = new CreateUser('Dima', 31, 'Харків, Україна');

user.showUserDetails();

console.log(user.getUserDetails());
