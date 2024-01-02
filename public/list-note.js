const pcs = [{
    "ID": 1,
    "CANT.": 3,
    "MARCA": "LENOVO",
    "MODELO": "IDEAPAD",
    "PROCESADOR": "intel core I7 - 8565U @2.60GHz ",
    "RAM": 8,
    "DISCO": 120,
    "MONITOR": "15.6",
    "OBSERVACION": "Windows 10 - office 2016 - cargador CON BATERIA 4 HS ",
    "PRECIO U$D": 890.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-laptop-ideapad-1-14-intel-hero-1-.png?context=bWFzdGVyfHJvb3R8MjMzODA2fGltYWdlL3BuZ3xoZjQvaDcxLzE0MTg2OTE3MDY4ODMwLnBuZ3w2MDNjZjdlY2Y0ZjIzOWFmYzYxYzI1NjdkZTM1OGIwZGRiY2M4NDIxY2MxOGM0MzQ1ZmMwNThiNGRkZTE1ZDM3"
  }, {
    "ID": 2,
    "MARCA": "LENOVO",
    "MODELO": "IDEAPAD",
    "PROCESADOR": "Intel Core i7 - 8565U @2.60GHz",
    "RAM": 8,
    "DISCO": 120,
    "MONITOR": "15.6",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador SIN BATERIA 4 HS",
    "PRECIO U$D": 750.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-laptop-ideapad-1-14-intel-hero-1-.png?context=bWFzdGVyfHJvb3R8MjMzODA2fGltYWdlL3BuZ3xoZjQvaDcxLzE0MTg2OTE3MDY4ODMwLnBuZ3w2MDNjZjdlY2Y0ZjIzOWFmYzYxYzI1NjdkZTM1OGIwZGRiY2M4NDIxY2MxOGM0MzQ1ZmMwNThiNGRkZTE1ZDM3"
  },
  {
    "ID": 3,
    "MARCA": "LENOVO",
    "MODELO": "T430",
    "PROCESADOR": "Intel Core i5 - 3500 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador CON BATERIA 1.5HS - partida en un lado",
    "PRECIO U$D": 220.00,
    "IMAGEN": "https://www.lenovo.com/medias/ThinkPad-T430-Laptop-PC-Front-View-3-gallery-845x475.jpg?context=bWFzdGVyfGltYWdlc3wxMTE4NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDM0L2g3Mi85NDUxMDU0ODkxMDM4LmpwZ3wwOTlmMWM3YTEyNDFhZDM5MWJmZjNhMDg5MzhhMGQxYTBhZjlkNjAzODUxNDUzZjEzZmE1MmY1MTdiZmQ5OTJj"
  }, {
    "ID": 4,
    "MARCA": "LENOVO",
    "MODELO": "T430",
    "PROCESADOR": "Intel Core i5 - 3500 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador SIN BATERIA - no le anda el puerto de red",
    "PRECIO U$D": 250.00,
    "IMAGEN": "https://www.lenovo.com/medias/ThinkPad-T430-Laptop-PC-Front-View-3-gallery-845x475.jpg?context=bWFzdGVyfGltYWdlc3wxMTE4NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDM0L2g3Mi85NDUxMDU0ODkxMDM4LmpwZ3wwOTlmMWM3YTEyNDFhZDM5MWJmZjNhMDg5MzhhMGQxYTBhZjlkNjAzODUxNDUzZjEzZmE1MmY1MTdiZmQ5OTJj"
  }, {
    "ID": 5,
    "MARCA": "LENOVO",
    "MODELO": "T440P",
    "PROCESADOR": "Intel Core i5 - 4300 @2.50GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador C/MOUSE EXTERNO",
    "DETALLES": "Consultar detalles",
    "PRECIO U$D": 220.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t540p-front-1.jpg?context=bWFzdGVyfGltYWdlc3wxMzYyNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRiL2hmZi85MzcyOTg2NzY5NDM4LmpwZ3xjNDQ0YmJlZjM0ZTQ2NzkzYWM2MTVhNjVlZmNlOWQ1ZjkyOWMyZmI3MjBiNTdlYTJjYzk1OWZkNjY3NWE3ZmVh"
  }, {
    "ID": 6,
    "MARCA": "LENOVO",
    "MODELO": "T440",
    "PROCESADOR": "Intel Core i5 - 4300 @1.90GHz",
    "RAM": 4,
    "DISCO": "180 SSD",
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador C/MOUSE EXTERNO",
    "DETALLES": "Consultar detalles",
    "PRECIO U$D": 220.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t540p-front-1.jpg?context=bWFzdGVyfGltYWdlc3wxMzYyNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRiL2hmZi85MzcyOTg2NzY5NDM4LmpwZ3xjNDQ0YmJlZjM0ZTQ2NzkzYWM2MTVhNjVlZmNlOWQ1ZjkyOWMyZmI3MjBiNTdlYTJjYzk1OWZkNjY3NWE3ZmVh"
  }, {
    "ID": 7,
    "MARCA": "LENOVO",
    "MODELO": "X230",
    "PROCESADOR": "Intel Core i5 - 2300 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "12",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador - consultar detalles",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x230-main.png?context=bWFzdGVyfGltYWdlc3w2MDM4N3xpbWFnZS9wbmd8aW1hZ2VzL2g3OC9oMDMvOTQ0OTIwODU0NTMxMC5wbmd8MWUxMGJiNjgxYmJmYTRjNjQ3MGMyNGVjOGQ3MjZlYTFkYzEwY2I5YWQ1NzRhNjA5MDVhNDkzNGZkZGM0ZDJhMw"
  },
  { "ID": 8,
    "MARCA": "LENOVO",
    "MODELO": "X201",
    "PROCESADOR": "Intel Core i5 - 2230 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "12\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://m.media-amazon.com/images/I/71HXXN7mjkL._AC_SL1500_.jpg"
  }, {
    "ID": 9,
    "MARCA": "LENOVO",
    "MODELO": "T420",
    "PROCESADOR": "Intel Core i5 - 2520 @2.50GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador CON BATERIA 1.5HS / plastico del borde partido",
    "PRECIO U$D": 210.00,
    "IMAGEN": "https://www.lenovo.com/medias/thinkpad-t420s-laptop-2-845x475.jpg?context=bWFzdGVyfGltYWdlc3wyMjAxNzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDFiL2g2Yy85NDY4OTI5NjM4NDMwLmpwZ3w2OWJiNjJkNDEyYmQxYmFlZDI1ODYzYTc4MDE2YmRjZjM5ODI4NjAzNTY4NDA4MjE0Mjg0NTVhZmQwZjFiNzY5"
  }, {
    "ID": 10,
    "MARCA": "BANGHO",
    "MODELO": "BES-B350XHU",
    "PROCESADOR": "Intel Core i3 - 2350 @2.30GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "15.6\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://http2.mlstatic.com/D_736576-MLA72441106652_102023-O.webp"
  }, {
    "ID": 11,
    "MARCA": "BANGHO",
    "MODELO": "B251XHU",
    "PROCESADOR": "Intel Core i3 - 2350 @2.30GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "15.6\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://http2.mlstatic.com/D_919392-MLA42434289271_072020-O.webp"
  },
  {
    "ID": 12,
    "MARCA": "BANGHO",
    "MODELO": "B240XHU",
    "PROCESADOR": "Intel Core i3 - 2350 @2.30GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://http2.mlstatic.com/D_919392-MLA42434289271_072020-O.webp"
  }

  ,
  {
    "ID": 13,
    "MARCA": "DELL",
    "MODELO": "Inspiron 15",

    "PROCESADOR": "Intel Core i3 - 3217U @1.80GHz",
    "RAM": 4,
    "DISCO": "128 SSD",
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador CON BATERIA",
    "PRECIO U$D": 160.00,
    "IMAGEN": "https://baproar.vtexassets.com/arquivos/ids/369468-800-auto?v=638267485153770000&width=800&height=auto&aspect=true"
  },
  {
    "ID": 14,
    "MARCA": "DELL",
    "MODELO": "Latitude E6430",
    "PROCESADOR": "Intel Core i5 - 3340M @2.70GHz",
    "DISCO": 320,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 220.00,
    "IMAGEN": "https://m.media-amazon.com/images/I/61HSrzaLbcS._AC_SL1500_.jpg"
  },
  {
    "ID": 15,
    "MARCA": "POSITIVO BGH",
    "MODELO": "B738",
    "PROCESADOR": "Intel Core i3 - 2377@1.5GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "14\"",
    "SISTEMA_OPERATIVO": "Windows 10 - Office 2016 - cargador",
    "PRECIO U$D": 180.00,
    "IMAGEN": "https://www.cetrogar.com.ar/media/catalog/product/C/M/CM1963.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"
  }, {
    "ID": 16,
    "CANT.": 3,
    "MARCA": "LENOVO",
    "MODELO": "Thikcenter M71e",
    "PROCESADOR": "Pentium G620 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2013 (SOLO CPU)",
    "PRECIO U$D": 220.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-desktop-thinkcentre-m71e-tower-main.png?context=bWFzdGVyfGltYWdlc3w4ODI1M3xpbWFnZS9wbmd8aW1hZ2VzL2g4Ny9oMzUvOTQ1NDYwNjEyMzAzOC5wbmd8ZGY3MGE5NWQ2M2M1ODY5MzM1MDA2YmZjNDUyYTNhMmExYmMwYmVmNDFiNzJmYjZiOGYzNzljNzZiMjAyNWFlYw"
  },
  {
    "ID": 17,
    "MARCA": "LENOVO",
    "MODELO": "Thikcenter M71e",
    "PROCESADOR": "Pentium G620 @2.60GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "19",
    "OBSERVACION": "Windows 10 - office 2013 - TECLADO Y MOUSE",
    "PRECIO U$D": 290.00,
    "IMAGEN": "https://www.lenovo.com/medias/lenovo-desktop-thinkcentre-m71e-tower-main.png?context=bWFzdGVyfGltYWdlc3w4ODI1M3xpbWFnZS9wbmd8aW1hZ2VzL2g4Ny9oMzUvOTQ1NDYwNjEyMzAzOC5wbmd8ZGY3MGE5NWQ2M2M1ODY5MzM1MDA2YmZjNDUyYTNhMmExYmMwYmVmNDFiNzJmYjZiOGYzNzljNzZiMjAyNWFlYw"
  },
  {
    "ID": 18,
    "MARCA": "HP",
    "MODELO": "COMPAQ CQ5314LA",
    "PROCESADOR": "Dual core E2120 @2.60GHz",
    "RAM": 4,
    "DISCO": 160,
    "MONITOR": "19",
    "OBSERVACION": "Windows 10 - office 2013 - TECLADO Y MOUSE",
    "PRECIO U$D": 180.00,
    "IMAGEN": "https://images.icecat.biz/img/gallery_raw/50753707_6968662598.jpeg"
  },
  {
    "ID": 19,
    "MARCA": "HP",
    "MODELO": "COMPAQ CQ5314LA",
    "PROCESADOR": "Dual core E5300 @2.60GHz",
    "RAM": 4,
    "DISCO": 160,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2013 (SOLO CPU)",
    "PRECIO U$D": 120.00,
    "IMAGEN": "https://images.icecat.biz/img/gallery_raw/50753707_6968662598.jpeg"
  },
  {
    "ID": 20,
    "MARCA": "DELL",
    "PROCESADOR": "Intel core i3-2100 @3.30GHz",
    "RAM": 4,
    "DISCO": 320,
    "MONITOR": "19",
    "OBSERVACION": "Windows 10 - office 2013 - TECLADO Y MOUSE",
    "PRECIO U$D": 280.00,
    "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_747445-MLA53268510787_012023-O.webp"
  },
  {
    "ID": 21,
    "MARCA": "DELL",
    "PROCESADOR": "Intel core i3-2100 @3.30GHz",
    "RAM": 4,
    "DISCO": 320,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2013 (SOLO CPU)",
    "PRECIO U$D": 200.00,
    "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_747445-MLA53268510787_012023-O.webp"
  },
  {
    "ID": 22,
    "CANT.": 2,
    "MARCA": "LENOVO",
    "MODELO": "Thikcenter M920S",
    "PROCESADOR": "Intel core i7-8700 @3.20GHz",
    "RAM": 16,
    "DISCO": "512 SSD",
    "MONITOR": "19",
    "OBSERVACION": "Windows 10 - office 2016 - TECLADO Y MOUSE",
    "PRECIO U$D": 620.00,
    "IMAGEN": "https://images.icecat.biz/img/gallery_raw/d3e1c2edcde97ee2a0bad4cbb0eb4356.jpeg"
  },
  {
    "ID": 23,
    "MARCA": "MINI HP",
    "MODELO": "ELITEDESK",
    "PROCESADOR": "Intel core i5-6500T @2.50GHz",
    "RAM": 4,
    "DISCO": 500,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2016 (SOLO CPU)",
    "PRECIO U$D": 400.00,
    "IMAGEN": "https://cdn.bargainhardware.co.uk/media/product/44c/hp-elitedesk-800-g2-mini-desktop-pc-1e4.jpg"
  },
  {
    "ID": 24,
    "MARCA": "MINI PC LENOVO",
    "MODELO": "Thikcenter M700",
    "PROCESADOR": "Intel core i3-6100T @3.20GHz",
    "RAM": 8,
    "DISCO": 500,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2016 (SOLO CPU)",
    "PRECIO U$D": 330.00,
    "IMAGEN": "https://http2.mlstatic.com/D_NQ_NP_795484-MLA42930911992_072020-O.webp"
  },
  {
    "ID": 25,
    "MARCA": "MINI PC HP",
    "MODELO": "PRODESK 400 G4",
    "PROCESADOR": "Intel core i7-8700T @2.40GHz",
    "RAM": 8,
    "DISCO": "240 SSD",
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2016 (SOLO CPU)",
    "PRECIO U$D": 370.00,
    "IMAGEN": "https://support.hp.com/doc-images/918/c06047537.png"

  },
  {
    "ID": 26,
    "MARCA": "MINI PC HP",
    "MODELO": "PRODESK 400 G4",
    "PROCESADOR": "Intel core i7-8700T @2.40GHz",
    "RAM": 8,
    "DISCO": 500,
    "MONITOR": "NO",
    "OBSERVACION": "Windows 10 - office 2016 (SOLO CPU)",
    "PRECIO U$D": 420.00,
    "IMAGEN": "https://support.hp.com/doc-images/918/c06047537.png"
  }
]
const sectionpc = document.getElementById('sectionpc');


pcs.forEach(pc => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `<a href="product_detail.html?product=${pc.MODELO}" class="a">
    <img src="${pc.IMAGEN}" alt="PC" style="mix-blend-mode: multiply; background-color: transparent;">
    <div class="card-title">${pc.MARCA || ''} ${pc.MODELO || ''}</div>
    <div class="card-description">RAM: ${pc.RAM ? `${pc.RAM} GB` : ''}</div>
    <div class="card-description">Disco: ${pc.DISCO ? `${pc.DISCO} GB` : ''}</div>
    <div class="card-description">${pc.OBSERVACION ? `${pc.OBSERVACION}` : ''}</div>
    <div class="card-description">Precio: usd${pc["PRECIO U$D"] ? `$${pc["PRECIO U$D"]}` : ''}</div></a>
    
    `;
    
  sectionpc.appendChild(div);

});


