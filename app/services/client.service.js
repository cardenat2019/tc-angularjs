(function () {
    "use strict";

    //const app = angular.module("AppExamen", ['ngRoute']);

    angular.module("AppExamen")
           .service("ClientService", ClientService);
     

    ClientService.$inject = ['$http', 'CONFIG'];

    function ClientService($http, CONFIG) {

            var API_URL = CONFIG.ApiUrl + '/client';

            // Permite crear un registro de Cliente.
            this.create = (client)=>
            {            
                return $http({
                    method: "post",
                    url: API_URL,
                    params: client,
                    headers: {    
                        "Access-Control-Allow-Origin": true,                
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
            };

            // Permite traer un cliente según su Id.
            this.read = (id) =>
            {
                return $http({
                    method: "get",
                    url: API_URL + "/" + id
                });
            };

            // Permite traer la lista de clientes.
            this.readAll = () =>
            {
                return $http({
                    method: "get",
                    url: API_URL 
                });
            };

            // Actualiza el registro del Cliente.
            this.update = (client, id) =>
            {
                return $http.put(API_URL + "/" + id, client);
            }

            // Elimina el registro del cliente.
            this.deleted = (id)=> 
            {
                return $http({
                    method: "delete",
                    url: API_URL + "/" + id
                });
            }

        }

}());