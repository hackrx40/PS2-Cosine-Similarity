import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text, Button, Provider as PaperProvider } from 'react-native-paper';

const options = [
  { label: 'Fever', value: 'Fever' },
  { label: 'Cold', value: 'Cold' },
  { label: 'Cough', value: 'Cough' },
  { label: 'Muscle Pain', value: 'Muscle Pain' },
  { label: 'chest_pain', value: 'chest_pain' },
  { label: 'chest_pain', value: 'chest_pain' },

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
        <Text>{option.label}</Text>
      </View>
    ));
  };

  const handleSubmit = () => {
    // Handle the selectedOptions array as needed (e.g., store it, send it to a server, etc.)
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <View style={styles.container}>
      {renderOptions()}
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default MultipleSelectOptionScreen;
