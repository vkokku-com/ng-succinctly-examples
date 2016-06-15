var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', function($scope) {
    $scope.list = [{
        name: 'Binding a Text Input to an Expression',
        link: 'Example1.html'
    }, {
        name: 'Responding to Click Events using Controllers',
        link: 'Example2.html'
    }, {
        name: 'Converting Expression Output with Filters',
        link: 'Example3.html'
    }, {
        name: 'Creating Custom HTML Elements with Directives',
        link: 'Example4.html'
    }, {
        name: 'Assigning a Default Value to a Model',
        link: 'Example5.html'
    }, {
        name: 'Changing a Model Value with a Controller Function',
        link: 'Example6.html'
    }, {
        name: 'Encapsulating a Model Value with a Controller Function',
        link: 'Example7.html'
    }, {
        name: 'Responding to Scope Changes',
        link: 'Example8.html'
    }, {
        name: 'Sharing Models between Nested Controllers',
        link: 'Example9.html'
    }, {
        name: 'Sharing Code between Controllers using Services',
        link: 'Example10.html'
    }, {
        name: 'Testing Controllers',
        link: 'Example11.html'
    }, {
        name: 'Enabling/Disabling DOM Elements Conditionally',
        link: 'Example12.html'
    }, {
        name: 'Changing the DOM in Response to User Actions',
        link: 'Example13.html'
    }, {
        name: 'Rendering an HTML Snippet in a Directive',
        link: 'Example14.html'
    }, {
        name: "Rendering a Directive's DOM Node Children",
        link: 'Example15.html'
    }, {
        name: 'Passing Configuration Params Using HTML Attributes',
        link: 'Example16.html'
    }, {
        name: 'Passing Configuration Params Using HTML Attributes-Isolated Scope',
        link: 'Example16A.html'
    }, {
        name: "Repeatedly Rendering Directive's DOM Node Children",
        link: 'Example17.html'
    }, {
        name: 'Directive-to-Directive Communication',
        link: 'Example18.html'
    }, {
        name: 'Testing Directives',
        link: 'Example19.html'
    }, {
        name: 'Implementing a Custom Filter to Revert an Input String',
        link: 'Example20.html'
    }, {
        name: 'Passing Configuration Params to Filters',
        link: 'Example21.html'
    }, {
        name: 'Filtering a List of DOM Nodes',
        link: 'Example22.html'
    }];

}]);
