

export async function generateStaticParams() {
    const data = await fetch('http://www.canaimatours.com.co/servicios.json', {cache:'default'}).then(res => res.json())
    return data.map(servicio => ({ servicio: servicio.name.split(' ').join('-').split(',').join('-').replace('í', 'i') }))
}

export default async function page({ params }) {
    const { servicio } = params
    const data = await fetch('http://www.canaimatours.com.co/servicios.json', {cache: 'default'}).then(res => res.json())
    const info = data.find(service => service.name.split(' ').join('-').split(',').join('-').replace('í', 'i') === servicio)
    const producto = await fetch('http://www.canaimatours.com.co/productos.json', {cache: 'default'}).then(res => res.json())
    const productos = producto.filter(product => product.category === info.category)
    return (<>
        <main className="w-full h-[700px] relative">
            <img src={info.img} className="w-screen h-full object-cover" />
            <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex flex-col bg-gray-800/40 justify-center items-center">
                <img src="/logo.png" className="w-70 h-auto" />
                <h1 className="text-white text-5xl font-bold capitalize">{info.name}</h1>
            </div>
        </main>
        <section className="max-w-screen-2xl w-full mx-auto py-10 px-5">
            <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-green-950">Descripción</h2>
            <p className="text-green-950 ">{info.description}</p>
            </div>
            <div className="max-w-2xl">
                <img></img>
            </div>
        </section>
        <section className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold text-green-950">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {productos.map(producto => (
                    <div key={producto.name} className="bg-gray-50 rounded-lg shadow-md">
                        <img src={producto.img} className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-5">
                            <h3 className="text-green-950 text-lg font-bold">{producto.name}</h3>
                            <p className="text-green-950">{producto.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>)
}