const VIEWS_FOLDER = 'views/';

class Page {
    constructor(url) {
      this.url = VIEWS_FOLDER + url;
      this.html = '';
    }

    loadContent() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    this.html = xhr.responseText;
                }
            };

            xhr.open("GET", this.url, true);

            xhr.onload = resolve;
            xhr.onerror = reject;

            xhr.send();
        });
    }

    showContent(el) {
        el.innerHTML = this.html;
        this.executeScriptsFromElement(el);
    }

    executeScriptsFromElement(el) {
        const scripts = el.getElementsByTagName("script");
        
        for (let script of scripts)
            this.executeScript(script);
    }

    executeScript(script) {
        const scriptElement = document.createElement('script');

        if (script.src != "")
            scriptElement.src = script.src;
        else
            scriptElement.innerHTML = script.innerHTML;
        
        document.body.appendChild(scriptElement);
        document.body.removeChild(scriptElement);
    }
}