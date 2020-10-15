import React, { useState } from 'react'
import {
    Alert,
    Button,
    Modal,
    Text,
    TouchableHighlight,
    View,
    TextInput
} from 'react-native';
import styles from './find-car-style';
import BackgroundImage from '../../components/background-screen.component';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const FindCarScreen01 = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <BackgroundImage>
                <View style={{ flex: 8 }}>
                    <MapView
                        style={{ flex: 4 }}
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        showsUserLocation={true}
                        showsMyLocationButton={true}>
                    </MapView>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}>
                            <View style={styles.modalView}>
                                <View>
                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text>Bạn muốn tìm bệnh viện nào?</Text>
                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        >
                            <Text style={styles.textStyle}>Nơi đến</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </BackgroundImage>
        </View>
    );
};

export default FindCarScreen01;