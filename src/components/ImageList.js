import React from 'react';

class ImageList extends React.Component {
    render() {
        let images = this.props.images.map((image) => (
            <img src={image.urls.regular} style={{ width: '200px', height: '200px' }} key={image.id} />
        ));
        return <div>{images}</div>;
    }
}

export default ImageList;
