var vmD;
(function() {
    'use strict';

    angular
        .module('starter.directives', ['ngCordova'])
        .directive('checkNetwork', checkNetwork)
        .factory('CheckNetworkService', CheckNetworkService)

    CheckNetworkService.$inject = ['$cordovaNetwork', '$ionicPlatform', '$rootScope'];

    function CheckNetworkService($cordovaNetwork, $ionicPlatform, $rootScope) {
        var _isOnline = true; //por defecto true

        if (ionic.Platform.isWebView())
            $ionicPlatform.ready().then(activate)

        function activate() {

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

        function innerCheck(msg) {
            console.log(msg + $cordovaNetwork.isOnline());
            _isOnline = $cordovaNetwork.isOnline();

        }
        var fact = {
            isOnline: isOnline

        }

        return fact;
        /////fun

        function isOnline() {
            return _isOnline;
        }
    }

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

    Controller.$inject = ['CheckNetworkService']

    /* @ngInject */
    function Controller(CheckNetworkService) {
        var vm = this;
        vmD = vm;
        // vm.cns = CheckNetworkService;
        // vm.isOnline = true;
        vm.isOnline = CheckNetworkService.isOnline;

        vm.state = 'online inicial true por default';

        /*   $ionicPlatform.ready()
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

           }*/

    }
})();
