import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import {remarkPUMLObj} from './src/libs/remark-plantuml-object'
import {remarkPUMLSvg} from './src/libs/remark-plantuml-svg'
import {remarkPUMLAstro} from './src/libs/remark-plantuml-astro'
import {remarkImage} from './src/libs/remark-image-pz'
import {remarkImageRel} from './src/libs/remark-image-rel'
import {remarkPanzoom} from './src/libs/remark-panzoom'
import {remarkGallery} from './src/libs/remark-gallery'
import {replaceFiledir} from './src/libs/vite-plugin-filedir'

export default defineConfig({
  output: "static",
  markdown:{
    syntaxHighlight: false,
    remarkPlugins: [
      remarkImage,
      remarkImageRel,
      remarkPanzoom,
      remarkGallery,
      remarkPUMLObj,
      remarkPUMLSvg,
      remarkPUMLAstro,// in MD though MDX only otherwise syntax highlight from MD takes over MDX
    ],
    rehypePlugins: [
    ],
    extendDefaultPlugins: true
  },
  integrations: [mdx()],
  vite:{
    plugins:[
      replaceFiledir()
    ]
  }
});
