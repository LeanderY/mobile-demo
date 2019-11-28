<template>
  <div class="my-wrapper">

    <a class="js-open-modal" @click="open">Open Modal</a>
    <div style="height:500px">
      <div>请使用手机浏览</div>
    </div>
    <a class="js-open-modal" @click="open">Open Modal 2 (restore scrolling position)</a>
    <div style="height:500px"></div>
    <div id="modal" class="modal" @click="close">
      <div class="modal-frame">
        <div style="height:9em;overflow-y:auto;">
          这里是可滚动内容<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
          Modal Content<br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ModalHelper = (function(bodyCls) {
  var scrollTop
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls)
      document.scrollingElement.scrollTop = scrollTop
    }
  }
})('modal-open')
export default {
  methods: {
    open() {
      document.getElementById('modal').style.display = 'block'
      ModalHelper.afterOpen()
    },
    close() {
      ModalHelper.beforeClose()
      document.getElementById('modal').style.display = 'none'
    }
  }
}
</script>

<style>
body.modal-open {
    position: fixed;
    width: 100%;
}
.modal {
  background: rgba(0, 0, 0, 0.5);
  position: fixed; top: 0; right: 0; bottom: 0; left: 0;

  display: none;
}
.modal-frame {
  position: absolute;left:10%;right:10%; top: 50%; transform: translateY(-50%);
  border: solid 1px #ddd; background: #fff;
  padding: 1em;
}
</style>
