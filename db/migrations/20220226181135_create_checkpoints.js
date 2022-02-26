exports.up = function(knex) {
  return knex.schema
    .createTable('checkpoints', function (table) {
      table.increments('id');
      table.string('tracking_number', 255).notNullable();
      table.string('location', 255);
      table.timestamp('timestamp', { useTz: true });
      table.string('status', 255);
      table.string('status_text', 255);
      table.string('status_details', 255);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('checkpoints');
};