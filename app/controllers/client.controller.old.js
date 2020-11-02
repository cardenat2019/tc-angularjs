// (function () {
//     "use strict";

//     angular
//         .module('AppExamen', ['ngRoute'])
//         .controller('ClientControllerOld', ClientController);

//         ClientController.$inject = ['$scope', '$routeParams', 'CONFIG', 'ClientService', 'HOST_ROUTE', 'SweetAlert'];

//     function ClientController($scope, $routeParams, CONFIG, ClientService, HOST_ROUTE, SweetAlert) {
        
//         var vm = this;

//         vm.ClientList = [];

//         vm.Client = {};

//         vm.create = ()=>{
//           //vm.setToggleSelected();
//           ClientService.create(vm.product).then(response=>{
//                 var client = response.data;                
//                 toastr.success("El Cliente fué creado satisfactoriamente");
//             },error=>{
//                 toastr.error("Ocurrió un error al crear el producto. Error: " + error);
//             });
//         }

//         vm.update = ()=>{
//             //vm.setToggleSelected();
//             clientService.update(vm.client, vm.product.id).then(response=>{
//                 var retorno = response.data;
//                 toastr.success("El cliente fué actualizado satisfactoriamente");
//             }, error=> {
//                 toastr.error("Ocurrió un error al editar el cliente. Error: " + error);
//             });
//         }  

//         vm.delete = (id)=>{
//             SweetAlert.swal({
//                   title: 'Eliminar Cliente',
//                   text: "¿Está seguro que desea eliminar el Cliente?",
//                   type: 'question',
//                   showCancelButton: true,
//                   confirmButtonColor: '#3085d6',
//                   cancelButtonColor: '#d33',
//                   confirmButtonText: 'Si',
//                   cancelButtonText: 'No',
//                   confirmButtonClass: 'btn btn-success',
//                   cancelButtonClass: 'btn btn-danger',
//                   buttonsStyling: false
//             }, function (dismiss) {
//               if (dismiss === true) {
//                 ClientService.delete(id).then(response=>{
//                     toastr.success("El Cliente fué eliminado satisfactoriamente");
//                     window.location = '/cliente';    
//                 });
//               }
//             }); 

//         }   

//         vm.edit = (id, IdCountry)=>{
//             ClientService.read(id).then(response=>{
//                 vm.client = response.data;
// //                vm.readToggleSelected();
//             });
//         }

//         vm.readAll = ()=>{
//             ClientService.readAll().then(response=>{
//                 vm.ClientList = response.data;
//             }); 
//         }

//     }
// })();