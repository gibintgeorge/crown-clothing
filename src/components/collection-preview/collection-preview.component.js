import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const PreviewCollection = ({ title, items }) => {
    console.log(items);
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((({id,...otherProps}) => (
                            <CollectionItem key={id} {...otherProps}/>
                        )))
                }
            </div>
        </div>
    );
};

export default PreviewCollection;