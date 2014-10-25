Events = new Meteor.Collection('events');


var Schemas = {};

Schemas.Events = new SimpleSchema({
    name: {
        type: String,
        label: "Event Name"
    },
    Details: {
        type: String,
        label: "Event Details",
        optional: true,
            autoform: {
              rows: 5
            }
    },
    author: {
	    type: String,
	    label: "Author"
  },
	notes: {
	    type: String,
	    label: "Eng. Notes",
	    optional: true,
  }

});

Events.attachSchema(Schemas.Events);