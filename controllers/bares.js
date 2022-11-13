const db = require('../models/db')
const { response, request } = require('express');
const Bares = require('../models/bares');




async function getBares(req, res) {
    const {Nombre, Envase} = req.query
    const query = {Nombre, Envase}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
    // res.json(db.cervezas.find(query))
    const bares = await Bares.find(query)
    res.json(bares)
}

async function getBar(req =request, res = response) {
    const id = req.params.id
    const bares = await Bares.findById( id);
    console.log(` ha salido ${bares}`)
    if (bares !=null) {
        res.json(bares);
    } else {
        res.json({ message: `El bar ${id} no existe` })
    }

}


async function addBar(req = request, res = response) {
    // const beer = req.body
    // const inserted = db.cervezas.save(beer)
    // res.json(inserted)
    const { Nombre, Descripción, Calles } = req.body;
    const bares = new Bares({ Nombre, Descripción, Calles});


    // Guardar en BD
    await bares.save();

    res.json({
        bares
    });
}


async function deleteBar(req, res){
    const itemId = req.params.id;
    console.log("Delete item with id: ", itemId);
 
    await Bares.findByIdAndDelete( itemId );
 
     res.json("delete item yes");    
}

async function editBar(req = request, res = response) {
    const barId = req.params.id;
    const bar = req.body;
    const updatedBar =  await Bares.findByIdAndUpdate(barId, bar);

    res.json(updatedBar);
}

module.exports = { getBares ,getBar, addBar, deleteBar, editBar }