const db = require('../models/db')
const { response, request } = require('express');
const Users = require('../models/users');
const bcryiptjs = require(bcryiptjs);



async function getUsers(req, res) {
    const {Nombre, Envase} = req.query
    const query = {Nombre, Envase}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
    // res.json(db.cervezas.find(query))
    const users = await Users.find(query)
    res.json(users)
}

async function getUser(req =request, res = response) {
    const id = req.params.id
    const users = await Users.findById( id);
    console.log(`El Objeto ha salido ${users}`)
    if (users !=null) {
        res.json(users);
    } else {
        res.json({ message: `El usuario ${id} no existe` })
    }

}


async function addUser(req = request, res = response) {
    // const beer = req.body
    // const inserted = db.cervezas.save(beer)
    // res.json(inserted)
    
    
    const { Nombre, Apellidos, Nick, Email, Contraseña, Fecha_de_creacion} = req.body;
    
    const isEmailExist = await users.find({Email})
    if(isEmailExist.length){
        return res.status(400).json({
            "msg": "Email alredy exists "

        })
    }

    const users = new Users({ Nombre, Apellidos, Nick, Email, Contraseña, Fecha_de_creacion});
    
    const salt = bcryiptjs.genSaltSync;
    users.Contraseña = bcryptjs.hashSync( Contraseña, salt );

    // Guardar en BD
    await users.save();

    res.json({
        users
    });
}




async function deleteUser(req, res){
    const itemId = req.params.id;
    console.log("Delete item with id: ", itemId);
 
    await Users.findByIdAndDelete( itemId );
 
     res.json("delete item yes");
}

async function editUser(req = request, res = response) {
    const usersId = req.params.id;
    const users = req.body;
    const updateUsers =  await Users.findByIdAndUpdate(usersId, users);

    res.json(updateUsers);
}

module.exports = { getUsers, getUser, addUser, deleteUser, editUser, }