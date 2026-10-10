/** Licensed photographic treatments + original botanical overlays. See assets/editorial/PHOTO_LICENSES.md. */
import type { ImageSourcePropType } from 'react-native';
import type { VisibleTheme } from '../product/preferences';
const artwork: Record<VisibleTheme,{ landscape:ImageSourcePropType;book:ImageSourcePropType;botanical:ImageSourcePropType }> = {
 coral:{landscape:require('../../assets/editorial/landscape-coral.png'),book:require('../../assets/editorial/book-coral.png'),botanical:require('../../assets/editorial/botanical-coral.png')},
 natural:{landscape:require('../../assets/editorial/landscape-natural.png'),book:require('../../assets/editorial/book-natural.png'),botanical:require('../../assets/editorial/botanical-natural.png')},
 marine:{landscape:require('../../assets/editorial/landscape-marine.png'),book:require('../../assets/editorial/book-marine.png'),botanical:require('../../assets/editorial/botanical-marine.png')},
};
export const editorialArt=(theme:VisibleTheme)=>artwork[theme];
