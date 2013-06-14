Control.create('LoginForm', {
  extend: Form,

  onSubmit: function (fields, form) {
    console.log(fields);
    form.reset();
  }
});
