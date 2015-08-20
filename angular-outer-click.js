angular.module('outerClick', [])
    .directive('outerClick', function ($document) {
        'use strict';

        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var outerClickExclude,
                    eventHandler = function (event) {
                        // Is clicked element at outside of the target element?
                        if (!element[0].contains(event.target)) {
                            outerClickExclude = document.getElementById(attr.outerClickExclude);

                            if (!(attr.outerClickExclude && outerClickExclude && outerClickExclude.contains(event.target))) {
                                scope.$apply(attr.outerClick);
                                scope.$digest();
                            }
                        }
                    };

                $document.on('click', eventHandler);

                scope.$on('$destroy', function () {
                    $document.off('click', eventHandler);
                });
            }
        };
    });
