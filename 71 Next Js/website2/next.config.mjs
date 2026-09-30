/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
        
      },
    ],
  },


  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
