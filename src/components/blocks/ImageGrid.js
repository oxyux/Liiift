import React, { useEffect, useState } from 'react';


import './image-grid.scss';

const ImageGrid = ({
    block
}) => {
    let columnsString = ``;
    let rowsString = ``;

    for (let i = 1; i <= block.columns; i++) {
        columnsString = `${columnsString} 1fr`
    }

    for (let i = 1; i <= block.rows; i++) {
        rowsString = `${rowsString} 1fr`
    }

    return (
        <div
            className="ImageGrid__container"
            style={{
                gridTemplateColumns: columnsString,
                gridTemplateRows: rowsString
            }}
        >
            {
                block.imageWithAltTexts && block.imageWithAltTexts.length > 0
                ?
                block.imageWithAltTexts && block.imageWithAltTexts.map(imageWithAlt => (
                    <img
                        key={imageWithAlt.image.id}
                        src={imageWithAlt.image.url}
                        alt={imageWithAlt.altText ? imageWithAlt.altText : imageWithAlt.image.fileName}
                    />
                ))
                :
                block.image && block.image.map(image => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={image.fileName}
                    />
                ))
            }
        </div>
    );
}

export default ImageGrid;