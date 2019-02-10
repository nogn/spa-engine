class PageContainer {
    constructor(...pages) {
        this.pages = pages;
    }
  
    loadContent() {
        return Promise.all(this.pages.map(page => page.loadContent()));
    }
  
    showContent(el) {
        for (let page of this.pages) {
            const div = document.createElement('div');
            page.showContent(div);
            el.appendChild(div);
        }
    }
}