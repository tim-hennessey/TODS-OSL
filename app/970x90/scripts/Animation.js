var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var cta = document.getElementById('cta');
    var pod = document.getElementById('pod');





	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {

        t.set(banner, {opacity: 1});
        // t.set(mug, {x:-300});
        t.set(txt1, {opacity:0});
        t.set(txt2, {opacity:0});
        t.set(txt3, {opacity:0});
        // t.set(lockup, {x:-5, opacity:0});
        t.set(cta, {opacity:0});
        t.set(pod, {scale:1.2, x:507, y:-20});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

        CustomBounce.create("myBounce", {strength:.25});

        tl1.to(pod, .5, {scale:1, y:"-=1", x:"+=1", ease: "myBounce" }, "+=.5")
        .to(txt1, .5, {autoAlpha:1})
        .to(txt1, .5, {autoAlpha:0}, "+=2")

        .to(txt2, .5, {autoAlpha:1})
        .to(txt2, .5, {autoAlpha:0}, "+=2")

        .to(txt3, .5, {autoAlpha:1})

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
