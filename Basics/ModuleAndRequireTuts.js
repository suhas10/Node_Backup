class Test{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    getName(){
        return this.firstName +" "+ this.lastName; 
    }
}
module.exports = Test;