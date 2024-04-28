import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            name: 'Alojamiento en cabanas, fincas y hoteles',
            description: 'Disfrute de una estancia memorable en una variedad de alojamientos que se adaptan a sus necesidades y presupuesto. Elija entre acogedoras cabañas en entornos naturales, espaciosas fincas con actividades al aire libre o confortables hoteles con servicios completos.',
            img: '/images/IMG-20240202-WA0017.jpg',
            category: 'alojamiento'
        },
        {
            name: 'Guianza turística',
            description: 'Descubra la esencia del destino con la ayuda de guías expertos. Acceda a información privilegiada, recorridos personalizados y experiencias únicas que le permitirán comprender y disfrutar al máximo su viaje.',
            img: '/images/IMG-20240202-WA0021.jpg',
            category: 'guianza'
        },
        {
            name: 'Pasadías',
            description: 'Viva una escapada inolvidable con paquetes todo incluido para disfrutar al máximo de un día de descanso y diversión. Acceda a actividades, gastronomía y servicios en un solo lugar sin preocupaciones.',
            img: '/images/IMG-20240202-WA0030.jpg',
            category: 'pasadia'
        },
        {
            name: 'Paquetes turísticos',
            description: 'Planifique su viaje con tranquilidad y aproveche al máximo su tiempo con paquetes turísticos personalizados. Combine alojamiento, transporte, actividades y experiencias a su medida para crear un viaje inolvidable.',
            img: '/images/IMG-20240202-WA0028.jpg',
            category: 'paquete'
        },
    ])
}