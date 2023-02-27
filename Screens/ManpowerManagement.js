import { StyleSheet, Text, Dimensions,View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SearchInput from '../Components/SearchBar2'
import Filler from '../Components/Filler'
import ManpowerIcon from '../assets/Manpower.png'
import { COLORS } from '../Constants/constants'

const windowWidth = Dimensions.get('window').width;

const ManpowerManagement = () => {

  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([])  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.jsonserve.com/7e6LBT')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setOldData(response);
      })

  }, []);

  if (!data) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  const onSearch =(text)=>{
    if(text==''){
      setData(oldData)
    }
    else{
      let tempList=data.filter(item=>{
        return item.Name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
  
      setData(tempList)
    }


  }

  return (
    <View style={styles.mainContainer}>
        <View>
          <LinearGradient start={{ x: 0, y: 0 }}
              end={{ x: 1, y: -1 }}
              colors={[COLORS.SECONDARY_LG1, COLORS.SECONDARY_LG2]}
              height={110}
              style={styles.headingContainer}>
            
              <Text style={{fontWeight:'bold', marginTop:70, marginLeft:12, fontSize:27}}>Manpower Management</Text>
          </LinearGradient> 
        </View>
        <View style={{marginTop:12}}>
          <SearchInput 
            value={searchTerm} 
            onChangeText={txt => { 
              onSearch(txt);
              setSearchTerm(txt);
            }}
            />
        </View>
        <View style={{marginTop:10, alignSelf:'center', }} vertical showsVerticalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> (
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image source={ManpowerIcon} style={{width:170, height:130, marginLeft:-55}}/>
                  <View style={{alignSelf:'center', marginLeft:10, width:133}}>
                    <Text style={{fontSize:19, color:'black', marginBottom:5, fontWeight:'bold', opacity:0.7}}>{item.Name}</Text>
                    <Text style={{fontSize:15}}>{item["Employee Designation"]}</Text>
                    <Text>+91 {item["Mobile Number"]}</Text>
                    <Text style={{fontWeight:'bold'}}>{item["Branch Name"]}</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-start', flexWrap: 'wrap', height:30}}>
                    <Text style={{fontWeight: 'bold', margin:3}}>E No.:</Text>
                    <Text style={{marginTop:3.5}}>{item["ECode"]}</Text>
                  </View>
                </View>
            </TouchableOpacity>
          )}
            />
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
        </View>
    </View>
  )
}

export default ManpowerManagement

const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    backgroundColor:COLORS.PRIMARY_BG
  },

  item: {
    backgroundColor: 'white',
    flexDirection:'row',
    height:130,
    width:windowWidth-20,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent:'',
    shadowOpacity:1,
    shadowRadius:6,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor:'#D6D8DC'
  },
})