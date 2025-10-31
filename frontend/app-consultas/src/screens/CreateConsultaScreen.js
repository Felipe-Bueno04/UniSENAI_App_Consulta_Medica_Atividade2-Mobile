import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Button } from 'react-native';
import { createConsulta } from '../api/consultaService';
import styles from './CreateConsultaScreen.styles.js';
import { RadioButton } from '../components/RadioButton';

export function CreateConsultaScreen({ navigation }) {
  const [nomePaciente, setNomePaciente] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [especialidade, setEspecialidade] = useState('GERAL');
  const [nomeMedico, setNomeMedico] = useState('');

  const especialidadeOptions = ['CARDIOLOGISTA', 'GERAL', 'PSIQUIATRIA', 'NEUROLOGISTA'];

  const handleSubmit = async () => {
    if (!nomePaciente || !data || !hora || !especialidade || !nomeMedico) {
      return Alert.alert('Atenção', 'Todos os campos são obrigatórios.');
    }

    const [dia, mes, ano] = data.split('-');
    const dataHoraISO = `${ano}-${mes}T${hora}:00.000Z`;

    try {
      await createConsulta({
        nome_paciente: nomePaciente,
        data_hora_consulta: dataHoraISO,
        especialidade,
        nome_medico: nomeMedico,
      });
      Alert.alert('Sucesso!', 'Consulta agendada.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível agendar. Verifique os dados (DD-MM-AAAA e HH:MM).');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome do Paciente</Text>
      <TextInput style={styles.input} value={nomePaciente} onChangeText={setNomePaciente} />

      <Text style={styles.label}>Nome do Médico</Text>
      <TextInput style={styles.input} value={nomeMedico} onChangeText={setNomeMedico} />

      <Text style={styles.label}>Data da Consulta</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="DD-MM-AAAA"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Hora da Consulta</Text>
      <TextInput
        style={styles.input}
        value={hora}
        onChangeText={setHora}
        placeholder="HH:MM"
      />

      <Text style={styles.label}>Especialidade</Text>
      <RadioButton
        options={especialidadeOptions}
        selectedOption={especialidade}
        onSelect={setEspecialidade}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Agendar Consulta" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}