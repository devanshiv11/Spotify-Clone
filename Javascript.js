console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Tumhiho.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Tum Hi Ho", filePath: "/songs/Tumhiho.mp3.mp3", coverPath: "tumhiho.jpg.jpeg" },
    { songName: "O Maahi", filePath: "/songs/Omahiomahi.mp3.mp3", coverPath: "omaahi.jpg.jpeg"},
    { songName: "O Sajni Re", filePath: "Osajnire.mp3.mp3", coverPath: "osajnire.jpg.jpeg"},
    { songName: "Satranga", filePath: "Satranga.mp3.mp3", coverPath: "satranga.jpg.jpeg"},
    { songName: "Tere Hawaale", filePath: "Terehawaale.mp3.mp3", coverPath: "terehawaale.jpg.jpeg"},
    { songName: "Ve Kamleya", filePath: "Vekamleya.mp3.mp3", coverPath: "vekamleya.jpg.jpeg" },
    { songName: "Apna Bana Le", filePath: "Apnabanale.mp3.mp3", coverPath: "apnabanale.jpg.jpeg" },
    { songName: "Kesariya", filePath: "Kesariya.mp3.mp3", coverPath: "kesariya.jpg.jpeg" }
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audio.Element.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        }
        else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove('fa-pause');
  element.classList.add('fa-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove(fa-play);
         e.target.classList.add(fa-pause);
         audioElement.src = `${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

audioElement.src = `${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
}) 
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }

audioElement.src = `${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
}) 