﻿(function () {
	'use strict';
	function sendRequest(url, method, isAsync) {
		var httpRequest = new XMLHttpRequest(),
			isAsync = isAsync || false;
		
		httpRequest.open(method, url, isAsync);
		httpRequest.send(null);
	}
	
	window.sendRequest = sendRequest;
}());