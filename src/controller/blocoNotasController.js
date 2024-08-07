const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const blocoNotas = await prisma.blocoNotas.findMany();
    return res.json(blocoNotas);
  },

  async store(req, res) {
    const { titulo, texto, color, favoritos } = req.body;

    const blocoNotas = await prisma.blocoNotas.create({
      data: {
        titulo,
        texto,
        color,
        favoritos,
      },
    });

    return res.json(blocoNotas);
  },
};
