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
        this.bind('change', this.onChange, this);

        this._sendCommand('initialize');
    },

    onChange: function() {
        var changedAttributes = this.changedAttributes();
        if (changedAttributes !== false) {
            this._sendCommand('update', { changedValues: changedAttributes });
        }
    },

    _sendCommand: function(command, options) {
        options = options || {};
        var tabId = chrome.devtools.inspectedWindow.tabId;
        this.port.postMessage(
            _.extend(options, {
                command: command,
                tabId: tabId
            })
        );
    }
});