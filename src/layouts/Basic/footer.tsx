import { ExternalLink, Github } from 'lucide-react';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const GitHubUserName = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const JuejinUserID = process.env.NEXT_PUBLIC_JUEJIN_USERID;
  const ZhihuUserName = process.env.NEXT_PUBLIC_ZHIHU_USERNAME;
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
  const beian = process.env.NEXT_PUBLIC_MIIT_BEIAN;

  return (
    <footer className="flex-shrink-0 border-t border-[#00ff41]/20 bg-black/80 backdrop-blur py-6">
      <div className="px-20 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
        <div>
          <div>
            &copy; {year} {defaultTitle}. Designed by Gemini 3 Pro
          </div>
          <div className="mt-1">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {beian}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a
            href={`https://github.com/${GitHubUserName}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-gray transition-colors flex items-center gap-1">
            <Github size={12} /> GitHub
          </a>
          <a
            href={`https://juejin.cn/user/${JuejinUserID}`}
            className="hover:text-blue transition-colors flex items-center gap-1"
            target="_blank"
            rel="noreferrer noopener">
            <ExternalLink size={12} /> 掘金
          </a>
          <a
            href={`https://www.zhihu.com/people/${ZhihuUserName}`}
            className="hover:text-blue transition-colors flex items-center gap-1"
            target="_blank"
            rel="noreferrer noopener">
            <ExternalLink size={12} /> 知乎
          </a>
          <a
            href="https://mp.weixin.qq.com/s/uXGX7jaTs7ULjgWnET3nEg"
            className="hover:text-green transition-colors flex items-center gap-1"
            target="_blank"
            rel="noreferrer noopener">
            <ExternalLink size={12} /> WeChat
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
