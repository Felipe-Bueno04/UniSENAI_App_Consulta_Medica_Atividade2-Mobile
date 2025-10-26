import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getConsultas } from '../api/consultaService';
import styles from './ListConsultasScreen.styles';

export function ListConsultasScreen({ navigation }) {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConsultas = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getConsultas();
      setConsultas(data);
    } catch (err) {
      console.error("Erro ao carregar consultas:", err);
      setError("Não foi possível carregar as consultas. Verifique sua conexão ou o servidor.");
      Alert.alert("Erro", "Não foi possível carregar as consultas.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchConsultas();
      return () => { };
    }, [])
  );

  const renderConsulta = ({ item }) => (
    <View style={styles.consultaCard}>
      <Text style={styles.cardText}><Text style={styles.cardLabel}>Paciente:</Text> {item.nome_paciente}</Text>
      <Text style={styles.cardText}><Text style={styles.cardLabel}>Data/Hora:</Text> {new Date(item.data_hora_consulta).toLocaleString()}</Text>
      <Text style={styles.cardText}><Text style={styles.cardLabel}>Especialidade:</Text> {item.especialidade}</Text>
      <Text style={styles.cardText}><Text style={styles.cardLabel}>Médico:</Text> {item.nome_medico}</Text>
      <Text style={styles.cardText}><Text style={styles.cardLabel}>Criado em:</Text> {new Date(item.data_criacao).toLocaleString()}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando consultas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
        <Button title="Tentar Novamente" onPress={fetchConsultas} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      <View style={styles.addButtonContainer}>
        <Button
          title="Agendar Nova Consulta"
          onPress={() => navigation.navigate('CreateConsulta')}
        />
      </View>
      {consultas.length === 0 ? (
        <Text style={styles.emptyListText}>Nenhuma consulta agendada ainda.</Text>
      ) : (
        <FlatList
          data={consultas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderConsulta}
        />
      )}
    </View>
  );
}