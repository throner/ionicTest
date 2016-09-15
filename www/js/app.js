// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   // alert(getBrowserInfo());
  cordova.plugins.Test.coolMethod('useless',
  function(okData) {
    alert(okData);
  },
  function(failData) {
    alert(failData);
  });

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.platform.ios.tabs.style('standard');

  $ionicConfigProvider.platform.ios.tabs.position('bottom');

  $ionicConfigProvider.platform.android.tabs.style('standard');

  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');

  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');

  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');

  $ionicConfigProvider.platform.android.views.transition('android');
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.test',{//tab.test相当于为#/tab/test
    url:"/test",
    views: {
      'tab-dash': {//与tabs.html页面中 <ion-nav-view name="tab-dash"></ion-nav-view>名字对应，表示这个视图的HTML修改为templateUrl
        templateUrl:'templates/test.html'
      }
    }
  })
  .state('test',{//相当于/test
    url:"/test",
    templateUrl:'templates/test.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

function getBrowserInfo()
{
  var agent = navigator.userAgent.toLowerCase() ;

  var regStr_ie = /msie [\d.]+;/gi ;
  var regStr_ff = /firefox\/[\d.]+/gi
  var regStr_chrome = /chrome\/[\d.]+/gi ;
  var regStr_saf = /safari\/[\d.]+/gi ;
  //IE
  if(agent.indexOf("msie") > 0)
  {
    return agent.match(regStr_ie) ;
  }

  //firefox
  if(agent.indexOf("firefox") > 0)
  {
    return agent.match(regStr_ff) ;
  }

  //Chrome
  if(agent.indexOf("chrome") > 0)
  {
    return agent.match(regStr_chrome) ;
  }

  //Safari
  if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
  {
    return agent.match(regStr_saf) ;
  }

}
