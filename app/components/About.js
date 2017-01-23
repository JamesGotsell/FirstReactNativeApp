  import React from 'react';

    import {
      View,
      Text,
      TouchableOpacity
    } from 'react-native';

    import Contact from './Contact';


    var About =  React.createClass({
      navigateToHome: function(){
        this.props.navigator.pop();
      },
      navigateToContact: function(){
        this.props.navigator.push({
          component: Contact,
          title: 'Contact',
          navigationBarHidden: true
        })
      },
      render() {
        return (
            <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor:'blue'}}>
                <Text>
                    About
                </Text>

                  <TouchableOpacity onPress={this.navigateToHome}>
                      <Text>
                          Back to home
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.navigateToContact}>
                      <Text>
                          Contact
                      </Text>
                </TouchableOpacity>
          </View>
        )
      }
    });
module.exports = About;
