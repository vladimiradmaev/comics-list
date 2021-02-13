import { Detail } from './Detail.js';
import {List} from './List.js';

/**
 * Контроллер-обработчик запрашиваемой страницы. Подключает класс списка элементов или класс детальной страницы элемента
 */
export class Controller {
    
    constructor() {
        this.initHandlers();
        this.init();
    }

    /**
     * Проверка роута и подключение необходимых классов
     */
    init() {
        this.clear();
        let itemId = window.location.pathname.match(/(?!\/list\/)(\d+)/gm);

        if (itemId) {
            localStorage.setItem('id', itemId);
            localStorage.setItem('page', 'detail');
            this._page = new Detail(itemId);
        } else {
            localStorage.removeItem('id');
            localStorage.setItem('page', 'list');
            this._page = new List();
        }
    }

    /**
     * Регистрация обработчиков событий
     */
    initHandlers() {
        let _this = this;

        window.addEventListener('popstate', (event) => {
            _this.init();
        });
    }

    /**
     * Сброс html-содержимого страницы
     */
    clear() {
        let mainWrapper = document.querySelector('.main');
        mainWrapper.innerHTML = '';
    }
}