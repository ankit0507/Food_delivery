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
  const proceed = () => {
    console.log();
  }
  console.log('selectedFood', selectedFood);
  return (
    <View>
      
      <View>
        <View style={styles.inline}>
          <Text > Death By Chocolate </Text>
          <View style={styles.countpage}>
            <View>
              <Button
                onPress={decrement}
                title='-'
                color={'#C62525'}
              />
            </View>
            <Text>{count}</Text>
            <View>
              <Button
                onPress={increment}
                title='+'
                color={'#4619DA'}
              />
            </View >
          </View>
        </View>
        <View>
          <TextInput
            onChangeText={handleChange}
            placeholder='Add More Items'
          />
        </View>
      </View>
      <View>
        <Text>Offers And Benefits</Text>
      </View>
      <View style={styles.Apply}>
        <Text>WELCOM50</Text>
        <View>
          <Button
            onPress={Apply}
            title='Apply'
            color="#F78A0E"
          />
        </View>
      </View>
      <View>
        <Button
          onPress={Viewmore}
          title='View More Coupons'
          color="#0EF773"
        />
      </View>
      <View>
        <Text>Bill Details</Text>
        <View style={styles.free}>
          <View>
            <Text>Item Total </Text>
            <Text>Delivery Free|1 kms </Text>
            <Text>Free Delivery on your order </Text>          
          </View>
          <View>
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
        <Text>Almost There </Text>
        <Text>Login/createAccount quickly to place order</Text>
        <View>
          <Button
            onPress={proceed}
            title='Proceed with Phone Number'
            color="#F7250E"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  countpage: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    justifyContent: 'space-between'

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
  }
});
export default Checkoutpage;