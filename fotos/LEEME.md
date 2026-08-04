# Fotos de los platos

Acá van las fotos que salen en la carta del cliente (`pedido.html`).

## Cómo agregar una foto

Guarda el archivo en esta carpeta con **exactamente** el nombre de la lista de
abajo, en `.jpg` y en minúsculas. No hay que tocar código: la app la muestra sola.
Si el archivo no existe, la tarjeta sale sin foto, como hasta ahora — así que se
pueden ir subiendo de a poco.

## Nombres de archivo

| Plato                 | Archivo                |
|-----------------------|------------------------|
| Gyros de Cerdo        | `gyros_cerdo.jpg`      |
| Gyros de Pollo        | `gyros_pollo.jpg`      |
| Gyros de Bondiola     | `gyros_bondiola.jpg`   |
| Kebab Estilo Thanasis | `kebab.jpg`            |
| Mousaka               | `mousaka.jpg`          |
| Pastitsio             | `pastitsio.jpg`        |
| Spanakopitakia        | `spanako.jpg`          |
| Tiropitakia           | `tiro.jpg`             |
| Prasopitakia          | `praso.jpg`            |
| Gambas Saganaki       | `gambas.jpg`           |
| Ensalada Griega       | `ens_griega.jpg`       |
| Ensalada Dakos        | `dakos.jpg`            |
| Tzatziki              | `tzatziki.jpg`         |
| Pan Pita              | `pita.jpg`             |

Los nombres salen de la `key` de cada plato en `pedido.html`. Si algún día se
agrega un plato nuevo, su foto se llama igual que su `key`.

## Cómo deben ser

- **Cuadradas** (1:1). La app las recorta al centro, así que el plato va centrado.
- **800 × 800 px** es más que suficiente. Se ven a 96 px en pantalla.
- **JPG**, por debajo de **150 KB** cada una. Son 14 fotos: si pesan mucho, la
  carta se demora en cargar con datos móviles y el cliente se va.
- Fotos **reales de nuestros platos**. Nada de bancos de imágenes ni fotos
  genéricas de comida griega: el cliente pide lo que ve, y si no le llega eso,
  el reclamo es justo.

Para bajarles el peso sin instalar nada, en el Mac: abrir la foto en
**Vista Previa → Herramientas → Ajustar tamaño** (800 × 800) y luego
**Archivo → Exportar** en JPEG con la calidad como en 70–80%.
