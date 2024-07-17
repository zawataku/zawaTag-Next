import { NextRequest, NextResponse } from 'next/server';

interface GpsData {
    latitude: number;
    longitude: number;
    altitude: number;
}

export async function POST(req: NextRequest) {
    try {
        const gpsData: GpsData = await req.json();
        console.log('Received GPS data:', gpsData);
        return NextResponse.json({ message: 'GPS data received successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error processing GPS data' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}