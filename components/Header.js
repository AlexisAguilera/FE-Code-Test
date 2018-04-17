import React from 'react';
import { TextInput, View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const Header = (props) => {
  console.log("props",props);
    const { showBack=false, title } = props;
    const { viewStyle } = styles;
    console.log("showBack", showBack);
    return (
        <View style={viewStyle}>
          <View style={{ flex: showBack ? 0.2 : 0 }}>
            {showBack ?
              <TouchableWithoutFeedback
                onPress={() => Actions.pop()}>
              <Icon name="arrow-left" size={20} color='#fff' style={{margin: 20}} />
              </TouchableWithoutFeedback> : null}
          </View>
          <View>
          <Text style={styles.textStyle}>
            {title}
          </Text>
          </View>

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
    },
    textStyle: {
     TextAlign: 'center',
     fontSize: 20,
     color: '#fff',
     fontWeight: '300',
     alignSelf: 'center'
   }
};

export default Header;
