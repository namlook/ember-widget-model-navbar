import WidgetModel from 'ember-eureka/widget-model';
import ActionableMixin from 'eureka-mixin-actionable-widget';

export default WidgetModel.extend(ActionableMixin, {

    label: function() {
        var _label = this.get('config.label');
        if (_label === undefined) {
            _label = "auto";
        }
        if (_label === 'auto') {
            _label = this.get('model.title');
        }
        return _label;
    }.property('config.label', 'model.title')

});