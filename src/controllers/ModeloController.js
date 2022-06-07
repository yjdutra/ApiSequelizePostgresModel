const Statuses = require("../models/Statuses");

async function veriftById(collection, id) {
  const identification = await collection.findByPk(id);
  if (!identification) {
    return res.status(400).json({ err: "Identification not found" });
  }
}

module.exports = {
  async store(req, res) {
    const { forca, destreza, constituicao, inteligencia, sabedoria, carisma } =
      req.body;

    const status = await Statuses.create({
      forca,
      destreza,
      constituicao,
      inteligencia,
      sabedoria,
      carisma,
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(status);
  },

  async show(req, res) {
    const status = await Statuses.findAll().catch((err) => {
      throw new Error(err);
    });

    return res.json(status);
  },

  async index(req, res) {
    const { id } = req.params;

    const status = await Statuses.findByPk(id).catch((err) => {
      throw new Error(err);
    });

    return res.json(status);
  },

  async update(req, res) {
    const { id } = req.params;

    veriftById(Statuses, id);

    const { forca, destreza, constituicao, inteligencia, sabedoria, carisma } =
      req.body;

    const status = await Statuses.update(
      {
        forca: forca,
        destreza: destreza,
        constituicao: constituicao,
        inteligencia: inteligencia,
        sabedoria: sabedoria,
        carisma: carisma,
      },
      {
        where: { id: id },
      }
    ).catch((err) => {
      throw new Error(err);
    });

    return res.json(status);
  },

  async delete(req, res) {
    const { id } = req.params;

    veriftById(Statuses, id);

    const status = await Statuses.destroy({
      where: { id },
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(status);
  },
};