import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const Checkoutpage = (props) => {
  const [count, setcount] = useState(0);
  const { selectedFood } = props.route.params;
  const increment = () => {
    setcount(count + 1);
  }
  const decrement = () => {
    setcount(count - 1);
  }
  const [text, settext] = useState(0);
  const handleChange = () => {
    settext(text);
  }
  const [buton, setbutton] = useState(0);
  const Apply = () => {
    console.log();
  }
  const [button, setbutt] = useState(0);
  const Viewmore = () => {
    console.log();
  }
  const [Billbutton, setbutto] = useState(0);
  const Free = () => {
    console.log();
  }
  const [Addbutton, setaddbutton] = useState(0);
  const Addtrip = () => {
    console.log();
  }
  const [proceedbutton, setproceedbutton] = useState(0);
  const proced = () => {
    console.log();
  }
  console.log('selectedFood', selectedFood);
  return (
    <View>
      
      <View>
        {selectedFood.map((item) => {
          return (
            <View style={styles.inline}>
              <Text>{item.name}</Text>
              <View style={styles.countpage}>
                <View>
                  <Button
                    onPress={decrement}
                    title='-'
                    color={'#C62525'}
                  />
                </View>
                <Text>{item.qantity}</Text>
                <View>
                  <Button
                    onPress={increment}
                    title='+'
                    color={'#4619DA'}
                  />
                </View>
              </View>
            </View>
          )
        })

        }
        <View>
          <TextInput
            onChangeText={handleChange}
            placeholder='Add More Items'
          />
        </View>
      </View>
      <View>
        <Text style={{fontSize:25}}>Offers And Benefits</Text>
      </View>
      <View style={styles.Apply}>
        <Text style={{fontSize:20,fontWeight:20}}>WELCOM50</Text>
        <View>
          <Button
            onPress={Apply}
            title='Apply'
            color="#F78A0E"
          />
        </View>
      </View>
      <View style={styles.viewmore}>
        <Button
          onPress={Viewmore}
          title='View More Coupons'
          color="#0EF773"
        />
      </View>
      <View>
        <Text style={{fontSize:30,fontWeight:'bold',padding:10}}>Bill Details</Text>
        <View style={styles.billdetails}>
        <View style={styles.free}>
          <View>
            <Text>Item Total </Text>
            <Text>Delivery Free|1 kms </Text>
            <Text>Free Delivery on your order </Text>          
          </View>
          <View style={styles.freebutton}>
            <Button
              onPress={Free}
              title='Free'
              color="#F7250E"
            />
          </View>
        </View>
        <View style={styles.addtip}>
          <Text>Delivery Tip </Text>          
          <View>
            <Button
              onPress={Addtrip}
              title='Add trip'
              color="#F7250E"
            />
          </View>          
        </View>
        <View style={styles.totalpayment}>
          <Text>TO Pay</Text>
          <Text > ₹523</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:20,fontWeight:25,padding:10}}>Almost There </Text>
        <Text style={{fontSize:20,fontWeight:5,paddingTop:5}}>Login/createAccount quickly to place order</Text>
        <View style={styles.proced}>
          <Button
            onPress={proced}
            title='Proceed with Phone Number'
            color="#F7250E"
          />
        </View>
        </View>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  countpage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:60,
    padding:40
    
  },
  incrementbutton: {
    flexDirection: 'row',
  },
  decrementbutton: {

  },
  textDeath: {
    fontWeight: 'normal'
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Apply:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    paddingTop:10

  },  
  free:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addtip:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalpayment:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  billdetails:{
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    paddingTop:10

  },
  freebutton:{
    
  },
  proced:{
    paddingTop:10

  },
  viewmore:{
    paddingTop:10

  } 
  
});
export default Checkoutpage;