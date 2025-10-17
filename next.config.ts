import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita export estático para GitHub Pages
  output: 'export',
  
  // Configuração para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/siteInstitucionalJenafreeLabs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/siteInstitucionalJenafreeLabs/' : '',
  
  // Desabilita otimização de imagens no build (necessário para export estático)
  images: {
    unoptimized: true,
  },
  
  // Remove trailing slash das URLs
  trailingSlash: true,
  
  // Desabilita ESLint durante o build para evitar erros
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


