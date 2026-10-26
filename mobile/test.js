import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your App</Text>
          <Text style={styles.subtitle}>A place to start building your mobile experience.</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.body}>
            Add your screens and features here. This starter uses only React Native components.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  title: {
    color: '#17202a',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#566573',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
  },
  sectionTitle: {
    color: '#17202a',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    color: '#566573',
    fontSize: 16,
    lineHeight: 24,
  },
});