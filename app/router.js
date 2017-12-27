import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('teachers', function() {
    this.route('new');
  });
  this.route('regsitration');
  this.route('books');
  this.route('form-submission');
});

export default Router;
