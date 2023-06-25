import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'  //自动导入vue中的hook reactive ref等
import Components from 'unplugin-vue-components/vite'  //自动导入ui组件，比如：element-plus
import { resolve } from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'  //element-plus

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  //默认/配置文件的根目录为相对路径
  plugins: [
    vue(),
    AutoImport({  //自动导入后，不用再导入ref, reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",  //存放位置
      resolvers: [ElementPlusResolver()],  //element-Plus
    }),
    Components({  //引入组件，包括自定义组件
      resolvers: [ElementPlusResolver()],  //element-plus
      dts: "src/components.d.ts",  //存放位置
    })
  ],
  build: {
    minify: "terser",  //必须开启：使用terserOptions才有效果
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
  resolve: {  //解析配置
    alias: {  //路径别名
      "@": resolve(__dirname, "./src"),
      "comp": resolve(__dirname, "src/components"),  //不要用a,b,c这样命名，项目目录也不能为关键字保留字
      "/img": "./src/assets"  //配置图片要这样引用
    }
  },
  server: {
    host: "0.0.0.0",  //使用IP能访问
    hmr: true,  //热更新
    strictPort: false,  //设为true时，若端口已被占用则会直接退出，而不是尝试下一个可和端口
    /*proxy: {  //代理
      '/api': {
        target: "https://admin.google.com",  //'你要的代理地址',  代理目标地址，开发模式默认127.0.0.1，开启后代理服务会把origin修改为目标地址
        changeOrigin:  true,
        //secure:  true,  //是否https接口
        //ws: true,  //是否代理websockets
        //路径重写，如果后端有统一前缀（如：/api），就不开启，没有就开启
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }*/

  }
})
