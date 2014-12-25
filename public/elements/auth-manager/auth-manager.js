Polymer({
  username: "",
  password: "",
  handleLogin: function(event) {
    this.loggedIn = true;
    this.user = { username: event.detail.loggedIn, role: event.detail.role };
  },
  handleLogout: function(event) {
    this.loggedIn = false;
    this.user = {};
  },
  handleLoggedIn: function(event) {
    this.loggedIn = event.detail.loggedIn;
    this.user = { username: event.detail.loggedIn, role: event.detail.role };
    console.log(this.user);
  },
  login: function() {
    this.$.login.go();
  },
  logout: function() {
    this.$.logout.go();
  }
});
