import appLayout from './layout/app-layout.tag'

import router from './router.js'

// Main state
router
    .add({
        name: 'app',
        path: '/app',
        template: 'app-layout'
    })
    .defaultState('app.welcome');

// Routes
import welcome from './welcome/welcome.js'
import test from './test/test.js'



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    router.start();
}, false);


