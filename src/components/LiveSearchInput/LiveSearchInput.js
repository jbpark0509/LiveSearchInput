import React, { PropTypes } from 'react';
import { Observable } from 'rx';
import axios from 'axios';

export default class LiveSearchInput extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const keyPressObservable = this.init(this.refs.LiveSearchInput);
        keyPressObservable.forEach(
            (resp) => {
                if (this.props.onSuccess) { this.props.onSuccess(resp); }
            },
            (err) => {
                if (this.props.onError) { this.props.onError(err); }
            },
        );
    }

    init(elem) {
        const { url, queryName } = this.props;
        elem.keyDown = Observable.fromEvent(elem, 'keydown');
        elem.focus = Observable.fromEvent(elem, 'focus');
        elem.blur = Observable.fromEvent(elem, 'blur');

        return elem.focus
            .map(() => {
                return elem.keyDown
                    .debounce(this.props.debounce)
                    .map(() => {
                        return elem.value;
                    })
                    .distinctUntilChanged()
                    .map((search) => {
                        return Observable.defer(() => this.callApi(url, queryName, search))
                            .retry(this.props.retry)
                            .map((resp) => {
                                return resp.data.length > 0 ? resp.data : [ this.props.noResultText ];
                            });
                    })
                    .switchLatest()
                    .takeUntil(elem.blur);
            }).switchLatest();
    }

    callApi(url, queryName, value) {
        return new Promise((res, rej) => {
            axios.get(`${url}?${queryName}=${value}`)
                .then((resp) => {
                    res(resp);
                })
                .catch((err) => {
                    rej(err);
                });
        });
    }

    render() {
        return (
            <input
                type="text"
                ref="LiveSearchInput"
                className={ this.props.class }
                placeholder={ this.props.placeholder } />
        );
    }
}

LiveSearchInput.propTypes = {
    url: PropTypes.string.isRequired,
    queryName: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    placeholder: PropTypes.string,
    class: PropTypes.string,
    noResultText: PropTypes.string,
    onError: PropTypes.func,
    debounce: PropTypes.number,
    retry: PropTypes.number,
};

LiveSearchInput.defaultProps = {
    class: 'livesearchinput',
    noResultText: 'No Result',
    debounce: 250,
    queryName: 'q',
    retry: 3,
};
