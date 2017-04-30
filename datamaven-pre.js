var SVGsupported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect
})()
// Put up a stern warning if the user is running a crappy old
// browser that can't do SVG (Data Maven doesn't do IE8)
if (!SVGsupported) {
    // We can't use SVG, so browser don't play this game.
    $('#old-browser-warning').css("display", "block");
}

