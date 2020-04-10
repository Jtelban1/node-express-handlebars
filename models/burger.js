const orm = require("../config/orm");

const Burger = {
    getBurgers(cb) {
        orm.selectAll(cb);
    },
    devourBurger(burgerId) {
        orm.updateOne(burgerId, { devoured: true });
    },
    createBurger(name) {
        orm.insertOne(name);
    },
};

module.exports = Burger;
