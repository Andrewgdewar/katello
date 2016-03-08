/**
 * @ngdoc object
 * @name Bastion.environments.config
 *
 * @requires $stateProvider
 *
 * @description
 *   Used for systems level configuration such as setting up the ui state machine.
 */
angular.module('Bastion.environments').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('environments', {
        abstract: true,
        permission: 'view_lifecycle_environments',
        template: '<div ui-view></div>'
    });

    $stateProvider.state('environments.index', {
        url: '/lifecycle_environments',
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentsController',
        templateUrl: 'environments/views/environments.html'
    })
    .state('environments.new', {
        url: '/lifecycle_environments/:priorId/new',
        permission: 'create_lifecycle_environments',
        controller: 'NewEnvironmentController',
        templateUrl: 'environments/views/new-environment.html'
    });

    $stateProvider.state('environments.environment', {
        url: '/lifecycle_environments/:environmentId',
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentController',
        templateUrl: 'environments/details/views/environment.html'
    })
    .state('environments.environment.details', {
        url: '/details',
        permission: 'view_lifecycle_environments',
        templateUrl: 'environments/details/views/environment-details.html'
    })
    .state('environments.environment.errata', {
        url: '/errata?repositoryId&contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-errata.html'
    })
    .state('environments.environment.repositories', {
        url: '/repositories?contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-repositories.html'
    })
    .state('environments.environment.packages', {
        url: '/packages?repositoryId&contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-packages.html'
    })
    .state('environments.environment.puppet-modules', {
        url: '/puppet-modules?contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-puppet-modules.html'
    })
    .state('environments.environment.docker', {
        url: '/docker?repositoryId&contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-docker.html'
    })
    .state('environments.environment.ostree', {
        url: '/ostree?repositoryId&contentViewId',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-ostree.html'
    })
    .state('environments.environment.content-views', {
        url: '/content-views',
        reloadOnSearch: false,
        permission: 'view_lifecycle_environments',
        controller: 'EnvironmentContentController',
        templateUrl: 'environments/details/views/environment-content-views.html'
    });

}]);
