  import React from 'react';

    import {

      View,
      Text,
      TouchableOpacity
    } from 'react-native';

    var Contact =  React.createClass({

      navigateToAbout: function(){
        this.props.navigator.pop();
      },

      render: function () {
        return (
          <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor:'yellow'}}>
              <Text>
                  About
              </Text>
              <TouchableOpacity onPress={this.navigateToAbout}>
              <Text>
                    Back to About
              </Text>
            </TouchableOpacity>
          </View>
        );
      }

    });

    module.exports = Contact;
