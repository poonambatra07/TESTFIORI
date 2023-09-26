sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sampleproject.sampleproject1',
            componentId: 'ListOfBooksObjectPage',
            entitySet: 'ListOfBooks'
        },
        CustomPageDefinitions
    );
});