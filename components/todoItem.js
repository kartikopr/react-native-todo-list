import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            {/* <Icon name="delete" type="MaterialIcons" size={30} color="#900" /> */}
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
 
}
// const myIcon = 
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 12    
    }
})