module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNulll: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNulll: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNulll: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNulll: false,
            },
            provider: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNulll: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNulll: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNulll: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
