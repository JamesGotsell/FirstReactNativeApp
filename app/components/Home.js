  import React, {Component} from 'react';

    import {
      View,
      Text,
      TouchableOpacity
    } from 'react-native';

    import About from './About';

    var Home =  React.createClass({

      navigateToAbout: function() {

            this.props.navigator.push({
                component: About,
                title: 'About',
                navigationBarHidden: true
            });
      },
      render: function() {
        return (
            <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor:'red'}}>
                <Text>
                welcome from Home!
                </Text>
                <TouchableOpacity onPress={this.navigateToAbout}>
                  <Text>
                    About!
                  </Text>
                </TouchableOpacity>

            </View>
        )
      }
});

module.exports = Home;
