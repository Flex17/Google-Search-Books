import HeaderContainer from '../Header/HeaderContainer';
import MainContainer from '../Main/MainContainer';

import css from './app.module.sass';

function App() {
	return (
		<div className={css.app}>
			<HeaderContainer />
			<MainContainer />
		</div>
	);
}

export default App;
