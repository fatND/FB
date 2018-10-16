import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { theme } from 'data';
import { media, rem } from 'utils';
import { Product } from 'components';

const Block = styled.section`
        width: 100%;
        margin: auto;
        ${media.tablet`padding: 0 ${rem(24)}`}
        ${media.desktop`width: ${rem(theme.sizes.desktop)};`}
    `;

const Items = styled.ul`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style-type: none;
        ${media.tablet`justify-content: space-between;`}
        ${media.desktop`justify-content: flex-start;`}
    `;

const Title = styled.h2`
        padding-top: ${rem(42)};
        margin: 0 0 ${rem(23)};
        color: ${theme.color.white};
        font-family: "Exo 2.0", sans-serif;
        font-size: ${rem(36)};
        font-weight: 100;
        line-height: 1.1;
        text-align: center;
        text-shadow: 0 1px 0 ${theme.color.black};;
    `;

export default function Products({ state, items, handleMouseEnter, handleMouseLeave, handleClick }) {

    return (
        <Block>
            <Title>Ты сегодня покормил кота?</Title>
            <Items>
                {
                    items.map(item =>
                        <Product
                            key={item.id}
                            state={state[item.id]}
                            {...item}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            handleClick={handleClick}
                         />
                    )
                }
            </Items>
        </Block>
    );
}

Products.propTypes = {
    state: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};
