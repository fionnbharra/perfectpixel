var DevPanelView = Backbone.View.extend({
    fastMoveDistance: 10,

    events: {
        'click #origin-controls button': 'originButtonClick'
    },

    initialize: function(options) {
        _.bindAll(this);
        this.model = options.model;
    },

    originButtonClick: function(e) {
        var button = this.$(e.currentTarget);
        var axis = button.data('axis');
        var offset = button.data('offset');

        if (e.shiftKey) offset *= this.fastMoveDistance;
        if (axis == "x") {
            this.model.set({x: this.model.get('x') - offset});
        } else if (axis == "y") {
            this.model.set({y: this.model.get('y') - offset});
        }
    }
});

function onShown() {
    if (!window.panel) {
        var proxy = new DevPanelProxyModel();
        window.panel = new DevPanelView({ el: $('body'), model: proxy });
    }
}

