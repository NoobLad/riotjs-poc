import router from '../router.js';
import welcomePage from './test-page.tag';

router.add({
    name: 'app.test',
    path: '/test',
    template: 'test-page'
});