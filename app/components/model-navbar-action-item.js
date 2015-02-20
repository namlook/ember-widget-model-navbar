import Ember from 'ember';
import ModelActionableItem from 'eureka-mixin-actionable-widget/mixins/model-actionable-item';

export default Ember.Component.extend(ModelActionableItem, {
    tagName: 'li',
    classNames: ['presentation']
});
