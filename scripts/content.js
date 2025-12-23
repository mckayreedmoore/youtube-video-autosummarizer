const menuSelector = '#button-shape > button > yt-touch-feedback-shape';
const askSelector = '#items > ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer.iron-selected > tp-yt-paper-item';
const summarizeSelector = '#contents > you-chat-item-view-model:nth-child(3) > you-chat-chips-data > div:nth-child(1) > button';

const observer = new MutationObserver(function() {
    let menu = document.querySelector(menuSelector);
    if (menu) {
        menu.click();
        let askButton = document.querySelector(askSelector);
        if (askButton) {
            askButton.click();
            let summarizeButton = document.querySelector(askSelector);
            if (summarizeButton) {
                summarizeButton.click();
                observer.disconnect(); 
            }
        }
    }
});
