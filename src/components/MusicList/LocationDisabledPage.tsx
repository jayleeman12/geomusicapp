import React from 'react';
import { Text, View } from 'react-native';
import { human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../colors';
import { width, height } from '../../dimensions';

const LocationDisabledPage: React.FC<{}> = (props) => (
    <View style={{ flex: 1, width: width(), height: height(), justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flex: .5, width: width(0.8), justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Icon size={width(0.4)} style={{ color: COLORS.dark }} name={'map-marker-radius-outline'} />
            <Text style={[human.title3, { textAlign: 'center' }]}>
                Enable location services and restart the app so we can find music playing around you!
            </Text>
        </View>
    </View>
);

export default LocationDisabledPage;