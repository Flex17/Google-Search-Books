import Header from '../Header/Header';
import MainContainer from '../Main/MainContainer';
import css from './app.module.sass'

function App() {
	return (
		<div className={css.app}>
			<Header />
			<MainContainer />
		</div>
	);
}

export default App;
