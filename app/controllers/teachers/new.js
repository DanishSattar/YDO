import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  addTask:function(){
  var showtitle=this.get('title');
  alert(showtitle);
    }
     }
      });
