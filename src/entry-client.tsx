import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import Home from '@/pages/home';

// 水合，使得 Home 组件具有交互能力
hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<StrictMode>
		<Home />
	</StrictMode>
);
