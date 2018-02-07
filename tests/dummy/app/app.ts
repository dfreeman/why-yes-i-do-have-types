import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { sayHello } from '@dfreeman/why-yes-i-do-have-types';
import join from '@dfreeman/why-yes-i-do-have-types/utils/join';

console.log(sayHello(join(['W', 'o', 'r', 'l', 'd'])));

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
