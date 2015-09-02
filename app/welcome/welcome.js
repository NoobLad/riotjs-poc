import router from '../router.js';
import welcomePage from './welcome-page.tag';

router.add({
    name: 'app.welcome',
    path: '/welcome',
    template: 'welcome-page'
});