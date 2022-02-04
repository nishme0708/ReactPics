import React from 'react';

class ImageCard extends React.Component {
    ref = React.createRef();
    state = {
        spans: 0
    };

    componentDidMount() {
        this.ref.current.addEventListener('load', () => {
            this.setSpans();
        });
    }
    setSpans() {
        const height = this.ref.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }
    render() {
        const { urls } = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.ref} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;
