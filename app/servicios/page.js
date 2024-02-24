export default async function page() {
    const data = await fetch('http://127.0.0.1:3000/servicios.json', { cache: "no-cache" }).then(res => res.json())
    return (
        <>
            <section>
                <section className="space-y-32">
                    {data.map(servicio => (
                        <article key={servicio.name} className="flex lg:odd:flex-row-reverse lg:flex-row flex-col-reverse justify-center items-center gap-12 ">
                            <img src={servicio.img} alt={servicio.name} className="lg:w-1/2 w-5/6 max-h-[600px] object-cover" />
                            <div className="max-w-xl">
                                <h2 className="font-bold text-2xl text-green-900">{servicio.name}</h2>
                                <p>{servicio.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
}