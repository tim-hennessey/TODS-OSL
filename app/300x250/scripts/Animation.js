var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    
    var mug = document.getElementById('mug');
    var lockup = document.getElementById('lockup');
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var cta = document.getElementById('cta');
    var pod = document.getElementById('pod');





	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {

        t.set(banner, {opacity: 1});
        t.set(mug, {x:-300});
        t.set(txt1, {opacity:0});
        t.set(txt2, {opacity:0});
        t.set(lockup, {x:-5, opacity:0});
        t.set(cta, {opacity:0});
        t.set(pod, {x:150, y:125});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

        CustomBounce.create("myBounce", {strength:.25});

        tl1.to(pod, .5, {scale:.58, y:"-=6", x:"+=4", ease: "myBounce" }, "+=.5")
        .to(txt1, .5, {autoAlpha:1})
        .to(txt1, .5, {autoAlpha:0}, "+=2")

        .to(txt2, .5, {autoAlpha:1})
        .to(txt2, .5, {autoAlpha:0}, "+=2")

        .to(mug, 1, {x:-5, ease: Power4.easeOut})
        .to(lockup, .5, {autoAlpha:1}, "-=.25")
        .to(cta, .5, {autoAlpha:1}, "+=.5");
        

    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize,
        start:start,
        stop:stop
    }

})();
