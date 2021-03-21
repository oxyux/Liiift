import React, { useState } from 'react';


import './rich-text-block.scss';

const RichTextBlock = ({
    html
}) => {

    return (
        <div
            className="richTextBlock__container"
            dangerouslySetInnerHTML={{
                __html: html
            }}
        />
    );
}

export default RichTextBlock;