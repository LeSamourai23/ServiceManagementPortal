import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import BackButton from '../Components/backButton'
import StatusComponent from '../Components/TicketStatusComponent'
import { COLORS } from '../Constants/constants'

const FullTicketDetails = ({navigation, route}) => {

    const { item } =  route.params;
  return (
    <SafeAreaView style={styles.mainContainer}>
        <BackButton style={{width:30, height:30, margin:10, marginTop:0}} onPress={()=> navigation.navigate('Homescreen')}/>
      <ScrollView style={styles.ticketDetails} horizontal>
        <View style={styles.detailsContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.TICKETDETAILS_LG1, COLORS.TICKETDETAILS_LG2]}
                style={{flex:1, borderRadius:20}}>
                <Text style={{margin:5, fontSize:25, alignSelf:'center'}}>Ticket Details</Text>

                <View style={{margin:10,}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                        <Text style={styles.detailsText}>Ticket Number: </Text>
                        <Text style={styles.fetchedContent}> {item.TicketNumber} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Created Date: </Text>
                        <Text style={styles.fetchedContent}> {item.Date} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Last Updated Date: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Status: </Text>
                        <Text style={styles.fetchedContent}> {item.Status} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Criticality: </Text>
                        <Text style={styles.fetchedContent}> {item.Criticality} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Service Location: </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
        <View style={styles.detailsContainer2}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.CUSTDETAILS_LG1, COLORS.CUSTDETAILS_LG2]}
                style={{flex:1, borderRadius:20}}>
                <Text style={{margin:5, fontSize:25, alignSelf:'center'}}>Customer Details</Text>
                <View style={{margin:10,}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Customer Name: </Text>
                        <Text style={styles.fetchedContent}> {item.CustomerName} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Mobile Number: </Text>
                        <Text style={styles.fetchedContent}> {item["Mobile Number"]} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Customer Type: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>State: </Text>
                        <Text style={styles.fetchedContent}> {item["Customer State"]} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>District: </Text>
                        <Text style={styles.fetchedContent}> {item["Customer District"]}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Tehsil: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Village: </Text>
                    </View>

                </View>
            </LinearGradient>
        </View>
        <View style={styles.detailsContainer3}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.MACHINEDETAILS_LG1, COLORS.MACHINEDETAILS_LG2]}
                style={{flex:1, borderRadius:20}}>
                <Text style={{margin:5, fontSize:25, alignSelf:'center'}}>Machine Details</Text>
                <View style={{margin:10,}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Machine Number: </Text>
                        <Text style={styles.fetchedContent}> {item["Machine Number"]}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Product: </Text>
                        <Text style={styles.fetchedContent}> {item["Product"]}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Machine Model: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Series: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>State: </Text>
                        <Text style={styles.fetchedContent}> {item["Machine State"]}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>District: </Text>
                        <Text style={styles.fetchedContent}> {item["Machine District"]}</Text>   
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Tehsil: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Village: </Text>
                    </View>

                </View>
            </LinearGradient>
        </View>
        <View style={styles.detailsContainer4}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.REMARKS_LG1, COLORS.REMARKS_LG2]}
                style={{flex:1, borderRadius:20}}>
                <Text style={{margin:5, fontSize:25, alignSelf:'center'}}>Remarks</Text>
                <View style={{margin:10,}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Remark: </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Service Type: </Text>
                        <Text style={styles.fetchedContent}> {item["ServiceType"]}</Text>  
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.detailsText}>Customer Concerns: </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
      </ScrollView>
        <Text style={styles.Heading}>Ticket Status</Text>
      <ScrollView style={styles.ticketStatus} vertical showsVerticalScrollIndicator='false'>
        <StatusComponent HeadingText={'1. Allocated'} Date={'20/01/2023'} Time={'5:05 PM'}/>
        <StatusComponent HeadingText={'2. Converted To Workorder'} Date={'20/01/2023'} Time={'5:21 PM'}/>
        <StatusComponent HeadingText={'3. Escalated'} Date={'22/01/2023'} Time={'5:25 PM'}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FullTicketDetails

const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor: '#eaeff2',
        flex:1
    },
    
    ticketDetails:{
        flex:0.6,
    },

    ticketStatus:{
        flex:0.4,
        alignItem:'center',
        marginTop:10
    },

    Heading:{
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        marginTop:2,
        marginBottom:2,
        alignSelf:'center'
    },

    detailsContainer:{
        height:300,
        width:350,
        backgroundColor: '#92B2FD',
        margin:5,
        borderRadius:20,
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowColor:'#D6D8DC'
    },

    detailsContainer2:{
        height:300,
        width:350,
        backgroundColor: '#AD7FFB',
        margin:5,
        borderRadius:20,
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowColor:'#D6D8DC'
    },

    detailsContainer3:{
        height:300,
        width:350,
        backgroundColor: '#F594B7',
        margin:5,
        borderRadius:20,
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowColor:'#D6D8DC'
    },

    detailsContainer4:{
        height:300,
        width:350,
        backgroundColor: '#CCD0F6',
        margin:5,
        borderRadius:20,
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowColor:'#D6D8DC'
    },

    statusContainer: {
        width:350,
        height:100,
        backgroundColor:'white',
        margin:10,
        alignSelf:'center'
        
    },

    detailsText:{
        fontSize:16, 
        fontWeight:'bold', 
        marginBottom:7,
        opacity:0.8,
        color:'white'
    },

    fetchedContent:{
        fontSize:15,
        color:'black',
        opacity:0.7,
        fontWeight:'bold'
    }
})