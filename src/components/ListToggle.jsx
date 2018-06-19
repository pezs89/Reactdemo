import React from 'react';
import Icon from './Icon';

class ListToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true
        }
    }

    openOrCollapseList() {
        this.setState({ isOpened: !this.state.isOpened });
        this.props.onListCollapse();
    }

    render() {
        const { title } = this.props;
        return (
            <div className="list-toggle">
                <div className="list-toggle__title">
                    {title ? title : ''}
                </div>
                <div className={this.state.isOpened ? 'list-toggle__icon' : 'list-toggle__icon--rotate'}>
                    <Icon iconClass={'fa fa-chevron-down'} iconActionHandler={() => this.openOrCollapseList()} />
                </div>
            </div>
        );
    }
}

export default ListToggle;