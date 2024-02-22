export default function page() {
    return (
        <div>
            <section>
                <h1>Nosotros</h1>
                <p>Somos una empresa de turismo agroturístico
                    con sede en Casanare, Colombia. Nos
                    dedicamos a ofrecer experiencias únicas y
                    educativas a nuestros visitantes, que les
                    permitan conocer de cerca los diferentes
                    procesos de transformación de productos
                    turísticos y agroindustriales, así como la
                    historia de la región.</p>
            </section>
            <section className="space-y-16">
                <article className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24">
                    <div className="max-w-lg">
                        <h2>Misión</h2>
                        <p>Nuestra misión es promover el turismo agroturístico
                            como una forma de generar desarrollo económico y
                            social en las comunidades rurales, respetando el medio
                            ambiente y la cultura local preservando la historia de la
                            región.
                        </p>
                    </div>
                    <figure>
                        <img src="/images/IMG-20240202-WA0015.jpg" className="max-w-xl w-full" alt="Misión"></img>
                    </figure>
                </article>
                <article className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24">
                    <div className="max-w-lg">
                        <h2>Vision</h2>
                        <p>Ser una empresa líder en el turismo agroturístico en Colombia,
                            reconocida por la calidad de sus servicios, su compromiso con el
                            desarrollo sostenible y su contribución a la preservación de la historia
                            regiona</p>
                    </div>
                    <figure>
                        <img src="/images/IMG-20240202-WA0015.jpg" className="max-w-xl w-full" alt="Misión"></img>
                    </figure>
                </article>

            </section>
            <section>
                <h1>Nuestros valores</h1>
                {valores.map(valor => <article key={valor.title} className="w-7 p-4 ">
                    <figure className="w-24">
                        <img src={valor.svg} alt={valor.title} />
                    </figure>
                    <h2>{valor.title}</h2>
                    <p>{valor.description}</p>
                </article>)}
            </section>
        </div>
    )
}

export const valores = [
    {
        title: 'Cultura',
        description: 'Promovemos el conocimiento y la apreciación de la cultura local a través de nuestras experiencias agroturísticas.',
        svg:'/svg/culture.svg'
    },
    {
        title: 'Educación',
        description: 'Nos comprometemos a ofrecer experiencias educativas que permitan a nuestros visitantes aprender sobre el turismo agroturístico, su importancia, la historia de la región y la cultura local.',
        svg:'/svg/development-education-improvement.svg'
    },
    {
        title: 'Historia',
        description: 'Preservamos la historia de la región a través de nuestras experiencias agroturísticas',
        svg:'/svg/history.svg'
    },
    {
        title: 'Respeto',
        description: 'Respetamos a nuestros visitantes, a nuestros colaboradores y al medio ambiente.',
        svg:'/svg/stand-respect-people.svg'
    },
    {
        title: 'Sostenibilidad',
        description: 'Trabajamos para minimizar nuestro impacto ambiental y contribuir al desarrollo sostenible de las comunidades rurales.',
        svg:'/svg/sustainable-sustainability-svgrepo-com.svg'
    },
        
]