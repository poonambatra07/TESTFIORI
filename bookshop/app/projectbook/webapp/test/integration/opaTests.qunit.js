sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectbook/projectbook/test/integration/FirstJourney',
		'projectbook/projectbook/test/integration/pages/ListOfBooksList',
		'projectbook/projectbook/test/integration/pages/ListOfBooksObjectPage',
		'projectbook/projectbook/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ListOfBooksList, ListOfBooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectbook/projectbook') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheListOfBooksList: ListOfBooksList,
					onTheListOfBooksObjectPage: ListOfBooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);