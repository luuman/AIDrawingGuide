<!-- ![icon](./svg/html5.svg) -->

<div id="logo">
<div class="img"></div>
<div>AIDrawingGuide</div>
</div>
<div id="container"></div>

<style>
  section.cover{
    position: relative;
  }
  section.cover .cover-main{
    margin: 0;
  }
  #container {
    /* width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%; */
    width: 100%;
    height: 100%;
    /* position: fixed; */
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }
  #logo .img{
    width: 150px;
    height: 150px;
    background: url('./svg/html5.svg');
    background-size: 100%;
    display: inline-block;
  }
  #logo div{
    user-select: none;
  }
</style>
