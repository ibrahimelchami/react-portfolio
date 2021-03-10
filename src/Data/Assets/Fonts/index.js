import styled, { createGlobalStyle } from 'styled-components';

import OpenSans from './Open_Sans/OpenSans-Regular.ttf';
import OpenSansSemiBold from './Open_Sans/OpenSans-SemiBold.ttf';
import SourceSerifProSemiBold from './Source_Serif_Pro/SourceSerifPro-SemiBold.ttf';
import SourceSerifProBold from './Source_Serif_Pro/SourceSerifPro-Bold.ttf';
import SourceSerifProBlack from './Source_Serif_Pro/SourceSerifPro-Black.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Open Sans SemiBold';
    src: url(${OpenSansSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Source Serif Pro SemiBold';
    src: url(${SourceSerifProSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Source Serif Pro Bold';
    src: url(${SourceSerifProBold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Source Serif Pro Black';
    src: url(${SourceSerifProBlack}) format('truetype');
    font-style: normal;
    font-weight: 900;
  }

`;

export default GlobalFonts;
