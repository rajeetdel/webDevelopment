var createpet = function(name) {
    var gender;

    return {
        setname: function(newname) {
        name = newname;
        },

        getname: function() {
            return name;
        },

        setgender: function(newgender) {
            gender = newgender;
        },

        getgender: function() {
            return gender;
        }
    }
}

var pet = createpet("Vivie");

console.log(pet.getname());

pet.setname('Oliver');

pet.setgender('male');
console.log(pet.getgender());                   // male
console.log(pet.getname());                  // Oliver