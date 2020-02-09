export default function validate(formData) {
  var errors = {};
  if (!formData.email) {
    errors.email = "Your email is required to login";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }
  if (!formData.password) {
    errors.password = "Please enter a password";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be atleast 6 characters";
  }
  return errors;
}
