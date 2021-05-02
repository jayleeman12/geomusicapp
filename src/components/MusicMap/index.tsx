import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { height, width } from '../../dimensions';
import { Location } from '../../types';
import TrackCallout from './TrackCallout';
import TrackAnnotation from './TrackAnnotation';

MapboxGL.setAccessToken(
    'pk.eyJ1Ijoic2hhaTA1NDIiLCJhIjoiY2p2YnYzY2FrMWM4ZzQ1cGZ6eHNrdmFkNCJ9.0SumKObqwXtpl8GY3YXh8w'
);

type MusicMapProps = {
    userLocation: Location
};

const MusicMap: React.FC<MusicMapProps> = (props) => {
    return (
        <View style={{
            flex: 1, justifyContent: "center",
            alignItems: "center",
        }}>
            <View style={{ width: width(), height: height() }}>
                <MapboxGL.MapView
                    style={{ flex: 1 }}
                    logoEnabled={false}
                    compassEnabled={false}
                    pitchEnabled={false}

                >
                    <MapboxGL.Camera centerCoordinate={[props.userLocation.longitude, props.userLocation.latitude]} zoomLevel={15} />
                    <TrackAnnotation id='123214' location={props.userLocation} trackImageUri={'https://i1.sndcdn.com/artworks-000374202633-pqm4gy-t500x500.jpg'}>
                        <TrackCallout />
                    </TrackAnnotation>
                </MapboxGL.MapView>
            </View>
        </View>
    );
}

export default MusicMap;