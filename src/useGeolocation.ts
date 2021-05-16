import { useEffect, useState } from "react";
import geolocation from '@react-native-community/geolocation';
import { Location } from "./types";

export function useGeolocation(): Location | undefined | null {
    const [location, setLocation] = useState<Location | null | undefined>(null);

    useEffect(() => {
        geolocation.getCurrentPosition((location) => {
            setLocation({
                longitude: location.coords.longitude,
                latitude: location.coords.latitude
            });
        }, () => {
            setLocation(undefined);
        });
        const watchId = geolocation.watchPosition((location) => {
            setLocation({
                longitude: location.coords.longitude,
                latitude: location.coords.latitude
            });
        }, () => {
            setLocation(undefined);
        });
        return () => geolocation.clearWatch(watchId);
    }, []);

    return location;
}