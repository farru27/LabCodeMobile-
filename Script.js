/* ===== ARCHIVOS ===== */

let files = {

html: `<h1>Hola 🚀</h1>
<p>Tu editor funciona perfecto</p>`,

css: `body{
font-family:Arial;
text-align:center;
padding:40px;
background:#f4f4f4;
}

h1{
color:#2563eb;
}`,

js: `console.log("CodeHub funcionando");`

};

/* ===== TAB ACTUAL ===== */

let current = "html";

/* ===== CARGAR EDITOR ===== */

const editor = document.getElementById("editor");

editor.value = files[current];

/* ===== CAMBIAR TAB ===== */

function changeTab(tab, element){

files[current] = editor.value;

current = tab;

editor.value = files[current];

document.querySelectorAll(".tab")
.forEach(t => t.classList.remove("active"));

element.classList.add("active");

}

/* ===== EJECUTAR CODIGO ===== */

function runCode(){

files[current] = editor.value;

const code = `
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

document.getElementById("preview").srcdoc = code;

}

/* ===== GUARDAR ===== */

function saveProject(){

files[current] = editor.value;

localStorage.setItem(
"codehub-project",
JSON.stringify(files)
);

alert("Proyecto guardado ✅");

}

/* ===== CARGAR GUARDADO ===== */

const saved = localStorage.getItem("codehub-project");

if(saved){

files = JSON.parse(saved);

editor.value = files[current];

runCode();

}

/* ===== NUEVO PROYECTO ===== */

function newProject(){

if(confirm("¿Crear nuevo proyecto?")){

files = {

html:"",
css:"",
js:""

};

editor.value = "";

runCode();

}

}

/* ===== INICIO ===== */

runCode();
