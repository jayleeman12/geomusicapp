import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';
import { width } from '../../dimensions';
import { Location } from '../../types';

type TrackAnnotationProps = {
    id: string,
    trackImageUri: string,
    location: Location
}

const TrackAnnotation: React.FC<TrackAnnotationProps> = props => {
    const annotationRef = useRef<MapboxGL.PointAnnotation | null>()
    return (
        <MapboxGL.PointAnnotation
            ref={r => annotationRef.current = r}
            id={props.id}
            coordinate={[props.location.longitude, props.location.latitude]}>
            {/* TODO: Check what happens when Image component receives bad input in source uri */}
            <Image
                source={{ uri: props.trackImageUri }}
                style={styles.artistImage}
                onLoad={() => annotationRef.current?.refresh()}
            />
            {props.children}
        </MapboxGL.PointAnnotation>
    )
}

const styles = StyleSheet.create({
	artistImage: {
        width: width(0.1),
		height: width(0.1),
		borderRadius: 50,
		borderColor: COLORS.dark,
		borderWidth: 2
	}
});

export default TrackAnnotation;