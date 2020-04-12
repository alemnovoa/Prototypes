function Cliente(nombre, saldo){
     this.nombre = nombre;
     this.saldo = saldo;
}

// Prototype que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
     return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente ('Pedro', 100);

console.log(cliente1);

// Banca para empresas

function Empresa(nombre,saldo,telefono,tipo) {
     Cliente.call(this, nombre,saldo); // ACA HEREDA DE LA FUNCION DE Cliente
     this.telefono = telefono;
     this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype); // CREANDO LA HERENCIA DE nombreClienteSaldo

const empresa = new Empresa('Ale', 10000, 1170458598, 'Educacion');

console.log(empresa.nombreClienteSaldo());