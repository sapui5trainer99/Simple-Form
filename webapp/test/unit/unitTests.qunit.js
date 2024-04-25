/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"simpleform/simple_form/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
