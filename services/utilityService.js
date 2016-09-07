(function () {
    var module = angular.module('app.services.utility', []);

    module.factory('appUtility', ['$window', '$rootScope', function ($window, $rootScope) {
        var totalCounts = {
            top250: 0,
            in_theaters: 0,
            coming_soon: 0
        };
        return {
            // 获取每个分类的总条数
            total: function (category, value) {
                if (value === undefined) {
                    return totalCounts[category];
                } else {
                    return totalCounts [category] = value;
                }
            }
        }
    }])
})();