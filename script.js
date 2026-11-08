const dust = document.querySelector(".dust");

const blowSound = new Audio("Assets/Blow Sound.mp3");

blowSound.volume = 1.0;

blowSound.addEventListener("ended", function(){
    blowSound.volume = 0;
});

function blowDust() {
    if (currentPage !== 1) {
        return;
    }

    dust.style.display = "none";

    openingMusic.play();
}


navigator.mediaDevices.getUserMedia({audio:true})
    .then(function(stream) {

        console.log(stream.getAudioTracks()[0].readyState);

        console.log(stream.getAudioTracks()[0].getSettings());

        const audioContext = new AudioContext();

        console.log("Audio state:", audioContext.state);

        const microhpone = audioContext.createMediaStreamSource(stream);

        const analyser = audioContext.createAnalyser();

        analyser.fftSize = 2048;
        console.log("FFT size:", analyser.fftSize);

        microhpone.connect(analyser);

        console.log("Microphone connected!");

        const data = new Uint8Array(analyser.fftSize);

        analyser.getByteTimeDomainData(data);

        console.log(data);

        function checkAudio(){
            analyser.getByteFrequencyData(data);

            console.log(
                "MIN:", Math.min(...data),
                "MAX:", Math.max(...data)
            );

            if (Math.max(...data)>220){
                console.log("BLOW TERDETEKSI!");
                blowDust();
                blowSound.play();
            }

            requestAnimationFrame(checkAudio);
        }

        checkAudio();

        console.log("Microphone is lisneting!");
    })

    .catch(function(error){
        console.log("Micrphone denied.");
    }); 

    const book = document.querySelector(".book");

    const teamPhoto = document.querySelector(".team-photo");

    const goButton = document.querySelector(".go-button");

    const backButton = document.querySelector(".back-button");

    const airPlane = document.querySelector(".airplane");

    const rryPhoto = document.querySelector(".rry");

    const songProject = document.querySelector(".song");

    const summerProject = document.querySelector(".summer");

    const zootopiaPhoto = document.querySelector(".zootopia");

    const joyridePhoto = document.querySelector(".joyride");

    const gramedPhoto = document.querySelector(".gramed");

    const colorfullPhoto = document.querySelector(".colorfull");

    const greyPhoto = document.querySelector(".grey");

    const bluePhoto = document.querySelector(".blue");

    const yellowPhoto = document.querySelector(".yellow");

    const lnotePaper = document.querySelector(".lnote");

    const countSong = document.querySelector(".count");

    const lovelangSong = document.querySelector(".lovelang");

    const cressentSong = document.querySelector(".cressent");

    const hotlineSong = document.querySelector(".hotline");

    const openingMusic = new Audio("Assets/Opening Music.mp3");

    const countCover = document.querySelector(".count-cover");

    const lovelangCover = document.querySelector(".lovelang-cover");

    const cressentCover = document.querySelector(".cressent-cover");

    const hotlineCover = document.querySelector(".hotline-cover");

    const playButton = document.querySelector(".play-button");

    const pauseButton = document.querySelector(".pause-button");

    const countAudio = new Audio("Assets/Count On Me.mp3");

    const lovelangAudio = new Audio("Assets/Love.mp3");

    const cressentAudio = new Audio("Assets/Cressent Moon.mp3");

    const hotlineAudio = new Audio("Assets/Hot Line.mp3");

    const luneBrowser = document.querySelector(".lune");

    const latterPaper = document.querySelector(".latter");

    const ootdPhoto = document.querySelector(".ootd");

    let selectedSong = null;

    let currentPage = 1;

    let bookRotated = false;

    countCover.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.pause();
            selectedSong.currentTime = 0;
        }

        selectedSong = countAudio;
    });

    lovelangCover.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.pause();
            selectedSong.currentTime = 0;
        }

        selectedSong = lovelangAudio;
    });

    cressentCover.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.pause();
            selectedSong.currentTime = 0;
        }

        selectedSong = cressentAudio;
    });

    hotlineCover.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.pause();
            selectedSong.currentTime = 0;
        }

        selectedSong = hotlineAudio;
    });

    playButton.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.play();
        }
    });

    pauseButton.addEventListener("click", function() {
        if (selectedSong) {
            selectedSong.pause();
        }
    });

    book.addEventListener("animationend", function(){
        bookRotated = true;
        console.log("Book Rotated!");
    });

    book.addEventListener("click", function(){
        if (currentPage === 5) {
            return;
        }

        if (!bookRotated) {
            book.src = "Assets/Rotate.png";
            book.classList.add("rotating");
        } else {
            book.src = "Assets/Page 1.png";
            teamPhoto.style.display = "block";
            goButton.classList.add("show");
            airPlane.style.display = "block";
            rryPhoto.style.display = "block";
        }
    });

    goButton.addEventListener("click", function() {

        if (currentPage === 1) {

            book.src = "Assets/Page 2.png";

            teamPhoto.style.display = "none";
            airPlane.style.display = "none";
            rryPhoto.style.display = "none";

            songProject.style.display = "block";
            summerProject.style.display = "block";
            zootopiaPhoto.style.display = "block";
            joyridePhoto.style.display = "block";
            gramedPhoto.style.display = "block";

            currentPage = 2;
        
            backButton.classList.add("show");

        } else if (currentPage === 2) {

            book.src = "Assets/Page 3.png";

            openingMusic.pause();

            songProject.style.display = "none";
            summerProject.style.display = "none";
            zootopiaPhoto.style.display = "none";
            joyridePhoto.style.display = "none";
            gramedPhoto.style.display = "none";

            colorfullPhoto.style.display = "block";
            greyPhoto.style.display = "block";
            bluePhoto.style.display = "block";
            yellowPhoto.style.display = "block";
            lnotePaper.style.display = "block";
            countSong.style.display = "block";
            lovelangSong.style.display = "block";
            cressentSong.style.display = "block";
            hotlineSong.style.display = "block";
            countCover.style.display = "block";
            lovelangCover.style.display = "block";
            cressentCover.style.display = "block";
            hotlineCover.style.display = "block";
            playButton.style.display = "block";
            pauseButton.style.display = "block";

            currentPage = 3;

            backButton.classList.add("show");

        } else if (currentPage === 3) {

            book.src = "Assets/Page 4.png";

            colorfullPhoto.style.display = "none";
            greyPhoto.style.display = "none";
            bluePhoto.style.display = "none";
            yellowPhoto.style.display = "none";
            lnotePaper.style.display = "none";
            countSong.style.display = "none";
            lovelangSong.style.display = "none";
            cressentSong.style.display = "none";
            hotlineSong.style.display = "none";
            countCover.style.display = "none";
            lovelangCover.style.display = "none";
            cressentCover.style.display = "none";
            hotlineCover.style.display = "none";
            playButton.style.display = "none";
            pauseButton.style.display = "none";

            luneBrowser.style.display = "block";
            latterPaper.style.display = "block";

            currentPage = 4;

            openingMusic.play();

            backButton.classList.add("show");

        } else if (currentPage === 4) {

            book.src = "Assets/Page 5.png";

            luneBrowser.style.display = "none";
            latterPaper.style.display = "none";

            ootdPhoto.style.display = "block";

            currentPage = 5;

            goButton.classList.remove("show");
            backButton.classList.add("show");
        }

    });

    backButton.addEventListener("click", function() {

        if (currentPage === 5) {

            book.src ="Assets/Page 4.png";

            ootdPhoto.style.display = "none";

            luneBrowser.style.display = "block";
            latterPaper.style.display = "block";

            currentPage = 4;

            goButton.classList.add("show");
        }

        if (currentPage === 4) {

            book.src = "Assets/Page 3.png";

            luneBrowser.style.display = "none";
            latterPaper.style.display = "none";

            colorfullPhoto.style.display = "block";
            greyPhoto.style.display = "block";
            bluePhoto.style.display = "block";
            yellowPhoto.style.display = "block";
            lnotePaper.style.display = "block";
            countSong.style.display = "block";
            lovelangSong.style.display = "block";
            cressentSong.style.display = "block";
            hotlineSong.style.display = "block";
            countCover.style.display = "block";
            lovelangCover.style.display = "block";
            cressentCover.style.display = "block";
            hotlineCover.style.display = "block";
            playButton.style.display = "block";
            pauseButton.style.display = "block";

            currentPage = 3;

            openingMusic.pause();
        }

        if (currentPage === 3) {

            book.src = "Assets/Page 2.png";

            colorfullPhoto.style.display = "none";
            greyPhoto.style.display = "none";
            bluePhoto.style.display = "none";
            yellowPhoto.style.display = "none";
            lnotePaper.style.display = "none";
            countSong.style.display = "none";
            lovelangSong.style.display = "none";
            cressentSong.style.display = "none";
            hotlineSong.style.display = "none";
            countCover.style.display = "none";
            lovelangCover.style.display = "none";
            cressentCover.style.display = "none";
            hotlineCover.style.display = "none";
            playButton.style.display = "none";
            pauseButton.style.display = "none";

            songProject.style.display = "block";
            summerProject.style.display = "block";
            zootopiaPhoto.style.display = "block";
            joyridePhoto.style.display = "block";
            gramedPhoto.style.display = "block";

            currentPage = 2;

            goButton.classList.add("show");

        } else if (currentPage === 2) {

            book.src = "Assets/Page 1.png";

            songProject.style.display = "none";
            summerProject.style.display = "none";
            zootopiaPhoto.style.display = "none";
            joyridePhoto.style.display = "none";
            gramedPhoto.style.display = "none";

            teamPhoto.style.display = "block";
            airPlane.style.display = "block";
            rryPhoto.style.display = "block";

            currentPage = 1;

            backButton.classList.remove("show");
        }
    });

    book.addEventListener("click", function() {
        if(currentPage === 5) {
            book.classList.remove("rotating");
            book.classList.add("closing");
            ootdPhoto.classList.add("page5-closing");
        }
    });

    book.addEventListener("animationend", function() {
        if (currentPage === 5) {
            book.classList.remove("closing");

            ootdPhoto.style.display = "none";
            backButton.classList.remove("show"); 

            book.src = "Assets/Close book.png";
            book.style.opacity = "1";
        }
    });

    const normalTeamSrc = teamPhoto.src;

    teamPhoto.addEventListener("click", function() {
        const isZoomed = teamPhoto.classList.contains("zoomed");

        if (!isZoomed) {
            teamPhoto.src = teamPhoto.getAttribute("data-zoom");
            teamPhoto.classList.add("zoomed");
            teamPhoto.classList.add("fade-effect");
            setTimeout(() => {
                teamPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            teamPhoto.src = normalTeamSrc;
            teamPhoto.classList.remove("zoomed");
        }
    });

    const normalAirplaneSrc = airPlane.src;

    airPlane.addEventListener("click", function() {
        const isZoomed = airPlane.classList.contains("zoomed");

        if (!isZoomed) {
            airPlane.src = airPlane.getAttribute("data-zoom");
            airPlane.classList.add("zoomed");
            airPlane.classList.add("fade-effect");
            setTimeout(() => {
                airPlane.classList.remove("fade-effect");
            }, 600);
        } else {
            airPlane.src = normalAirplaneSrc;
            airPlane.classList.remove("zoomed");
        }
    });

    const normalHumanSrc = rryPhoto.src;

    rryPhoto.addEventListener("click", function() {
        const isZoomed = rryPhoto.classList.contains("zoomed");

        if (!isZoomed) {
            rryPhoto.src = rryPhoto.getAttribute("data-zoom");
            rryPhoto.classList.add("zoomed");
            rryPhoto.classList.add("fade-effect");
            setTimeout(() => {
                rryPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            rryPhoto.src = normalHumanSrc;
            rryPhoto.classList.remove("zoomed");
        }
    });

    const normalSongSrc = songProject.src;

    songProject.addEventListener("click", function() {
        const isZoomed = songProject.classList.contains("zoomed");

        if (!isZoomed) {
            songProject.src = songProject.getAttribute("data-zoom");
            songProject.classList.add("zoomed");
            songProject.classList.add("fade-effect");
            setTimeout(() => {
                songProject.classList.remove("fade-effect");
            }, 600);
        } else {
            songProject.src = normalSongSrc;
            songProject.classList.remove("zoomed");
        }
    });

    const normalSummerSrc = summerProject.src;

    summerProject.addEventListener("click", function() {
        const isZoomed = summerProject.classList.contains("zoomed");

        if (!isZoomed) {
            summerProject.src = summerProject.getAttribute("data-zoom");
            summerProject.classList.add("zoomed");
            summerProject.classList.add("fade-effect");
            setTimeout(() => {
                summerProject.classList.remove("fade-effect");
            }, 600);
        } else {
            summerProject.src = normalSummerSrc;
            summerProject.classList.remove("zoomed");
        }
    });

    const normalZotoopiaSrc = zootopiaPhoto.src;

    zootopiaPhoto.addEventListener("click", function() {
        const isZoomed = zootopiaPhoto.classList.contains("zoomed");

        if (!isZoomed) {
            zootopiaPhoto.src = zootopiaPhoto.getAttribute("data-zoom");
            zootopiaPhoto.classList.add("zoomed");
            zootopiaPhoto.classList.add("fade-effect");
            setTimeout(() => {
                zootopiaPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            zootopiaPhoto.src = normalZotoopiaSrc;
            zootopiaPhoto.classList.remove("zoomed");
        }
    });

    const normalJoyrideScr = joyridePhoto.src;

    joyridePhoto.addEventListener("click", function() {
        const isZoomed = joyridePhoto.classList.contains("zoomed");

        if (!isZoomed) {
            joyridePhoto.src = joyridePhoto.getAttribute("data-zoom");
            joyridePhoto.classList.add("zoomed");
            joyridePhoto.classList.add("fade-effect");
            setTimeout(() => {
                joyridePhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            joyridePhoto.src = normalJoyrideScr;
            joyridePhoto.classList.remove("zoomed");
        }
    });

    const normalGramedScr = gramedPhoto.src;

    gramedPhoto.addEventListener("click", function() {
        const isZoomed = gramedPhoto.classList.contains("zoomed");

        if (!isZoomed) {
            gramedPhoto.src = gramedPhoto.getAttribute("data-zoom");
            gramedPhoto.classList.add("zoomed");
            gramedPhoto.classList.add("fade-effect");
            setTimeout(() => {
                gramedPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            gramedPhoto.src = normalGramedScr;
            gramedPhoto.classList.remove("zoomed");
        }
    });

    const normalColorfullSrc = colorfullPhoto.src;

    colorfullPhoto.addEventListener("click", function() {
        const isZoomed = colorfullPhoto.classList.contains("zoomed");

        if (!isZoomed) {
            colorfullPhoto.src = colorfullPhoto.getAttribute("data-zoom");
            colorfullPhoto.classList.add("zoomed");
            colorfullPhoto.classList.add("fade-effect");
            setTimeout(() => {
                colorfullPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            colorfullPhoto.src = normalColorfullSrc;
            colorfullPhoto.classList.remove("zoomed");
        }
    });

    const normalGreyScr = greyPhoto.src;

    greyPhoto.addEventListener("click", function() {
        const isZommed = greyPhoto.classList.contains("zoomed");

        if (!isZommed) {
            greyPhoto.src = greyPhoto.getAttribute("data-zoom");
            greyPhoto.classList.add("zoomed");
            greyPhoto.classList.add("fade-effect");
            setTimeout(() => {
                greyPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            greyPhoto.src = normalGreyScr;
            greyPhoto.classList.remove("zoomed");
        }
    });

    const normalBlueSrc = bluePhoto.src;

    bluePhoto.addEventListener("click", function() {
        const isZommed = bluePhoto.classList.contains("zoomed");

        if (!isZommed) {
            bluePhoto.src = bluePhoto.getAttribute("data-zoom");
            bluePhoto.classList.add("zoomed");
            bluePhoto.classList.add("fade-effect");
            setTimeout(() => {
                bluePhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            bluePhoto.src = normalBlueSrc;
            bluePhoto.classList.remove("zoomed");
        }
    });

    const normalYellowSrc = yellowPhoto.src;

    yellowPhoto.addEventListener("click", function() {
        const isZommed = yellowPhoto.classList.contains("zoomed");

        if (!isZommed) {
            yellowPhoto.src = yellowPhoto.getAttribute("data-zoom");
            yellowPhoto.classList.add("zoomed");
            yellowPhoto.classList.add("fade-effect");
            setTimeout(() => {
                yellowPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            yellowPhoto.src = normalYellowSrc;
            yellowPhoto.classList.remove("zoomed");
        }
    });

    const normalLnoteSrc = lnotePaper.src;

    lnotePaper.addEventListener("click", function() {
        const isZommed = lnotePaper.classList.contains("zoomed");

        if (!isZommed) {
            lnotePaper.src = lnotePaper.getAttribute("data-zoom");
            lnotePaper.classList.add("zoomed");
            lnotePaper.classList.add("fade-effect");
            setTimeout(() => {
                lnotePaper.classList.remove("fade-effect");
            }, 600);
        } else {
            lnotePaper.src = normalLnoteSrc;
            lnotePaper.classList.remove("zoomed");
        }
    });

    const normalCountSrc = countSong.src;

    countSong.addEventListener("click", function() {
        const isZommed = countSong.classList.contains("zoomed");

        if (!isZommed) {
            countSong.src = countSong.getAttribute("data-zoom");
            countSong.classList.add("zoomed");
            countSong.classList.add("fade-effect");
            setTimeout(() => {
                countSong.classList.remove("fade-effect");
            }, 600);
        } else {
            countSong.src = normalCountSrc;
            countSong.classList.remove("zoomed");
        }
    });

    const normalLovelangSrc = lovelangSong.src;

    lovelangSong.addEventListener("click", function() {
        const isZommed = lovelangSong.classList.contains("zoomed");

        if (!isZommed) {
            lovelangSong.src = lovelangSong.getAttribute("data-zoom");
            lovelangSong.classList.add("zoomed");
            lovelangSong.classList.add("fade-effect");
            setTimeout(() => {
                lovelangSong.classList.remove("fade-effect");
            }, 600);
        } else {
            lovelangSong.src = normalLovelangSrc;
            lovelangSong.classList.remove("zoomed");
        }
    });

    const normalCressentSrc = cressentSong.src;

    cressentSong.addEventListener("click", function() {
        const isZommed = cressentSong.classList.contains("zoomed");

        if (!isZommed) {
            cressentSong.src = cressentSong.getAttribute("data-zoom");
            cressentSong.classList.add("zoomed");
            cressentSong.classList.add("fade-effect");
            setTimeout(() => {
                cressentSong.classList.remove("fade-effect");
            }, 600);
        } else {
            cressentSong.src = normalCressentSrc;
            cressentSong.classList.remove("zoomed");
        }
    });

    const normalHotlineSrc = hotlineSong.src;

    hotlineSong.addEventListener("click", function() {
        const isZommed = hotlineSong.classList.contains("zoomed");

        if (!isZommed) {
            hotlineSong.src = hotlineSong.getAttribute("data-zoom");
            hotlineSong.classList.add("zoomed");
            hotlineSong.classList.add("fade-effect");
            setTimeout(() => {
                hotlineSong.classList.remove("fade-effect");
            }, 600);
        } else {
            hotlineSong.src = normalHotlineSrc;
            hotlineSong.classList.remove("zoomed");
        }
    });

    const normalLuneSrc = luneBrowser.src;

    luneBrowser.addEventListener("click", function() {
        const isZommed = luneBrowser.classList.contains("zoomed");

        if (!isZommed) {
            luneBrowser.src = luneBrowser.getAttribute("data-zoom");
            luneBrowser.classList.add("zoomed");
            luneBrowser.classList.add("fade-effect");
            setTimeout(() => {
                luneBrowser.classList.remove("fade-effect");
            }, 600);
        } else {
            luneBrowser.src = normalLuneSrc;
            luneBrowser.classList.remove("zoomed");
        }
    });

    const normalLatterSrc = latterPaper.src;

    latterPaper.addEventListener("click", function() {
        const isZommed = latterPaper.classList.contains("zoomed");

        if (!isZommed) {
            latterPaper.src = latterPaper.getAttribute("data-zoom");
            latterPaper.classList.add("zoomed");
            latterPaper.classList.add("fade-effect");
            setTimeout(() => {
                latterPaper.classList.remove("fade-effect");
            }, 600);
        } else {
            latterPaper.src = normalLatterSrc;
            latterPaper.classList.remove("zoomed");
        }
    });

    const normalOotdSrc = ootdPhoto.src;

    ootdPhoto.addEventListener("click", function() {
        const isZommed = ootdPhoto.classList.contains("zoomed");

        if (!isZommed) {
            ootdPhoto.src = ootdPhoto.getAttribute("data-zoom");
            ootdPhoto.classList.add("zoomed");
            ootdPhoto.classList.add("fade-effect");
            setTimeout(() => {
                ootdPhoto.classList.remove("fade-effect");
            }, 600);
        } else {
            ootdPhoto.src = normalOotdSrc;
            ootdPhoto.classList.remove("zoomed");
        }
    });
    