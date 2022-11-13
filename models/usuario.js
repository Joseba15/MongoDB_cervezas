const { match } = require('assert');
const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Apellidos: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        
    },
    Nick: {
        type: String,
        required: [true, 'La graduación es obligatoria'],
    },
    Email: {
        type: String,
        required: [true, 'La Contraseña es obligatoria'],
        match:[/.+\@.+|..+/,'El email tiene que ser correcto en formato email']
    },
    Contraseña: {
        type: String,
        required: [true, 'La Contraseña es obligatoria'],
        minlenght:[8,'La contraseña no puede tener menos de 8 caracteres']
    },
    Fecha_de_creacion:{
        type: Date , default: Date.now,
        required:[true, 'La fecha es obligatoria']
    }
});



module.exports = model( 'Users', UsersSchema );