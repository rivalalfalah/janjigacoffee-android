import React from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/NewProduct';

import camera from '../assets/add/camera.png';

function New_Promo() {
  return (
    <>
      <ScrollView>
        <View style={styles.all_container}>
          <View></View>
          <View style={styles.container_up}>
            <Image source={camera} style={styles.image} />
            <ButtonOpacity
              color={'#000000'}
              text="Add more picture"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={
                {
                  // onPressIn: () => console.log('Pressed In'),
                  // onPressOut: () => console.log('Pressed Out'),
                  // onLongPress: () => navigation.popToTop(),
                }
              }
            />
          </View>
          <View>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Price</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Input the normal price"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Discount</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Input the discount you'll use for the promo"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Delivery info</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type delivery information for this promo"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Expired date</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type the expire date for the promo"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Describe your product min. 150 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
            />
          </View>
          <View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Add more picture"
              radius={20}
              colorText="white"
              height={70}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={
                {
                  // onPressIn: () => console.log('Pressed In'),
                  // onPressOut: () => console.log('Pressed Out'),
                  // onLongPress: () => navigation.popToTop(),
                }
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default New_Promo;
