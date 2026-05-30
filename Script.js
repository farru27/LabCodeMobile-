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
function showPrivacy(){

alert(

"⚖ POLÍTICA Y PRIVACIDAD\n\n" +

"VSCode Mobile es una aplicación para crear, editar y ejecutar código.\n\n" +

"• No recopilamos datos personales.\n\n" +

"• Los proyectos se almacenan únicamente en tu dispositivo.\n\n" +

"• No compartimos información con terceros.\n\n" +

"• La aplicación puede recibir actualizaciones futuras.\n\n" +

"• Última actualización: 31 de mayo de 2026."

);

}
