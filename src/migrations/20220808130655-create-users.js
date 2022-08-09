'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				type: Sequelize.STRING
			},
			pw: {
				type: Sequelize.STRING
			},
			fullname: {
				type: Sequelize.STRING
			},
			addr: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.BOOLEAN
			},
			roleType: {
				type: Sequelize.STRING,
				default: 'ROLE'
			},
			roleKey: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};