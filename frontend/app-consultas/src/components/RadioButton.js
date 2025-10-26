import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function RadioButton({ options, selectedOption, onSelect }) {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          <View style={styles.outerCircle}>
            {selectedOption === option && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  innerCircle: { height: 12, width: 12, borderRadius: 6, backgroundColor: '#3498db' },
  label: { fontSize: 16, textTransform: 'capitalize' },
});