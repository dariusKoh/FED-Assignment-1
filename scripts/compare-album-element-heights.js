function CompareHeights(container, links, title) {
    for (var i = 0; i < container.length; i++) {
        // Gets height of object and stores it
        let contH = container[i].offsetHeight;
        let childH = links[i].offsetHeight + title[i].offsetHeight;

        console.log(childH, contH)

        // changes class so that it converts to row
        if (contH < childH){
            links[i].className = 'album-links album-links-row';
        }
    }
}

// Runs the command to compare heights everytime the window is resized
var timeId = null;
// Checks if window is resized
window.addEventListener('resize', () => {
    // Clears TimeOut to execute the code
    clearTimeout(timeId);

    // Prevents code from running and taking up too much memory
    timeId = setTimeout(CompareHeights(document.getElementsByClassName("album-info"), 
    document.getElementsByClassName("album-links"), 
    document.getElementsByClassName("album-title")), 1000);
});