import { NextResponse } from "next/server";

 export  async function GET () {
    return NextResponse.json([
        { name: 'Alojamiento en cabanas, fincas y hoteles' },
        { name: 'Guianza turística' },
        { name: 'Pasadías' },
        { name: 'Paquetes turísticos' },
    ])
}