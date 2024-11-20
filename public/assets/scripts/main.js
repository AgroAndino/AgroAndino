//Verificación de formulario
document
  .getElementById("InscripSec")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = document.querySelector('form[name="frm"]');
    form.addEventListener("submit", (event) => {
      const fname = form.elements["fname"].value;
      const flname = form.elements["flname"].value;
      const femail = form.elements["femail"].value;
      const fphone = form.elements["fphone"].value;

      if (!fname || !flname || !femail || !fphone) {
        event.preventDefault();
        alert("Please, complete all the required fields");
      } else if (!validateEmail(femail)) {
        event.preventDefault();
        alert("Please, insert a valid email");
      } else {
        alert("Thank you for helping us grow!");
      }
    });

    //crear función validateEmail
    function validateEmail(femail) {
      const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
      return re.test(String(femail).toLowerCase());
    }
  });
