'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Phương',
      lastName: 'Phạm Xuân',
      address: 'Hiệp Hòa, Vĩnh Bảo, Hải Phòng, Việt Nam',
      phoneNumber: '0864264597',
      gender: 1,
      image: null,
      roleId: 'R1',
      positionId: 'P4',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
