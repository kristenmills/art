Polymer({
  toggle: function() {
    this.$.login.toggle();
  },
  submit: function() {
    this.fire('submit', { username: this.username, password: this.password });
  }
})
