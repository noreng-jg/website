<template>
  <div class="textura">

      <div class="scope">
        <div class="menu">
          <b-navbar :fixed-top="false"  :is-transparent="true" class="is-transparent">
                  
            <template slot="brand">
              <img class="ShellHub-Logo-Negativo" src="@/static/logo-inverted.png">
            </template>
                  
            <template slot="end">
              <b-navbar-item class="textContent-vbarIten textContent" href="https://shellhub-io.github.io/" target="_blank">
                Documentation
              </b-navbar-item>
              <b-navbar-item class="textContent-vbarIten textContent" href="http://cloud.shellhub.io/">
                Login
              </b-navbar-item>
              <b-navbar-item class="textContent-vbarIten textContent" href="./register">
                Register
              </b-navbar-item>
            </template>
                
          </b-navbar>
        </div>

        <div class="forkme">
          <span id="forkongithub"><a href="https://github.com/shellhub-io/shellhub" target="_blank">Fork me on GitHub</a></span>
        </div>    
      </div>

      <div class="aboutShellHub">

        <div class="titleContent-titleAbout titleContent">
          Get seamless remote access to any Linux device
        </div>

        <div class="textContent-contentAbout textContent">
          ShellHub is a modern SSH server for remotely accessing Linux devices via command line (using any SSH client) or web-based user interface. 
        </div>

        
        <div class="rectangleRegister">
          <a class="rectangleRegister" href="./register">
            
            <div class="rectangleRegister-first">
              <div class="textContent-fontRetangle textContent">
                Register now
              </div>
            </div>
            <div class="rectangleRegister-second">
              <div class="textContent-fontRetangle textContent">
                &nbsp;  
                <img src="@/static/bullet-01.png">
                &nbsp;
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

</template>

<script>

export default {
  name: 'About',
};

</script>

<style>

.scope{
  width: 100%;
  height: 149px;
}

.forkmeFigure{
  width: 100%;
  height: 100%;
  float: right;
}

.forkme{
  width: 149px;
  height: 149px;
  margin-top: -149px;
  float: right;
}

body{
  padding-top: 0px!important;
}

.textura {
  height: 771px;
}

.menu{
  width: 100%;
  height: 100%;
  display: inline-block;
}

nav.navbar {
  z-index: 2;
  background: transparent;
  margin-top: 41px;
  margin-left: 55px;
  margin-right: 149px;
}

.ShellHub-Logo-Negativo {
  width: 200px;
  height: 52px;
}

.textContent-vbarIten{
  background-color: None;
  color: #dce3ff;
  margin-left: 40px;
}

.href:hover{
  color: #dce3ff;
}

.aboutShellHub{
  max-width: 1170px;
  height: auto;
  margin: 55px auto 0 auto;
}

.titleContent-titleAbout{
  max-width: 690px;
  min-height: 130px;
  letter-spacing: -3px;
  color: #ffffff;
}

.textContent-contentAbout{
  max-width: 495px;
  min-height: 90px;
  margin-top: 28px;
  margin-bottom: 50px;
  text-align: justify;
}

.rectangleRegister{
  min-width: 194px;
  height: 40px;
  opacity: 0.9;
}

.rectangleRegister-first {
  width: 163px;
  height: 100%;
  opacity: 0.9;
  background-color: #394573;
  display: inline-block;
}

.rectangleRegister-second {
  width: 31px;
  height: 100%;
  opacity: 0.9;
  background-color: #667acc;
  display: inline-block;
}

.font_ret{
  font-family: RobotoSlab;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.5px;
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#forkongithub a{
	background:#e7e7e7;  
	color: #000;
	text-decoration:none;
	text-align:center;
	font-weight:bold;
	font-size:.9rem;
	line-height:2rem;
	position:relative;
	transition:0.5s;
}

#forkongithub a:hover{
	background:#394573;
	color:#cfcfcf;
}

#forkongithub a::before,#forkongithub a::after{
	content:"";
	width:100%;
	display:block;
	position:absolute;
	top:1px;
	left:0;
	height:1px;
	background:#cfcfcf;
}

#forkongithub a::after{
	bottom:1px;
	top:auto;
}

@media screen and (min-width:149px){
	#forkongithub{
		position:absolute;
		display:block;
		top:0;
		right:0;
		width:149px;
		overflow:hidden;
		height:149px;
		z-index:9999;
	}

	#forkongithub a{
		width:260px;
		position:absolute;
		top:50px;
		right:-70px;
		transform:rotate(45deg);
		-webkit-transform:rotate(45deg);
		-ms-transform:rotate(45deg);
		-moz-transform:rotate(45deg);
		-o-transform:rotate(45deg);
		box-shadow:4px 4px 10px rgba(0,0,0,0.8);
	}
}

</style>