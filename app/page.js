import { contactos } from "./data";

export default async function Home() {
  const servicios = await fetch('https://canaimatours.com.co/servicios.json', {cache:'no-cache'}).then(res => res.json());
  console.log(servicios)
  return (
    <div className="space-y-32 my-24">
      <section className="max-w-4xl w-full mx-auto flex gap-12 lg:flex-nowrap flex-wrap justify-center items-center">
        <div className="lg:w-1/2 max-w-xl">
          <h1 className="text-green-800 font-bold  md:text-xl lg:text-3xl text-center">Nosotros</h1>
          <p className="text-justify ">Somos una empresa de turismo agroturístico
            con sede en Casanare, Colombia. Nos
            dedicamos a ofrecer experiencias únicas y
            educativas a nuestros visitantes, que les
            permitan conocer de cerca los diferentes
            procesos de transformación de productos
            turísticos y agroindustriales, así como la
            historia de la región.</p>
        </div>
        <div className="relative -z-10 mt-10 lg:-mx-4  lg:mt-0 lg:col-start-1">
          <div classaName="relative space-y-8">
            <div className="flex items-end justify-center space-x-6 lg:justify-start">
              <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/images/IMG-20240202-WA0023.jpg" alt="1" />
              <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/images/IMG-20240202-WA0017.jpg" alt="2" />
            </div>
            <div className="flex items-start justify-center ml-12 space-x-6 lg:justify-start">
              <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="/images/IMG-20240202-WA0020.jpg" alt="3" />
              <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/images/IMG-20240202-WA0031.jpg" alt="4" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl w-full mx-auto flex gap-12  flex-wrap justify-center items-center">
        {servicios.map(servicio => <article key={servicio.name} className="w-96 space-y-4 border-2 p-2">
          <img src={servicio.img} alt={servicio.name} />
          <h2 className="font-bold text-xl">{servicio.name}</h2>
          <p className="line-clamp-3">{servicio.description}</p>
          <a href={`/servicios/${servicio.name.split(' ').join('-').split(',').join('-').replace('í', 'i')}`} className="inline-block bg-green-900 p-2 mt-2 rounded-lg float-right text-white font-semibold hover:ring-2 hover:ring-green-950 hover:bg-green-50 hover:text-green-950 duration-500">Saber mas</a>
        </article>)}
      </section>
      <section className="flex justify-center items-center md:gap-24 flex-wrap gap-16 ">
        {contactos.map(contacto => <article key={contacto.telefono}>
          <div className="group ">
            <div className=" relative rounded-2xl w-72 h-36 bg-green-800 text-green-200 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
              <span className="text-3xl font-bold">{contacto.nombre}</span>
              <p className="text-amber-200 font-thin">{contacto.cargo}</p>
              <p className="text-amber-200 font-thin">{contacto.telefono}</p>
            </div>
          </div>
        </article>)}
      </section>
    </div>);
}
