import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  label: { 
    fontSize: 16, 
    marginBottom: 5, 
    color: '#333' 
  },
  input: { 
    height: 45, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
    borderRadius: 8, 
    fontSize: 16,
    backgroundColor: '#fff'  // Adicionado para garantir fundo branco
  },
});