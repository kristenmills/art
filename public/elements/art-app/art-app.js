Polymer({
  handleLogin: function(event) {
    this.$.auth.username = event.detail.username;
    this.$.auth.password = event.detail.password;
    this.$.auth.login();
  },
  handleLogout: function(event) {
    this.$.auth.logout();
  }
});
