import { contactos } from "../data";

export default function page() {
    return (
        <div className="space-y-24">
            <section className="flex justify-center items-center md:gap-24 md:flex-row flex-col gap-16 ">
                {contactos.map(contacto => <article key={contacto.telefono}>
                    <div class="group ">
                        <div class=" relative rounded-2xl w-72 h-36 bg-green-800 text-green-200 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                            <span class="text-3xl font-bold">{contacto.nombre}</span>
                            <p class="text-amber-200 font-thin">{contacto.cargo}</p>
                            <p class="text-amber-200 font-thin">{contacto.telefono}</p>
                        </div>
                    </div>
                </article>)}
            </section>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.263261450633!2d-72.88809555836531!3d4.848662577571179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad38530c7c54b%3A0xef455ee14cf5bf5e!2sCanaima%20Restaurante%20y%20Centro%20Ecoturistico!5e0!3m2!1ses-419!2sco!4v1708470720736!5m2!1ses-419!2sco" className="w-full h-[420px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}