import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'data';
import { media, rem, wordForm } from 'utils';
import { CardBack } from  'components';

const StyledProduct = styled.li`
    display: block; 
    width: ${rem(320)};
    color: #fff;
    margin: 0 auto ${rem(24)};
    ${media.tablet`
        margin-right: 0;
        margin-left: 0;
        &:nth-child(3n + 1) {margin-right: calc(50% - ${rem(320)}/2); margin-left: calc(50% - ${rem(320)}/2)};
        &:nth-child(3n) {margin-left: auto};`
    }
    ${media.desktop`
        margin: 0 ${rem(80)} ${rem(24)} 0; 
        &:nth-child(3n + 1) {margin: 0 ${rem(80)} ${rem(24)} 0}; 
        &:nth-child(3n) {margin: 0 0 ${rem(24)}};`
    }
`;

const CB = ({ className, color }) => (
    <CardBack className={className} color={color}/>
);

const StyledCardBack = styled(CB)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: ${rem(480)};
`;

const Card = styled.span`
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    overflow: hidden;
    height: ${rem(480)};
    padding: ${rem(21)} ${rem(49)} 0;
    cursor: ${props => props.isDisabled ? 'not-allowed': 'pointer'};      
`;

const Description = styled.span`
    display: block;
    padding-top: ${rem(14)};
    text-align: center;
    text-shadow: 0 1px 0 #000;
    color: ${props => props.isDisabled ? '#ffff66' : '#fff'};
    font-size: ${rem(13)};
    font-weight: 400;
    line-height: ${rem(16)};
    cursor: default;
`;

const Selector = styled.span`
    font-weight: 700;
    color: ${props => props.isHovered ? theme.color.defaultHover : theme.color.default};
    border-bottom: 1px dashed ${props => props.isHovered ? theme.color.defaultHover : theme.color.default};
    cursor: pointer;
`;

const Type = styled.span`
    display: block;
    margin-bottom: ${rem(9)};
    color: ${props => props.color};
    opacity: ${props => props.isDisabled ? .5 : 1};
    font-size: ${rem(16)};
    font-weight: 400;
`;

const Brand = styled.span`
    display: block;
    margin-bottom: ${rem(4)};
    margin-left:  ${rem(-2)};
    color: ${props => props.isDisabled ? '#b3b3b3' : '#000'};
    opacity: ${props => props.isDisabled ? .5 : 1};
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1;
`;

const Name = styled.span`
    display: block;
    margin-bottom: ${rem(18)};
    color: ${props => props.isDisabled ? '#b3b3b3' : '#000'};
    opacity: ${props => props.isDisabled ? .5 : 1};
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1;
`;

const Info = styled.span`
    display: block;
`;

const Text = styled.span`
    display: block;
    color: ${props => props.isDisabled ? '#b3b3b3' : '#666'};
    opacity: ${props => props.isDisabled ? .5 : 1};
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: ${rem(16)};
`;

const TextAccent = styled.span`
    font-weight: 700;
`;

const ImgWrap = styled.span`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    width: calc(100% - ${rem(8)});
    height: ${rem(273)};
    margin: ${rem(4)};
    border-bottom-right-radius: ${rem(12)};
    border-bottom-left-radius: ${rem(12)};
`;

const Img = styled.img.attrs({
        src: '${props => props.src}',
        alt: '${props => props.alt}'
    })`
    opacity: ${props => props.isDisabled ? .5 : 1};
    height: 100%;
    width: auto;
`;

const Weight = styled.span`
    position: absolute;
    z-index: 2;
    right: ${rem(15)};
    bottom: ${rem(15)};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: ${rem(81)};
    height: ${rem(81)};
    color: #fff;
    font-weight: 400;
    line-height: 1;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const WeightValue = styled.span`
    font-size: ${rem(42)};
`;

const WeightUnits = styled.span`
    font-size: ${rem(21)};
`;



export default function Product(
    {
        state,
        id,
        type,
        brand,
        name,
        portions,
        gifts,
        additional,
        weightValue,
        weightUnits,
        image,
        description,
        isDisabled,
        handleMouseEnter,
        handleMouseLeave,
        handleClick
    }
 ) {
    const more = (
        <Text isDisabled={ isDisabled }>
            { additional }
        </Text>
    );

    const fullName = [brand, name, weightValue + weightUnits].join(' ');
    const portionsNum = portions > 1 && (<TextAccent>{ portions }</TextAccent>);
    const giftsNum = gifts > 1 && (<TextAccent>{ gifts }</TextAccent>);
    const afterPortions = portions > 1 ? ' ' : null;
    const afterGifts = gifts > 1 ? ' ' : null;

    let underCardText = 'Чего сидишь? Порадуй котэ, ',
        selector,
        color,
        typeTextColor = '#666',
        typeText = type;

    if (isDisabled) {
        color = theme.color.disabled;
        typeTextColor = '#b3b3b3';
        underCardText = ['Печалька,', name, 'закончился.'].join(' ');
    }

    if (state && state.isSelected) {
        underCardText = description;
        color = theme.color.selected;
        if (state.isHovered) {
            color = theme.color.selectedHover;
            typeText  = 'Котэ не одобряет?';
            typeTextColor = theme.color.selectedHover;
        }
    }

    if (state && !state.isSelected) {
        color = state.isHovered ? theme.color.defaultHover : theme.color.default;
        selector = (
            <Selector
                isHovered={state.isHovered}
                onClick={() => handleClick(id)}
            >
                купи.
            </Selector>
        )
    }

    return (
        <StyledProduct
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
        >
            <Card
                isDisabled={ isDisabled }
                onClick={() => handleClick(id)}
            >
                <StyledCardBack color={color}/>
                <Type
                    isDisabled={ isDisabled }
                    color={ typeTextColor }
                >
                    { typeText }
                </Type>
                <Brand isDisabled={ isDisabled }>{ brand }</Brand>
                <Name isDisabled={ isDisabled }>{ name }</Name>
                <Info>
                    <Text isDisabled={ isDisabled }>
                        { portionsNum }
                        {[afterPortions, wordForm(portions, [' порция', ' порции', ' порций'])].join(' ')}
                    </Text>
                    <Text isDisabled={ isDisabled }>
                        { giftsNum }
                        {[afterGifts, wordForm(gifts, ['мышь', 'мыши', 'мышей']), 'в подарок'].join(' ')}
                    </Text>
                    { more }
                </Info>
                <ImgWrap>
                    <Img
                        src={ image }
                        alt={ fullName }
                        isDisabled={ isDisabled }
                    />
                </ImgWrap>
                <Weight color={color}>
                    <WeightValue>{ weightValue.toString().replace('.', ',') }</WeightValue>
                    <WeightUnits>{ weightUnits }</WeightUnits>
                </Weight>
            </Card>
            <Description isDisabled={isDisabled}>
                { underCardText }
                { selector }
            </Description>
        </StyledProduct>
    );
}

Product.propTypes = {
    state: PropTypes.object,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    portions: PropTypes.number.isRequired,
    gifts: PropTypes.number.isRequired,
    additional: PropTypes.string,
    weightValue: PropTypes.number.isRequired,
    weightUnits: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    handleMouseEnter: PropTypes.func.isRequired,
    handleMouseLeave: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};
