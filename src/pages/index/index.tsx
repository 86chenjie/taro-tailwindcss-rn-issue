import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.scss'
import ExIconfont from "../../components/ex-iconfont";

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className="bg-blue-300">1111</Text>

        {/*<AtButton type='primary' onClick={() => {
          console.log('click')
        }}
        >测试</AtButton>*/}
        <ExIconfont name='male' />
        <Text>2222</Text>
      </View>
    )
  }
}
