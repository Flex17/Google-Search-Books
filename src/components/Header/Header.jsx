import css from './header.module.sass'

import SearchPanel from '../SearchPanel/SearchPanel'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.background}></div>
            <div className='container'>
                <h1 className={css.title}>Search for books</h1>
                <SearchPanel />
            </div>
        </div>
    )
}

export default Header