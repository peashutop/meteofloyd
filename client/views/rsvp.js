Template.rsvp.events({
  'submit form': function(event) {
    event.preventDefault();

    var rsvp = {
      url: $(event.target).find('[name=name]').val(),
      title: $(event.target).find('[name=address]').val(),
      message: $(event.target).find('[dreams=dreams]').val()
    };

    rsvp._id = Rsvps.insert(rsvp);
    Meteor.Router.to('/thanks');
  }
});
