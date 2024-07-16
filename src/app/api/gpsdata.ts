import type { NextApiRequest, NextApiResponse } from 'next';

interface GpsData {
    latitude: number;
    longitude: number;
    altitude: number;
}

let latestGpsData: GpsData | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        latestGpsData = req.body;
        res.status(200).json({ message: 'GPS data received' });
    } else if (req.method === 'GET') {
        if (latestGpsData) {
            res.status(200).json(latestGpsData);
        } else {
            res.status(404).json({ message: 'No GPS data available' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}