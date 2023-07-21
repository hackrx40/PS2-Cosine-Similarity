import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Checkbox, Text, Button, Provider as PaperProvider } from 'react-native-paper';

const options = [
  { label: 'High Fever', value: 'High Fever' },
  { label: 'Mild Fever', value: 'Mild Fever' },
  { label: 'Cold', value: 'Cold' },
  { label: 'Cough', value: 'Cough' },
  { label: 'Muscle Pain', value: 'Muscle Pain' },
  { label: 'chest_pain', value: 'chest_pain' },
  { label: 'blurred and distorted vision', value: 'blurred and distorted vision' },
  { label: 'abdominal_pain', value: 'abdominal_pain' },
  { label: 'joint_pain', value: 'joint_pain' },
  { label: 'fatigue', value: 'fatigue' },
  { label: 'yellowish_skin', value: 'yellowish_skin' },
  { label: 'yellowing_of_eyes', value: 'yellowing_of_eyes' },
  { label: 'phlegm, loss_of_appetite', value: 'phlegm, loss_of_appetite' },
  { label: 'diarrhoea', value: 'diarrhoea' },
  { label: 'vomiting', value: 'vomiting' },
  { label: 'breathlessness', value: 'breathlessness' },
  { label: 'swelled_lymph_nodes', value: 'swelled_lymph_nodes' },
  { label: 'headache', value: 'headache' },
  { label: 'weight_loss', value: 'weight_loss' },
  { label: 'muscle_pain', value: 'muscle_pain' },
  { label: 'nausea', value: 'nausea' },
  { label: 'irritability', value: 'irritability' },
  { label: 'dizziness', value: 'dizziness' },
  { label: 'lethargy', value: 'lethargy' },
  { label: 'skin_rash', value: 'skin_rash' },
  { label: 'itching', value: 'itching' },
  { label: 'excessive_hunger', value: 'excessive_hunger' },
  { label: 'chills', value: 'chills' },

];

const MultipleSelectOptionScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOption = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedOptions);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <View key={option.value} style={styles.optionContainer}>
        <Checkbox.Android
          status={selectedOptions.includes(option.value) ? 'checked' : 'unchecked'}
          onPress={() => handleToggleOption(option.value)}
        />
        <Text style={styles.optionText}>{option.label}</Text>
      </View>
    ));
  };

  const handleSubmit = () => {
    // Handle the selectedOptions array as needed (e.g., store it, send it to a server, etc.)
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style = {styles.title}>Symptoms</Text>
      {renderOptions()}
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333', // Change the option text color to match your theme
  },
});

export default MultipleSelectOptionScreen;
