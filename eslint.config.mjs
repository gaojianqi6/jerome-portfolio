import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [...nextVitals, ...nextTs];

const config = [
  {
    ignores: [".next/**", ".content-collections/**", "node_modules/**"],
  },
  ...eslintConfig,
];

export default config;
