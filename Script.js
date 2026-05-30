let files = {

html:
`<h1>Hola VSCode 🚀</h1>

<p>Editor Android funcionando</p>`,

css:
`body{
font-family:Arial;
padding:40px;
background:#f5f5f5;
}

h1{
color:#0078d7;
}`,

js:
`console.log("VSCode Mobile Android");`

};

let current = "html";

const editor =
document.getElementById("editor");

editor.value = files[current];

/* CAMBIAR TAB */

function changeTab(tab, element){

files[current] = editor.value;

current = tab;

editor.value = files[current];

document.querySelectorAll(".tab")
.forEach(t=>{
t.classList.remove("active");
});

element.classList.add("active");

}

/* EJECUTAR */

function runCode(){

files[current] = editor.value;

const finalCode = `

<!DOCTYPE html>

<html>

<head>

<style>

${files.css}

</style>

</head>

<body>

${files.html}

<script>

${files.js}

<\/script>

</body>

</html>

`;

document.getElementById("preview")
.srcdoc = finalCode;

}

/* MOSTRAR PREVIEW */

function showPreview(){

runCode();

document.getElementById("editorBox")
.style.display = "none";

document.getElementById("previewBox")
.style.display = "flex";

document.getElementById("editorBtn")
.classList.remove("active");

document.getElementById("previewBtn")
.classList.add("active");

}

/* VOLVER A EDITOR */

document.getElementById("editorBtn")
.onclick = function(){

document.getElementById("editorBox")
.style.display = "flex";

document.getElementById("previewBox")
.style.display = "none";

document.getElementById("previewBtn")
.classList.remove("active");

document.getElementById("editorBtn")
.classList.add("active");

};

/* POLÍTICA DE PRIVACIDAD */

function showPrivacy(){

const privacyHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Política de Privacidad</title>

<style>

body{
background:#1e1e1e;
color:white;
font-family:Arial,sans-serif;
padding:20px;
line-height:1.7;
}

h1{
color:#0078d7;
}

.card{
background:#252526;
padding:15px;
border-radius:12px;
margin-top:15px;
}

</style>

</head>

<body>

<h1>⚖ Política de Privacidad</h1>

<div class="card">
<p><b>VSCode Mobile</b> respeta tu privacidad.</p>

<p>La aplicación no recopila datos personales.</p>

<p>Los proyectos creados se almacenan únicamente en tu dispositivo mediante LocalStorage.</p>

<p>No compartimos información con terceros.</p>

<p>El usuario es responsable del contenido almacenado en la aplicación.</p>

<p>Última actualización: 2026.</p>
</div>

</body>
</html>
`;

const win = window.open();
win.document.write(privacyHtml);
win.document.close();

}

/* AUTOGUARDADO */

editor.addEventListener("input", ()=>{

files[current] = editor.value;

localStorage.setItem(
"vscode-mobile-android",
JSON.stringify(files)
);

});

/* CARGAR GUARDADO */

const saved =
localStorage.getItem(
"vscode-mobile-android"
);

if(saved){

files = JSON.parse(saved);

editor.value = files[current];

}

runCode();
