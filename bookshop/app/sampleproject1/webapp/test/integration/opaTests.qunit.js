sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sampleproject/sampleproject1/test/integration/FirstJourney',
		'sampleproject/sampleproject1/test/integration/pages/ListOfBooksList',
		'sampleproject/sampleproject1/test/integration/pages/ListOfBooksObjectPage',
		'sampleproject/sampleproject1/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ListOfBooksList, ListOfBooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sampleproject/sampleproject1') + '/index.html'
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