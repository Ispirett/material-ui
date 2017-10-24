import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let SignalWifi4Bar = props =>
  <SvgIconCustom {...props}>
    <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" />
  </SvgIconCustom>;

SignalWifi4Bar = pure(SignalWifi4Bar);
SignalWifi4Bar.muiName = 'SvgIcon';

export default SignalWifi4Bar;