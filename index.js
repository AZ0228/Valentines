window.addEventListener('load', function() {

}); // 1

let giftlink = ["valentines_2024.pdf", "https://open.spotify.com/playlist/6KFryNCXj6iR7fGOJyvi15?si=5dd2b05f46264eb5", "https://open.spotify.com/show/5prAWQdfKdyEmc5I4IUEkK?si=d511c40ccd91423f"]
let giftsrc = ["letter.svg", "playlist.png", "podcast.png"]


function reveal(num){
    var x = document.querySelector(`.gift${num}`);
    setTimeout(() => {    
        x.setAttribute('href', giftlink[num-1]);
    }, 100);
    x.querySelector('img').src = giftsrc[num-1];
}