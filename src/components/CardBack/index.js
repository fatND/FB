import React from "react";
import PropTypes from 'prop-types';

export default function CardBack({className, color}) {
    return (
        <svg
            x="0px"
            y="0px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 320 480"
            className={className}
            xmlSpace="preserve"
            preserveAspectRatio="none"
        >
            <defs>
                <path id="kbgka" d="M388,104c6.627,0,12,5.373,12,12v456c0,6.627-5.373,12-12,12H92c-6.627,0-12-5.373-12-12V147
				l43-43H388z" />
                <clipPath id="kbgkb">
                    <use fill="#fff" xlinkHref="#kbgka" />
                </clipPath>
            </defs>
            <g>
                <g transform="translate(-80 -104)">
                    <use fill="#f2f2f2" xlinkHref="#kbgka" />
                    <use
                        fill="#fff"
                        fillOpacity="0"
                        stroke={color}
                        strokeMiterlimit="50"
                        strokeWidth="8"
                        clipPath="url('#kbgkb')"
                        xlinkHref="#kbgka" />
                </g>
            </g>
        </svg>
    );
}

CardBack.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired
};
