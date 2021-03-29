import React,{useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView} from "react-native";
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


const SearchScreen =() =>{
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  
  
    return (
        <View style={{flex: 1}}>
        <SearchBar 
        term ={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit ={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text>: null}
        <ScrollView>
        <ResultsList results ={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList results ={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>

        </ScrollView>
        

        </View>
        
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default SearchScreen;
