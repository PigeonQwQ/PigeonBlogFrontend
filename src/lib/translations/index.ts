import i18n from 'sveltekit-i18n';

export const config = ({
	loaders: [
		{
			locale: 'en',
			key: 'common',
			// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
			loader: async () => (
				await import('./lang/en/common.json')
			).default,
		},
		{
			locale: 'zh-Hans',
			key: 'common',
			// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
			loader: async () => (
				await import('./lang/zh-Hans/common.json')
			).default,
		},
	],
});

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
