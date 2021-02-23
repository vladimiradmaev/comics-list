export class Item {

    init(target, item) {
        this._item = item;
        this._target = target;
        this.render(target, item);
        this.initHandlers();
    }

    render() {
        let item = this._item;
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
        this._itemMarkup = markup;
        this._target.append(markup);
    }

    initHandlers() {
        let itemMarkup = this._itemMarkup;
        let popStateEvent = new Event("popstate");
        let changeEvent = new Event('change');

        itemMarkup.querySelector('.select-item').addEventListener('change', (event) => {
            let currentCheckbox = event.currentTarget;
            let price = Number(currentCheckbox.getAttribute('data-price'));
            let chooseItemEvent = new CustomEvent('recalculatePrice', {
                bubbles: true, 
                detail: {
                    selected: currentCheckbox.checked,
                    price: price
                }
            });
            currentCheckbox.dispatchEvent(chooseItemEvent);
        });

        
        itemMarkup.querySelector('.detail-link').addEventListener('click', (event) => {
            event.preventDefault();
            let link = event.target;
            
            let id = link.getAttribute('data-id');
            localStorage.setItem('id', id);
            localStorage.setItem('page', 'detail');

            window.history.pushState({id: id}, link.innerText, link.getAttribute('href'));
            window.dispatchEvent(popStateEvent);
        });

        document.addEventListener('clearItems', () => {
            let itemCheckbox = itemMarkup.querySelector('.select-item');
            itemCheckbox.checked = false;

            itemCheckbox.dispatchEvent(changeEvent);
        });

        document.addEventListener('selectAllItems', () => {
            let itemCheckbox = itemMarkup.querySelector('.select-item');
            itemCheckbox.checked = true;

            itemCheckbox.dispatchEvent(changeEvent);
        });
    }
}