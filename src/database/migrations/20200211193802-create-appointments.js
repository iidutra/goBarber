module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('appointments', {
            id: {
                type: Sequelize.INTEGER,
                allowNulll: false,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                allowNulll: false,
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            provider_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            canceled_at: {
                type: Sequelize.DATE,
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
