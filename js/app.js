const r = new Router(
    {
        home: new PageContainer(new Page('app.html'), new Page('home/home.html')),
        details: new PageContainer(new Page('app.html'), new Page('details/details.html'))
    },
    document.querySelector('app')
);
