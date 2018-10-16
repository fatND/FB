export const theme = {
    color: {
        default: '#1698d9',
        defaultHover: '#2ea8e6',
        selected: '#d91667',
        selectedHover: '#e62e7a',
        disabled: '#b3b3b3',
        black: '#000',
        white: '#fff',
        descriptionDisabled: '#ffff66',
        textDefault: '#666',
    },
    sizes: {
        phone: 0,
        tablet: 768,
        desktop: 1168
    }
};

export const items = [
    {
        id: '1',
        type: 'Сказочное заморское яство',
        brand: 'Нямушка',
        name: 'с фуа-гра',
        portions: 10,
        gifts: 1,
        weightValue: 0.5,
        weightUnits: 'кг',
        image: './images/cat.png',
        description: 'Печень утки разварная с артишоками.'
    },
    {
        id: '2',
        type: 'Сказочное заморское яство',
        brand: 'Нямушка',
        name: 'с рыбой',
        portions: 40,
        gifts: 2,
        weightValue: 2,
        weightUnits: 'кг',
        image: './images/cat.png',
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
        id: '3',
        type: 'Сказочное заморское яство',
        brand: 'Нямушка',
        name: 'с курой',
        portions: 100,
        gifts: 5,
        weightValue: 5,
        weightUnits: 'кг',
        image: './images/cat.png',
        additional: 'заказчик доволен',
        description: 'Филе из цыплят с трюфелями в бульоне.',
        isDisabled: true
    },
];

