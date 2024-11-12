let image = document.querySelectorAll('.cover');
let players = document.querySelectorAll('audio');
let text = document.querySelector('#changetext');

image.forEach(function(el) {
    el.onclick = (e) => {

        players.forEach(function(el) {
            el.style.display = "none";
            el.pause();
            el.currentTime = 0;
        });

        switch (e.target.getAttribute('id')){
            case 'vessel':
                let carradio = document.querySelector('#carradio');
                carradio.style.display = "block";
                carradio.play();
                text.innerHTML = "You are listening to Car Radio from Twenty One Pilots' Vessel Album!";
                break;
            case 'blurryface':
                let ride = document.querySelector('#ride');
                ride.style.display = "block";
                ride.play();
                text.innerHTML = "You are listening to Ride from Twenty One Pilots' Blurryface Album!";
                break;
            case 'trench':
                let myblood = document.querySelector('#myblood');
                myblood.style.display = "block";
                myblood.play();
                text.innerHTML = "You are listening to My Blood from Twenty One Pilots' Trench Album!";
                break;
            case 'scaledandicy':
                let shyaway = document.querySelector('#shyaway');
                shyaway.style.display = "block";
                shyaway.play();
                text.innerHTML = "You are listening to Shy Away from Twenty One Pilots' Scaled and Icy Album!";
                break;

        }
    }
});



