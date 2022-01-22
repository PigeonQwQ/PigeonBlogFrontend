import ParserWorker from './worker.parser?worker';

type ParseOptions = {
	timeout: number;
	worker: new () => Worker;
};

const DEFAULT_OPTIONS: ParseOptions = {
	timeout: 3000,
	worker: ParserWorker,
};

export const parse = (markdown: string, options: ParseOptions = DEFAULT_OPTIONS) => {
	return new Promise<string>((resolve, reject) => {
		const worker = new options.worker();
		worker.onmessage = ({ data }) => {
			clearTimeout(workerTimeout);
			worker.terminate();
			resolve(data);
		};
		const workerTimeout = setTimeout(() => {
			worker.terminate();
			reject(new Error("Worker takes too long to parse."));
		}, options.timeout)
		worker.postMessage({
			markdown,
		})
	})
}
