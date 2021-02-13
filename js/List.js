/**
 * Класс работы со списком элементов
 */
export class List {

    constructor() {
        this._itemsList = this.getList();
        this._totalPrice = 0;
        this._selectedItems = [];
        this._mainWrapper = document.querySelector('.main');
        this.init();
        this.initHandlers();
    }

    /**
     * Получения списка элементов (имитация запроса к апи)
     */
    getList() {
        return [
            {
                id: 1,
                name: 'Сингл Светлое новое вчера. Выпуск 0',
                price: '250',
                description: 'Бэтмен. Светлое новое вчера – коллекционный сингл от издательства «Азбука», который является нулевым выпуском рана Скотта Снайдера в «The New 52».'
            },
            {
                id: 2,
                name: 'Книга 1. Суд сов. Выпуски 1–7',
                price: '680',
                description: `Двор Сов… Бэтмен слышал о нем. Все слышали, каждый ребенок знает стишок: «Берегись: Двор Совиный неустанно следит…».

                Говорят, Совы – настоящие хозяева Готэма, хоть никто их и не видел. Говорят, они вершат свой суд над неугодными. Говорят, от них не скроешься. Много чего говорят… Темный рыцарь не верит в эти слухи. Что бы там ни говорили, считает он, Готэм – город Бэтмена. Но вскоре ему предстоит понять, как глубоко он заблуждался.
                
                Мрачные легенды не лгут: Готэмом втайне правят могущественные хищники, и гнезда их повсюду… Пять с плюсом! Герой обрел человеческое лицо (и его горькая ирония разит не хуже бэтарангов), врагов в лице клики суперзлодеев, немалую находчивость и множество высокотехнологичных гаджетов.`
            },
            {
                id: 3,
                name: 'Книга 2. Город сов. Выпуски 8–12',
                price: '720',
                description: `Темный Рыцарь выиграл битву с новым смертоносным противником, но, очевидно, не войну. Атака на Бэтмена была всего лишь первым шагом в новых завоеваниях Совиного Двора. У них есть цель и покрупнее – весь Готэм-сити. Сражение за душу города – и душу Бэтмена – свершится здесь. Но на пике смертельного противостояния, не окажется ли самое поразительное откровение в жизни Брюса Уэйна слишком тяжелым бременем для Бэтмена? «Бэтмен: Город Сов» продолжает уже ставшую классической сагу о противостоянии Темного Рыцаря с самой древней и темной силой Готэм-сити. По версии «Нью-Йорк Таймс» сейчас культовый персонаж находится в руках великолепной творческой команды: писателя Скотта Снайдера, художника Грега Капулло и других талантливых участников.`
            },
            {
                id: 4,
                name: 'Книга 3. Смерть семьи. Выпуски 13–17',
                price: '694',
                description: `Целый год Готэм-сити наслаждался относительным покоем…
                …с тех самых пор, как Джокер убрался из города, оставив на память о себе только свое лицо. В буквальном смысле. Целый год Бэтмен и его союзники не слышали о нем и уже стали надеяться, что не услышат никогда.
                Но Джокер вернулся – еще более опасный, еще более непредсказуемый и коварный. Еще более безумный. На этот раз жертвами своих гнусных преступлений Джокер наметил комиссара Гордона, Альфреда, Робина, Найтвинга, Бэтгерл, Красного Колпака и Красного Робина. Всю свою извращренную изобретательность Принц-Клоун преступного мира обрушит на дорогих Бэтмену людей.
                Джокер поставит Темного Рыцаря в ситуацию, когда спасти друзей тот сможет лишь ценой их доверия…`
            },
            {
                id: 5,
                name: 'Сингл Человек из ниоткуда. Выпуски 19–20',
                price: '125',
                description: `отдельная история про встречу Брюса Уэйна и Глиноликого. Комикс издается в двух обложках: основной вариант – с Брюсом Уэйном будет издан тиражом 18 000 экземпляров, дополнительный, коллекционный вариант – с Брюсом и Гордоном – тиражом всего в 2000 экземпляров.`
            },
            {
                id: 6,
                name: 'Книга 4. Нулевой год тайный город. Выпуски 21–24',
                price: '981',
                description: `До наступления эры супергероев, до того, как Человек Летучая Мышь простер свои крылья над Готэмом, защищая невинных и карая злодеев, наследник влиятельной и богатой семьи, владелец могучей промышленной империи, Брюс Уэйн исчезает на несколько лет. Покров тьмы и тайны – это именно то, что было необходимо Брюсу, чтобы обрести себя. Скрывая свое возвращение, свое прошлое и свое лицо, он выходит на улицы Готэма и начинает долгий и трудный путь борца с преступностью.

                Великолепная творческая команда Скотта Снайдера, Грега Капулло, Дэнни Мики и Рафаэля Альбукерке представляет восхитительно свежий взгляд на личность Темного Рыцаря – и его первые столкновения с Загадочником, Красным Колпаком и многими другими в «Бэтмен: Нулевой год. Тайный город».`
            },
            {
                id: 7,
                name: 'Книга 5. Нулевой год темный город. Выпуски 25–27, 29–33',
                price: '695',
                description: `Шесть лет назад город погрузился во мрак. А Брюс Уэйн впервые стал Бэтменом. Но стоило ему расправить крылья, как город накрыла тень еще более мрачная. Воспользовавшись украденными технологиями компании «Уэйн Энтерпрайзес», преступный гений, именующий себя Загадочником, полностью отключил энергосистему Готэма, окутав его обитателей беспросветной мглой и бросив вызов стражам порядка.
                Но Загадочник — не единственный враг Готэма. В недрах жуткого лабиринта притаился воистину кошмарный монстр — смертоносный доктор, чьи леденящие душу эксперименты оставляют по всему городу изуродованные тела. И злодей смог заставить полицейских Готэма поверить в то, что это дело рук Бэтмена. Оказавшись вне закона, наш юный Темный Рыцарь пытается выиграть время, чтобы сорвать планы Загадочника и остановить страшную жатву злодея по кличке Доктор Смерть. Удастся ли Бэтмену разорвать завесу тьмы и обрести необходимых ему союзников? Или для Готэма настала новая эра — эра лжи и безверия?`
            },
            {
                id: 8,
                name: 'Сингл Кроткие. Выпуск 34',
                price: '106',
                description: `На этот раз вы погрузитесь в мрачную, темную историю, где Бэтмену противостоит убийца-маньяк...`
            },
            {
                id: 9,
                name: 'Книга 6. Эндшпиль. Выпуски 35–40',
                price: '688',
                description: `ХА. ХА. ХА.
                ОН ВЕРНУЛСЯ. И НА ЭТОТ РАЗ ОН НЕ ШУТИТ!
                Бэтмен и Джокер. Темный Рыцарь и Бледный Человек. Долгие годы они противостояли друг другу. Всякий раз, когда злодей погружался во все более глубокие пучины зла, герой рвался к новым вершинам, стремясь остановить его.
                Воистину, они были "лучшими врагами". До недавних пор.
                Больше никаких игр разума. Никаких извращенных шуток. Безумный убийца, который возвел зло в ранг высокого искусства, готовится создать свой шедевр. Полностью уничтожить Бэтмена и все, что ему дорого. Он обратит против Бэтмена Лигу Справедливости. Превратит жителей Готэма в хихикающих психопатов. И это только начало. Кульминация будет ужасающей.
                Бэтмен верит, что его роковой противник – всего лишь человек. Безумный, но смертный. Но что, если Джокер – это извечное зло? Сможет ли Темный Рыцарь оборвать шутку, длящуюся уже столько лет?`
            },
            {
                id: 10,
                name: 'Сингл Клетки',
                price: '130',
                description: `Бэтмен, Аркхем и кое-какие ответы на то, где Джокер пропадал целый год.`
            },
            {
                id: 11,
                name: 'Книга 7. Сверхтяжесть. Выпуски 41–45',
                price: '750',
                description: `Два месяца назад в шахтах под Готэмом произошла решающая схватка Темного Рыцаря и Джокера. И судя по всему, ни Бэтмен, ни его заклятый враг не вышли из нее живыми.
                Город погрузился в скорбь, но преступников это не останавливает. Готэму нужен новый герой. Новый Бэтмен. И Джим Гордон принимает этот вызов. Оставив службу, отказавшись от прежней жизни и даже от своих усов, Гордон с одобрения властей становится новым Бэтменом, вооруженным по последнему слову техники.
                И как раз вовремя, поскольку в Готэм-сити появляется новый злодей – загадочный Мистер Флор.`
            },
            {
                id: 12,
                name: 'Книга 8. Расцвет. Выпуски 46–51',
                price: '668',
                description: `Комиссар Джим Гордон по-прежнему пытается спасти Готэм. Мирным жителям угрожает мистер Флор, чьи ядовитые семена превращают их в существ с невообразимыми сверхспособностями. И даже вооруженный по последнему слову техники Гордон не в состоянии справиться с мутантами... Готэму нужен настоящий Бэтмен.

                А Брюс Уэйн не желает облачаться в костюм Человека — летучей мыши. Сейчас гроза преступного мира влюблен в прекрасную женщину, работает в Готэмском молодёжном центре, и счастлив, насколько это вообще возможно... Но ради спасения Готэма Брюс должен пожертвовать спокойной жизнью... а Бэтмен — восстать из мертвых!`
            },
            {
                id: 13,
                name: 'Сингл Список. Выпуск 52',
                price: '290',
                description: `Томас и Марта Уэйн убиты, и их сыну Брюсу нужно понять, как жить дальше. В этом ему поможет разобраться верный дворецкий Альфред и обычная тетрадь со списком дел. Какие задачи поставил перед собой будущий борец с преступность и как ему удалось пережить потерю родителей?.. Ответ вы найдёте в этой трогательной и увлекательной истории о прошлом самого популярного супергероя в мире.`
            }
        ];
    }

