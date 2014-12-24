Polymer({
  goTo: function(e) {
    e.preventDefault();
    this.fire('toolbar-clicked', { state: e.currentTarget.attributes.state.value });
  }
});
