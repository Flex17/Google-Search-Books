import css from './header.module.sass'

import { CgSearch } from 'react-icons/cg'

const Header = ({ currentText, setCurrentText, setData }) => {

    const handleKeyDown = (e) => {
        if (e.code === 'Enter') {
            setData()
            console.log(e)
        }
    }

    return (
        <div className='container'>
            <h1 className={css.title}>Search for books</h1>
            <div className={css.searchBlock}>
                <div className={css.inputBlock}>
                    <input
                        type="text"
                        className={css.input}
                        placeholder='Write something...'
                        value={currentText}
                        onChange={(e) => { setCurrentText(e.target.value) }}
                        onKeyDown={(e) => { handleKeyDown(e) }}
                    />
                    <div
                        className={css.icon}
                        onClick={setData}
                    >
                        <CgSearch size={'35px'} />
                    </div>
                </div>
                <button
                    className={css.searchBtn}
                    onClick={setData}
                >Search</button>
            </div>
        </div>
    )
}

export default Header