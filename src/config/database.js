require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: './pj_escola.db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
