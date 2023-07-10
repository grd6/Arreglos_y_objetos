const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

let i = Array.from(document.querySelectorAll("section input"));
let casas = document.querySelector(".propiedades");
let total = document.querySelector(".py-3");
let button = document.querySelector(".btn");

function mostrarcasas(propiedadesJSON) {
  total.innerHTML = "Total: " + propiedadesJSON.length;
  casas.innerHTML = "";
  for (let casa of propiedadesJSON) {
    let newCasa = document.createElement("div");
    newCasa.classList.add("propiedad");
    newCasa.innerHTML = `
  <div
            class="img"
            style="
              background-image: url("");
            "
          ><img src="${casa.src}"></div>
          <section>
            <h5>${casa.name}</h5>
            <div class="d-flex justify-content-between">
            <p>Cuartos: ${casa.rooms}</p>
            <p>Metros: ${casa.m}</p>
          </div>
          <p class="my-3">${casa.description}</p>
            <button class="btn btn-info">Ver más</button>
          </section>
        </div>
  `;
    casas.appendChild(newCasa);
  }
}
mostrarcasas(propiedadesJSON);

function busqueda() {
  let [{ value: cuarto }, { value: desde }, { value: hasta }] = i;

  if (!cuarto && !desde && !hasta) {
    alert("Deber agregar algun parametro de busqueda");
    return false
   }
  

  let busqueda = propiedadesJSON.filter(
    //    (casa) => (casa.rooms >= cuarto || !casa.rooms) && (casa.m >= desde || !casa.m) && (casa.m >= hasta || !casa.m)
    (casa) => casa.rooms >= cuarto && casa.m >= desde && casa.m <= hasta
  );

  mostrarcasas(busqueda);
}

button.addEventListener("click", busqueda);
