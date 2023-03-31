
import React,{useState, useEffect} from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Button, Image
} from 'react-native';
import { foodlist } from './data';


const HomeScreen = ({ navigation }) => {
  const [text, settext] = useState();
  const handleChange = (text)=> {
    settext(text);
  }
  const[button,setButton]= useState(0);
  const onPressButton = () =>{
    console.log();
  }
  
  /* selectedFood = [
    {
      name: 'Rice',
      price: 25,
      quantity: 2
    },
    {
      name: 'roti',
      price: 25,
      quantity: 4
    }
  ]*/
  const handleCheckout = ()=> {
    navigation.navigate('Checkout', {
      selectedFood: ''
    })
  }
  console.log(foodlist);
   
  return (
        <View> 
          <Text>
            hello world my name is ankit kumar
          </Text>
          <TextInput 
            onChangeText= {handleChange}
            placeholder= "Search"
            value ={Text} 
          />
          <Button
            onPress={onPressButton}
            title ="Search"
            color ="#841584"
          />
          <View style={styles.flexhorizonlty}>
            <View style={styles.veg}>
              <Button
                onPress={onPressButton}
                title ="vegetarian"
                color ="#03B000"
              />
            </View>
            <View style={styles.nonveg}>
              <Button
                onPress={onPressButton}
                title ="Non-vegetarian"
                color ="#F03B06"
              />
            </View>
          </View>
          <Text style ={styles.recommand}>
            Recommands For You
          </Text>
          <Button onPress={handleCheckout} title="process to checkout" color={'#F03b06'} />
          <FlatList
            data={foodlist}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={<SperatorComponent />}
          />
          
           
        </View>
  );
}

const Item = (item) => {
  const { name, img, price, rate } = item.item;
  const [count,Setcount]= useState(0);
  const [selectedList, setSelectedList] = useState([]);


  
  const incrementcounts = (name, price) => {
    Setcount(count+1);
  }
  const decrementcounts = () => {
    Setcount(count-1);
  }

  useEffect(() => {

  }, [count])

  return (
    <>
      <View style = {styles.fooddetails}>
        <Image source={{ uri: img }}  style={styles.food}  />   
        <View>
          <Text style={styles.details}>{name}</Text>
        <View style = {styles.price}>
          <Text style={styles.rupee}>₹{price}</Text>
          <Text style={styles.rate}>Rate:{rate}</Text>
          </View>
        </View>
      </View>  
      <View style={styles.count}>
        <View style={styles.decrement}>
        <Button 
          onPress={() => decrementcounts(name, price)}
          title ="-"
          color ="#C62525"
        />
        </View>
        <Text style={{fontSize:40}}> {count}</Text>
        <View style={styles.increment}>
        <Button 
          onPress={() => incrementcounts(name, price)}
          title ="+"
          color ="#4619DA"           
        />
        </View>
      </View>
    </>
  )
}

const SperatorComponent = () => {
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }}>

    </View>
  )
}
const styles = StyleSheet.create({
  flexhorizonlty: {
    flexDirection: 'row',
    marginVertical: 10,
    alignContent: 'center'
  },
  veg : {
    marginHorizontal: 20
  },
  nonveg:{
    // borderWidth: 1, 
  },
  recommand :{
    fontSize: 30,
    fontWeight: 'normal',
    paddingLeft:30
  },
  food:{
    width:50,
    height:40,
    padding: 70,
    margin:10
  },
  fooddetails:{
    flexDirection: 'row',
  },
  details:{
    padding:30,
    fontWeight: 'normal',
    fontSize:25
  },
  rupee:{
    padding:10,
    fontWeight: 'normal',
    fontSize:30,
    marginRight:40, 
  },
  price:{
    flexDirection: 'row',
  },
  rate:{
    fontSize:30,
  },
  increment:{
    width:50
  },
  decrement:{
    width:50
  },
  count:{
    flexDirection: 'row',
    margin:15
  }
});

export default HomeScreen;
