import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
class ImageList extends React.Component {
    render() {
        let images = this.props.images.map((image) => <ImageCard image={image} key={image.id} />);
        return <div className='image-list'>{images}</div>;
    }
}

export default ImageList;
