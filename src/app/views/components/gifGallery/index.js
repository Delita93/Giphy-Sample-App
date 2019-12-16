import React, {Component} from 'react';
import GifPlayer from 'react-gif-player'

class RenderGifs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: true
        };
    }

    render() {
        return (
            <div className="row">
                {this.props.gifs.map((gif) => {
                    return (
                        <div key={gif.id} className="col-xs-6">
                            <GifPlayer gif={gif.images.downsized_still.url} still={gif.images.downsized_medium.url}
                                       pauseRef={pause => this.pauseGif = pause}
                                       onTogglePlay={playing => this.setState({ playing })}
                                       autoplay
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

class GifGallery extends Component {
    render() {
            return (
                <div className="container">
                    {
                        (this.props.gifs.length) ?
                        <RenderGifs gifs={this.props.gifs}/> :
                        <div>GIF'S NOT FOUND FOR SEARCHED KEY</div>
                    }
                </div>
            );
    }
}

export default GifGallery;