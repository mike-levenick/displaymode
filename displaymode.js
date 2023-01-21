Hooks.on('ready', () => {
    $('#logo').click(ev => {
        window.hideUI = !window.hideUI;
        if (window.hideUI) {
            $('#logo').hide();
            $('#sidebar').hide();
            $('#navigation').hide();
            $('#controls').hide();
            $('#players').hide();
            $('#hotbar').hide();
        } else {
            $('#logo').show();
            $('#sidebar').show();
            $('#navigation').show();
            $('#controls').show();
            $('#players').show();
            $('#hotbar').show();
        }
    });
});

Hooks.on('renderLogo', (app,html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderSceneNavigation', (app,html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderSceneControls', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderSidebarTab', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});

Hooks.on('renderCombatTracker', (app, html) => {
    if (window.hideUI) {
        html.hide();
    }
});
