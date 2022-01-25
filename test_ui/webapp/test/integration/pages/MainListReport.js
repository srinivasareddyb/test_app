sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'testui',
            componentId: 'ProductsList',
            entitySet: 'Products'
        },
        AdditionalCustomListReportDefinition
    );
});