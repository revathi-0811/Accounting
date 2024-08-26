sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'accounting/test/integration/FirstJourney',
		'accounting/test/integration/pages/AccountingList',
		'accounting/test/integration/pages/AccountingObjectPage',
		'accounting/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AccountingList, AccountingObjectPage, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('accounting') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAccountingList: AccountingList,
					onTheAccountingObjectPage: AccountingObjectPage,
					onTheItemsObjectPage: ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);