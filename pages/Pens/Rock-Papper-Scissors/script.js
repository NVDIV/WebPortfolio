function random(min,max)
{
    //random numder from min to max+1
    let number = min + Math.random() * (max + 1 - min);
    return Math.floor(number);
}

let pscore = document.getElementById("player_score");
let bscore = document.getElementById("bot_score");
let info = document.getElementById("info");
let player = 0;

function rock()
{
    player = 1;
    game();
}

function scissors()
{
    player = 2;
    game();
}

function paper()
{
    player = 3;
    game();
}

function game()
{
    let bot = random(1,3)
    if ( ( player == 1 ) && ( bot == 2) )
    {
        info.innerHTML = "Bot chose scissors, you win!"
        pscore.innerHTML = parseInt(pscore.innerHTML) + 1;
    }
    else if ( ( player == 1 ) && ( bot == 3) )
    {
        info.innerHTML = "Bot chose paper, you lost."
        bscore.innerHTML = parseInt(bscore.innerHTML) + 1;
    }
    else if ( ( player == 2 ) && ( bot == 1) )
    {
        info.innerHTML = "Bot chose rock, you lost."
        bscore.innerHTML = parseInt(bscore.innerHTML) + 1;
    }
    else if ( ( player == 2 ) && ( bot == 3) )
    {
        info.innerHTML = "Bot chose paper, you win!"
        pscore.innerHTML = parseInt(pscore.innerHTML) + 1;
    }
    else if ( ( player == 3 ) && ( bot == 1) )
    {
        info.innerHTML = "Bot chose rock, you win!"
        pscore.innerHTML = parseInt(pscore.innerHTML) + 1;
    }
    else if ( ( player == 3 ) && ( bot == 2) )
    {
        info.innerHTML = "Bot chose scissors, you lost."
        bscore.innerHTML = parseInt(bscore.innerHTML) + 1;
    }
    else
    {
        info.innerHTML = "You tied. The bot chose the same as you."
    }
}