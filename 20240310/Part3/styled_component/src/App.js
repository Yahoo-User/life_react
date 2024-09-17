import logo from './svg/logo.svg';
import './css/App.css';

import {Unstyled, Styled, SmallButton, LargeButton, PrimaryButton} from './components';


function App(props) {
  console.info("0. App(", props, ") invoked.");

  // ------------------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App">
      <p><img src={logo} className="App-logo" alt="logo" /></p>

      <p><Unstyled>1. Un-styled Button with CSS object & in-line `style` property&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Unstyled></p>
      <p><Styled type='button'>2. Styled Button with styled.&lt;tagname&gt;``; using `styled-components`</Styled></p>

      <p><SmallButton type='button'>3. Small Button with styled.&lt;tagname&gt;``; using `styled-components`&nbsp;</SmallButton></p>
      <p><LargeButton type='button'>4. Large Button extends Parent Component with `styled(parentCompo)`</LargeButton></p>

      <p><PrimaryButton>Normal</PrimaryButton></p>
      <p><PrimaryButton primary="true">Primary</PrimaryButton></p>

    </div>
  );
} // App


export default App;


