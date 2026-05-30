// Импортируем StyleSheet, чтобы писать стили React Native вместо CSS.
import { StyleSheet } from 'react-native';

// Создаем объект styles со всеми стилями приложения.
const styles = StyleSheet.create({
  // Главный контейнер всего экрана.
  container: {
    // Занимает весь экран.
    flex: 1,
    // Задает розовый фон приложения.
    backgroundColor: '#ffe4f1',
  },

  // Шапка приложения сверху.
  header: {
    // Белый фон шапки.
    backgroundColor: 'white',
    // Отступ сверху для телефона.
    paddingTop: 50,
    // Отступ снизу.
    paddingBottom: 20,
    // Скругление нижнего левого угла.
    borderBottomLeftRadius: 25,
    // Скругление нижнего правого угла.
    borderBottomRightRadius: 25,
    // Ставим элементы по центру.
    alignItems: 'center',
    // Цвет тени.
    shadowColor: '#ff69b4',
    // Смещение тени.
    shadowOffset: { width: 0, height: 5 },
    // Прозрачность тени.
    shadowOpacity: 0.1,
    // Размытие тени.
    shadowRadius: 10,
    // Тень на Android.
    elevation: 5,
  },

  // Главный заголовок.
  title: {
    // Размер текста.
    fontSize: 32,
    // Жирный текст.
    fontWeight: 'bold',
    // Розовый цвет.
    color: '#d63384',
  },

  // Подзаголовок.
  subtitle: {
    // Размер текста.
    fontSize: 14,
    // Серый цвет.
    color: '#777',
    // Отступ сверху.
    marginTop: 5,
  },

  // Блок управления.
  controls: {
    // Внутренний отступ.
    padding: 20,
    // Расстояние между элементами.
    gap: 10,
  },

  // Контейнер кнопок категорий.
  categoryContainer: {
    // Кнопки располагаются в строку.
    flexDirection: 'row',
    // Если кнопки не помещаются, они переносятся.
    flexWrap: 'wrap',
    // Расстояние между кнопками.
    gap: 8,
  },

  // Обычная кнопка категории.
  categoryButton: {
    // Белый фон.
    backgroundColor: 'white',
    // Внутренний отступ сверху и снизу.
    paddingVertical: 10,
    // Внутренний отступ слева и справа.
    paddingHorizontal: 12,
    // Скругление углов.
    borderRadius: 10,
    // Толщина рамки.
    borderWidth: 2,
    // Цвет рамки.
    borderColor: '#ffb6d9',
  },

  // Активная кнопка категории.
  categoryButtonActive: {
    // Розовый фон активной кнопки.
    backgroundColor: '#ff4da6',
    // Розовая рамка активной кнопки.
    borderColor: '#ff4da6',
  },

  // Текст обычной кнопки категории.
  categoryText: {
    // Розовый цвет текста.
    color: '#d63384',
    // Жирность текста.
    fontWeight: '600',
  },

  // Текст активной кнопки категории.
  categoryTextActive: {
    // Белый цвет активного текста.
    color: 'white',
  },

  // Кнопка загрузки.
  button: {
    // Розовый фон.
    backgroundColor: '#ff4da6',
    // Вертикальный отступ.
    paddingVertical: 15,
    // Скругление углов.
    borderRadius: 10,
    // Центрируем текст внутри кнопки.
    alignItems: 'center',
    // Отступ сверху.
    marginTop: 10,
  },

  // Текст кнопки загрузки.
  buttonText: {
    // Белый цвет.
    color: 'white',
    // Жирный текст.
    fontWeight: 'bold',
    // Размер текста.
    fontSize: 16,
  },

  // Блок загрузки.
  loader: {
    // Внутренний отступ.
    padding: 30,
    // Центрируем элементы.
    alignItems: 'center',
  },

  // Текст загрузки.
  loadingText: {
    // Отступ сверху.
    marginTop: 10,
    // Розовый цвет.
    color: '#d63384',
  },

  // Контейнер новостей.
  newsGrid: {
    // Внутренний отступ.
    padding: 20,
    // Расстояние между карточками.
    gap: 20,
  },

  // Карточка новости.
  card: {
    // Светло-розовый фон карточки.
    backgroundColor: '#fff0f7',
    // Скругление углов.
    borderRadius: 20,
    // Обрезаем лишнее по скруглению.
    overflow: 'hidden',
    // Отступ снизу.
    marginBottom: 20,
    // Цвет тени.
    shadowColor: '#ff69b4',
    // Смещение тени.
    shadowOffset: { width: 0, height: 5 },
    // Прозрачность тени.
    shadowOpacity: 0.1,
    // Размытие тени.
    shadowRadius: 10,
    // Тень на Android.
    elevation: 3,
  },

  // Картинка новости.
  image: {
    // Ширина на всю карточку.
    width: '100%',
    // Высота картинки.
    height: 200,
  },

  // Контент карточки.
  cardContent: {
    // Внутренний отступ.
    padding: 15,
  },

  // Заголовок новости.
  newsTitle: {
    // Размер текста.
    fontSize: 17,
    // Цвет текста.
    color: '#333',
    // Отступ снизу.
    marginBottom: 10,
    // Полужирный текст.
    fontWeight: '600',
  },

  // Дата новости.
  date: {
    // Размер текста.
    fontSize: 12,
    // Серый цвет.
    color: '#777',
    // Отступ снизу.
    marginBottom: 10,
  },

  // Текст ссылки.
  link: {
    // Ярко-розовый цвет.
    color: '#ff1493',
    // Жирный текст.
    fontWeight: 'bold',
    // Размер текста.
    fontSize: 14,
  },

  // Пустое состояние.
  emptyState: {
    // Внутренний отступ.
    padding: 50,
    // Центрируем текст.
    alignItems: 'center',
  },

  // Текст пустого состояния.
  emptyText: {
    // Серый цвет.
    color: '#999',
    // Размер текста.
    fontSize: 16,
    // Выравнивание по центру.
    textAlign: 'center',
  },
});

// Экспортируем стили для использования в script.js.
export default styles;
