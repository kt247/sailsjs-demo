module.exports = {


  friendlyName: 'Get user',


  description: 'Get all users.',


  inputs: {

  },


  exits: {
    success: {
      description: 'Users were found in the database.',
    },

    notFound: {
      description: 'No users were found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    let users = await User.find({});

    if (!users) {
      return exits.notFound();
    }
    ``
    return exits.success(users);

  }


};
