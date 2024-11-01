const CLIENTID = "sbHwUGvbtF49acTloOSLbj1e2kzPAvRk-78mGb8nwJzmIPoZWUq8EQV_9JxeBA5v"
const CLIENTSECRET = "PTzZk-S4O8ShhmFjmAjW5It4xayAzYS3WLvAKkqFA5Vz8iXqhPSPVOOO19zQ_ho6rCbMtxGtWFaBRTG3owNIDQ"
const acceessToken = "?access_token=xIOJ6q8RIUmXEpSpAqfehrQQrImttplFlf_e2SYprbvixlL7PR3lfUGQBvOZe9H7"

const API = "chttps://api.genius.com/search"
const APIsong = "https://api.genius.com/songs/"
const maxSong = 2471960
let songID = Random(0,maxSong);

function Random(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function req()
{
    try
   
    { 
        let XHR = new XMLHttpRequest();
        let songID = Random(0,maxSong);
        XHR.open("GET", APIsong+songID+acceessToken,false)
        XHR.send();
        let data = XHR.response;
        let json = JSON.parse(data);


        let song = json["response"]["song"];
        let album_link = song['song_art_image_url'];
        let artist = song['primary_artist']['name'];
        let release_date = song['release_date'];
        let song_title = song['title'];
        release_date = (release_date === null?'NO INFORMATION':release_date)
    
        document.getElementById("song").innerHTML = `SONG: ${song_title}`
        document.getElementById("artist").innerHTML = `ARTIST: ${artist}`
        document.getElementById("date").innerHTML = `RELEASE DATE: ${release_date}`
    
        document.getElementById("songImage").innerHTML =`<img src=${album_link}>`;
        // if (XHR.status !=200 || XHR.status !=304)
        // {
        //     console.log(`Ошибка ${err}. Пробую снова`);
        //     req();
        // }
    }
    catch(err)
    {
        console.log(`Ошибка ${err}. Пробую снова`);
        req();
    }
}
req();



// function tweetSong()
// {
//     window.open(`https://twitter.com/internt/tweet?hashtags=songs&text=Зацените песенку:\n 
//     ${song_title}\n
//     ${artist}\n
//     ${album_link}`)
// }