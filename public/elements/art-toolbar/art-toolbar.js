Polymer({
  isHidden: true,
  toggleLogin: function(event) {
    event.preventDefault();
    this.$.login.toggle();
  },
  go: function(event) {
    event.preventDefault();
    this.router.go(event.currentTarget.attributes.href.value);
  },
  handleSubmit: function(event) {
    this.fire('login', { username: event.detail.username, password: event.detail.password });
  },
  logout: function(event) {
    event.preventDefault();
    this.fire('logout', {});
  }
});
