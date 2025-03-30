function preloadImage(url, callback) {
    const img = new Image();
    img.onload = callback;
    img.src = url;
}
preloadImage('Assets/Background3.jpg', function() {
    document.body.style.backgroundImage = 'url(Assets/Background3.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
});
