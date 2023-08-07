console.log("Welcome to Spotify");

// Initialize  the Variables
let songIndex = 0;
let audioElement = new Audio('images/songs/song.1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Raataan Lambiyan", filePath: "images/songs/song.1.mp3", coverPath: "images/sons and images/cover.1.jpg" },
    { songName: "Mann Atke gya hai", filePath: "images/song/song.2.mp3", coverPath: "images/sons and images/cover.2.jpg" },
    { songName: "Channd Baaliya", filePath: "images/songs/song.3.mp3", coverPath: "images/sons and images/cover.3.jpg" },
    { songName: "Hale Dil", filePath: "images/songs/song.4.mp3", coverPath: "images/sons and images/cover.4.jpg" },
    { songName: "Phri Mohabbat", filePath: "images/songs/song.5.mp3", coverPath: "images/sons and images/cover .5.jpg" },
    { songName: "Apna bana le", filePath: "images/songs/song.6.mp3", coverPath: "images/sons and images/cover.6.jpg" },
    { songName: "Manike", filePath: "images/songs/song.7.mp3", coverPath: "images/sons and images/cover.7.jpg" },
    { songName: "Libaas", filePath: "images/songs/song.8.mp3", coverPath: "images/sons and images/cover.8.jpg" },
    { songName: "Teri Marzi hai", filePath: "images/songs/song.9.mp3", coverPath: "images/sons and images/cover9.jpg" },
    { songName: "Teri Lod nahi", filePath: "images/songs/song.10.mp3", coverPath: "images/sons and images/cover.10.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


// audioElement play()

// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }


    })
    // Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `images/songs/song.${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })


})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `images/songs/song.${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `images/songs/song.${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})