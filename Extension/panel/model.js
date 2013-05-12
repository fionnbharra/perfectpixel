var DevPanelProxyModel = Backbone.Model.extend({
    defaults: {
        x: 50,
        y: 50,
        width: 300,
        height: 300,
        opacity: 0.5,
        scale: 1,
        filename: '',
        thumbnailFilename: ''
    },

    initialize: function() {
        this.port = chrome.extension.connect({name: 'devpanel'});
        this.port.onMessage.addListener(function(message) {
            alert(message.text);
        });
        this.bind('change', this.onChange, this);

        this._sendCommand('initialize');
    },

    onChange: function() {
        this._sendCommand('test');
    },

    _sendCommand: function(command) {
        var tabId = chrome.devtools.inspectedWindow.tabId;
        this.port.postMessage({
            command: command,
            tabId: tabId
        });
    }
});