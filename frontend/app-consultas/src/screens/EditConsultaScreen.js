import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Button } from 'react-native';
import { updateConsulta, getConsultas } from '../api/consultaService';
import styles from './CreateConsultaScreen.styles.js';
import { RadioButton } from '../components/RadioButton';

export function EditConsultaScreen({ route, navigation }) {
  const { consulta } = route.params;
  
  const [nomePaciente, setNomePaciente] = useState(consulta.nome_paciente);
  const [data, setData] = useState(consulta.data_hora_consulta.split('T')[0].split('-').reverse().join('-'));
  const [hora, setHora] = useState(consulta.data_hora_consulta.split('T')[1].substring(0, 5));
  const [especialidade, setEspecialidade] = useState(consulta.especialidade);
  const [nomeMedico, setNomeMedico] = useState(consulta.nome_medico);

  const especialidadeOptions = ['CARDIOLOGISTA', 'GERAL', 'PSIQUIATRIA', 'NEUROLOGISTA'];

  const handleSubmit = async () => {
    if (!nomePaciente || !data || !hora || !especialidade || !nomeMedico) {
      return Alert.alert('Atenção', 'Todos os campos são obrigatórios.');
    }

    const [dia, mes, ano] = data.split('-');
    const dataHoraISO = `${ano}-${mes}-${dia}T${hora}:00.000Z`;

    try {
      await updateConsulta(consulta.id, {
        nome_paciente: nomePaciente,
        data_hora_consulta: dataHoraISO,
        especialidade,
        nome_medico: nomeMedico,
      });

      Alert.alert('Sucesso!', 'Consulta atualizada.');
      navigation.navigate('ListConsultas');
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar. Verifique os dados.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome do Paciente</Text>
      <TextInput 
        style={styles.input} 
        value={nomePaciente}
        onChangeText={setNomePaciente}
        placeholder="Digite o nome completo"
      />

      <Text style={styles.label}>Nome do Médico</Text>
      <TextInput 
        style={styles.input} 
        value={nomeMedico}
        onChangeText={setNomeMedico}
        placeholder="Digite o nome do médico"
      />

      <Text style={styles.label}>Data da Consulta</Text>
      <TextInput 
        style={styles.input} 
        value={data}
        onChangeText={setData}
        placeholder="DD-MM-AAAA"
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
        <Button title="Atualizar Consulta" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}