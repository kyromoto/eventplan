import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: '_id',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        return this._super(store, primaryModelClass, payload.data, id, requestType);
    }
});
