import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { human, robotoWeights, systemWeights } from 'react-native-typography'
import { COLORS } from '../../colors';
import { getTimeAgo } from '../../date';
import { height, width } from '../../dimensions';
import { Track } from '../../types'

const MusicListItem: React.FC<Track> = (playingTrack: Track) => {
    const [timeAgoText, setTimeAgoText] = useState<string>('')
    const [timeAgoColor, setTimeAgoColor] = useState<string>('grey')
    useEffect(() => {
        if (playingTrack.timestamp) {
            setTimeAgoText(getTimeAgo(playingTrack.timestamp))
            setTimeAgoColor('grey')
        } else {
            setTimeAgoText('Listening now')
            setTimeAgoColor('green')
        }
    }, [playingTrack.timestamp])
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderColor: 'transparent', height: '100%', width: '100%', justifyContent: 'center', borderRadius: width(0.17) * 2, overflow: 'hidden' }}>
                <Image resizeMode='stretch' style={{ height: width(0.17) }} source={{ uri: playingTrack.imageSrc }} />
            </View>
            <View style={{ flex: 0.6, flexDirection: 'column', justifyContent: 'center' }}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Text style={[human.title3, robotoWeights.medium, { marginLeft: '3%' }]}>{playingTrack.name}</Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: 'column' }}>
                    <Text style={[human.callout, robotoWeights.regular, { marginLeft: '3%', color: 'grey' }]}>{playingTrack.artist}</Text>
                    {/* <Text style={[human.subhead, robotoWeights.regular, { marginLeft: '3%', color: timeAgoColor }]}>{timeAgoText}</Text> */}
                </View>
            </View>
        </View>
    )
}

export default MusicListItem;