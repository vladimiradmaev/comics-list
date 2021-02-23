export class ClearButton
{
    init(target) {
        this._target = target;
        this.render();
        this.initEvents();
    }

    render() {
        let template = document.createElement('button');
        template.classList = 'btn btn-outline-primary mr-2 clear-btn';
        template.textContent = 'Clear all';
        this._wrapper = template;

        this._target.append(template);
    }

    initEvents() {
        let event = new CustomEvent('clearItems', {bubbles: true});
        this._wrapper.addEventListener('click', () => {
            this._wrapper.dispatchEvent(event);
        });
    }
}