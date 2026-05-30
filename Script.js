function showPrivacy(){

document.body.innerHTML = `

<div style="
background:#1e1e1e;
color:white;
min-height:100vh;
padding:20px;
font-family:Arial,sans-serif;
">

<button onclick="location.reload()" style="
background:#0078d7;
color:white;
border:none;
padding:12px 18px;
border-radius:12px;
margin-bottom:20px;
font-size:16px;
">
⬅ Volver
</button>

<h1 style="color:#0078d7;">
⚖ Política de Privacidad
</h1>

<div style="
background:#252526;
padding:15px;
border-radius:12px;
margin-top:15px;
">

<h3>Información General</h3>

<p>
VSCode Mobile es un editor de código para dispositivos Android.
</p>

<h3>Privacidad</h3>

<p>
La aplicación no recopila datos personales como nombre, correo electrónico o ubicación.
</p>

<h3>Almacenamiento</h3>

<p>
Los proyectos se almacenan únicamente en el dispositivo mediante LocalStorage.
</p>

<h3>Terceros</h3>

<p>
No compartimos información con terceros.
</p>

<h3>Seguridad</h3>

<p>
Toda la información permanece en el dispositivo del usuario.
</p>

<h3>Cambios</h3>

<p>
Esta política puede actualizarse en futuras versiones de la aplicación.
</p>

<h3>Última actualización</h3>

<p>
Agosto 2026
</p>

</div>

</div>

`;

}
