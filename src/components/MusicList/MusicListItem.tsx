import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { human, robotoWeights, systemWeights } from 'react-native-typography'
import { COLORS } from '../../colors';
import { getTimeAgo } from '../../date';
import { Track } from '../../types'

const MusicListItem: React.FC<Track> = (playingTrack: Track) => {
    const [timeAgoText, setTimeAgoText] = useState<string>('')
    const [timeAgoColor, setTimeAgoColor] = useState<string>('')
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.23 }}>
                <View style={{ overflow: 'hidden', borderWidth: 1, borderColor: 'transparent', height: '100%', width: '100%', borderRadius: 10 }}>
                    <Image resizeMode='stretch' style={{ height: '100%', width: '100%' }} source={{ uri: playingTrack.imageSrc }} />
                </View>
            </View>
            <View style={{ flex: 0.6, flexDirection: 'column' }}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Text style={[human.title3, robotoWeights.medium, { marginLeft: '3%', color: COLORS.dark }]}>{playingTrack.name}</Text>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'space-around', flexDirection: 'column' }}>
                    <Text style={[human.callout, robotoWeights.regular, { marginLeft: '3%', color: COLORS.dark }]}>{playingTrack.artist}</Text>
                    <Text style={[human.subhead, robotoWeights.regular, { marginLeft: '3%', color: timeAgoColor }]}>{timeAgoText}</Text>
                </View>
            </View>
        </View>
    )
}

export default MusicListItem