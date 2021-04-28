/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/pg/ui5Yeoman/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
