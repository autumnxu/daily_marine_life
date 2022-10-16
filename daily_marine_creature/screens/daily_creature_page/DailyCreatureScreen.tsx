import { addDays } from 'date-fns';
import * as React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import DatePicker from "react-datepicker";
import moment from 'moment';
import { Modes } from 'react-native-time-date-picker';
import { TimeDatePicker } from 'react-native-time-date-picker';
// import { DatePicker } from 'react-native-week-month-date-picker';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
  // const [selectedDate, setSelectedDate] = React.useState(new Date());
  const now = moment().valueOf();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TimeDatePicker
        selectedDate={now}
        onMonthYearChange={(month) => {
          console.log("month: ", month);
        }}
        onSelectedChange={(selected) => {
          console.log("selected: ", selected);
        }}
        onTimeChange={(time) => {
          console.log("time: ", time);
        }}
      />
      <View>
        {/* <Text>whale</Text> */}
      </View>
    </SafeAreaView>
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