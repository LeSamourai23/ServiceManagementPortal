import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Logo from '../assets/logo.png'
import HomescreenButtons from '../Components/HomescreenButtons'
import UserIcon from '../assets/user.png'
import {LinearGradient} from 'expo-linear-gradient';
import NotificationIcon from '../assets/bell.png'
import SearchInput from '../Components/SearchBar'
import filterIcon from '../assets/filter.png'
import Stats from '../Components/Stats'
import StatsClosed from '../Components/Stats2'
import TicketSearchTabs from '../Components/TicketSearchTabs'
import Filler from '../Components/Filler';
import { COLORS } from '../Constants/constants';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homescreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [oldData, setOldData] = useState('');

  useEffect(() => {
    fetch('https://api.jsonserve.com/WgyZMo')
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
        <Image source={Logo} style={{height:100, width:220}}/>
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
        return item.CustomerName.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })  
      setData(tempList)
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
        <StatusBar
        translucent
        backgroundColor="white"
        barStyle='dark-content'
      />
      <LinearGradient start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.SECONDARY_LG1, COLORS.SECONDARY_LG2]}
                height={81}
                style={styles.SearchBarContainer}
                accessibilityRole="none">
                
        <View style={styles.logoContainer}>
          <HomescreenButtons image={UserIcon} onPress={()=> navigation.navigate('Account')}/>
          <Image source={Logo} style={{height:100, width:220}}/>
          <HomescreenButtons image={NotificationIcon} onPress={()=> navigation.navigate('Notifications')}/>
        </View>
        <View>
          <SearchInput             
            value={searchTerm} 
            onChangeText={txt => { 
              onSearch(txt);
              setSearchTerm(txt);
            }}/>
        </View>
      </LinearGradient>
      <ScrollView style={styles.filterContainer} horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{backgroundColor:'#F7F5F8', height:40, width:140, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:15, marginRight:5}}>
          <Image source={filterIcon} style={{width:20, height:20, marginRight:5}}/>
          <Text>All Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#F7F5F8', height:40, width:120, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:15, marginRight:5}}>
          <Text>Most Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#F7F5F8', height:40, width:100, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:15, marginRight:5}}>
          <Text>Criticality</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
            let tempList = data.sort((a,b)=> a.CustomerName>b.CustomerName ? 1 : -1);
            setData(tempList);
          }}
          style={{backgroundColor:'#F7F5F8', height:40, width:130, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:15, marginRight:5}
          }>
          <Text>Customer Name</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.statsContainer}>
        <Stats text={'Open Tickets'} textStyle={{fontWeight:'bold', color:'#00377D'}} number={5}/>
        <StatsClosed text={'Closed Tickets'} textStyle={{fontWeight:'bold', color:'#FC5622'}} number={3}/>
      </View>
      <View style={styles.ticketContainer}> 
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> (
            <TouchableOpacity onPress={()=> navigation.navigate('Full Ticket Details', {item})}>
            <View style={styles.item}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:12, fontWeight:'bold'}}>{item.TicketNumber}</Text>
                <Text style={{fontSize:12, color:'gray'}}>{item.Date}</Text>
              </View>
              <Text style={{marginTop:-10, fontSize:17, fontWeight:'bold'}}>{item.ServiceType}</Text>
              <Text style={{fontSize:15, marginTop:-12}}>{item.CustomerName}</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                  <Text>{item.Status} - </Text>
                  <Text style={{color: item.Criticality=== "High" ? 'red' : "#FFB327"}}>{item.Criticality} </Text>
                </View>
                <View>
                  <Text style={{color: item.Open=== "Open" ? '#00377D' : '#FC5622', fontWeight:'bold'}}>{item.Open}</Text>
                </View>
             </View>
            </View>
            </TouchableOpacity>
          )}
        />
        <Filler/>
      </View>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    
    mainContainer:{
        flex: 1,
        //backgroundColor: '#eaeff2',
        backgroundColor: COLORS.PRIMARY_BG,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    SearchBarContainer:{
      flex:0.4,
      opacity:1,
      width:windowWidth-20,
      alignSelf:'center',
      borderRadius:20,
      overflow: 'hidden'
    },

    logoContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginTop:-10
    },

    filterContainer:{
      flexDirection:'row',
      flex:0.075,
      width:windowWidth-20,
      alignSelf:'center',
      marginTop:10
    },

    statsContainer:{
      flexDirection:'row',
      flex:0.2,
      width:windowWidth-20,
      alignSelf:'center',
      marginTop:-340,
      alignItems:'flex-start',
      justifyContent:'center'
    },

    ticketContainer:{
      flex:1,
      alignSelf:'center',
      marginTop:0
    },

    item: {
      backgroundColor: 'white',
      padding: 20,
      height:150,
      width:windowWidth-20,
      marginVertical: 8,
      marginHorizontal: 5,
      borderRadius: 15,
      justifyContent:'space-between',
      shadowOpacity:1,
      shadowRadius:6,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowColor:'#D6D8DC'
    },
    
    title: {
      fontSize: 32,
    },
})