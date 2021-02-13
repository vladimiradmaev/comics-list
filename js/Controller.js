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
        this._url = window.location.pathname;
        if (this._url === '/') {
            localStorage.clear();
            this._page = new List();
        } else {
            let itemId = localStorage.getItem('id');            
            this._page = new Detail(itemId);
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