"use client";
import dynamic from "next/dynamic";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Map = dynamic(() => import('../components/map'), { ssr: false });

interface GpsData {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [gpsData, setGpsData] = useState<GpsData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get<GpsData>('/api/gpsdata');
        setGpsData(result.data);
      } catch (error) {
        console.error('Error fetching GPS data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-grow relative">
        {gpsData ? (
          <>
            <p>Latitude: {gpsData.latitude}</p>
            <p>Longitude: {gpsData.longitude}</p>
          </>
        ) : (
          <p className="absolute bg-red-500 text-white z-50 w-full text-xl text-center py-2 opacity-90">GPSデータが受信できません．</p>
        )}
        <Map latitude={gpsData?.latitude || 36.530742400318914} longitude={gpsData?.longitude || 136.62777349638162} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;