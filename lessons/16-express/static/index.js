document.querySelectorAll('a').forEach((a,i) => {
    setTimeout(() => {
        a.style.transformOrigin = 'left'
        a.style.transform = 'scale(1.2)'
    }, i * 100)
})