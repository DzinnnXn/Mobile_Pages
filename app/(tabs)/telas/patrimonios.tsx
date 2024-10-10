import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import Footer from '@/components/footer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Definindo a interface para o tipo dos itens da lista
interface Room {
  id: string;
  num_inventario: string;
  denominacao: string;
  localizacao: string;
  sala: string;
  link_imagem: string;
} 

interface PatrimonioScreenProps {
  onNavigate: (screen: string) => void;
}

const PatrimonioScreen: React.FC<PatrimonioScreenProps> = ({ onNavigate }) => {
  const [inventarios, setInventarios] = useState<Room[]>([]);

  useEffect(() => {
    const fetchInventarios = async () => {
      try {
        const response = await axios.get('http://192.168.0.215:8000/api/inventarios/');
        setInventarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar os inventários", error);
      }
    };

    fetchInventarios();
  }, []);

  const renderItem = ({ item }: { item: Room }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.link_imagem }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.patrimonioName}>{item.denominacao || 'N/A'}</Text>
        <Text style={styles.location}>{item.sala || 'Localização não disponível'}</Text>
        <Text style={styles.inventoryNumber}>{item.num_inventario || 'Número de inventário não disponível'}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('ServiceHome')}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('Menu')}>
          <Ionicons name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={require('@/assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Patrimônios</Text>

      {/* Search and Action Buttons */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Pesquisar..." style={styles.searchInput} />
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="filter-list" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={inventarios}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>

      <Footer onNavigate={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: '#8B0000',
    borderRadius: 20,
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#B30000',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginVertical: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  logo: {
    width: 170,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  patrimonioName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
  inventoryNumber: {
    fontSize: 14,
    color: '#777',
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  list: {
    paddingBottom: 80,
  },
});

export default PatrimonioScreen;
