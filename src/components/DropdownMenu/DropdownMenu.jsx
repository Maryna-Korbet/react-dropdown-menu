import { Component } from 'react';
import css from 'components/DropdownMenu/DropdownMenu.module.css';

class DropdownMenu extends Component {
    render() {
        return (
            <div className={css.dropdown}>
                <button type="button" className={css.toggle}>
                    Show
                </button>
                <div className={css.menu}>Dropdown menu</div>
            </div>
    )
}
}

export default DropdownMenu;