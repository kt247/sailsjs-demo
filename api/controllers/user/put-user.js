module.exports = {


  friendlyName: 'Put user',


  description: 'Update user information',


  inputs: {
    id: {
      type: 'number',
      required: true
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
  },


  exits: {
    success: {
      description: 'User was updated'
    },

    notFound: {
      description: 'User was not updated successfully',
      respondType: 'error'
    }
  },


  fn: async function (inputs, exits) {

    return await User.update(await User.findOne({ id: inputs.id }), inputs) ? exits.notFound() : exits.success();

  }


};
