const { Schema, model } = require('mongoose');

const BaresSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Descripción: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        
    },
    Calles: {
        type: String,
        required: [true, 'La calle es obligatoria'],
    },
});

module.exports = model( 'Bares', BaresSchema );