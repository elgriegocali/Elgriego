/* =========================================================================
   EL GRIEGO CALI — Menús para compartir
   ÚNICA fuente de verdad de los menús. Los leen las dos páginas:
     · index.html   (app interna, pestaña Nuevo)
     · pedido.html  (la carta del cliente)

   Son presets de cantidades a PRECIO PLENO: no llevan descuento. Lo que
   resuelven no es el precio, es la decisión — el cliente que no sabe qué
   pedir para cuatro personas. Por eso nada de lenguaje de rebaja acá.

   PARA CAMBIARLOS: se cambian acá, se commitea y se publica. Con eso quedan
   cambiados en los dos lados. Si el archivo no carga, cada página se queda
   con lo que trae en su propio código y nada se rompe.
   ========================================================================= */
/* `para` sale en la tarjeta y es lo primero que mira el cliente que no sabe
   qué pedir. Confirmado por Haris en ago 2026 — no cambiarlo a ojo. */
var MENUS = [
  {
    nombre:'Familiar 1',
    desc:'2 Gyros · Ensalada Griega · Pan Pita',
    para:'Para 2 personas',
    items:[{key:'gyros_cerdo',qty:2},{key:'ens_griega',qty:1},{key:'pita',qty:1}]
  },
  {
    nombre:'Familiar 2',
    desc:'2 Mousaka · Ensalada Griega · Spanakopitakia · Tzatziki · Pan Pita',
    para:'Para 3 o 4 personas',
    items:[{key:'mousaka',qty:2},{key:'ens_griega',qty:1},{key:'spanako',qty:1},{key:'tzatziki',qty:1},{key:'pita',qty:1}]
  },
  {
    nombre:'Familiar 3',
    desc:'3 Mousaka · 2 Kebab · Ensalada Griega · Spanakopitakia',
    para:'Para 5 o 6 personas',
    items:[{key:'mousaka',qty:3},{key:'kebab',qty:2},{key:'ens_griega',qty:1},{key:'spanako',qty:1}]
  }
];
