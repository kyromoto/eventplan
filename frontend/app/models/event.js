import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr('string'),
    start_date : DS.attr('date'),
    stop_date : DS.attr('date'),
    info : DS.attr('string')
});
