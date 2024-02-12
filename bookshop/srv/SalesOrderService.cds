using { sap.capire.bookshop as my } from '../db/schema';
service SalesOrderService @(path:'/browse') {

  /** For displaying lists of order */
  
  @odata.draft.enabled
  entity SalesOrder as projection on my.SalesOrder;
  entity SalesOrderItem as projection on my.SalesOrderItem;

  entity Product as projection on my.Product;



//annotate SalesOrderService.SalesOrder with @odata.draft.enabled;

}



