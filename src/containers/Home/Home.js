import React from 'react';
import { LiveSearchInput } from 'components';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.myCallback = this.myCallback.bind(this);
        this.state = {
            names: []
        };
    }

    myCallback(names) {
        this.setState({ names });
    }

    render() {
        const styles = require('./Home.scss');
        return (
            <div className={ styles.Home }>
                <div className="form-group">
                    <LiveSearchInput
                    id="myLiveInput"
                    class={ `${styles.LiveInput} form-control` }
                    debounce={ 200 }
                    url="/api/users"
                    onSuccess={ this.myCallback }
                    placeholder="Enter a name" />
                </div>
                <hr/>
                <ul className={ styles.SearchResultBox } id="SearchResultBox">
                    { this.state.names.map((name) => {
                        return ( <li key={ name } className={ styles.ResultList }>{ name }</li> );
                    }) }
                </ul>
            </div>
        );
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};
