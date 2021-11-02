window.onload = function() {
    var music1 = document.getElementById('Fine');
    var music2 = document.getElementById('If_you');
    var music3 = document.getElementById('Snowman');
    var music4 = document.getElementById('Spaceship');
    
    var Fine = new Audio('Fine.mp3');
    var If_you = new Audio('If_you.mp3');
    var Snowman = new Audio('Snowman.mp3');
    var Spaceship = new Audio('Spaceship.webm');

    music1.addEventListener("click", function() {
        Fine.loop = false;
        Fine.volume = 0.7;
        Fine.play();
    })
    music1.addEventListener("dblclick", function() {
        Fine.pause();
    })

    music2.addEventListener("click", function() {
        If_you.loop = false;
        If_you.volume = 0.7;
        If_you.play();
    })
    music2.addEventListener("dblclick", function() {
        If_you.pause();
    })

    music3.addEventListener("click", function() {
        Snowman.loop = false;
        Snowman.volume = 0.7;
        Snowman.play();
    })
    music3.addEventListener("dblclick", function() {
        Snowman.pause();
    })

    music4.addEventListener("click", function() {
        Spaceship.loop = false;
        Spaceship.volume = 0.7;
        Spaceship.play();
    })
    music4.addEventListener("dblclick", function() {
        Spaceship.pause();
    })

}