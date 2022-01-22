import { marked, Renderer } from 'marked';


onmessage = ({ data }) => {
	const { markdown } = data;
	postMessage(marked.parse(markdown));
}

class DefaultRenderer extends Renderer {
	heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: marked.Slugger): string {
		return ""
	}
}

marked.use({
	renderer: new DefaultRenderer(),
})
