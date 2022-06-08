const pool = require('../utils/pool');

module.exports = class Gem {
    id;
    name;
    nickname;
    species;
    weapon;
    components;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.nickname = row.nickname;
        this.species = row.species;
        this.weapon = row.weapon;
        this.components = row.components;
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM gems;');
        return rows.map((row) => new Gem(row));
    }

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM gems WHERE id=$1', [id]);
        if (!rows[0]) return null;

        return new Gem(rows[0]);
    }
};