Polymer({
  toggle: function() {
    this.$.login.toggle();
  },
  submit: function() {
    this.fire('submit', { username: this.username, password: this.password });
    this.username = "";
    this.password = "";
  },
  keypressHandler: function(event) {
    if(event.keyCode === 13) {
      this.submit();
      this.$.login.close();
    }
  }
})
