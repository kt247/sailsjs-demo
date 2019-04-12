module.exports = {


  friendlyName: 'Get user by ID',


  description: 'Get user with spectified ID.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      description: 'User was found in the database.',
    },

    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    let user = await User.findOne({ id: inputs.id });

    if (!user) {
      return exits.notFound();
    }
    ``
    return exits.success(user);

  }


};
