var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', function($scope) {
    $scope.list = [{
        id: 1,
        name: 'Binding a Text Input to an Expression',
        link: 'Example1.html'
    }, {
        id: 2,
        name: 'Responding to Click Events using Controllers',
        link: 'Example2.html'
    }, {
        id: 3,
        name: 'Converting Expression Output with Filters',
        link: 'Example3.html'
    }, {
        id: 4,
        name: 'Creating Custom HTML Elements with Directives',
        link: 'Example4.html'
    }, {
        id: 5,
        name: 'Assigning a Default Value to a Model',
        link: 'Example5.html'
    }, {
        id: 6,
        name: 'Changing a Model Value with a Controller Function',
        link: 'Example6.html'
    }, {
        id: 7,
        name: 'Encapsulating a Model Value with a Controller Function',
        link: 'Example7.html'
    }, {
        id: 8,
        name: 'Responding to Scope Changes',
        link: 'Example8.html'
    }, {
        id: 9,
        name: 'Sharing Models between Nested Controllers',
        link: 'Example9.html'
    }, {
        id: 10,
        name: 'Sharing Code between Controllers using Services',
        link: 'Example10.html'
    }, {
        id: 11,
        name: 'Testing Controllers',
        link: 'Example11.html'
    }, {
        id: 12,
        name: 'Enabling/Disabling DOM Elements Conditionally',
        link: 'Example12.html'
    }, {
        id: 13,
        name: 'Changing the DOM in Response to User Actions',
        link: 'Example13.html'
    }, {
        id: 14,
        name: 'Rendering an HTML Snippet in a Directive',
        link: 'Example14.html'
    }, {
        id: 15,
        name: "Rendering a Directive's DOM Node Children",
        link: 'Example15.html'
    }, {
        id: 16,
        name: 'Passing Configuration Params Using HTML Attributes',
        link: 'Example16.html'
    }, {
        id: 17,
        name: 'Passing Configuration Params Using HTML Attributes-Isolated Scope',
        link: 'Example16A.html'
    }, {
        id: 18,
        name: "Repeatedly Rendering Directive's DOM Node Children",
        link: 'Example17.html'
    }, {
        id: 19,
        name: 'Directive-to-Directive Communication',
        link: 'Example18.html'
    }, {
        id: 20,
        name: 'Testing Directives',
        link: 'Example19.html'
    }, {
        id: 21,
        name: 'Implementing a Custom Filter to Revert an Input String',
        link: 'Example20.html'
    }, {
        id: 22,
        name: 'Passing Configuration Params to Filters',
        link: 'Example21.html'
    }, {
        id: 23,
        name: 'Filtering a List of DOM Nodes',
        link: 'Example22.html'
    }, {
        id: 24,
        name: 'Chaining Filters Together',
        link: 'Example23.html'
    }, {
        id: 25,
        name: 'Testing Filters',
        link: 'Example24.html'
    }];

    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;

    $scope.range = function() {
        var rangeSize = Math.ceil($scope.list.length / $scope.itemsPerPage);
        var ret = [];
        var start;

        start = $scope.currentPage;
        if (start > $scope.pageCount() - rangeSize) {
            start = $scope.pageCount() - rangeSize + 1;
        }

        for (var i = start; i < start + rangeSize; i++) {
            ret.push(i);
        }
        return ret;
    };


    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? "disabled" : "";
    };
    $scope.pageCount = function() {
        return Math.ceil($scope.list.length / $scope.itemsPerPage) - 1;
    };
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };
    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function(n) {
        $scope.currentPage = n;
    };


}]);

app.filter('offset', function() {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});
