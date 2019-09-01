import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView, Button  } from 'react-native';
import { fetchWeather, closeWeather, nextWeather } from './redux/actions/actions';
import { Table, Row, Rows,} from 'react-native-table-component';

class App extends React.Component{
  //запрос на сервер
  onPressGetWeather(){
    this.props.fetchWeather('https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt')
  }
  //сбросить стейты на дефолт
  onPressCloseWeather(){
    this.props.closeWeather('Closed')
  }
  //следующие 25 значений
  onPressNextWeather(){
    this.props.nextWeather()
  }

  render(){
      return (
        <View style={styles.container}>
          <Text>Weather statisticks</Text>
          <ScrollView>
            {
              this.props.weather.length >= 1 ?
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', }}>
                <Row data={this.props.row} style={styles.head} textStyle={styles.text}/> 
                <Rows data={this.props.pagination} textStyle={styles.head}/> 
              </Table> : 
              <Text>Press SHOW to start</Text>
            }
            
          </ScrollView>
          <View style={styles.buttons}>
            {
              this.props.weather.length >= 1 ? 
              <Button
                style={styles.button}
                title = "Prev"
                onPress={() => this.onPressGetWeather()} 
              /> : 
              <Button
                style={styles.buttons}
                title = "Show"
                onPress={() => this.onPressGetWeather()} 
              />

            }
              {
                this.props.weather.length >= 1 ? 
                (<Button title = "Close" onPress={() => this.onPressCloseWeather()} />,
                <Button title = "Next" onPress={() => this.onPressNextWeather()} />)
                : null
              }
          </View>
        </View>
      );
  }
}

const mapStateToProps = state => {
  return {
    weather : state.shoWeather.weather,
    row : state.shoWeather.row,
    pagination: state.shoWeather.pagination,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: url => dispatch(fetchWeather(url)),
    closeWeather: value => dispatch(closeWeather(value)),
    nextWeather: () => dispatch(nextWeather())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: { height: 40, backgroundColor: '#f1f8ff'},
  text: { margin: 6, },
  buttons: {flexDirection:'row', paddingTop: 5},
  
});