    /**
     * Геттер свойства _itemsList
     */
    getItemsList() {
        return this._itemsList;
    }

    /**
     * Сеттер свойства _itemsList
     * @param {*} items 
     */
    setItemsList(items) {
        this._itemsList = items;
    }

    /**
     * Геттер свойства _totalPrice
     */
    getTotalPrice() {
        return this._totalPrice;
    }

    /**
     * Сеттер свойства _totalPrice
     */
    setTotalPrice() {
        let totalPrice = 0;
        this._selectedItems.forEach((price) => {
            totalPrice += price;
        });

        let totalPriceWrapper = document.querySelectorAll('.total-price');
        totalPriceWrapper.forEach((element) => {
            element.innerHTML = totalPrice;
        });

        this._totalPrice = totalPrice;
    }

    /**
     * Инициализация отрисовки элементов
     */
    init() {     
        let title = document.createElement('div');
        title.classList = 'container';
        title.innerHTML = `
            <div class="col-12">
                <h4 class="mt-2 mb-4">Comics list</h4>
            </div>
        `;
        this._mainWrapper.append(title);

        let itemWrapperDocument = document.createElement('div');
        itemWrapperDocument.className = 'container items-wrapper';
        this._mainWrapper.append(itemWrapperDocument);

        this._itemsWrapper = document.querySelector('.items-wrapper');
        let itemsList = this.getItemsList();

        for (let item of itemsList) {
            this._itemsWrapper.append(this.createItemMarkup(item));
        }

        if (localStorage.getItem('id')) {
            localStorage.clear();
        }

        this.initListBtns()
        this.initTotal();
    }

