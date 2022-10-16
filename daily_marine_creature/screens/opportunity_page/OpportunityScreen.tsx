import React, { useCallback, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert, Button, Linking
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const OpportunityScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
          <Section title="Volunteer with the St. Louis Aquarium Foundation!">
          <OpenURLButton url={"https://www.stlaquariumfoundation.org/volunteer/"}>Link to the program</OpenURLButton>
          <Text>
          At the heart of St. Louis, two great rivers converge. From its earliest origins, water has played an essential role in the landscape, development and prosperity of the St. Louis region. Water is the most vital resource on our planet, and the soon-to-open St. Louis Aquarium is a place where people will learn about and celebrate our region’s deep appreciation for the water that surrounds and sustains us while adding to the vibrancy of the burgeoning downtown revitalization.
{"\n\r\n"}
The St. Louis Aquarium Foundation is the nonprofit partner to the St. Louis Aquarium at Union Station. It exists to help engage all members of the community by providing access and education programs and serving as the region’s recognized voice for water stewardship.
{"\n\r\n"}
The Aquarium Foundation formed in November 2017 and was announced at the groundbreaking ceremony for the St. Louis Aquarium at Union Station. With the investments of the Aquarium and other attractions coming to Union Station in late 2019, the Foundation board desires to help ensure that this extraordinary educational and inspirational experience is accessible for all. We believe the Aquarium experience will motivate people to take action to preserve and protect the local water resources that surround and shape our daily lives.
</Text>  </Section>
<Section title="Washu - Tyson research center undergraduate fellow program">
<OpenURLButton url={"https://tyson.wustl.edu/undergraduate-opportunities"}>Link to the program</OpenURLButton>
Research at Tyson spans many environmental topics and includes studies on biodiversity, disease, climate change, art, and architecture. Research projects vary from single-season student projects to faculty-led experiments and long-term monitoring. The integration of our educational programs with faculty-led research at Tyson allows scientists to tackle big questions, and student apprentices to gain the expertise they need to become independent investigators with a drive for scientific discovery.
{"\n\r\n"}
At Tyson, we have implemented a number of large and small scale sustainable initiatives, many of which serve as case studies for sustainable operations elsewhere. We work closely with the Washington University Office of Sustainability to enhance the visibility of our efforts.
</Section>
          </ScrollView>
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

export default OpportunityScreen;