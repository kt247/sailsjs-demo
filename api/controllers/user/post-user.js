module.exports = {


  friendlyName: 'Post user',


  description: 'Post new user.',


  inputs: {
    email: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    },
  },


  exits: {
    success: {
      description: 'User was added successfully to the database.'
    },

    error: {
      description: 'User was not added successfully to the database.',
      responseType: 'error'
    }
  },


  fn: async function (inputs, exits) {

    return await User.create(inputs) ? exits.error() : exits.success();

  }


};
