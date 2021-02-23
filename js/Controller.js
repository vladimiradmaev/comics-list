import { Detail } from './components/Detail.js';
import {List} from './components/List.js';
import {Application} from './Application.js'

/**
 * Контроллер-обработчик запрашиваемой страницы. Подключает класс списка элементов или класс детальной страницы элемента
 */
export class Controller {

    constructor(store) {
        this.store = store;
        
    }

    /**
     * Проверка роута и подключение необходимых классов
     */
    init() {
        this.render();
        this.initHandlers();
    }

    render() {
        this._targetContainer = document.querySelector('.main');
        this.clearHtml();
        
        let itemId = window.location.pathname.match(/(?!\/list\/)(\d+)/gm);
        if (itemId) {
            localStorage.setItem('id', itemId);
            this._page = new Detail(this._targetContainer);
        } else {
            localStorage.removeItem('id');
            this._page = new List(this._targetContainer);
        }
        this._page.init();
    }

    getPage() {
        return this._page;
    }

    setPage() {
        this.initPage();
    }

    clearHtml() {
        this._targetContainer.innerHTML = '';
    }

    /**
     * Регистрация обработчиков событий
     */
    initHandlers() {
        let _this = this;

        window.addEventListener('popstate', (event) => {
            _this.render();
        });
    }
}