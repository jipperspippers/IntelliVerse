import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useMutation } from '@apollo/client';
import { LinearGradient } from 'expo-linear-gradient';
import { registerRootComponent } from 'expo';
import { styles } from "./fragments/mainViewStyles";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    name: 'test',
    cache: new InMemoryCache(),
    version: '0'
});

  const myTheme = {
    dark: false,
    colors: {
      primary: '#E6E6E6B0',
      background: '#373737',

      card: '#373737',
      text: '#E6E6E6B0',
      border: '#373737',
      notification: 'rgb(255, 69, 58)',
    },
  };

  export const BackButton=({backFunction, argument}: {backFunction: Function, argument: any}) => <TouchableOpacity style={styles.headerIcon} onPress={() => backFunction(argument)}>
<MaterialCommunityIcons name="arrow-left" size={24} />
</TouchableOpacity>;

  export const MyHeader = ({title, backFunction}, {title:string, backFunction:Function}) => {

    return (
      <View style={styles.myHeader}>
  
        <View style={styles.rowFlex2}>
  
          <BackButton backFunction={backFunction.myFunction} argument={backFunction.argument}/>
  
          <Text style={styles.myHeaderText}>{title}</Text>
  
        </View>
  
      </View>
    );
  };

  




const App = () => (
    <ApolloProvider client={client}>
      <NavigationContainer theme={myTheme}>
        <MyTabs/>
      </NavigationContainer>

    </ApolloProvider>
  );


  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Calendar" component={sampleComponent} options={{tabBarIcon: () => 
          (<View><MaterialCommunityIcons name="calendar" size={24} color={"#E6E6E6B0"}/></View>)}}/>

        <Tab.Screen name="Home" component={sampleComponent} options={{tabBarIcon: () => (<View>
          <MaterialCommunityIcons name="home" size={24} color={"#E6E6E6B0"}/>
        </View>)}}/>
        <Tab.Screen name="Notifications" component={sampleComponent} options={{tabBarIcon: () => (<View>
          <MaterialCommunityIcons name="bell" size={24} color={"#E6E6E6B0"}/>
        </View>)}}/>
      </Tab.Navigator>
    );
  }

  const sampleComponent = () => {
    return(

    
   <View>
    <Text>Hello Anthony</Text>
   </View>
    )
  };








export default registerRootComponent(App)
