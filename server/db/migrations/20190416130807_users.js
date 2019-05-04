exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.string("first_name");
    t.string("last_name");
    t.string("username").unique();
    t.string("email").unique();
    t.string("password");
    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
