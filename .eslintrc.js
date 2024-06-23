module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier",
		"next/core-web-vitals",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
		"react/prop-types": "off",
		"react/require-default-props": "off",
		"import/no-extraneous-dependencies": "off",
		"react/jsx-no-useless-fragment": "off",
		"react/no-array-index-key": "off",
	},
	overrides: [
		{
			files: ["**/*.tsx"],
			rules: {
				"react/jsx-props-no-spreading": "off",
			},
		},
	],
};
