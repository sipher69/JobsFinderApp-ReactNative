import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
        source={{
          uri: checkImageURL(companyLogo) 
          ? companyLogo : "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png"
        }}
        style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>{companyName} /</Text>
      <View style={styles.locationBox}>
        <Image 
        source={icons.location}
        resizeMode='contain'
        style={styles.locationImage}
        />
        <Text style={styles.locationName}>{location}</Text>
      </View>
      </View>
    </View>
  )
}

export default Company