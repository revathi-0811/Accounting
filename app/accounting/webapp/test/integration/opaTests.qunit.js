sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'accounting/test/integration/FirstJourney',
		'accounting/test/integration/pages/AccountingDocumentItemsList',
		'accounting/test/integration/pages/AccountingDocumentItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AccountingDocumentItemsList, AccountingDocumentItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('accounting') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAccountingDocumentItemsList: AccountingDocumentItemsList,
					onTheAccountingDocumentItemsObjectPage: AccountingDocumentItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);