var vmD;
(function() {
    'use strict';

    angular
        .module('starter.directives', ['ngCordova'])
        .directive('checkNetwork', checkNetwork);

    checkNetwork.$inject = [];

    /* @ngInject */
    function checkNetwork() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {},
            // template: '<span>{{vm.state}}</span>'
            templateUrl: 'templates/check-network.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

    Controller.$inject = ['$rootScope', '$cordovaNetwork', '$ionicPlatform']

    /* @ngInject */
    function Controller($rootScope, $cordovaNetwork, $ionicPlatform) {
        var vm = this;
        vmD = vm;

        vm.isOnline = true;
        vm.state = 'online inicial true por default';

        $ionicPlatform.ready()
            .then(activate)

        function activate() {

            function innerCheck(msg) {
                vm.state = msg + $cordovaNetwork.isOnline();
                vm.isOnline = $cordovaNetwork.isOnline();
                console.log(vm.state);
            }


            innerCheck('on activate is')

            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                innerCheck('$cordovaNetwork:online')
            })

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
                innerCheck('$cordovaNetwork:offline')
            })

        }

    }
})();
