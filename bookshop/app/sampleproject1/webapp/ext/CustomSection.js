
sap.ui.define([
    /**
     * Event handler 
     */
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function (Fragment, MessageToast) {
    "use strict";


  
    return {

		pressbutton: function (oEvent) {
           

            //get get combo box control
			let comboControlID = this.byId("parametercomboID") || sap.ui.getCore().byId("parametercomboID");
			let id = comboControlID;
        },

        oncombopress: function (oEvent) {
           

            //get get combo box control
			let comboControlID = this.byId("parametercomboID") || sap.ui.getCore().byId("parametercomboID");
			let id = comboControlID;
        },
        
    };
});