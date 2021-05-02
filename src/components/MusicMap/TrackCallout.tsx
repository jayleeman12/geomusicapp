import MapboxGL from '@react-native-mapbox-gl/maps';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../colors';
import { height, width } from '../../dimensions';

const TrackCallout: React.FC<{}> = props => {
    return (
        <MapboxGL.Callout>
            <View style={styles.calloutBox}>
                <View style={{ marginLeft: '4%', width: '90%', marginTop: '3%', flex: 1 }}>
                    <View style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 0.7, flexDirection: 'column', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='account-music' size={22} color={COLORS.dark} />
                                <Text style={{ marginLeft: '4%' }} numberOfLines={1} ellipsizeMode='tail'>The best song everyyyyy</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='album' size={22} color={COLORS.dark} />
                                <Text style={{ marginLeft: '4%' }} numberOfLines={1} ellipsizeMode='clip'>The best album</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{marginLeft: '3%', borderWidth: 2, borderColor: COLORS.main, marginTop: '3%', marginBottom: '3%', borderRadius: 10}}>
                                <Icon name='play' color={COLORS.dark} size={34} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.speechBubbleArrow}>
            </View>
        </MapboxGL.Callout>
    )
}

const styles = StyleSheet.create({
    calloutBox: {
        width: width(0.6),
        height: height(0.12),
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: COLORS.main
    },
    speechBubbleArrow: { // TODO: Figure out how to use other properties width/height in same scope properties
    }
});

styles.speechBubbleArrow = {
    width: 0,
    height: 0,
    borderWidth: 20,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderTopWidth: styles.calloutBox.width / 30,
    borderRightWidth: styles.calloutBox.width / 30,
    borderBottomWidth: 0,
    borderLeftWidth: styles.calloutBox.width / 30,
    borderTopColor: COLORS.main,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    backgroundColor: 'transparent',
}

export default TrackCallout;