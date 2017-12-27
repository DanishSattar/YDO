import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createUser: function() {
      var email = this.get('userEmail');
      var password = this.get('userPassword');
      var user = this.store.createRecord('form-data', {
        email: email,
        password: password
      });

        user.save();
     }
   }
});
