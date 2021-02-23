import {Controller} from './Controller.js';

export class Application {

    constructor(root, store) {
        this.store = store;
        // this.binded = [...root.querySelectorAll('[data-bind]')]
        //     .map(el => ({
        //         el,
        //         prop: el['data-bind'].split(':')[0],
        //         variable: el['data-bind'].split(':')[1]
        //     }));
        //     this.binded.forEach(entry => {
        //         entry.el.addEventListener('change', () => {
        //             this.setVariable(entry.variable, entry.el[entry.prop]);
        //         });
        //     });
    }

    getVariable(name) {
        return this.store[name];
    }

    setVariable(name, value) {
        this.store[name] = value;
        // this.binded.forEach((entry) => {
        //     if (entry.variable === name) {
        //         entry.el[entry.prop] = value;
        //     }
        // });
    }

    render() {
        const controller = new Controller(this.store);
        controller.init();
    }
}