chrome.devtools.panels.create('PerfectPixel',
    'images/icons/16.png',
    'panel/panel.html',
    function(panel) {
        panel.onShown.addListener(function(panelWindow) {
            panelWindow.onShown();
        });
    });