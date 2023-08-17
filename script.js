console.log("welcome ");

let songIndex =0 ;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let songs = [
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
    {songName: "sucker", filepath: "songs/1.mp3", coverpath:"images/gulzar/gulzar.png"},
]
// audioElement.play();

//Handle play pause events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})