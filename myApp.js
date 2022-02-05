require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

var personSchema = new Schema ({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);


const createAndSavePerson = (done) => {
  let jaylorx = new Person({name: 'Jaylorx', age: 23, favoriteFoods: ['Cake']})

  jaylorx.save((error, data) => {
    if(error) {
      console.log(error);
    }else {
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(error, peopleCreated) {
    if(error) {
      return console.log(error);
    }else {
      done(null, peopleCreated);
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(error, peopleFound) {
    if(error) {
      return console.log(error);
    }else {
      done(null, peopleFound);
    }
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(error, foodThatPersonLike) {
    if(error) {
      return console.log(error);
    }else {
      done(null, foodThatPersonLike);
    }
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(error, individual) {
    if(error) {
      return console.log(error);
    }else {
      done(null, individual);
    }
  });
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
