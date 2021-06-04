import React, { useState } from 'react';
import * as SC from './EnlargeImg.styles';

const EnlargeImg = ({ curUrl, urls }) => {
    const [currentUrl, setCurrentUrl] = useState(curUrl);

    return (
        <>
            <SC.CurrentImg>
                <img src={currentUrl} />
            </SC.CurrentImg>
            <SC.AllImg>
                {urls.map((url) => (
                    <SC.Item className={currentUrl === url ? 'active' : ''}>
                        <img src={url} onClick={() => setCurrentUrl(url)} />
                    </SC.Item>
                ))}
            </SC.AllImg>
        </>
    );
};

export default EnlargeImg;
