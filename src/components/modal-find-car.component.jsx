import React from "react";
import { Modal, StyleSheet, View } from "react-native";

const ModalFindCar = (props) => {

    const [isShow, setIsShow] = React.useState(false);

    const show = () => {
        setIsShow(true);
    }

    const close = () => {
        setIsShow(false);
    }

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={isShow}
            onRequestClose={() => close()}
        >
            <View style={{
                flex: 1, 
                backgroundColor: '#000000AA', 
                justifyContent: 'flex-end'}}
            >

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ModalFindCar;
