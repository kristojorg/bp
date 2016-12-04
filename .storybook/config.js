import { configure } from '@kadira/storybook';

const req = require.context('../src/components', true, /.stories.js$/);
const req2 = require.context('../src/modules', true, /.stories.js$/);


function loadStories() {
  require('../src/stories');
  req.keys().forEach((filename) => req(filename));
  req2.keys().forEach((filename) => req(filename));

}

configure(loadStories, module);
