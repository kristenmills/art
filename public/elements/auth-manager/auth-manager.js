Polymer({
  username: "",
  password: "",
  handleLogin: function(event) {
    this.loggedIn = true;
    this.user = { username: event.detail.response.user, role: event.detail.response.role };
  },
  handleLogout: function(event) {
    this.loggedIn = false;
    this.user = {};
  },
  handleLoggedIn: function(event) {
    this.loggedIn = event.detail.response.loggedIn;
    this.user = { username: event.detail.response.user, role: event.detail.response.role };
  },
  login: function() {
    this.$.login.go();
  },
  logout: function() {
    this.$.logout.go();
  }
});
