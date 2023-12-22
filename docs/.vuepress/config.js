import { defaultTheme } from "vuepress"
import { readingTimePlugin } from "vuepress-plugin-reading-time2";


  
export default {
    
    lang: 'zh-CN',
    title: "你好,꒰ঌ( ⌯' '⌯)໒꒱",
    description: '这是我的第一个 VuePress 站点',
    colorModeSwitch:true,
    home:"/",
    // open:true,
    plugins: [
        readingTimePlugin({
            minutes: 1,
            /** 字数 */
            words: 2,

        }),
      ],
    extendsPage: (page) => {
        page.data.readingTime;
      },
    theme: defaultTheme({
      // 侧边栏数组
      // 所有页面会使用相同的侧边栏
      sidebar: [
        // SidebarItem
        {
          text: '首页',
          link: '/',
          children: [
            // SidebarItem
            {
              text: '帮助文档',
              link: 'https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#repolabel',
              children: [],
            },
            // 字符串 - 页面文件路径
          ],
        },
        // 字符串 - 页面文件路径
        {
            text: 'git',
            link:'2.md'
        },
      ],
    }),
  }
// export default defineUserConfig({
//   
  
// })