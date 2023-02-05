import { StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import SearchIcon from '../assets/SearchIcon.png'

const windowWidth = Dimensions.get('window').width;

const SearchInput = ({value, setValue, placeholder}) => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.UpperShadow}>
        <View style={styles.BottomShadow}>
            <View style={styles.background}>
             <Image source={SearchIcon} style={styles.icon} />
             <TextInput
                placeholder="Search"
                style={styles.input}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
        </View>
    </View>

  )
}

export default SearchInput

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    width:windowWidth-45,
    height: 60,
    alignSelf:'center',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity:0.1,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    height:20,
    width:20,
    alignSelf: 'center',
    marginHorizontal: 15
  },

  UpperShadow:{
    shadowOpacity:1,
    shadowRadius:6,
    shadowOffset: {
      width: -2,
      height: -6,
    },
    shadowColor:'#FFF17C'
},

   BottomShadow:{
    shadowOpacity:0.2,
    shadowRadius:6,
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowColor:'black'
},
});