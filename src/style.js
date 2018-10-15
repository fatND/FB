import { injectGlobal } from 'styled-components';
import { media, mediaLandscape } from 'utils';
import pattern from './images/pattern.png';

injectGlobal`  
  * {
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
    font-size: 5vw;
    ${media.tablet`font-size: 2.08333333333333vw;`}
    ${media.desktop`font-size: 16px;`}
    ${mediaLandscape.phone`font-size: 2.8169014084507vw`}
    ${mediaLandscape.tablet`font-size: 1.5625vw;`}
    ${mediaLandscape.desktop`font-size: 16px;`}  
  }
  
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: 
      linear-gradient(to top, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .5) 100%),
      url(${pattern}) repeat;   
  }
`;

