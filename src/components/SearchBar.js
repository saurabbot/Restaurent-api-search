import React from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
const SearchBar =({ term, onTermChange, onTermSubmit }) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false} 
            style={styles.inputStyle}placeholder="Search"
            value={term}
            onChangeText={(newTerm)=> onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'gray',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    }
    
  });

export default SearchBar;