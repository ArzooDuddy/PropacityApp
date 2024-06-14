import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import color from '../styles/color';

export default Message = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <View style={styles.modalBackground}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor:color.white,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:color.green,
    textAlign:'center'
  },
});