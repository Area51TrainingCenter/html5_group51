## CSS

## Propiedad
`display`

## Valores mas usados
> `block`, `inline`, `inline-block` y `none`.

### block
Se caracteriza por ocupar una nueva línea y, generalmente, todo el ancho del elemento HTML donde este contenido.
`<div>` es el elemento HTML mas usado que tiene este valor.

Existen 2 grupos de elementos HTML que tienen asignado este valor por defecto:
Para secciones: 
`<body>``, `<section>`, `<nav>`, `<article>`, `<aside>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<header>`, `<footer>`, `<address>`, `<main>`.
Para agrupar contenido: 
`<p>`, `<hr>`, `<pre>`, `<blockquote>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<div>`.
También llamados "de tipo bloque".

### inline
Individualmente no tiene algo que lo caracterice pero al tener otros elementos HTML con el mismo valor (display: inline), estos se juntan uno al lado del otro según la alineación de texto dada (Izquierda, Derecha, Centrado o Justificado), entre textos. Es usado usualmente dentro de contenedores de texto como `<p>`, `<a>`, etc.
No permiten propiedades como padding-top, padding-bottom, margin-top, margin-bottom, width y height.
Elementos HTML que tienen asignado este valor por defecto:
`<a>`, `<em>`, `<strong>`, `<small>`, `<s>`, `<cite>`, `<q>`, `<time>`, `<sub>`, `<sup>`, `<i>`, `<b>`, `<u>`, `<span>`.
Tambien llamados "de tipo en línea".

### inline-block
Lo mismo que inline pero si admite el uso de padding-top, padding-bottom, margin-top, margin-bottom, width y height.
No hay elementos HTML que tengan asignado este valor, se asigna manualmente.
Se usa principalmente sobre elementos HTML de tipo en línea, generalmente cuando se maquetan links o botones.

### none
Oculta el elemento HTML.
No hay elementos HTML que tengan asignado este valor, se asigna manualmente.
Si puede aplicar sobre cualquier elemento HTML.


Especificación técnica: https://developer.mozilla.org/en-US/docs/CSS/display
Listado de Elementos HTML5: https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5/HTML5_element_list

GLOSARIO
elemento HTML = tag, etiqueta html.