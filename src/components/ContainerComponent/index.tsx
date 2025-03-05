import { useState } from 'react';

import styles from './index.module.less';

const ContainerComponent = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div className={styles.containerBox}>
			<div className={styles.count}>Counter: {count}</div>
			<div className={styles.btn}>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default ContainerComponent;
