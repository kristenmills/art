Polymer({
  showLogin: function(e) {
    e.preventDefault();
    this.$.login.toggle();
  },
  go: function(e) {
    e.preventDefault();
    this.router.go(e.currentTarget.attributes.href.value);
  }
});
