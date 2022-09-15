/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  "prettier": {
    "trailingComma": "es5",
    "semi": true,
    "singleQuote": true
  }
}

module.exports = nextConfig
