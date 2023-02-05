import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Logo from '../assets/logo.png'
import HomescreenButtons from '../Components/HomescreenButtons'
import UserIcon from '../assets/user.png'
import {LinearGradient} from 'expo-linear-gradient';
import NotificationIcon from '../assets/bell.png'
import SearchInput from '../Components/SearchBar'
import filterIcon from '../assets/filter.png'
import Stats from '../Components/Stats'
import TicketSearchTabs from '../Components/TicketSearchTabs'
import Filler from '../Components/Filler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Ticket',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Ticket',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Ticket',
  },
  {
    id: '5869q10f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Ticket',
  },
  {
    id: '5869110f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Ticket',
  },
];


const Item = ({title}) => (
  <View style={styles.item}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontSize:12, fontWeight:'bold'}}>#2023-004386</Text>
      <Text style={{fontSize:12, color:'gray'}}>12/01/23</Text>
    </View>
    <Text style={{marginTop:1, fontSize:17, fontWeight:'bold'}}>Scheduled Service</Text>
    <Text style={{fontSize:15, marginTop:-12}}>Pankaj Jha</Text>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
        <Text>Allocated - </Text>
        <Text style={{color:'red'}}>High Criticality</Text>
      </View>
      <View>
        <Text style={{color:'#00377D', fontWeight:'bold'}}>Open</Text>
      </View>
    </View>
  </View>
);


const Homescreen = ({navigation}) => {

 

  return (
    <SafeAreaView style={styles.mainContainer}>
        <StatusBar
        translucent
        backgroundColor="white"
        barStyle='dark-content'
      />
      <LinearGradient start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={['#F0B517', '#FFF17C']}
                height={81}
                borderRadius={29}
                style={styles.SearchBarContainer}>
        <View style={styles.logoContainer}>
          <HomescreenButtons image={UserIcon} onPress={()=> navigation.navigate('Account')}/>
          <Image source={Logo} style={{height:85, width:200}}/>
          <HomescreenButtons image={NotificationIcon} onPress={()=> navigation.navigate('Notifications')}/>
        </View>
        <View>
          <SearchInput/>
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
        <TouchableOpacity style={{backgroundColor:'#F7F5F8', height:40, width:130, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:15, marginRight:5}}>
          <Text>Customer Name</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.statsContainer}>
        <Stats text={'Open Tickets'} textStyle={{fontWeight:'bold', color:'#00377D'}} number={5}/>
        <Stats text={'Closed Tickets'} textStyle={{fontWeight:'bold', color:'#FC5622'}} number={3}/>
      </View>
      <ScrollView style={styles.ticketContainer} vertical showsVerticalScrollIndicator={false}> 
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <Filler/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    
    mainContainer:{
        flex: 1,
        backgroundColor: '#eaeff2',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    SearchBarContainer:{
      flex:0.4,
      backgroundColor:"#00549A",
      opacity:1,
      width:windowWidth-20,
      alignSelf:'center',
      borderRadius:20,
    },

    logoContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginTop:-5
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
      flex:0.1,
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