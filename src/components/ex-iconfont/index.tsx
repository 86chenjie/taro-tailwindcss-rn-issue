import { View } from '@tarojs/components';
import '../../assets/font/iconfont.css'

function IconFont ({ name, customStyle, color, onClick, className, size }) {

  return (
    <View className={`iconfont icon-${name}`}></View>

  );
}
/*
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
};*/

export default IconFont;