    /**
     * Инициализация отрисовки общей стоимости элементов
     */
    initTotal() {
        let template = document.createElement('div');
        let buttonsWrapper = document.querySelector('.items-list-btn');
        template.className = 'container total-wrapper';
        template.innerHTML = `
            <div class="row">
                <div class="col-3">
                    <div class="alert alert-info" role="alert">
                        Total: <span class="total-price">0</span> ₽
                    </div>
                </div>
            </div>
        `;
        this._itemsWrapper.before(template);
        buttonsWrapper.before(template.cloneNode(true));
    }

    /**
     * Инициализация отрисовки кнопок сброса и выбора всех значений
     */
    initListBtns() {
        let template = document.createElement('div');
        template.className = 'container items-list-btn';
        template.innerHTML = `
            <div class="btn-group">
                <button type="button" class="btn btn-outline-primary mr-2 clear-btn">Clear all</button>
                <button type="button" class="btn btn-outline-primary mr-2 select-all-btn">Select all</button>
            </div>
        `;
        this._itemsWrapper.after(template);
    }

    /**
     * Отрисовка верстки одного элемента в списка
     * @param {*} item 
     */
    createItemMarkup(item) {
        let markup = document.createElement('div');
        markup.className = 'row';
        markup.innerHTML = `
            <div class="col-4">
                <a href="/list/${item.id}/" class="detail-link" data-id="${item.id}">${item.name}</a>
            </div>
            <div class="col-1 price">${item.price} ₽</div>
            <div class="col-1">
                <input type="checkbox" class="select-item" data-price="${item.price}">
            </div>
        `;

        return markup;
    }

    /**
     * Регистрация обработчиков событий
     */
    initHandlers() {
        let itemsCheckboxes = document.querySelectorAll('.select-item');

        itemsCheckboxes.forEach((value) => {
            value.addEventListener('change', (event) => {
                let currentChecbox = event.currentTarget;
                let price = Number(currentChecbox.getAttribute('data-price'));
                let indexOfItem = this._selectedItems.indexOf(price);

                if (this._selectedItems.includes(price) && !currentChecbox.checked) {
                    this._selectedItems.splice(indexOfItem, 1);
                } else if (!this._selectedItems.includes(price) && currentChecbox.checked) {
                    this._selectedItems.push(price);
                }

                this.setTotalPrice();
            });
        });

        let changeEvent = new Event("change");
        let popStateEvent = new Event("popstate");

        let links = document.querySelectorAll('.detail-link');
        links.forEach((value) => {
            value.addEventListener('click', (event) => {
                event.preventDefault();
                let link = event.target;
                let id = link.getAttribute('data-id');
                localStorage.setItem('id', id);
                window.history.pushState({}, link.innerText, link.getAttribute('href'));
                window.dispatchEvent(popStateEvent);
            });
        });

        document.querySelector('.clear-btn').addEventListener('click', (event) => {
            itemsCheckboxes.forEach((element) => {
                element.checked = false;
                element.dispatchEvent(changeEvent);
            });
        });

        document.querySelector('.select-all-btn').addEventListener('click', (event) => {
            itemsCheckboxes.forEach((element) => {
                element.checked = true;
                element.dispatchEvent(changeEvent);
            });
        });


    }
}