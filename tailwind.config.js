export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					brand: "#1C1440",
				},
				secondary: {
					brand: "#3ABEFF",
				},
				body: {
					success: "#7FB431",
					warning: "#B2343A",
				},
				grayscale: {
					black: "#09090b",
					white: "#FFFFFF",
					body: "#484848",
					light: "#F8F8F8",
				},
				text: {
					primary: "#000000",
					secondary: "#1C1440",
					light: "#FFFFFF",
				},
			},
		},
	},
	plugins: [],
};
