var lenght = 10920 - 364;
var frames = 29;
var frameCounter = 1;
var mauseEnter = false;
var elem = document.getElementById("girl");

elem.onmouseenter=function() {
    mauseEnter = true;
    if (frameCounter<30) {
        elem.style.backgroundPosition = lenght/frames*-frameCounter+"px";

        setTimeout(function animate() {
          elem.style.backgroundPosition = lenght/frames*-frameCounter+"px";
          frameCounter+=1;
        
          if (frameCounter<29&&mauseEnter) {
            setTimeout(animate, 10);
          }
        }, 10);
    }
}

elem.onmouseleave=function() {
    mauseEnter = false;
    if (frameCounter>0) {
        elem.style.backgroundPosition = lenght/frames*-frameCounter+"px";

        setTimeout(function animate() {
          elem.style.backgroundPosition = lenght/frames*-frameCounter+"px";
          frameCounter-=1;
        
          if (frameCounter>0 && !mauseEnter) {
            setTimeout(animate, 10);
        }
    }, 10);
    }
}