import type { DocumentContext } from 'next/document';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	// eslint-disable-next-line
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	// eslint-disable-next-line
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
