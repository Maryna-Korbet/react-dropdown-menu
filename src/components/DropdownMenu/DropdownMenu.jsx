import { Component } from 'react';
import css from 'components/DropdownMenu/DropdownMenu.module.css';

class DropdownMenu extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    }

    render() {
        return (
            <div className={css.dropdown}>
                <button
                    type="button"
                    className={css.toggle}
                    onClick={this.toggle}
                >
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>

                {this.state.visible && (
                    <div className={css.menu}>Dropdown menu</div>
                )}
            </div>
        );
}
}

export default DropdownMenu;