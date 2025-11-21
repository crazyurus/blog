import { Terminal } from 'lucide-react';
import Image from 'next/image';

import GlitchHeader from '@/components/home/GlitchHeader';

function WhoamiPage(): JSX.Element {
  return (
    <div className="my-12 flex flex-col md:flex-row gap-12 items-center md:items-start animate-fadeIn">
      <div className="w-full md:w-1/3">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green to-blue opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black aspect-square flex items-center justify-center border border-green overflow-hidden">
            <Image src="/avatar.png" width={200} height={200} alt="logo" />
          </div>
        </div>
        <div className="mt-6 space-y-4 font-mono text-sm text-green">
          <div className="flex justify-between border-b border-gray-800 pb-1">
            <span className="text-gray-500">ROLE:</span>
            <span>Frontend/Full Stack Engineer</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-1">
            <span className="text-gray-500">LOCATION:</span>
            <span>Wuhan, China</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-1">
            <span className="text-gray-500">UNIVERSITY:</span>
            <span>Wuhan University of Technology</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-1">
            <span className="text-gray-500">EMAIL:</span>
            <span>crazyurus@vip.qq.com</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <GlitchHeader text="WHOAMI" size="md" />
        <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm md:text-base">
          <p>
            <span className="text-blue"> &gt; </span>
            我是 <strong>Cr4zy Uru5</strong>，是一名「前端/全栈开发工程师」，毕业于「武汉理工大学」
          </p>
          <p>
            <span className="text-blue"> &gt; </span>
            我对 <strong>React</strong>、<strong>小程序</strong>、<strong>Node.js</strong>、<strong>工程化</strong>、
            <strong>AI 大模型</strong> 和 <strong>Web 安全</strong> 等领域感兴趣
          </p>
          <p>
            <span className="text-blue"> &gt; </span>
            你可以点击「底部链接」在 GitHub、掘金、微信公众号 和 知乎 找到我
          </p>
          <p>
            <span className="text-blue"> &gt; </span>
            更多内容还在陆续建设中
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Terminal size={16} className="text-pink" /> SKILL_TREE
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark/50 p-3 border-l border-green-dim">
              <div className="text-xs text-gray-500 mb-1">LANGUAGES</div>
              <div className="text-green font-mono text-sm">TypeScript, Java, Python, PHP</div>
            </div>
            <div className="bg-dark/50 p-3 border-l border-blue">
              <div className="text-xs text-gray-500 mb-1">FRAMEWORKS</div>
              <div className="text-blue font-mono text-sm">React, Node.js</div>
            </div>
            <div className="bg-dark/50 p-3 border-l border-purple-500">
              <div className="text-xs text-gray-500 mb-1">OTHERS</div>
              <div className="text-purple-400 font-mono text-sm">小程序, Web 安全, 工程化</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoamiPage;
