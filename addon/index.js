import Ember from 'ember';
import WidgetModel from 'ember-eureka/widget-model';

export default WidgetModel.extend({

    currentRouteName: Ember.computed.alias('application.currentRouteName'),

    hasPrimaryItems: Ember.computed.bool('primaryItems'),

    primaryItems: function() {
        var results = Ember.A();
        var currentRouteName = this.get('currentRouteName');

        // set the item as active if the route is actually the current route
        this.get('config.items').forEach(function(item) {
            if (Ember.get(item, 'route') === currentRouteName) {
                Ember.set(item, 'isActive', true);
            } else {
                Ember.set(item, 'isActive', false);
            }
            results.pushObject(item);
        });

        return results;
    }.property('config.items', 'currentRouteName'),

    secondaryItems: Ember.computed.alias('config.secondaryItems'),
    hasSecondaryItems: Ember.computed.bool('secondaryItems')

});
