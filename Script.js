function showPrivacy(){

const modal = document.createElement("div");

modal.innerHTML = `
<div style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.7);
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
padding:20px;
">

<div style="
background:#2d2d2d;
color:white;
padding:25px;
border-radius:15px;
max-width:500px;
width:100%;
font-family:Arial,sans-serif;
">

<h2 style="margin-bottom:15px;">
⚖ LabCodeMobile
</h2>

<p style="margin-bottom:15px;">
<b>POLÍTICA Y PRIVACIDAD</b>
</p>

<p>• No recopilamos datos personales.</p>
<br>

<p>• Los proyectos se almacenan únicamente en tu dispositivo.</p>
<br>

<p>• No compartimos información con terceros.</p>
<br>

<p>• La aplicación puede recibir actualizaciones futuras.</p>
<br>

<p>• Última actualización: 31 de mayo de 2026.</p>

<button id="closePrivacy"
style="
margin-top:20px;
width:100%;
padding:12px;
border:none;
border-radius:10px;
background:#0078d7;
color:white;
font-weight:bold;
font-size:16px;
cursor:pointer;
">
ACEPTAR
</button>

</div>
</div>
`;

document.body.appendChild(modal);

document
.getElementById("closePrivacy")
.onclick = () => modal.remove();

}
