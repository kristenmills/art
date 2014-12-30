Polymer({
  toggle: function() {
    this.$.upload.toggle();
  },
  triggerFileUpload: function() {
    this.$.file.$.fileInput.fire('click');
  },
  submit: function() {
    this.$.uploadForm.submit();
  }
});
