import React from 'react';
import axios from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
    state = {
        images: []
    };
    handleSearch = async (term) => {
        if (!term) return;
        let response = await axios.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images: response.data.results });
    };
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSearch={this.handleSearch} />
                <ImageList  images={this.state.images}/>
            </div>
        );
    }
}
export default App;
