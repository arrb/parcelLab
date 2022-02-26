exports.up = function(knex) {
  return knex.schema
    .createTable('tracking', function (table) {
      table.increments('id');
      table.string('orderNo', 255).notNullable();
      table.string('tracking_number', 255).notNullable();
      table.string('courier', 255);
      table.string('street', 255);
      table.string('zip_code', 255);
      table.string('city', 255);
      table.string('destination_country_iso3', 255);
      table.string('email', 255);
      table.string('articleNo', 255);
      table.string('articleImageUrl', 255);
      table.string('quantity', 255);
      table.string('product_name', 255);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tracking');
};

