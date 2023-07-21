import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Chatbot({ }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.actionWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ marginRight: 'auto' }}>
              <View style={styles.action}>
                <FeatherIcon color="#6a99e3" name="menu" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon color="#6a99e3" name="bell" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon color="#6a99e3" name="user" size={22} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>Chatbot</Text>

          <View style={styles.headerSearch}>
            <View style={styles.headerSearchInput}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter ingedients"
                  placeholderTextColor="#9eadba"
                  style={styles.input}
                />

                <View style={styles.inputIcon}>
                  <FeatherIcon color="#9eadba" name="box" size={16} />
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
            {/* Replace with your content */}
          </View>
        </View>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    headerTitle: {
      fontSize: 27,
      fontWeight: '700',
      color: '#222',
      marginTop: 24,
      marginBottom: 16,
    },
    headerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerSearchInput: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      marginRight: 12,
    },
    placeholder: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      height: 400,
      marginTop: 24,
      padding: 0,
    },
    placeholderInset: {
      borderWidth: 4,
      borderColor: '#e5e7eb',
      borderStyle: 'dashed',
      borderRadius: 9,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    action: {
      width: 48,
      height: 48,
      borderRadius: 12,
      marginHorizontal: 8,
      backgroundColor: '#e8f0f9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal: -8,
    },
    input: {
      height: 44,
      backgroundColor: '#f0f6fb',
      paddingLeft: 44,
      paddingRight: 24,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
    },
    inputWrapper: {
      position: 'relative',
      width: '100%',
    },
    inputIcon: {
      position: 'absolute',
      width: 44,
      height: 44,
      top: 0,
      left: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      backgroundColor: '#222',
      borderColor: '#222',
    },
    btnText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: '600',
      color: '#fff',
    },
  });