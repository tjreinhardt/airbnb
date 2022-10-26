/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoidGpyZWluaGFyZHQiLCJhIjoiY2w1dHR3cjZvMm94dDNkcGk4ZndxYWw0NSJ9.RbSlgoxB4Jz_b0m3AK8v7g',
  },
};

module.exports = nextConfig
