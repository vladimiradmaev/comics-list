import { ClearButton } from "./ClearButton.js";
import { SelectAllButton } from "./SelectAllButton.js";
import { TotalPrice } from "./TotalPrice.js";

export class ButtonsWrapper 
{
    init(target) {
        this._target = target;
        this.render();
    }

    render() {
        let template = document.createElement('div');
        template.className = 'container items-list-btn';
        template.innerHTML = '<div class="btn-group"></div>';
        this._wrapper = template;
        this._target.after(template);

        let clearBtn = new ClearButton();
        clearBtn.init(this._wrapper);

        let selectAllBtn = new SelectAllButton();
        selectAllBtn.init(this._wrapper);

        let totalPrice = new TotalPrice();
        totalPrice.init(this._wrapper);
    }
}