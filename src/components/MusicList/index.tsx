import React from 'react';
import { Alert, BackHandler, StyleSheet, Text, TextBase, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../colors';
import { width } from '../../dimensions';
import { Track } from '../../types';
import { useGeolocation } from '../../useGeolocation';
import LoadingPage from '../LandingPage/LoadingPage';
import LocationDisabledPage from './LocationDisabledPage';
import MusicListItem from './MusicListItem';

const playingTracks: Track[] = [
    {
        name: 'Wild Horses',
        artist: 'The Rolling Stones',
        timestamp: null,
        location: { longitude: 34.878657, latitude: 32.175612 },
        imageSrc: 'https://i1.sndcdn.com/artworks-000374202633-pqm4gy-t500x500.jpg',
        user: {
            name: 'Blake Griffin',
            imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41cuQnJf5kL._AC_.jpg'
        }
    },
    {
        name: 'Money',
        artist: 'Pink Floyd',
        timestamp: new Date(new Date().getTime() - 60*1000*15),
        imageSrc: 'https://i1.sndcdn.com/artworks-000374202633-pqm4gy-t500x500.jpg',
        location: { longitude: 34.910263, latitude: 32.170382 },
        user: {
            name: 'Blake Griffin',
            imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41cuQnJf5kL._AC_.jpg'
        }
    },
    {
        name: 'Crazy Bird',
        artist: 'Wild Child',
        timestamp: new Date(new Date().setDate(new Date().getDate() - 7)),
        imageSrc: 'https://i1.sndcdn.com/artworks-000374202633-pqm4gy-t500x500.jpg',
        location: { longitude: 34.895627, latitude: 32.185202 },
        user: {
            name: 'Blake Griffin',
            imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/41cuQnJf5kL._AC_.jpg'
        }
    }
]

const MusicList: React.FC<{}> = () => {
    const location = useGeolocation();
    if (location === null) return <LoadingPage />;  // Retrieving initial location
    if (location === undefined) return <LocationDisabledPage />;  // Location cannot be determined
    return (
        <View style={{ flex: 1, backgroundColor: `${COLORS.light}34` }}>
            <View style={{marginTop: '5%', height: '100%' }}>
                {playingTracks.map((playingTrack: Track, index: number) =>
                    <View key={index} style={{ height: '12%', marginTop: '7%' }}>
                        <MusicListItem {...playingTrack} />
                    </View>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewSwapButtonContainer: {
        position: 'absolute',
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        top: '3%',
        right: '5%',
        width: width(0.12),
        height: width(0.12),
        justifyContent: 'center',
        backgroundColor: COLORS.light,
        borderColor: COLORS.dark
    }
})

export default MusicList