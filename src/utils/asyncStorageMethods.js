import { AsyncStorage } from 'react-native';

export const GetStore = async name =>
  JSON.parse(await AsyncStorage.getItem(name));

export const SetStore = async (name, value) => {
  await AsyncStorage.setItem(name, JSON.stringify(value));
};
