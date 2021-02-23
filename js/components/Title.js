export class Title {
    init(target, page) {
        this._target = target;
        this._page = page;
        this.render();
    }

    render() {
        let title = document.createElement('div');
        title.classList = 'container';
        title.innerHTML = `
            <div class="col-12">
                <h4 class="mt-2 mb-4">Comics ${this._page}</h4>
            </div>
        `;
        this._target.append(title);
    }
}