using SalesOrderService as service from '../../srv/SalesOrderService';

annotate service.SalesOrder with @(
 UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Description',
            Value : Description,
        },
         {
            $Type : 'UI.DataField',
            Label : 'ORDERID',
            Value : ID,
        },
 ]
);

// Object Page layout
annotate service.SalesOrder with @(
    UI: {
        HeaderInfo : {
            TypeName       : '{i18n>SalesOrder}',
            TypeNamePlural : '{i18n>SalesOrder}',
            Title          : {Value : ID},
            Description    : {Value : Description}
        },
        HeaderFacets : [
    
        ], 
        Facets: [
            
                    {
                        $Type   : 'UI.ReferenceFacet',
                        Label   : '{i18n>SaleorderItem}',
                        ID      : 'SaleorderItem',
                        Target  : 'SalesOrderItems/@UI.LineItem'
                    },
                   
                
        
        ],               
    
    }
);

annotate service.SalesOrderItem with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Description',
            Value : Description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SaleOrderItemID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ProductID',
            Value : Product_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ProductDescription',
            Value : Product.Description,
        },
 ] 
);

annotate service.Product with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Product Description',
            Value : Description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Product ID',
            Value : ID,
        },
 ] 
);
