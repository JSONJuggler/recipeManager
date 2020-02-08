export default function validate(formData) {
  var errors = {};
  if (!formData.username) {
    errors.username = "Username is required";
  }
  if (!formData.email) {
    errors.email = "Your email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }
  if (!formData.password) {
    errors.password = "Please enter a password";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be atleast 6 characters";
  }
  if (!formData.password2) {
    errors.password2 = "Please confirm your password";
  } else if (formData.password.length !== formData.password2.length) {
    errors.password2 = "Password must be the same length";
  }
  return errors;
}

// export default function validate(formData) {
//   var errors = {};
//   if (!formData.username) {
//     errors.username = [{ msg: "Username is required" }];
//   }
//   if (!formData.email) {
//     errors.email = [{ msg: "Your email is required" }];
//   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//     errors.email = [{ msg: "Email address is invalid" }];
//   }
//   if (!formData.password) {
//     errors.password = [{ msg: "Please enter a password" }];
//   }
//   if (!formData.password2) {
//     errors.password2 = [{ msg: "Please confirm your password" }];
//   }
//   return errors;
// }
