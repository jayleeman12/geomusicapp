import React from 'react';
import { Button, Text, View } from 'react-native';
import { human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../colors';
import { height, width } from '../../dimensions';


export type LocationDeniedPageProps = {
    requestLocationPermission: () => void
}

const LocationDeniedPage: React.FC<LocationDeniedPageProps> = (props) => {
    return (
        <View style={{ flex: 1, width: width(), height: height(), justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Icon size={width(0.4)} style={{ color: COLORS.dark }} name={'map-marker-radius-outline'} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', height: '30%' }}>
                    <Text style={[human.callout, { textAlign: 'center' }]}>
                        GeoMusicApp uses your location to find music playing nearby you
                    </Text>
                    <Button title={'GRANT LOCATION PERMISSION'} onPress={props.requestLocationPermission} />
                </View>
            </View>
        </View>
    )
}

export default LocationDeniedPage;