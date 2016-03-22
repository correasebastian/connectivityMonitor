#build with package 

i only have to do 
ionic io init

and later ionic package  --optiosn


angular no responde bien a primitivas
asi que hay dos opciiones como en el servicio, 
asiganale toto el servicio a una variable del controlador

vm.xservicio=XXsevricio
y exporner en la api del servicio una variable (primitiva)

y en la vista hacer algo asi

ng-show="vm.xservicio.primitiva"



##o la otra opcion hacer la referencia a una funcion

vm.isonline=xxservicio.isonline //esto es una funcion

y en la vista ng-show="vm.isonline()"