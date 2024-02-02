using { Currency, managed, sap } from '@sap/cds/common';
namespace sap.capire.bookshop;

entity Books : managed { //case
  key ID : Integer;
  title  : localized String(111) @mandatory ;
  descr  : localized String(1111);
  author : Association to Authors @mandatory;
  genre  : Association to Genres;
  stock  : Integer;
  price  : Decimal;
  currency : Currency;
  image : LargeBinary @Core.MediaType : 'image/png';
 Agent_ID : Integer;

   //roles
  Attorney : BooksEmployeeRoleType;
  SingleAttorney : BooksEmployeeRoleType;
   Client : BooksEmployeeRoleType;

}

entity Authors : managed {
  key ID : Integer;
  name   : String(111) @mandatory;
  dateOfBirth  : Date;
  dateOfDeath  : Date;
  placeOfBirth : String;
  placeOfDeath : String;
  books  : Association to many Books on books.author = $self;
}

/** Hierarchically organized Code List for Genres */
entity Genres : sap.common.CodeList {
  key ID   : Integer;
  parent   : Association to Genres;
  children : Composition of many Genres on children.parent = $self;
}


type BooksEmployeeRoleType {

    Employee                                : Association to Employee                      @title: '{i18n>Employee}';
}

entity Employee : managed {
  key ID : Integer;
  name: String;
  type: String;
  Employee : Association to Employee on Employee.ID = ID;
  BookCases                          : Association to many Books on ID  IN ( BookCases.Attorney.Employee.ID, BookCases.SingleAttorney.Employee.ID, BookCases.Client.Employee.ID) ; 

  
}

entity Cases : managed {
  key ID : Integer;
  name: String;
  EID: Integer;
  BookID: Integer;
  Agent: Association to  Employee;
  
}