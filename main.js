var style = document.documentElement.style;
var oldColor = style.backgroundColor;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.target.nodeName == 'BODY') {
            observer.disconnect();
            document.documentElement.style.backgroundColor = oldColor || '';
        }
    });
});

style.backgroundColor = '#000';
observer.observe(document, { childList: true, subtree: true });
