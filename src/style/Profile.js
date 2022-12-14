import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_profile: {
    alignItems: 'center',
    borderBottomColor: 'rgba(186, 186, 186, 0.29)',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 25,
    borderBottomWidth: 9,
  },
  content_profile_text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
  },
  img: {
    borderRadius: 200,
    width: 150,
    height: 150,
  },
  img_bar: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
    position: 'relative',
  },
  name: {
    color: '#6A4029',
    fontFamily: 'Poppins',
    fontSize: 27,
    fontWeight: '700',
  },
  pencil_bar: {
    alignItems: 'center',
    backgroundColor: '#6A4029',
    borderRadius: 50,
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    width: 50,
  },
  text_profile: {
    color: '#6A4029',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '400',
    opacity: 0.8,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  // order
  history_bar: {
    borderBottomColor: 'rgba(186, 186, 186, 0.29)',
    borderBottomWidth: 9,
  },
  order: {
    paddingVertical: 24,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text_order: {
    color: '#6A4029',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  seemore: {
    color: '#6A4029',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  img_order: {
    borderRadius: 20,
    width: 60,
    height: 64,
    marginHorizontal: 10,
  },
  order_product: {
    paddingHorizontal: 35,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 25,
  },
  btn_navigate_bar: {
    paddingVertical: 25,
    backgroundColor: '#F5F5F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text_btn: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#6A4029',
  },
  btn_navigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: 'rgba(186, 186, 186, 0.32)',
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 10,
  },
  content_button_link : {
    width:`100%`,
    paddingHorizontal:20
  },
  input_password: {
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginVertical:5,
    borderColor: `#9F9F9F`,
    color:"#9F9F9F"
  },
  body_reset: {
    flexDirection:`column`
  },
  color: {
    color:'black'
  }
});

export default styles;
