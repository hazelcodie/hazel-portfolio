import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withFlowbiteReact(nextConfig);