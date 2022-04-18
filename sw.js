self.addEventListener('fetch', function(event) {
    event.request.url = 'https://generated-dev.github.io/C/'
    console.log(event.request.url);
    event.respondWith(
        fetch(event.request)
    );
});