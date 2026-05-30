// Импортируем React и useState для хранения выбранной категории, новостей и загрузки.
import React, { useState } from 'react';

import {
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  ActivityIndicator,
  Alert, 
  Linking, 
  Platform, 
} from 'react-native';

// Создаем главный компонент приложения.
export default function App() {
  // Храним выбранную категорию новостей.
  const [category, setCategory] = useState('technology');

  // Храним список загруженных новостей.
  const [articles, setArticles] = useState([]);

  // Храним состояние загрузки.
  const [loading, setLoading] = useState(false);

  // API-ключ для сервиса NewsAPI.
  const API_KEY = '377971847bed471f982b74bc1a447f0e';

  // Наши категории.
  const categories = [
    { label: 'Технологии', value: 'technology' },
    { label: 'Бизнес', value: 'business' },
    { label: 'Спорт', value: 'sports' },
    { label: 'Здоровье', value: 'health' },
    { label: 'Наука', value: 'science' },
  ];

  // Функция форматирует дату новости.
  const formatDate = (dateString) => {
    // Создаем объект даты.
    const date = new Date(dateString);

    // Получаем день.
    const day = String(date.getDate()).padStart(2, '0');

    // Получаем месяц.
    const month = String(date.getMonth() + 1).padStart(2, '0');

    // Получаем год.
    const year = date.getFullYear();

    // Получаем часы.
    const hours = String(date.getHours()).padStart(2, '0');

    // Получаем минуты.
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Возвращаем дату.
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  // Функция загружает новости из API.
  const getNews = async () => {
    // Включаем загрузку.
    setLoading(true);

    // Очищаем старые новости.
    setArticles([]);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      const data = await response.json();

      if (data.status === 'ok' && data.articles) {
        setArticles(data.articles);
      } else {
        Alert.alert(
          'Ошибка',
          data.message || 'Не удалось загрузить новости'
        );

        setArticles([]);
      }
    } catch (error) {
      console.log('Ошибка:', error);
      if (Platform.OS === 'web') {
        Alert.alert(
          'Ошибка',
          'На веб-версии NewsAPI может блокировать запрос. Проверьте приложение на телефоне или используйте другой API.'
        );
      } else {
        Alert.alert(
          'Ошибка',
          'Проверьте интернет-соединение'
        );
      }

      setArticles([]);
    }

    setLoading(false);
  };

  const openLink = (url) => {
    if (!url) {
      Alert.alert('Ошибка', 'У новости нет ссылки');

      return;
    }

    Linking.openURL(url).catch(() => {
      Alert.alert('Ошибка', 'Не удалось открыть ссылку');
    });
  };

  return (
    <ScrollView style={styles.container}>

      {/* Верхняя часть приложения. */}
      <View style={styles.header}>
        <Text style={styles.title}>📰 Новости</Text>
        <Text style={styles.subtitle}>Выберите категорию</Text>
      </View>

      {/* Блок управления. */}
      <View style={styles.controls}>

        {/* Кнопки категорий вместо Picker. */}
        <View style={styles.categories}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.categoryButton,
                category === item.value && styles.categoryButtonActive,
              ]}
              onPress={() => setCategory(item.value)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item.value && styles.categoryTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Кнопка загрузки новостей. */}
        <TouchableOpacity style={styles.button} onPress={getNews}>
          <Text style={styles.buttonText}>Загрузить</Text>
        </TouchableOpacity>
      </View>

      {/* Индикатор загрузки. */}
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ff4da6" />
          <Text style={styles.loadingText}>Загрузка новостей...</Text>
        </View>
      )}

      {/* Список новостей. */}
      <View style={styles.newsGrid}>
        {articles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => openLink(item.url)}
            activeOpacity={0.7}
          >
            {/* Картинка новости. */}
            {item.urlToImage ? (
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : null}

            {/* Контент новости. */}
            <View style={styles.cardContent}>
              <Text style={styles.newsTitle} numberOfLines={3}>
                {item.title || 'Без названия'}
              </Text>

              <Text style={styles.date}>
                🗓️ {item.publishedAt ? formatDate(item.publishedAt) : 'Дата неизвестна'}
              </Text>

              <Text style={styles.link}>Читать полностью →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Пустое состояние. */}
      {!loading && articles.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            Нажмите "Загрузить", чтобы увидеть новости
          </Text>
        </View>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4f1',
  },

  header: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff4da6',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#777',
  },

  controls: {
    padding: 20,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 15,
  },

  categoryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ff9acb',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },

  categoryButtonActive: {
    backgroundColor: '#ff4da6',
  },

  categoryText: {
    color: '#ff4da6',
    fontWeight: '600',
  },

  categoryTextActive: {
    color: 'white',
  },

  button: {
    backgroundColor: '#ff4da6',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loader: {
    alignItems: 'center',
    marginTop: 20,
  },

  loadingText: {
    marginTop: 10,
    color: '#555',
  },

  newsGrid: {
    padding: 15,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: '100%',
    height: 180,
  },

  cardContent: {
    padding: 15,
  },

  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  date: {
    marginTop: 10,
    color: '#777',
  },

  link: {
    marginTop: 12,
    color: '#ff4da6',
    fontWeight: 'bold',
  },

  emptyState: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
  },

  emptyText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
  },
});
