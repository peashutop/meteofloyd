Template.rsvp.events({
  'submit form': function(event) {
    event.preventDefault();

    var rsvp = {
      name: $(event.target).find('[name=name]').val(),
      email: $(event.target).find('[name=email]').val(),
      address: $(event.target).find('[name=address]').val(),
      citystatezip: $(event.target).find('[name=citystatezip]').val(),
      number_in_party: $(event.target).find('[name=number_in_party]').val(),
      payment_method: $(event.target).find('[name=payment_method]').val(),
      dreams: $(event.target).find('[name=dreams]').val(),
      created_at: new Date
    };

    rsvp._id = Rsvps.insert(rsvp);
    Meteor.Router.to('/thanks');
  }
});
