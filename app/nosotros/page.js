export default function page() {
    return (
        <div>
            <section className="max-w-4xl w-full mx-auto flex gap-12 lg:flex-nowrap flex-wrap justify-center items-center">
                <div className="w-1/2">
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
                    <div classaName="relative space-y-4">
                        <div className="flex items-end justify-center space-x-4 lg:justify-start">
                            <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/images/IMG-20240202-WA0023.jpg" alt="1" />
                            <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/images/IMG-20240202-WA0017.jpg" alt="2" />
                        </div>
                        <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                            <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="/images/IMG-20240202-WA0020.jpg" alt="3" />
                            <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/images/IMG-20240202-WA0031.jpg" alt="4" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-y-16 flex flex-col justify-center items-center md:p-8 p-2 ">
                <article className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-24 ">
                    <div className="max-w-lg lg:w-full">
                        <h2 className="font-bold text-2xl text-center text-green-800">Misión:</h2>
                        <p className="text-justify text-lime-700">Nuestra misión es promover el turismo agroturístico
                            como una forma de generar desarrollo económico y
                            social en las comunidades rurales, respetando el medio
                            ambiente y la cultura local preservando la historia de la
                            región.
                        </p>
                    </div>
                    <figure>
                        <img src="/images/IMG-20240202-WA0015.jpg" className="max-w-xl w-full  lg:w-full rounded-ss-full rounded-ee-full" alt="Misión" ></img>
                    </figure>
                </article>
                <article className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-24 ">
                    <div className="max-w-lg lg:w-full">
                        <h2 className="font-bold text-2xl text-center text-green-800">Vision:</h2>
                        <p className="text-justify text-lime-700">Ser una empresa líder en el turismo agroturístico en Colombia,
                            reconocida por la calidad de sus servicios, su compromiso con el
                            desarrollo sostenible y su contribución a la preservación de la historia
                            regiona</p>
                    </div>
                    <figure>
                        <img src="/images/IMG-20240202-WA0015.jpg" className="max-w-xl w-full  lg:w-full rounded-ss-full rounded-ee-full" alt="Misión" ></img>
                    </figure>
                </article>

            </section>
            <section className="space-y-12">
                <h1 className="text-green-800 font-bold text-3xl text-center">Nuestros valores nos identifican por:</h1>
                <div className=" flex justify-center gap-12 flex-wrap">
                    {valores.map(valor => <article key={valor.title} className="group relative bg-green-800 w-72 h-52 p-4 flex flex-col justify-center items-center text-justify space-y-4 ">
                        <figure className="w-24 group-hover:hidden ">
                            <img src={valor.svg} alt={valor.title} />
                        </figure>
                        <div className="absolute p-4 top-0 right-0 left-0 bottom-0 group-hover:flex flex-col justify-center items-center  hidden opacity-0 hover:opacity-100 duration-1000">
                            <h2 className="text-xl font-bold text-lime-400">{valor.title}</h2>
                            <p className="text-green-100">{valor.description}</p>
                        </div>
                    </article>)}
                </div>
            </section>
        </div>
    )
}

export const valores = [
    {
        title: 'Cultura',
        description: 'Promovemos el conocimiento y la apreciación de la cultura local a través de nuestras experiencias agroturísticas.',
        svg: '/svg/culture.svg'
    },
    {
        title: 'Educación',
        description: 'Nos comprometemos a ofrecer experiencias educativas que permitan a nuestros visitantes aprender sobre el turismo agroturístico, su importancia, la historia de la región y la cultura local.',
        svg: '/svg/development-education-improvement.svg'
    },
    {
        title: 'Historia',
        description: 'Preservamos la historia de la región a través de nuestras experiencias agroturísticas',
        svg: '/svg/history.svg'
    },
    {
        title: 'Respeto',
        description: 'Respetamos a nuestros visitantes, a nuestros colaboradores y al medio ambiente.',
        svg: '/svg/stand-respect-people.svg'
    },
    {
        title: 'Sostenibilidad',
        description: 'Trabajamos para minimizar nuestro impacto ambiental y contribuir al desarrollo sostenible de las comunidades rurales.',
        svg: '/svg/sustainable-sustainability-svgrepo-com.svg'
    },

]