export class TotalPrice
{
    _totalPrice = 0;
    _selectedItems = [];

    init(target) {
        this._target = target;
        this.render();
        this.initHandlers();
    }

    setTotalPrice() {
        let totalPrice = 0;
        this._selectedItems.forEach((price) => {
            totalPrice += price;
        });
        this._wrapper.querySelector('.total-price').innerHTML = totalPrice;

        this._totalPrice = totalPrice;
    }

    render() {
        let template = document.createElement('div');
        template.className = 'container total-wrapper';
        template.innerHTML = `
            <div class="row">
                <div class="col-3">
                    <div class="alert alert-info" role="alert">
                        Total: <span class="total-price">${this._totalPrice}</span> ₽
                    </div>
                </div>
            </div>
        `;
        this._wrapper = template;
        this._target.before(template);
    }

    initHandlers() {
        document.addEventListener('recalculatePrice', (event) => {
            let price = event.detail.price;
            let selected = event.detail.selected;

            let indexOfItem = this._selectedItems.indexOf(price);

            if (this._selectedItems.includes(price) && !selected) {
                this._selectedItems.splice(indexOfItem, 1);
            } else if (!this._selectedItems.includes(price) && selected) {
                this._selectedItems.push(price);
            }

            this.setTotalPrice();
        });
    }
}