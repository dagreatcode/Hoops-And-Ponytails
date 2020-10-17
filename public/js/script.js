const animate = anime({
  targets: 'img.basketball',
  keyframes: [
      {translateY: -250},
      {translateX: 475},
      {translateY: 100},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 5000,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    loop: true
  });

  return animate;