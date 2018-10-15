import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, items } from 'data';
import { Products } from 'components';

class App extends Component {
    constructor() {
        super();
        this.state = {
            ...Object.assign(
                ...[...items.filter(item => !item.isDisabled)].map(item => (
                        {
                            [item.id]: {
                                isSelected: false,
                                isHoverable: false,
                                isHovered: false
                            }
                        }
                    )
                )
            )
        }
    }

    handleMouseEnter = (id) => {
        const state = {...this.state};
        if (state[id] ) {
            if (state[id].isSelected) {
                state[id].isHovered = state[id].isHoverable;
            } else {
                state[id].isHovered = true;
            }
        }
        this.setState({...state});
    };

    handleMouseLeave = (id) => {
        const state = {...this.state};
        if (state[id] ) {
            if (state[id].isSelected) {
                state[id].isHoverable = true;
            }
            state[id].isHovered = false;
        }
        this.setState({...state});
    };

    handleClick = (id) => {
        const state = {...this.state};
        if (state[id] ) {
            state[id].isSelected = !state[id].isSelected;
            state[id].isHovered = false;
            state[id].isHoverable = false;
        }
        this.setState({...state});
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.StrictMode>
                    <Products
                        state={this.state}
                        items={items}
                        handleMouseEnter={this.handleMouseEnter}
                        handleMouseLeave={this.handleMouseLeave}
                        handleClick={this.handleClick}
                    />
                </React.StrictMode>
            </ThemeProvider>
        );
    }
}

export default App;


