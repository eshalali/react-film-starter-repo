import React, { Component } from 'react';

class Fav extends Component {
    state = {
        isFave: false
    }

    handleFavClick = (e) => {
        e.stopPropagation()
        console.log('handling click!')
        this.setState(prevState => { return {isFave: !prevState.isFave}})
    }

    render () {
        return (
            <div className={`film-row-fave ${this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleFavClick}>
                <p className="material-icons">{this.state.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
            </div>
        )
    }
}

export default Fav