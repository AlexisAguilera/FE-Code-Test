import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const Header = () => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Icon name="search" size={20} color='white' />
            <TextInput
                style={styles.inputStyle}
                label="Seacher"
                placeholder="Escribí el cocktail que buscas"
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#DDDD',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        elevation: 2,
        position: 'relative'

    },
    inputStyle: {
        borderRadius: 4,
        flex: 1,
        marginRight: 4,
        height: 40,
        justifyContent: 'space-around',
        backgroundColor: 'white'
    }
};

export default Header;
