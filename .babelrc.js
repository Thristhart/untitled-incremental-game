module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: ["@babel/react", "@babel/typescript", "@babel/env"],
    plugins: [api.env("development") && "react-refresh/babel"].filter(Boolean)
  };
};
