import {visit} from "unist-util-visit";
import {dirname} from 'path'
import {relAssetToUrl} from './utils.js'
import {config} from '../../config.js'

function replace_att(node,file,field){
  const att= node.attributes.find(att=>att.name == field)
  if(att){
      const addUrl = config.base?config.base+'/':''
      att.value = relAssetToUrl(att.value,dirname(file.history[0]),"/"+addUrl)
      console.log(att.value)
  }
}

function remarkImageRel() {
  return function transformer(syntaxTree,file) {
    console.log(` 'image' * in file '${file.history}'`)
    visit(syntaxTree,  node => {
      if(node.type == 'mdxJsxFlowElement'){
        replace_att(node,file,"img")
        if(node.name == "object"){
          replace_att(node,file,"data")
        }
      }
    });
    return syntaxTree;
  };
}

export{
  remarkImageRel
}
