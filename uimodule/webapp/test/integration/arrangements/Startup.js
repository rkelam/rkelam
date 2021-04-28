sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.pg.ui5Yeoman.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.pg.ui5Yeoman",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
