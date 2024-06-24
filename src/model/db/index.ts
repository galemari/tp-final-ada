import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(
    'postgres://ijdczxef:ohn5fAXrIPVKCEc636seus0oZU7c6MB_@silly.db.elephantsql.com/ijdczxef'
);


async function testConnection() {
    try {
        return await sequelize.authenticate();
    } catch (error) {
        return new Error('Cannot establish connection to the server');
    }
}

export { testConnection, DataTypes, Model };
export default sequelize;