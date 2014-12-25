Polymer({
  go: function(e) {
    e.preventDefault();
    this.$.router.go(e.currentTarget.attributes.href.value);
  }
});
