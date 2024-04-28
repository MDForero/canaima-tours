export default async function page() {
    const data = await fetch('http://www.canaimatours.com.co/servicios.json').then(res => res.json())
    return (
        <>
            <section>
                <section className="space-y-32">
                    {data.map(servicio => (
                        <article key={servicio.name} className="flex lg:odd:flex-row-reverse lg:flex-row flex-col-reverse justify-center items-center gap-12 p-2">
                            <img src={servicio.img} alt={servicio.name} className="lg:w-1/2 w-5/6 max-h-[600px] object-cover" />
                            <div className="max-w-xl">
                                <h2 className="font-bold text-2xl text-green-900">{servicio.name}</h2>
                                <p>{servicio.description}</p>
                                +<a href={`/servicios/${servicio.name.split(' ').join('-').split(',').join('-').replace('í', 'i')}`} className="inline-block bg-green-900 p-2 mt-2 rounded-lg float-right text-white font-semibold hover:ring-2 hover:ring-green-950 hover:bg-green-50 hover:text-green-950 duration-500">Saber mas</a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
}