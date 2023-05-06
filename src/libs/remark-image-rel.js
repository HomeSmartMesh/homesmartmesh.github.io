import {visit} from "unist-util-visit";
import {dirname} from 'path'
import {relAssetToUrl} from './utils.js'
import {config} from '../../config.js'

function remarkImageRel() {
  return function transformer(syntaxTree,file) {
    console.log(` 'image' * in file '${file.history}'`)
    visit(syntaxTree,  node => {
      if(node.type == 'mdxJsxFlowElement'){
        const att= node.attributes.find(att=>att.name == "src")
        if(att){
            const addUrl = config.base?config.base+'/':''
            att.value = relAssetToUrl(att.value,dirname(file.history[0]),"/"+addUrl)
            console.log(att.value)
        }
      }
    });
    return syntaxTree;
  };
}

export{
  remarkImageRel
}
