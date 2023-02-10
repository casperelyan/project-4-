//code to toggle the password visibility
<script>
  document.addEventListener("DOMContentLoaded", function() {
    function togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    }
  });
</script>