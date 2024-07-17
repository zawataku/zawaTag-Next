import { NextRequest, NextResponse } from 'next/server';

interface GpsData {
  latitude: number;
  longitude: number;
  altitude: number;
}

// ダミーデータを格納するための変数
let latestGpsData: GpsData | null = null;

export async function POST(req: NextRequest) {
  try {
    const gpsData: GpsData = await req.json();
    console.log('Received GPS data:', gpsData);
    latestGpsData = gpsData; // データを保存する
    return NextResponse.json({ message: 'GPS data received successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error processing GPS data' }, { status: 500 });
  }
}

export async function GET() {
  if (latestGpsData) {
    return NextResponse.json(latestGpsData);
  } else {
    return NextResponse.json({ message: 'No GPS data available' }, { status: 404 });
  }
}