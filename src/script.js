const progressBar = document.getElementsByClassName('receiving-data')[0]
setInterval(() => {
   const computedStyle = getComputedStyle(progressBar)
   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0 
   progressBar.style.setProperty('--width', width + .1)
}, 5);