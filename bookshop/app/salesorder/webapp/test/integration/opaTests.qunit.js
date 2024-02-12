sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'salesorder/salesorder/test/integration/FirstJourney',
		'salesorder/salesorder/test/integration/pages/SalesOrderList',
		'salesorder/salesorder/test/integration/pages/SalesOrderObjectPage',
		'salesorder/salesorder/test/integration/pages/SalesOrderItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderList, SalesOrderObjectPage, SalesOrderItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('salesorder/salesorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderList: SalesOrderList,
					onTheSalesOrderObjectPage: SalesOrderObjectPage,
					onTheSalesOrderItemObjectPage: SalesOrderItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);