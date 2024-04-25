/*global QUnit*/

sap.ui.define([
	"simpleform/simple_form/controller/Simple_form.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Simple_form Controller");

	QUnit.test("I should test the Simple_form controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
