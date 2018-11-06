import {Meteor} from 'meteor/meteor';
import {Aliens} from './../imports/api/aliens';

Meteor.startup(function () {
  Aliens.insert({
      firstName: "John",
      lastName: "Coffman",
      email: "coff@gmail.com",
      longAgo: "6 Months",
      duration: "3 months",
      experience: "tubes",
      color: "green"
  });
  console.log(Aliens.find().fetch());
});
