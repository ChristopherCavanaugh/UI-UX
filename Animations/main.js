anime({
  targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
});

var animation = anime({
    targets: '.play-pause-demo .el',
    translateX: 270,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'easeInOutSine'
  });
  
  document.querySelector('.play-pause-demo .play').onclick = animation.play;
  document.querySelector('.play-pause-demo .pause').onclick = animation.pause;