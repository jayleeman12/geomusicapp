import React, { useEffect, useState } from 'react';
import { PERMISSIONS } from 'react-native-permissions';
import { PermissionRequest, requestPermission } from '../../permissions';
import MusicList from '../MusicList';
import MusicMap from '../MusicMap';
import LoadingPage from './LoadingPage';
import LocationDeniedPage from './LocationDeniedPage';

const LandingPage: React.FC<{}> = (props) => {
    const [locationPerrmissionRequest, setLocationPermissionRequest] = useState<PermissionRequest>(PermissionRequest.IN_PROGRESS);

    const requestLocationPermission = () => {
        requestPermission(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            .then((locationAllowed: boolean) => {
                if (locationAllowed) {
                    setLocationPermissionRequest(PermissionRequest.GRANTED);
                } else {
                    setLocationPermissionRequest(PermissionRequest.DENIED);
                }
            })
            .catch((err) => {
                setLocationPermissionRequest(PermissionRequest.FAILED);
            });
    }

    useEffect(requestLocationPermission, []);

    if (locationPerrmissionRequest === PermissionRequest.IN_PROGRESS) return <LoadingPage />
    if (locationPerrmissionRequest === PermissionRequest.DENIED ||
        locationPerrmissionRequest === PermissionRequest.FAILED) return <LocationDeniedPage requestLocationPermission={requestLocationPermission} />

    
    return <MusicList />;
};

export default LandingPage;