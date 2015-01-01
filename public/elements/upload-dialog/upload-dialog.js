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
  },
  submitted: function(event) {
    if (event.detail.status > 299) {
      this.fire('submit', {toastMessage: "Couldn't upload art."});
    } else {
      this.fire('submit', {toastMessage: 'Successfully uploaded art for judging'});
      // TODO: Reset the form
    }
  },
  invalid: function(event) {
    this.fire('submit', {toastMessage: "Couldn't upload art."});
  }
});
