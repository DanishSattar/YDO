import Route from '@ember/routing/route';

export default Route.extend({
  model() {
 return this.store.createRecord('registartionmodel');
   },

   actions: {
     createThing() {
       var a=this.get(model.name);
       alert(a);
     }
   }
 });
