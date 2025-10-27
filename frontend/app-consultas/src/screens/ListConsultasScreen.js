import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { getConsultas } from '../api/consultaService';
import styles from './ListConsultasScreen.styles';

export function ListConsultasScreen({ navigation }) {
  const [consultas, setConsultas] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadConsultas = useCallback(async () => {
    try {
      const data = await getConsultas();
      setConsultas(data);
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    }
  }, []);

  useEffect(() => {
    loadConsultas();
  }, [loadConsultas]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadConsultas();
    setRefreshing(false);
  }, [loadConsultas]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderConsulta = ({ item }) => (
    <View style={styles.consultaCard}>
      <Text style={styles.pacienteNome}>Paciente: {item.nome_paciente}</Text>
      <Text style={styles.consultaInfo}>Data/Hora: {formatDate(item.data_hora_consulta)}</Text>
      <Text style={styles.consultaInfo}>Especialidade: {item.especialidade}</Text>
      <Text style={styles.consultaInfo}>Médico: {item.nome_medico}</Text>
      <Text style={styles.dataCriacao}>Criado em: {formatDate(item.data_criacao)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      
      <FlatList
        data={consultas}
        renderItem={renderConsulta}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#3498db']}
          />
        }
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Nenhuma consulta agendada</Text>
        }
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CreateConsulta')}
      >
        <Text style={styles.buttonText}>AGENDAR NOVA CONSULTA</Text>
      </TouchableOpacity>
    </View>
  );
}