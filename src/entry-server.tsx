import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import Home from '@/pages/home';

// 从 /src/**/*.less 中导入所有的 CSS 资源，并生成 <link> 标签
// 因为vite开发环境中样式的实现是通过创建一个 <style> 标签，将 CSS 内容插入到该 <style> 标签中， 然后再将 <style> 标签动态插入到 HTML 的 <head> 中。（即通过执行 JS 代码实现）
// 因此在服务端渲染时，需要手动将 CSS 链接插入到 HTML 的 <head> 中，使得开发环境中的样式生效
const cssAssets = import.meta.glob('/src/**/*.less', { eager: true, as: 'url' });
const cssLinks = Object.values(cssAssets)
	.map(url => `<link rel="stylesheet" href="${url}">`)
	.join('');

// 将 Home 组件渲染为 HTML 字符串
export function render() {
	const html = renderToString(
		<StrictMode>
			<Home />
		</StrictMode>
	);
	return {
		html, // 将 HTML 字符串插入到模板的 <!--app-html-->
		head: cssLinks // 将 CSS 链接插入到模板的 <!--app-head-->，使得开发环境中的样式生效
	};
}
