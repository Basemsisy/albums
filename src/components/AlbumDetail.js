import React from 'react';

import {Text, View, Image, Linking} from 'react-native';

import { Card, CardSection, Button } from './common';


const AlbumDetail = ({data}) => {

  const {title, artist, thumbnail_image, image, url} = data;

  const {
    thumnailContainerStyle, 
    thumbnailStyle, 
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles
  
  return (
    <Card>

      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image 
            style={thumbnailStyle} 
            source={{uri: thumbnail_image}} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}}/>
      </CardSection>

      <CardSection>
        <Button onPress={()=> Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  )
}

const styles= {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50, 
    height: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
}

export default AlbumDetail