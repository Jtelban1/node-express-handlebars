const connection = require("./connection.js");

const Orm = {
    selectAll(cb) {
        connection.query("SELECT * FROM burgers ORDER BY id", function (
            err,
            result
        ) {
            cb(result);
        });
    },
    insertOne(name) {
        connection.query(
            `INSERT INTO burgers SET burger_name = "${name}"`,
            function (err, result) {
                if (err) throw new Error("failed");
            }
        );
    },
    updateOne(id, burgerObj) {
        connection.query(
            "UPDATE burgers SET devoured = " +
                burgerObj.devoured +
                " WHERE id = " +
                id,
            function (err) {
                if (err) throw new Error("failed");
            }
        );
    },
};

module.exports = Orm;
