(function () {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name flash-messages:FlashMessages
	 * @description
	 * Render the flash messages, optionally filtering them by type
	 */
	function FlashMessages () {
		return {
			restrict: 'E',
			scope: {
				type: '@?'
			},
			templateUrl: 'templates/flashmessages.html',
			controller: 'FlashMessagesController'
		};
	}

	angular
		.module('flash-messages')
		.directive('flashMessages', FlashMessages);
})();