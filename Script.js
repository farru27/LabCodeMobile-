function showPrivacy(){

const privacyWindow =
window.open("", "_blank");

privacyWindow.document.write(`

<!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0">

<title>
Política y Privacidad
</title>

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
margin-bottom:15px;
}

</style>

</head>

<body>

<h1>
⚖ Política y Privacidad
</h1>

<div class="card">

<h3>
Información General
</h3>

<p>
VSCode Mobile es una aplicación diseñada para crear, editar y ejecutar código desde dispositivos Android.
</p>

</div>

<div class="card">

<h3>
Recopilación de Datos
</h3>

<p>
La aplicación no recopila nombres, correos electrónicos, direcciones ni números de teléfono.
</p>

</div>

<div class="card">

<h3>
Almacenamiento Local
</h3>

<p>
Los proyectos y configuraciones se almacenan únicamente en el dispositivo mediante LocalStorage.
</p>

</div>

<div class="card">

<h3>
Permisos
</h3>

<p>
La aplicación utiliza únicamente los permisos necesarios para su funcionamiento.
</p>

</div>

<div class="card">

<h3>
Seguridad
</h3>

<p>
Se aplican medidas razonables para proteger los datos almacenados localmente.
</p>

</div>

<div class="card">

<h3>
Menores de Edad
</h3>

<p>
La aplicación puede ser utilizada por personas de todas las edades.
</p>

</div>

<div class="card">

<h3>
Cambios en esta Política
</h3>

<p>
Esta política podrá actualizarse en futuras versiones de la aplicación.
</p>

</div>

<div class="card">

<h3>
Última actualización
</h3>

<p>
31 de mayo de 2026
</p>

</div>

</body>

</html>

`);

privacyWindow.document.close();

}
