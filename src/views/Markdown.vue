<template>
  <div id="markdown">
    <div id="input">
      こっちに入力
      <textarea v-model="markdownText"></textarea>
    </div>
    <div id="output">
      こっちがマークダウン出力
      <div v-html="outputMarkdown"></div>
    </div>
  </div>
</template>
<script>
  import marked from 'marked'
  import hljs from 'highlightjs'

  export default {
    // コードのシンタックスハイライトの処理
    name: 'markdown',
    created: function () {
      marked.setOptions({
        langPrefix: '',
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      });
    },
    // マークダウンの変換処理
    computed: {
      outputMarkdown: function () {
        return marked(this.markdownText)
      }
    },
    data: function () {
      return {
        markdownText: ''
      }
    }
  }
</script>
<style scoped>
@import "../assets/style/markdown.min.css";
#markdown {
  display: flex;
  padding: 10px;
}
#input, #output {
  width: 50%;
  height: 100vh;
  padding: 20px;
  outline: none;
  border: none;
  font-size: 16px;
}

#input {
  border-right: 1px solid #ccc;
}

#input textarea {
  box-sizing: border-box;
  resize: none;
  width: 100%;
  min-height: 100%;
  font-size: 14px;
}

/* マークダウンのCSSはsrc/assets/style/markdown.scss */

</style>
<style src='highlightjs/styles/github-gist.css'></style>