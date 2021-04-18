<template>
  <div id="app">
    <div class="app_header">
      <svg @click="backFn" class="back" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><g><g><g><path fill="#2CD5C4" d="M11.713 18.988C3.823 13.983 1.7 12.783 1.115 12.222c-1.866-1.791-1.052-3.964 0-4.722 1.308-.942 2.563-1.723 5.283-3.594-.178.207-1.503 1.397-1.803 1.855-.927 1.42-1.007 2.856.064 3.647 2.137 1.58 7.285 4.754 9.03 5.868 2.785 1.776.658 5.382-1.976 3.712z" transform="translate(-20 -36) translate(0 30) translate(20 6) translate(5 2)"/><path fill="#6EFFB4" d="M11.519.49c2.589-1.717 5.01 1.492 2.275 3.316-1.716 1.144-7.023 4.767-9.12 6.383-1.05.81-.946 2.245 0 3.648.307.453.98 1.237 1.16 1.44-2.223-1.388-3.303-2.015-4.62-2.934-1.058-.739-2.01-3.066-.187-4.89C1.598 6.884 3.763 5.63 11.52.49z" transform="translate(-20 -36) translate(0 30) translate(20 6) translate(5 2)"/></g></g></g></g></g></svg>
      <svg @click="shareFn" class="share" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#6EFFB4"><g><g><path d="M11.97 21.007S9.63 16.5 8.979 15.022L21.005 3.634l-9.034 17.373zm-8.977-9.726L20.2 3.05 8.23 14.274c-.003-.003-5.237-2.993-5.237-2.993zM0 11.28s7.52 4.533 7.482 4.489C7.469 15.756 11.97 24 11.97 24S23.755 1.18 23.94.806c.165-.467-.186-.981-.747-.748C22.329.48 0 11.281 0 11.281z" transform="translate(-315 -36) translate(0 30) translate(315 6)"/></g></g></g></g></svg>
      <h1>Pago de servicios</h1>
    </div>
    <div class="app_body">
      <div class="app_content" :class="showDialogPass?'blur4':''" v-if="!showRealizado">
        <h2>AGUA</h2>

        <ul class="input_list">
          <li>
            <select class="agua_select" :class="company=='Selecciona la compañia'?'':'s_check'" id="" v-model="company">
              <option v-for="(item,index) in companyList" :value="item.value" :key="index">{{item.value}}</option>
            </select>
            <p>*Es importante que verifiques que tu recibo no está vencido.</p>
          </li>
          <li>
            <input class="agua_input" v-model="referencia" placeholder="Referencia" type="text">
            <svg class="icon_camera" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><path d="M15 23.125c-3.106 0-5.625-2.52-5.625-5.625 0-3.106 2.52-5.625 5.625-5.625 3.106 0 5.625 2.52 5.625 5.625 0 3.106-2.52 5.625-5.625 5.625zM15 10c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm13.125 15c0 1.035-.84 1.875-1.875 1.875H3.75c-1.035 0-1.875-.84-1.875-1.875V10c0-1.035.84-1.875 1.875-1.875H7.5l.938-1.875c.662-1.09.84-1.875 1.874-1.875h9.376c1.035 0 1.212.785 1.875 1.875l.937 1.875h3.75c1.035 0 1.875.84 1.875 1.875v15zM26.25 6.25h-2.813L22.5 4.375c-.552-1.09-.84-1.875-1.875-1.875H9.375c-1.035 0-1.378.894-1.875 1.875L6.562 6.25H3.75C1.68 6.25 0 7.93 0 10v15c0 2.07 1.68 3.75 3.75 3.75h22.5c2.07 0 3.75-1.68 3.75-3.75V10c0-2.07-1.68-3.75-3.75-3.75z" transform="translate(-295 -327) translate(295 327)"/></g></g></g></svg>
            <p>Número de 18 dígitos debajo del código de barras</p>
          </li>
          <li>
            <input class="agua_input" v-model="pagar" placeholder="Monto a pagar" type="text">
            <p>$ 950.00 tu saldo disponible</p>
          </li>
          <li class="mt50">
            <div class="btn" :class="checkPass?'':'btn_disable'" @click="pagarFn()">Pagar</div>
          </li>
        </ul>
      </div>

      <div class="realizado_box" v-else>
        <h2>Agua SADM (Monterrey)</h2>
        <ul class="realizado_list">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><g><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.37.886c.133 0 .24.043.32.13.08.086.12.196.12.33v1.4c.853.106 1.587.346 2.2.72.613.373 1.077.81 1.39 1.31.313.5.483 1.003.51 1.51 0 .12-.04.22-.12.3-.08.08-.18.12-.3.12h-1c-.107 0-.21-.034-.31-.1-.1-.067-.163-.167-.19-.3-.08-.574-.4-1.047-.96-1.42-.56-.374-1.26-.56-2.1-.56-.907 0-1.627.176-2.16.53-.533.353-.8.876-.8 1.57 0 .466.123.846.37 1.14.247.293.627.553 1.14.78.513.226 1.257.486 2.23.78 1.133.32 2.027.64 2.68.96.653.32 1.14.716 1.46 1.19.32.473.48 1.083.48 1.83 0 1.133-.403 2.046-1.21 2.74-.807.693-1.91 1.093-3.31 1.2v1.38c0 .133-.04.243-.12.33-.08.086-.187.13-.32.13h-.72c-.133 0-.243-.04-.33-.12-.087-.08-.13-.194-.13-.34v-1.4c-.933-.08-1.737-.297-2.41-.65-.673-.354-1.187-.794-1.54-1.32-.353-.527-.543-1.09-.57-1.69 0-.107.04-.2.12-.28.08-.08.18-.12.3-.12h.96c.253 0 .427.133.52.4.12.56.463 1.043 1.03 1.45.567.406 1.377.61 2.43.61 1.133 0 1.98-.2 2.54-.6.56-.4.84-.954.84-1.66 0-.454-.137-.827-.41-1.12-.273-.294-.68-.55-1.22-.77-.54-.22-1.35-.49-2.43-.81-1.027-.294-1.847-.607-2.46-.94-.613-.334-1.073-.744-1.38-1.23-.307-.487-.46-1.104-.46-1.85 0-1 .367-1.84 1.1-2.52.733-.68 1.747-1.08 3.04-1.2v-1.38c0-.147.043-.26.13-.34.087-.08.197-.12.33-.12h.72z" transform="translate(-20 -194) translate(0 94) translate(20 100)"/></g></g></g></g></svg>
            Monto <span>$ 500.00</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><g><path d="M11.5 18H13v1.5h-1.5V18zm0 3H13c.828 0 1.5-.672 1.5-1.5V18c0-.828-.672-1.5-1.5-1.5h-1.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5zm-6-3H7v1.5H5.5V18zm0 3H7c.828 0 1.5-.672 1.5-1.5V18c0-.828-.672-1.5-1.5-1.5H5.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5zm6-9H13v1.5h-1.5V12zm0 3H13c.828 0 1.5-.672 1.5-1.5V12c0-.828-.672-1.5-1.5-1.5h-1.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5zm-6-3H7v1.5H5.5V12zm0 3H7c.828 0 1.5-.672 1.5-1.5V12c0-.828-.672-1.5-1.5-1.5H5.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5zM22 6H2.5V4.5C2.5 3.672 3.172 3 4 3h3v.75c0 .415.335.75.75.75s.75-.335.75-.75V3H16v.75c0 .415.335.75.75.75s.75-.335.75-.75V3h3c.828 0 1.5.672 1.5 1.5V6zm0 15c0 .828-.672 1.5-1.5 1.5H4c-.828 0-1.5-.672-1.5-1.5V7.5H22V21zM20.5 1.5h-3V.75c0-.414-.335-.75-.75-.75S16 .336 16 .75v.75H8.5V.75C8.5.336 8.165 0 7.75 0S7 .336 7 .75v.75H4c-1.657 0-3 1.343-3 3V21c0 1.657 1.343 3 3 3h16.5c1.657 0 3-1.343 3-3V4.5c0-1.657-1.343-3-3-3zm-3 10.5H19v1.5h-1.5V12zm0 3H19c.828 0 1.5-.672 1.5-1.5V12c0-.828-.672-1.5-1.5-1.5h-1.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5zm0 3H19v1.5h-1.5V18zm0 3H19c.828 0 1.5-.672 1.5-1.5V18c0-.828-.672-1.5-1.5-1.5h-1.5c-.828 0-1.5.672-1.5 1.5v1.5c0 .828.672 1.5 1.5 1.5z" transform="translate(-20 -246) translate(0 94) translate(20 152)"/></g></g></g></g></svg>
            Fecha <span>23 / noviembre / 2019</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><g><path d="M19.665 14.48c-.127.084-.272.145-.436.145H4.604c-.448 0-.812-.363-.812-.813v-6.5c0-.448.364-.812.812-.812H19.23c.173 0 .324.066.456.158l1.952 3.891-1.972 3.931zm-6.123 8.27c0 .897-.728 1.625-1.625 1.625h-1.625c-.897 0-1.625-.728-1.625-1.625v-6.5h4.875v6.5zM8.667 3.25c0-.897.728-1.625 1.625-1.625h1.625c.897 0 1.625.728 1.625 1.625v1.625H8.667V3.25zm14.395 6.682L20.64 5.104c-.173-.173-.403-.244-.63-.229h-4.843V3.25c0-1.795-1.456-3.25-3.25-3.25h-1.625c-1.795 0-3.25 1.455-3.25 3.25v1.625h-3.25c-.897 0-1.625.728-1.625 1.625v8.125c0 .897.728 1.625 1.625 1.625h3.25v6.5c0 1.795 1.455 3.25 3.25 3.25h1.625c1.794 0 3.25-1.455 3.25-3.25v-6.5h4.875v-.02c.216.005.434-.07.598-.234l2.422-4.828c.183-.341.207-.453.231-.618.012-.222-.06-.31-.231-.618z" transform="translate(-20 -300) translate(0 94) translate(20 206)"/></g></g></g></g></svg>
            Referencia <span>8999765434</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><g><path d="M14.924 13.77c-.823 0-1.49-.688-1.49-1.536 0-.848.667-1.535 1.49-1.535.824 0 1.492.687 1.492 1.535 0 .848-.668 1.536-1.492 1.536zm0-4.607c-1.647 0-2.981 1.375-2.981 3.071 0 1.697 1.334 3.072 2.981 3.072 1.647 0 2.982-1.375 2.982-3.072 0-1.696-1.335-3.07-2.982-3.07zm6.794 14.659c0 .848-.675 1.5-1.5 1.5H9.724c-.824 0-1.509-.724-1.509-1.572l.01-11.924c0-.492.067-.793.335-1.07l5.842-6.016c.27-.277.705-.277.974 0l5.842 6.016c.268.277.501.529.501 1.07v11.996zm.96-13.567L15.86 3.236c-.537-.554-1.408-.554-1.947 0L7.1 10.255c-.387.397-.376.679-.365 1.212h-.01V23.75c0 1.696 1.335 3.07 2.982 3.07h10.436c1.648 0 2.983-1.374 2.983-3.07V12.234c0-.89.09-1.425-.448-1.98z" transform="translate(-20 -359) translate(0 94) translate(19 260) rotate(46 14.927 14.82)"/></g></g></g></g></svg>
            Categoría <span>Pago de servicios</span>
          </li>
        </ul>
        <div class="guardar">Guardar comprobante en fotos</div>
        <div class="btn" @click="backFn">Salir</div>
      </div>
    </div>

    <div class="dialog_pw_bg" v-if="showDialogPass">
      <div class="pw_box" v-if="!payLoad">
        <h4>Escribe tu contraseña</h4>
        <div class="input_box">
          <input v-model="passWord" :type="showPassWord?'text':'password'" @keyup="passWordKeyup">
          <svg @click="showPassWord=!showPassWord" class="icon_r" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><g fill="none" fill-rule="evenodd"><g fill="#6986BD"><g><g><path d="M10 2.182c2.877 0 5.408 1.84 7.595 5.392l.262.426-.262.426c-2.187 3.551-4.718 5.392-7.595 5.392s-5.408-1.84-7.595-5.392L2.143 8l.262-.426C4.592 4.023 7.123 2.182 10 2.182zm0 2.909C8.42 5.09 7.143 6.395 7.143 8c0 1.605 1.277 2.91 2.857 2.91 1.58 0 2.857-1.305 2.857-2.91 0-1.605-1.277-2.91-2.857-2.91z" transform="translate(-294 -281) translate(28 267) translate(266 14)"/></g></g></g></g></svg>
        </div>
        <div class="btn" :class="passContinuar?'':'btn_disable'" @click="continuarFn">Continuar</div>

        <div class="btn_cancelar" @click="showDialogPass=false;">Cancelar</div>
      </div>

      <div class="loading_box" v-else>
        <div class="loading_img">
          <svg class="loading_svg" width="100" height="100">
            <defs> 
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#bdffa1"/>
                <stop offset="100%" stop-color="#00c7b1"/> 
              </linearGradient> 
            </defs>
            <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#linear)" stroke-width="8"></circle>
          </svg>
        </div>
        <p>¡Pago realizado!</p>
      </div>


      
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      companyList:[
        {value:'Selecciona la compañia',id:100},
        {value:'SADM (Monterrey)',id:101},
        {value:'JUMAPA (Celaya)',id:102},
        {value:'SIDEAPA (Gómez Palacio)',id:103},
        {value:'SIAPA (Guadalajara)',id:104},
        {value:'CMAPAS (Salamanca)',id:105}
      ],
      company: 'Selecciona la compañia',
      referencia:'',
      pagar:'',
      checkPass:false,
      showDialogPass:false,

      passWord:'',
      showPassWord:false,
      passContinuar:false,

      payLoad:false,
      showRealizado:false
    }
  },
  methods: {
    init(){
			var self = this;
      if(stori.getAuthToken){
        stori.getAuthToken(function(res){
          self.Authorization = res.token;
        });
        stori.getUser(function (res) {
          self.userInfo = res;
        });

        stori.getVersion(function (res) {
          const version = res;
          self.version = version;
          if(version.buildType=='release'){
            self.apiBaseUrl = 'https://api.storicard.com/';
            self.apiKey = 'KYUomFQX8r75xkZFHip9g50kRFK094YT7pKgEPhC';
          }else{
            self.apiBaseUrl = 'https://dev-api.powerup.ai/';
            self.apiKey = 'G9anHkrQMT30HMjfj3You3TU6oQ2OGdb46juf6BO';
          };

          
        });
      }
			
		},
    backFn(){
      location.href="stori://www.stori.com/close_browser";
    },
    checkFn(){
      if(this.company!='Selecciona la compañia' && /^\d{5,15}$/.test(this.referencia) && this.pagar!=''){
        this.checkPass=true;
      }else{
        this.checkPass=false;
      }
    },
    pagarFn(){
      if(this.checkPass){
        this.showDialogPass=true;
      }
      
    },
    passWordKeyup(){
      if(this.passWord.length>5){
        this.passContinuar=true;
      }else{
        this.passContinuar=false;
      }
    },
    continuarFn(){
      var self = this;
      if(this.passContinuar){
        this.payLoad=true;
        setTimeout(function(){
          self.payLoad=false;
          self.showDialogPass = false;
          self.showRealizado=true;
        },2000);
        
      }
    },
    shareFn(){
      //share
      stori.share('Pago de servicios');
    }
  },
  watch:{
    company:function(){
      this.checkFn();
    },
    referencia:function(){
      this.checkFn();
    },
    pagar:function(){
      this.checkFn();
    }
  },
	mounted(){
		var self = this;

    self.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    if(self.isAndroid){
      document.addEventListener('WebViewJavascriptBridgeReady', function () {
        self.init();
      }, false);
    }else{
      self.init();
    }
		

	}
}
</script>

