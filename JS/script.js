console.log("welcome ");

let songIndex =0 ;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "andhakar", filepath: "songs/1.mp3", coverpath:"images/gulzar/1.jpeg"},
    {songName: "chhaiya chhaiya", filepath: "songs/2.mp3", coverpath:"images/gulzar/2.jpeg"},
    {songName: "aaoge tum kabhi", filepath: "songs/3.mp3", coverpath:"images/gulzar/3.jpeg"},
    {songName: "aapka intezar hai", filepath: "songs/4.mp3", coverpath:"images/gulzar/4.jpeg"},
    {songName: "kajra re", filepath: "songs/5.mp3", coverpath:"images/gulzar/5.jpeg"},
    {songName: "meri pukar suno", filepath: "songs/6.mp3", coverpath:"images/gulzar/6.jpeg"},
    {songName: "Lag ja gale", filepath: "songs/7.mp3", coverpath:"images/gulzar/7.jpeg"},
    {songName: "local train", filepath: "songs/8.mp3", coverpath:"images/gulzar/8.jpeg"},
    {songName: "ye saham mastani", filepath: "songs/9.mp3", coverpath:"images/gulzar/9.jpeg"},
    {songName: "jeevan", filepath: "songs/10.mp3", coverpath:"images/gulzar/10.jpeg"},
]

songItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img") [0].src = songs[i].coverpath;
    Element.getElementsByClassName("songName") [0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle play pause events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value = progress;
})

myProgress.addEventListener('change', ()=>{
    audioElement.currentTime =myProgress.value * audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songPlayItem')).forEach((Element)=>{
    Element.classList.remove('fa-circle-pause');
    Element.classList.add('fa-circle-play');
})

}

Array.from(document.getElementsByClassName('songPlayItem')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})