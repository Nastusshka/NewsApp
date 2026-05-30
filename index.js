// Импортируем registerRootComponent, чтобы Expo правильно запустил приложение.
import { registerRootComponent } from 'expo';

// Импортируем главный компонент приложения.
import App from './App';

// Регистрируем приложение для запуска в Expo Go, на телефоне и в браузере.
registerRootComponent(App);
