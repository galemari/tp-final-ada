import sequelize from '.';

(async () => await sequelize.drop())();
console.log('All models were deleted successfully.');

// (async () => await sequelize.sync({ force: true }))();
// console.log('All models were synchronized successfully.');
