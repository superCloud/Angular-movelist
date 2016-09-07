(function () {
    // 自定义服务：用于jsonp访问
    var module = angular.module('app.services.jsonp', []);
    module.factory('myJsonp', ['$window','$rootScope',function ($window,$rootScope) {
        var count = 0;
        return function (path, fn) {
            var callbackName = '_jsonpCallback_' + count++; 
            var url = path.replace('JSONP_CALLBACK', callbackName); 

            // 创建脚本标签，并给地址
            var scriptElement = $window.document.createElement('script');
            scriptElement.src = url;
            // 把脚本标签放到网页上（获取脚本并执行）
            $window.document.body.appendChild(scriptElement);

            // 远程服务器发回来的脚本会执行我们给定的回调函数，在window上创建回调函数
            $window[callbackName] = function(data){
                fn(data);
                // 通知AngularJS。
                $rootScope.$apply();
                $window.document.body.removeChild(scriptElement);
            }

        }
    }])
})();