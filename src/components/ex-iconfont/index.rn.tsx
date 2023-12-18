import PropTypes from 'prop-types';
import { Text } from '@tarojs/components';
import { useFonts } from 'expo-font';
//import mergeStyle from '@/taro-util/mergeStyle'
//import Taro from '@tarojs/taro'

// 组装一次
// eslint-disable-next-line import/no-commonjs
const list = require('../../assets/font/iconfont.json').glyphs;

const fontMap = {};
list.map((item) => {
  fontMap[item.font_class] = item;
});

function IconFont ({ name, customStyle, color, onClick, className, size }) {
  const [loaded] = useFonts({
    icon: require('../../assets/font/iconfont.ttf'),
  });

  const displayText = loaded
    ? String.fromCharCode(parseInt(fontMap[name].unicode, 16))
    : fontMap[name].name;
  console.log('displayText', displayText);

  let propStyle = {
    // 图标默认样式跟随主题色
    // color: Theme.colorBrandBase(),
    fontFamily: 'icon',
  };
  /*if (color) {
    propStyle.color = color;
  }
  if (size) {
    propStyle.fontSize = Taro.pxTransform(SIZE_MAP[size] ? SIZE_MAP[size] : size);
  }*/
  //const finalStyle = mergeStyle(propStyle, customStyle);

  if (!loaded) {
    return null;
  }

  return (
    <Text
      className={className}
      style={propStyle}
      onClick={onClick} // TODO RN中 Text 不支持 onClick
    >
      {displayText}
    </Text>
  );
}

IconFont.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
};

IconFont.defaultProps = {
  size: 'normal', // normal, small, large
  color: null,
  customStyle: {},
  onClick: () => {},
};

export default IconFont;