(function () {
    "use strict";

    const app = angular.module('AppExamen', ['ngRoute'])

    app.controller('ClientController', ['$scope', '$http', 
                    function($scope, $http){

        $scope.menuSuperior = "app/views/menu.html";

        const vm = this;

        vm.clientList = [];
        vm.client = {
            id: 0,
            code: '',
            name: '',
            email: '',
            website: '',
            phone_number: '',
            contact: ''
        };

        const API_URL = 'http://localhost:4000/api/v1/client';

        // Permite validar si se debe crear o editar el registro
        vm.save = function(){
            if(vm.client.id===0){
                vm.create();
            }else{
                vm.update();
            }
        }

        // Permite crear un registro de Cliente.
        vm.create = function (client) 
        {            
            $http({
                method: "post",
                url: API_URL,
                params: client,
                headers: {    
                    "Access-Control-Allow-Origin": true,                
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(response=>{
                var client = response.data;                
                toastr.success("El Cliente fué creado satisfactoriamente");
            },error=>{
                toastr.error("Ocurrió un error al crear el producto. Error: " + error);
            });
        };

        // Permite traer un cliente según su Id.
        vm.read = function (id) 
        {
            $http({
                method: "get",
                url: API_URL + "/" + id
            }).then(response=>{
                vm.client = response.data;
                //vm.readToggleSelected();
            });
        };

        // Permite traer la lista de clientes.
        vm.readAll = function () 
        {
            $http({
                method: "get",
                url: API_URL 
            }).then(response=>{
                vm.clientList = response.data.result;
                //vm.readToggleSelected();
            });
        };

        // Actualiza el registro del Cliente.
        vm.update = function (client, id) 
        {
            $http.put(API_URL + "/" + id, client).then(response=>{
                toastr.success("El cliente fué actualizado satisfactoriamente");
            }, error=> {
                toastr.error("Ocurrió un error al editar el cliente. Error: " + error);
            });
        }

        // Elimina el registro del cliente.
        vm.delete = function (id) 
        {
            SweetAlert.swal({
                  title: 'Eliminar Cliente',
                  text: "¿Está seguro que desea eliminar el Cliente?",
                  type: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si',
                  cancelButtonText: 'No',
                  confirmButtonClass: 'btn btn-success',
                  cancelButtonClass: 'btn btn-danger',
                  buttonsStyling: false
            }, function (dismiss) {
              if (dismiss === true) {
                    $http({
                        method: "delete",
                        url: API_URL + "/" + id
                    }).then(response=>{
                        toastr.success("El Cliente fué eliminado satisfactoriamente");
                        window.location = '/cliente';    
                    });
                }
             }); 
        }

        vm.readAll();
        
    }]);
    
})();