<style lang="scss" scoped>
#app {
  
  .app_header{
    min-height: 36px;
    line-height: 36px;
    text-align: center;
    padding: 10px 20px 36px;
    background-color: #00677f;
    h1{
      font-weight: normal;
      text-align: center;
      color: #fff;
    }
    svg{
      padding: 6px;
    }
    .back{
      float: left;
    }
    .share{
      float: right;
    }
  }
  .app_body{
    background-color: #fff;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -3px 18px #00677f71;
    margin-top: -16px;
    min-height: calc(100vh - 66px);
  }
  .app_content{
    padding: 0 14px;
  }
  h2{
    font-size: 18px;
    text-align: center;
    line-height: 52px;
    font-weight: normal;
    border-bottom: 2px solid #bdffa1;
  }
  .input_list{
    li{
      margin-top: 40px;
      position: relative;
      padding: 0 20px;
      .agua_select{
        border: none;
        border-bottom: 1px solid #6986bd;
        background: none;
        height: 42px;
        width: 100%;
        padding: 0 15px;
        color: #6986bd;
        font-size: 16px;
      }
      .s_check{
        color: #384967;
      }
      .agua_input{
        width: 100%;
        line-height: 42px;
        padding: 0 15px;
        border: none;
        border-bottom: 1px solid #6986bd;
        color: #384967;
        font-size: 16px;
        &::placeholder{
          color: #6986bd;
        }
      }
      .icon_camera{
        position: absolute;
        right: 20px;
        top: 6px;
        z-index: 2;
      }
      p{
        font-size: 12px;
        color: #6986bd;
        margin-top: 10px;
      }
    }
  }

  .dialog_pw_bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00677f99;
    .pw_box{
      padding: 20px 16px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 10px 18px #00677f71;
      position: absolute;
      width: 90%;
      left:5%;
      top:50%;
      transform: translateY(-50%);
      h4{
        text-align: center;
        color: #384967;
      }
      .input_box{
        position: relative;
        margin-top: 25px;
        input{
          width: 100%;
          line-height: 42px;
          padding: 0 15px;
          border: none;
          border-bottom: 1px solid #6986bd;
          color: #384967;
          font-size: 16px;
          &::placeholder{
            color: #6986bd;
          }
        }
        .icon_r{
          position: absolute;
          right: 5px;
          top: 4px;
          padding: 10px;
          z-index: 2;
        }
      }
      .btn{
        width: 86%;
        margin-top: 28px;
      }
      .btn_cancelar{
        text-align: center;
        color: #bdffa1;
        position: absolute;
        left: 0;
        width: 100%;
        bottom: -90px;
        font-size: 16px;
        line-height: 60px;
      }
    }
    .loading_box{
      position: absolute;
      width: 100%;
      top:45%;
      transform: translateY(-50%);
      .loading_img{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        .loading_svg{
          -webkit-animation: svgrun 1.2s linear 0s normal none infinite;
          @-webkit-keyframes svgrun{0%{ transform: rotate(0deg); }100% {  transform: rotate(360deg); }}
        }
      }
      p{
        text-align: center;
        margin-top: 26px;
        font-size: 24px;
        line-height: 36px;
        color: #6effb4;
      }
    }
    
  }

  
  .realizado_box{
    padding: 0 14px;
    .realizado_list{
      margin-top: 28px;
      li{
        line-height: 24px;
        color: #6986bd;
        padding: 14px 0;
        padding-left: 35px;
        svg{
          float: left;
          margin-left: -35px;
          vertical-align: middle;
        }
        span{
          float: right;
          color: #384967;
        }
      }
    }
    .guardar{
      text-decoration: underline;
      color: #6986bd;
      text-align: center;
      line-height: 40px;
      margin-top: 40px;
    }
    .btn{
      width: 220px;
      margin-top: 60px;
    }
  }

  
  
}
</style>
