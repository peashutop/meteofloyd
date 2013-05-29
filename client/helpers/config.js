// http://docs.meteor.com/#accounts_config
Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes']
    // others tbd
  },
    requestOfflineToken:{
      // tbd
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'  
});
