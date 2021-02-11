import { Detail } from './Detail.js';
import {List} from './List.js';

export class Controller {
    constructor() {
        this._url = window.location.pathname;
        this.initHandlers();
        this.init();
    }

    init() {
        this.clear();
        if (this._url === '/') {
            this._page = new List();
        } else {
            
            this._page = new Detail(3);
        }
    }

    initHandlers() {
        let _this = this;

        window.addEventListener('popstate', (event) => {
            _this.init();
        });
    }

    clear() {
        let mainWrapper = document.querySelector('.main');
        mainWrapper.innerHTML = '';
    }
}