var DevPanelView = Backbone.View.extend({

    events: {
        'click #origin-controls button': 'originButtonClick'
    },

    initialize: function(options) {
        _.bindAll(this);
        this.model = options.model;

        this.$el.append('<div>Hello World</div>');
    },

    originButtonClick: function() {
        this.model.set('x', this.model.get('x') + 1);
    }

});

function onShown() {
    if (!window.panel) {
        var proxy = new DevPanelProxyModel();
        window.panel = new DevPanelView({ el: $('body'), model: proxy });
    }
}

