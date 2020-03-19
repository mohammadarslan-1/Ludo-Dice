var gamePlaying;

function initialization() {
    
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';

}
initialization();

function clickOn() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-1').src = 'Static/Media/d-' + dice + '.png';
    }
}
