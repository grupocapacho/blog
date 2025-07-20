---
title: "El caso de las empanadas: cuando la interfaz no comunica lo que debe"
excerpt: Una interfaz de pedidos debe guiar al usuario, no confundirlo. En este análisis, exploramos un caso real donde pedir empanadas con varios sabores se vuelve un reto innecesario por culpa de un mal diseño de experiencia de usuario. Veremos por qué depender de una opción oculta y un campo de texto libre puede arruinar la interacción, y cómo pequeños cambios podrían mejorar radicalmente la experiencia.
publishDate: 'Jul 19 2025'
tags:
  - UX
  - Malas prácticas
  - Anécdota
seo:
  image:
    src: '/blog/el-caso-de-las-empanadas-cuando-la-interfaz-no-comunica-lo-que-debe.jpg'
    alt: Pastry breads on brown chopping board - Photo by Patryk Pastewski on Unsplash
---

![Pastry breads on brown chopping board](/blog/el-caso-de-las-empanadas-cuando-la-interfaz-no-comunica-lo-que-debe.jpg)

Hace poco, un amigo me compartió una experiencia frustrante al intentar pedir empanadas en línea desde la página de un restaurante. El problema surgió al intentar seleccionar varios sabores para su combo: cada vez que elegía un sabor, los demás se deshabilitaban automáticamente.

![La interfaz no permite seleccionar varios sabores](/blog/el-caso-de-las-empanadas-cuando-la-interfaz-no-comunica-lo-que-debe-gif.gif)

¿La solución? Según el encargado del restaurante, lo que debía hacer era seleccionar la opción *"mixta"* y luego escribir manualmente los sabores en un campo de texto libre. Esto no estaba indicado claramente en ningún lado de la interfaz.

Este es un excelente ejemplo de cómo una decisión de diseño mal comunicada puede perjudicar la experiencia de usuario. Veamos por qué.

## 1. Los sistemas deben hablar el idioma del usuario
Uno de los principios básicos de la usabilidad es que los sistemas deben comunicarse con los usuarios en su lenguaje, no en términos internos o suposiciones del negocio.

En este caso, *“mixta”* no deja claro que es la única opción que permite elegir múltiples sabores. Además, escribir sabores en un campo de texto es propenso a errores ortográficos o malentendidos.

**Mejor alternativa:** Permitir seleccionar múltiples sabores directamente con checkboxes o una lista multiselección clara.

## 2. Visibilidad del estado del sistema
La interfaz actual desactiva los otros sabores cuando uno es seleccionado, lo cual da la impresión de que sólo se puede escoger un sabor. El usuario no tiene forma de saber que existe una opción alternativa ni por qué los demás se deshabilitan.

**Mejor alternativa:** Mostrar siempre las opciones activas, y si hay una lógica especial para elegir sabores mixtos, mostrar una explicación visible cuando se selecciona esa opción.

## 3. Reconocer antes que recordar
Pedirle al usuario que recuerde todos los sabores disponibles y luego los escriba manualmente en un cuadro de texto es un ejemplo clásico de mala UX. En vez de reconocer opciones de una lista, el usuario debe recordarlas y escribirlas bien. Este no sería el caso porque las opciones están inmediatamente encima de la entrada de texto. Pero es importante tenerlo en cuenta.

**Mejor alternativa:** Usar listas o elementos visuales para ayudar al usuario a elegir sin memorizar nada.

## 4. Prevención de errores
Permitir entrada de texto libre para algo tan estructurado como sabores de empanada abre la puerta a errores: sabores mal escritos, sabores que no existen, o combinaciones no válidas. Esto genera trabajo adicional para el restaurante y frustración para el cliente.

**Mejor alternativa:** Limitar la selección a elementos predefinidos y validar la cantidad permitida si hay límites (por ejemplo, hasta 3 sabores por combo).

## 5. Si el usuario necesita instrucciones externas, la interfaz falló
Si el usuario necesita ir físicamente al restaurante o llamar por teléfono para entender cómo funciona la selección de sabores, el diseño no está cumpliendo su función. El diseño debe ser autosuficiente, claro y directo.

## ¿Cómo podría resolverse?
- La interfaz le prermite al usuario seleccionar varias opciones.
- Las demás opciones se deshabilitan cuando el usuario selecciona el máximo de opciones permitidas.
- No hay una opción *"Mixto"* ya que al seleccionar varias opciones ya está siendo un pedido mixto.
- Mantener consistencia en el idioma de la interfaz.
![Propuesta nueva de interfaz](/blog/el-caso-de-las-empanadas-cuando-la-interfaz-no-comunica-lo-que-debe.png)


Este caso nos recuerda que diseñar una interfaz no es solo hacer que algo funcione técnicamente, sino hacer que sea intuitivo, claro y sin fricciones para el usuario. Cada decisión debe estar pensada desde el punto de vista de quien va a usarla, no de quien la configuró.
