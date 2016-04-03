// 1. Create a variable
var box = document.getElementById("line");

// 2. Create a First .to() Tween
// TweenLite.to(box, 0.7, {left: 0, x: 0});

// 3. Create a .from() Tween
// TweenLite.from(box, 2, {x: '-=200px', autoAlpha: 0});

// 4. Create a .set() Tween
//TweenLite.set(box, {x: '-=200px', scale: 0.3});
//TweenLite.set(box, {x: '+=100px', scale: 0.6});
//TweenLite.set(box, {x: '-50%', scale: 1});

// 5. Create a .fromTo() Tween







window.anim = {};
anim.tansitioning = 0;
anim.shown = 0;

anim.show = function () {
    if (anim.tansitioning === 0 && anim.shown === 0) {
        anim.tansitioning = 1;
        
        TweenMax.set(document.getElementsByClassName("line")[0], {
            right: "0",
            left: "auto"
        });
        TweenMax.set(document.getElementsByClassName("line")[1], {
            right: "0",
            left: "auto"
        });
        TweenMax.set(document.getElementsByClassName("line")[2], {
            right: "0",
            left: "auto"
        });
        
        TweenMax.to(document.getElementsByClassName("line")[0], 1, {
            width: "100vw",
            ease: Power2.easeInOut,
            onComplete: complete
        });
        setTimeout(function () {
            TweenMax.to(document.getElementsByClassName("line")[1], 1, {
                width: "100vw",
                ease: Power2.easeInOut,
                onComplete: complete
            });
            setTimeout(function () {
                TweenMax.to(document.getElementsByClassName("line")[2], 1, {
                    width: "100vw",
                    ease: Power2.easeInOut,
                    onComplete: function () {
                        anim.tansitioning = 0;
                        anim.shown = 1;
                        /*TweenMax.set(document.getElementsByClassName("line")[0], {
                            right: "auto",
                            left: "0"
                        });
                        TweenMax.set(document.getElementsByClassName("line")[1], {
                            right: "auto",
                            left: "0"
                        });
                        TweenMax.set(document.getElementsByClassName("line")[2], {
                            right: "auto",
                            left: "0"
                        });*/
                    }

                });

            }, 100)
        }, 200)

    }
}

anim.hide = function () {
    if (anim.tansitioning === 0 && anim.shown === 1) {
        TweenMax.set(document.getElementsByClassName("line")[0], {
            right: "auto",
            left: "0"
        });
        TweenMax.set(document.getElementsByClassName("line")[1], {
            right: "auto",
            left: "0"
        });
        TweenMax.set(document.getElementsByClassName("line")[2], {
            right: "auto",
            left: "0"
        });

        TweenMax.to(document.getElementsByClassName("line")[2], 1, {
            width: "0",
            ease: Power2.easeInOut,
            onComplete: complete
        });
        setTimeout(function () {
            TweenMax.to(document.getElementsByClassName("line")[1], 1, {
                width: "0",
                ease: Power2.easeInOut,
                onComplete: complete
            });
            setTimeout(function () {
                TweenMax.to(document.getElementsByClassName("line")[0], 1, {
                    width: "0",
                    ease: Power2.easeInOut,
                    onComplete: function () {
                        anim.tansitioning = 0;
                        anim.shown = 0;
                        /*TweenMax.set(document.getElementsByClassName("line")[0], {
                            right: "0",
                            left: "auto"
                        });
                        TweenMax.set(document.getElementsByClassName("line")[1], {
                            right: "0",
                            left: "auto"
                        });
                        TweenMax.set(document.getElementsByClassName("line")[2], {
                            right: "0",
                            left: "auto"
                        });*/
                    }

                });

            }, 100);
        }, 200);
}

}









//TweenMax.staggerTo(".line", 1.3, {marginLeft:"+=1300", ease:Power2.easeIn}, 0.1);



// 7. Callback functions
function start() {
    console.log('start');
}

function update() {
    console.log('animating');
}

function complete() {
    console.log('end');
}
