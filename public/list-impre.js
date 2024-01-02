const impres = [
    { "MARCA": "HP", "MODELO": "1005", "PRECIO": 110.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1010", "PRECIO": 110.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1015", "PRECIO": 110.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1022", "PRECIO": 110.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1320", "PRECIO": 105.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1102", "PRECIO": 180.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "1606", "PRECIO": 136.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "2035", "PRECIO": 173.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "2055", "PRECIO": 185.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "2015", "PRECIO": 100.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "XEROX", "MODELO": "3020", "PRECIO": 230.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "3015", "PRECIO": 320.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M203", "PRECIO": 370.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M402", "PRECIO": 250.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M404", "PRECIO": 320.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "PRO 400", "PRECIO": 320.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "LEXMARK", "MODELO": "610", "PRECIO": 190.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "LEXMARK", "MODELO": "E460", "PRECIO": 130.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "SAMSUNG", "MODELO": "3750", "PRECIO": 200.00, "IMAGEN": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05741429.png" },
    { "MARCA": "HP", "MODELO": "4015", "PRECIO": 320.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "4515", "PRECIO": 340.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "E60055", "PRECIO": 390.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M600", "PRECIO": 440.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M605", "PRECIO": 530.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M750 COLOR A3", "PRECIO": 490.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M9050 MULTIFUNCION", "PRECIO": 490.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "9000/9050", "PRECIO": 900.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "COLOR MULTIFUNCION 2320", "PRECIO": 540.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M426", "PRECIO": 490.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "PRO M425", "PRECIO": 550.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "M521", "PRECIO": 550.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION MX611", "PRECIO": 248.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION MX710", "PRECIO": 373.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION X464", "PRECIO": 373.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "BROTHER", "MODELO": "MULTIFUNCION 8860", "PRECIO": 248.00, "IMAGEN": "https://www.brother.eu/-/media/product-images/devices/printers/mfc/mfc8860dn/mfc8860dn_main.png?rev=39f19963b24541fc806f4f0c802f2d36" },
    { "MARCA": "RICOH", "MODELO": "MULTIFUNCION 3510F", "PRECIO": 280.00, "IMAGEN": "https://assets.rbl.ms/31808395/origin.png" },
    { "MARCA": "SAMSUNG", "MODELO": "MULTIFUNCION 5637", "PRECIO": 300.00, "IMAGEN": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05741429.png" },
    { "MARCA": "XEROX", "MODELO": "WORKCENTER MULTI 3550", "PRECIO": 300.00, "IMAGEN": "https://www.xerox.com/assets/images/brand_engine/products/hardware/WC3550/hero_960x960.png" },
    { "MARCA": "HP", "MODELO": "COLOR 1515", "PRECIO": 320.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "HP", "MODELO": "COLOR 2025", "PRECIO": 370.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "LEXMARK", "MODELO": "T654", "PRECIO": 160.00, "IMAGEN": "https://media.lexmark.com/www/product/small/04/4559.jpg" },
    { "MARCA": "RICOH", "MODELO": "SP 6430 A-3", "PRECIO": 720.00, "IMAGEN": "https://www.ricoh.es/media/SP-6430DN---Image-504_tcm77-13469.jpg" },
    { "MARCA": "RICOH", "MODELO": "SP4510 - SIN TONER", "PRECIO": 140.00, "IMAGEN": "https://www.ricoh.es/media/SP-6430DN---Image-504_tcm77-13469.jpg" },
    { "MARCA": "HP", "MODELO": "1606", "PRECIO": 136.00, "IMAGEN": "https://www.computershopping.com.ar/Images/Productos/Grandes/hp1015_g.jpg" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION MX611", "PRECIO": 248.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION MX710", "PRECIO": 373.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "LEXMARK", "MODELO": "MULTIFUNCION X464", "PRECIO": 373.00, "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_601888-MLA31021172627_062019-O.webp" },
    { "MARCA": "BROTHER", "MODELO": "MULTIFUNCION 8860", "PRECIO": 248.00, "IMAGEN": "https://www.brother.eu/-/media/product-images/devices/printers/mfc/mfc8860dn/mfc8860dn_main.png?rev=39f19963b24541fc806f4f0c802f2d36" },
    { "MARCA": "RICOH", "MODELO": "MULTIFUNCION 3510F", "PRECIO": 280.00, "IMAGEN": "https://assets.rbl.ms/31808395/origin.png" },
    { "MARCA": "SAMSUNG", "MODELO": "MULTIFUNCION 5637", "PRECIO": 300.00, "IMAGEN": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05741429.png" },
    { "MARCA": "XEROX", "MODELO": "WORKCENTER MULTI 3550", "PRECIO": 300.00, "IMAGEN": "https://www.xerox.com/assets/images/brand_engine/products/hardware/WC3550/hero_960x960.png" },
    
];



const imppre = document.getElementById('section1');

impres.forEach(impre => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `<a href="impre_detail.html?model=${impre.MODELO}" class="a">

    <img src="${impre.IMAGEN}" alt="impresora" style="mix-blend-mode: multiply; background-color: transparent;">
    <div class="card-title">${impre.MARCA || ''} ${impre.MODELO || ''}</div>
    <div class="card-description">Garantía: 6 meses</div>
    <div class="card-description">Precio: USD${impre.PRECIO ? `$${impre.PRECIO}` : ''}</div></a>
    
  `;
  imppre.appendChild(div);
});

function sendWhatsAppMessage(product, price) {
  const phone = '541123879304'; // Número de teléfono de WhatsApp
  const message = `¡Hola! Estoy interesado en comprar ${product}. ¿Cómo puedo hacerlo?`;
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappLink;
}