/**
 * compatibility.js
 */

import { AsyncStorage } from 'react-native';

const storeVersion = 'EScooter:0.1';
const versionKey = 'storeVersion';

export async function updateStoreCompatibility() {
  try {
    await AsyncStorage.setItem(versionKey, storeVersion);
    return true; // store compatible after updated
  }
  catch (error) {
    // do nothing?
  }

  return false;
}

export async function resetStoreCompatibility() {
  try {
    const keys = await AsyncStorage.getAllKeys();

    // clear all except 'versionKey'
    const keysToRemove = keys.filter(k => k !== storeVersion);
    if (keysToRemove.length) {
      await AsyncStorage.multiRemove(keysToRemove);
    }

    // incompatible version keys were removed, now update the store version to latest
    return await updateStoreCompatibility();
  }
  catch (error) {
    // do nothing?
  }
  return false;
}

export async function checkStoreCompatibility() {
  try {
    const localVersion = await AsyncStorage.getItem(versionKey);
    if (localVersion && localVersion === storeVersion) {
      return false; // store is compatible, no need to update
    }
  }
  catch (error) {
    // do nothing?
  }

  // store isn't compatible
  return resetStoreCompatibility();
}
