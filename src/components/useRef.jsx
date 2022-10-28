import React, {Fragment, useRef} from 'react';

function App() {

const focusPoint = useRef(null);
const onClickHandler = () => {
	focusPoint.current.value = "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly."
	focusPoint.current.focus();
};
return (
	<Fragment>
	<div>
		<button id="action" onClick={onClickHandler}>
		Click here
		</button>
	</div>
	<label>
	<h2>useRef Hook</h2>
	</label><br/>
	<textarea ref={focusPoint} />
	</Fragment>
);
};

export default App;
