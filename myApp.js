require('dotenv').config();

let uri = 'mongodb+srv://frankrin:' + process.env.MONGO_PASSWORD + '@dbpractice.qulcf.mongodb.net/db1?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

var personSchema = new Schema ({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  // let jalor = new Person({name: 'jaylor Pat', age: 23, favoriteFoods: ['Cake', 'Noodle']});
  // jalor.save((error, data) => {
  //   if(error) {
  //     return console.log(error);
  //   }else {
  //     done(null, data);
  //   }
  // });
  done(null /*, data*/);
};

// let arrayOfPeople = [
//   {name: 'Mickie', age: 20, favoriteFoods: ['Pizza', 'Pancake']},
//   {name: 'Tom', age: 22, favoriteFoods: ['Salad', 'Yogrut']},
//   {name: 'Mia', age: 21, favoriteFoods: ['Staek', 'Pop corn']}
// ]

const createManyPeople = (arrayOfPeople, done) => {
  // Person.create(arrayOfPeople, (error, createPoeple) => {
  //   if(error) {
  //     return console.log(error);
  //   }else {
  //     done(null, createPoeple);
  //   }
  // });
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (error, arrayResults) => {
    if(error) {
          return console.log(error);
        }else {
          done(null, arrayResults);
        }
  });
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
