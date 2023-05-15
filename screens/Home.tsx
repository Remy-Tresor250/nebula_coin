import {useState} from 'react'
import { Text, SafeAreaView, View, FlatList } from 'react-native'
import { COLORS, NFTData } from '../constants'
import FocusedStatusBar from '../components/FocusedStatusBar'


const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary}/>
    </SafeAreaView>
  )
}

export default Home