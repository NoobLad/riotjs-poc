import { Router5, RouteNode } from 'router5';

var states = new Map();

let level = (state) => {
    return state.name.split('.').length;
};
var defaultState = {};

function render(state, element) {
    let tag = riot.mount(element, state.template)[0];
    console.log(element, tag);
    return tag.root;
}

function onStateChange(to, from) {
    var parts = to.name.split('.');
    if (parts.length <= 0) return;
    var currentState = '';
    var element = document.querySelector('body');
    for(var i = 0; i < parts.length; i++) {
        currentState = parts.slice(0, i+1).join('.');
        console.log(currentState);
        var state = states.get(currentState);
        element = render(state, element).querySelector('ui-view');
    }
}

let routerProxy = {
    add(state) {
        states.set(state.name, state);
        return this;
    },
    defaultState(stateName, stateParams) {
        defaultState.name = stateName;
        defaultState.params = stateParams;
        return this;
    },
    start(initialState, cb) {
        let formattedStates = [...states.values()]
            .sort((a, b) => {
                return level(a) - level(b)
            });


        let router = new Router5(formattedStates, {
            defaultRoute: defaultState.name,
            defaultParams: defaultState.params,
            useHash: true
        });

        router.addListener(onStateChange);

        router.start(initialState, cb);
        return this;
    }
};

module.exports = routerProxy;