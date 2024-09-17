import './App.css';

import { 
    UnStyledButton,
    StyledButton,
    StyledDiv,
    ChildStyledButton,
    ParentUnstyledReactButton,
    ChildedStyledReactButton,
    DynamicStyleChange,
} from './components';


export default
function App() {
    console.debug('App() invoked.');

    return (  // React.JSX.Element
        <div className="App">
            <UnStyledButton>1. UnStyled</UnStyledButton>
            <StyledButton>2. Styled</StyledButton>

            <hr/>
            
            <StyledDiv>
                <h3>3. Styled Div</h3>

                <p>Styled div Component.</p>
            </StyledDiv>

            <hr/>

            <ChildStyledButton>4. Child Styled</ChildStyledButton>

            <hr/>

            <ParentUnstyledReactButton>5. Parent Unstyled React Button</ParentUnstyledReactButton>
            <ChildedStyledReactButton>6. Child Styled React Button</ChildedStyledReactButton>

            <hr/>

            {/* ===================== Dynamic Style Change ===================== */}

            {/* 
                <DynamicStyleChange primary> ... </DynamicStyleChange>
                                                    ********
                    styled-components: 
                        it looks like an unknown prop "primary" is being sent through to the DOM, 
                        which will likely trigger a React console error.

                        If you would like automatic filtering of *unknown props, you can opt-into that behavior via
                            (1) `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or 
                            (2) consider using *transient props (`$` prefix for automatic filtering.)               <--- ***: easy to apply immediately
                                                                           _____
                                  ex: <DynamicStyleChange $primary> ... </DynamicStyleChange>

                ---------------------------------------------------------------------

                Warning: Received `true` for a non-boolean attribute `primary`.
                                If you want to write it to the DOM, pass a string instead: primary="true" or primary={value.toString()}
                                                                 ________
                        ex: <DynamicStyleChange $primary="true"> ... </DynamicStyleChange>
            */}

            <DynamicStyleChange>7. Normal Styled Button</DynamicStyleChange>
            <DynamicStyleChange $primary="true">8. Primary Styled Button</DynamicStyleChange>
        </div>
  );
}

