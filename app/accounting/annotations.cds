using AccountingDocument as service from '../../srv/acc';
annotate service.AccountingDocumentItems with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'CompanyCode',
                Value : CompanyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FiscalYear',
                Value : FiscalYear,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AccountingDocument',
                Value : AccountingDocument,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AccountingDocumentItem',
                Value : AccountingDocumentItem,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TaxCode',
                Value : TaxCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'GLAccount',
                Value : GLAccount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TransactionTypeDetermination',
                Value : TransactionTypeDetermination,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ]
);

