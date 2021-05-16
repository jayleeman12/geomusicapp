import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { height, width } from '../../dimensions';


const LoadingPage: React.FC<{}> = (props) => (
    <View style={{ flex: 1, width: width(), height: height(), justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, width: '80%', height: '50%' }}>
            <ActivityIndicator size={100} color='blue' style={{ width: '100%', height: '100%' }} />
        </View>
    </View>
);

export default LoadingPage;