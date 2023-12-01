function CompareHeights(container, links, title) {
    for (var i = 0; i < container.length; i++) {
        // changes 
        let contH = container[i].offsetHeight;
        let childH = links[i].offsetHeight + title[i].offsetHeight;

        console.log(childH, contH)

        // changes class so that it converts to row
        if (contH < childH){
            links[i].className = 'album-links album-links-row';
        }
    }
}

var timeId = null;
window.addEventListener('resize', () => {
    clearTimeout(timeId);
    timeId = setTimeout(CompareHeights(document.getElementsByClassName("album-info"), document.getElementsByClassName("album-links"), document.getElementsByClassName("album-title")), 1000);
});

