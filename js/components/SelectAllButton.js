export class SelectAllButton
{
    init(target) {
        this._target = target;
        this.render();
        this.initEvents();
    }

    render() {
        let template = document.createElement('button');
        template.classList = 'btn btn-outline-primary mr-2 select-all-btn';
        template.textContent = 'Select all';
        this._wrapper = template;

        this._target.append(template);
    }

    initEvents() {
        let event = new CustomEvent('selectAllItems', {bubbles: true});
        this._wrapper.addEventListener('click', () => {
            this._wrapper.dispatchEvent(event);
        });
    }
}