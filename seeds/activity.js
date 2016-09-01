
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({ id: 1, location: 'Confluence', name: 'frisby', duration: 60, is_free: true}),
        knex('activity').insert({ id: 2, location: 'Cherry Creek Golf Club', name: 'golf', duration: 240, is_free: false}),
        knex('activity').insert({ id: 3, location: 'North Table Mountain', name: 'hiking', duration: 7, is_free: true})
      ]);
    });
};
