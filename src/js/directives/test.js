angular.module('components', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            scope:{
                name:'bind'
            },
            template: '<span>Hello {{name}}</span>'
        }
    })

angular.module('etkApp', ['components'])