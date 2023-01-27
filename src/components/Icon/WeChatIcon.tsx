import {FC, memo} from 'react';

import IconWC, {IconPropsWC} from './IconWC';

const WeChatIcon: FC<IconPropsWC> = memo(props => (
  <IconWC {...props}>
  
  <path data-name="layer1"
  d="M64 43.1c0-9.4-8.9-17-20-17-11 0-20 7.6-20 17s8.9 17 20 17a23.272 23.272 0 0 0 9.6-2.1l7.9 3.4-.9-8.8a15.526 15.526 0 0 0 3.4-9.5zm-26.7-4.6a2.8 2.8 0 1 1 2.8-2.8 2.734 2.734 0 0 1-2.8 2.8zm13.5 0a2.8 2.8 0 1 1 2.8-2.8 2.8 2.8 0 0 1-2.8 2.8z"
  fill="currentcolor"></path>
  <path data-name="layer1" d="M44 23.9a27.375 27.375 0 0 1 8.7 1.5c0-.4.1-.7.1-1.1C52.8 12 41 2 26.4 2S0 12 0 24.4A20.408 20.408 0 0 0 4.5 37L3.3 48.6l10.4-4.5a29.1 29.1 0 0 0 8.4 2.4 18.61 18.61 0 0 1-.4-3.4c.1-10.6 10.1-19.2 22.3-19.2zm-8.7-13.1a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm-17.8 7.5a3.714 3.714 0 0 1-3.7-3.8 3.75 3.75 0 1 1 3.7 3.8z"
  fill="currentcolor"></path>
  </IconWC>
));

export default WeChatIcon;
