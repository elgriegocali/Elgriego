/* =========================================================================
   EL GRIEGO CALI — Precios de venta 2026
   ÚNICA fuente de verdad de los precios. Lo leen las dos páginas:
     · index.html   (app interna)
     · pedido.html  (la carta del cliente)

   PARA CAMBIAR UN PRECIO: se cambia acá, se commitea y se publica
   (GitHub Desktop → Push origin). Con eso queda cambiado en los dos lados.

   Ojo: el botón de "Costear / Editar FC" de la app interna guarda el precio
   solo en el teléfono (`elgriego_precios`). Sirve para simular, pero el
   cliente NO lo ve. Para que lo vea, el precio tiene que quedar acá.

   Si este archivo no llega a cargar, cada página se queda con los precios
   que trae en su propio código, así que nada se rompe.
   ========================================================================= */
var PRECIOS = {
  gyros_cerdo:   24000,
  gyros_pollo:   24000,
  gyros_bondiola:24000,
  kebab:         24000,
  mousaka:       30000,
  pastitsio:     30000,
  spanako:       22000,
  tiro:          22000,
  praso:         24000,
  ens_griega:    20000,
  dakos:         20000,
  gambas:        34000,
  pita:          12500,
  tzatziki:      18000
};
