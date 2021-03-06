Ext.define('TR.model.Project', {
    extend: 'Ext.data.Model',
    idProperty: 'projectId',
    requires: 'TR.model.Customer',
    fields: [
        {name: 'projectId', type: 'long', defaultValue: null},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'customerId', type: 'TR.model.Customer'},
        {name: 'creationDate', type: 'date', dateFormat: 'time', defaultValue: null},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time', defaultValue: null}
    ],

    belongsTo: 'TR.model.Customer'
});