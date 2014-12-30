Polymer({
  toggle: function() {
    this.$.upload.toggle();
  },
  triggerFileUpload: function() {
    this.$.file.$.fileInput.fire('click');
  },
  submit: function() {
    this.$.uploadForm.submit();
  },
  displayFile: function() {
    this.$.fileName.innerHTML = this.$.file.files[0].name;
  }
});
