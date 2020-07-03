<template>
  <div class="key-test">
    <h1>{{ msg }}</h1>
    <div class="btn-test1">
      <h3>按钮组合列表</h3>
      <div>
        <div>
          <button @click="add">添加</button>
          <span>CmdOrCtrl+A</span>
        </div>
        <div>
          <button @click="del">删除</button>
          <span>CmdOrCtrl+D</span>
        </div>
        <div>
          <button @click="print">打印</button>
          <span>CmdOrCtrl+P</span>
        </div>
        <div>
          <button @click="functionKey">F1</button>
          <span>F1</span>
        </div>
      </div>
      <p class="result">{{keyMsg}}</p>
    </div>
    <div class="popup-test2">
      <h3>弹窗内使用按键</h3>
      <button @click="openPop">打开弹窗</button>
      <div id="vModal" v-if="isShow">
        <div class="bg"></div>
        <div class="dialog">
          <p class="close" @click="isShow = false">X</p>
          <p>弹窗内按钮如何在关闭弹窗的时候禁用？！</p>        
          <button @click="addPopbtn">弹窗内添加</button>
          <button @click="dialogMsg=''">清空</button>
          <p class="result">{{dialogMsg}}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      keyMsg:'',
      dialogMsg:'',
      isShow:false
    }
  },
  created(){
    this.keycodeEvent()
  },
  methods:{
    add(){
      this.keyMsg='添加'
      console.log('添加')
    },
    addPopbtn(){
      this.dialogMsg='弹窗内添加按钮'
    },
    openPop(){
      this.dialogMsg=''
      this.isShow=true
    },
    del(){
      this.keyMsg='删除'
      console.log('删除')
    },    
    print(){
      this.keyMsg='打印'
      console.log('打印')
    },
    functionKey(){
      this.keyMsg='F1'
      console.log('F1')
    },
    // 添加热键
    keycodeEvent() {
        this.$shortcuts.add([ // Adding some shortcuts
             {
                shortcut: 'cmdorctrl+A',//支持大小写
                handler: event => {
                  console.log ( event );
                 if(document.querySelector('#vModal')){//如果弹窗出现，按键触发弹窗内的方法
                    this.addPopbtn()
                 }else{
                    this.add()
                 }
                  return true;
                }
            },  {
                shortcut: 'CmdOrCtrl+D',
                handler: event => {
                  console.log ( event );
                  this.del()
                  return true;
                }
            }, {
                shortcut: 'CmdOrCtrl+P',
                handler: event => {
                  // 打印
                  console.log ( event );
                  this.print()
                  return true;
                }
            },
            {
                shortcut: 'F1',
                handler: event => {
                  console.log ( event );
                  this.functionKey()
                  return true;
                }
            },
        ]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.key-test{
  height: 100%;
  >div{
    width: 500px;
    border: 1px solid #ddd;
    margin: 0 auto 20px;
  }

  h3{
    margin: 20px 0;
  }
  button{
    min-width: 80px;
    height: 30px;
    margin: 0 10px 10px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius:2px;
    color: #606266;
    outline: none;
    &:hover{
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      cursor: pointer;
    }
    
  }
}
.btn-test1{
  height: 250px;
  padding: 0 10px;
  >div{
    display: flex;
    justify-content: space-between;
  }
  p{
    margin-top: 50px;
  }
}
.popup-test2{
  position: relative;
  border-top: 2px solid #ddd;
  margin-top: 20px;
  height: 300px;
  .close{
    text-align: right;
    margin: 0;
    cursor: pointer;
  }
}
.bg{
  width: 500px;
  height: 300px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.dialog{
  width: 70%;
  min-height: 180px;
  background: #fff;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.result{
  color: #000fff;
}
</style>
