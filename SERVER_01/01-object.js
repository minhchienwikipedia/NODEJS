var person = {
  firstName: 'Duong',
  lastName: 'Chien',
  welcome: function() {
    console.log('Chao ban ' + this.firstName + " " + this.lastName);
  }
};

person.welcome();

console.log(person['lastName']);
