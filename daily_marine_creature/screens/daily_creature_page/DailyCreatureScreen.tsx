import {addDays} from 'date-fns';
import * as React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import DatePicker from "react-datepicker";
import moment from 'moment';
import {Modes} from 'react-native-time-date-picker';
import {TimeDatePicker} from 'react-native-time-date-picker';
import {ImagesAssets} from '../../assets/ImageAssets';
import Icon from 'react-native-vector-icons/Ionicons';
// import { DatePicker } from 'react-native-week-month-date-picker';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Share, 
  Modal, 
  Alert,  Pressable, Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DailyCreatureScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const minDate = new Date();

  const now = moment().startOf('day').valueOf();
  const [selected_date, set_selected_date] = React.useState(now);
  const [creature_name, set_creature_name] = React.useState('Null');
  const [creature_location, set_creature_location] = React.useState('Null');
  const [creature_image, set_creature_image] = React.useState('whale');
  const [creature_description, set_creature_description] = React.useState('null');
  const [creature_photo, set_creature_photo] = React.useState('null');
  const [creature_sound, set_creature_sound] = React.useState('null');
  const [liked, set_liked] = React.useState("heart-outline");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [audio_status, set_audio_status] = React.useState('null');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  const resultIcons = {
    '': '',
    pending: '?',
    playing: '\u25B6',
    win: '\u2713',
    fail: '\u274C',
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        "marine life of the day: "+creature_name,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const styles = StyleSheet.create({
    contentContainer: {
      backgroundColor: '#5B83EB',
      justifyContent: 'center',
      alignItems: 'center',
    },

    image: {
      borderRadius: 25,
      resizeMode: 'contain',
      height: 300,
      width: 300,
    },
    overlay: {
      height: 200,
      width: 200,
      marginLeft: 50,
      // marginRight: "auto",
      zIndex: -1,
      top: 160,
      position: 'absolute',
    },
    baseText: {
      textAlign: 'center',
      fontSize: 50,
      color: 'white',
      fontFamily: 'DaysOne-Regular',
    },
    actions:{
      flexDirection:'row', 
      alignItems:'center', justifyContent:'center',
      rowGap: 30
    }, 
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize:20
    }
  });

 
  const get_creature = () => {
    fetch(
      `../creatures/${selected_date}/creature.json`,
      // ,{
      //   headers : {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //    }
      // }
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        set_creature_name(JSON.stringify(myJson.name));
        return;
      });
  };
  var Sound = require('react-native-sound');



  
 

  const on_creature_change = () => {
    const creature_data = require(`./creatures/creatures.json`);
    if (creature_data[selected_date]) {
      set_creature_name(creature_data[selected_date].name);
      // set_creature_location(creature_data[selected_date].location);
      set_creature_image(creature_data[selected_date].image);
      set_creature_description(creature_data[selected_date].description)
      set_creature_photo(creature_data[selected_date].image + '_photo')
      set_creature_sound(creature_data[selected_date].image+'_sound');
      var whoosh = new Sound('https://media.fisheries.noaa.gov/dam-migration/blue-whale.mp3??sign=1&si=zz543L5nwESTNGFR_pA5m3VKRGwrZkg3UURXQzg4V0Z5a2NmeU9TTDAzak8wTUNVc2RZV3JmRllFT1NZcXRlZnpTNkdMc3RsMitCWlVDejZ2bm10aVA2eVoreTBzUlRoa0lEdS84dGlaVmV0ZGRsZjluMTB0WUlFT1d0RTJwc2xHRHcvaHF2YjUvQXpTTnJjaHZJcGpZSkVNZm80NGNIVzIyajZqMU0wamlhREJpQlpTTzNIVmRMVHkzVkZwNHZHM3crSjBwRnhEMHVIVWVwVXBQRFlzWHNQUEtMOTBzTTlDbVBzYzJnMkZFUGg0bWkrTWJ2YVZXMkg&h=MWI1YmY3MmU1MjczMTA2ODgwMmVlZDdlMDljNjg3MGQ3OGYyYjIwYmQwOTk4MjlhNDU1NWZmMWUyODRmNTIxNQ',
      null,  (error) => {
        console.log("entered")
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        whoosh.play();
        console.log("played")
        whoosh.play((success) => {

          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
      console.log(creature_image);
    }
  };
  return (
    <ScrollView
      centerContent={true}
      contentContainerStyle={styles.contentContainer}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ScrollView  
      contentContainerStyle={styles.modalView}>
        <Image style={styles.image} source={ImagesAssets[creature_photo]} />
            <Text style={styles.modalText}>{creature_description}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Got it! </Text>
            </Pressable>
          </ScrollView>
        </View>
      </Modal>
      <TimeDatePicker
        mode={Modes.calendar}
        selectedDate={now}
        onMonthYearChange={month => {
          console.log('month: ', month);
        }}
        onSelectedChange={selected => {
          selected = moment(selected).startOf('day').valueOf();

          set_selected_date(selected);
          on_creature_change();
          console.log(
            'selected date formatted: ',
            // moment(selected).format("YYYY/MM/DD HH:mm"),
            selected,
          );
        }}
        onTimeChange={time => {
          console.log('time: ', time);
        }}
      />

      <View>
        <Text style={styles.baseText}>{creature_name}</Text>
        <Icon
            name={"play"}
            color="white"
            onPress={() => { }}
            size={50}></Icon>
        {/* <Text style={styles.baseText}>{creature_location}</Text> */}
        <Image style={styles.image} source={ImagesAssets[creature_image]} />
        <Image style={styles.overlay} source={ImagesAssets['circle']} />
        <View style={styles.actions}>
        
        <Icon
            name={"ios-book-outline"}
            color="white"
            onPress={() => {setModalVisible(true)}}
            size={50}></Icon>
          <Icon
            name={liked}
            color="white"
            onPress={() => {
              if (liked=="heart"){set_liked("heart-outline")}
              else{set_liked("heart");}
            }}
            size={50}></Icon>
          <Icon
            name="share-outline"
            color="white"
            onPress={onShare}
            size={50}></Icon>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DailyCreatureScreen;
