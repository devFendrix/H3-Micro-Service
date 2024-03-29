const AreaModel = require("./area.model")

// Endpoint : Création d'une area
const create = async (req, res) => {
    const { name, price } = req.body
    AreaModel.create({ name, price })
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((error) => {
            console.error(error)
            res.send({ msg: "Erreur lors de la création de area !", error: error })
        });
}

// Endpoint : Récupération des area
const areas = async (req, res) => {
    try {
        const areas = await AreaModel.find()
        res.json(areas)
    } catch (error) {
        console.error('Erreur lors de la récupération des areas :', error)
        res.status(500).json({ error: 'Erreur lors de la récupération des areas !' })
    }
}

// Endpoint : Mise à jour d'une area
const update = async (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    AreaModel.findByIdAndUpdate(id, { name, price })
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Erreur lors de l'update de l'area !" })
        });
}

module.exports = {
    create,
    areas,
    update,
};