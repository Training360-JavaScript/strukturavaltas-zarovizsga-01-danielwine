function manipulateDom() {
    let quoteElements = document.querySelectorAll('.quote');
    quoteElements.forEach(element => {
        element.style.borderColor = 'blue';
        element.style.background = 'lightblue';
        element.style.fontStyle = 'italic';
    })
};

export { manipulateDom };