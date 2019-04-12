module.exports = {


  friendlyName: 'Delete user',


  description: 'Delete user',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      description: 'User was deleted successfully'
    },

    notFound: {
      description: 'User was not deleted successfully',
      respondType: 'error'
    }
  },


  fn: async function (inputs, exits) {

    return await User.destroy(await User.findOne({ id: inputs.id })) ? exits.notFound() : exits.success();

  }


};
