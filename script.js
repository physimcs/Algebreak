// Switches from loading screen -> game instructions
function toGame(){
    const loadingScreen = document.getElementById("loading-screen");
    const instructions = document.getElementById("instructions");
    const gameTitle = document.getElementById("game-title");
    const startButton = document.getElementById("start-button");

    setTimeout(function() {
        gameTitle.style.fontSize = '11vh'
        setTimeout(function() {
            loadingScreen.remove();
            instructions.style.display = "flex";
        }, 500);
    }, 250);
}