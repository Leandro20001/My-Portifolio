import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function App(){
  const nav = useNavigate()



  const [changeImg1,setChangeImg1] = useState('')
  const [changeImg2,setChangeImg2] = useState('hide')
  const [changeImg3,setChangeImg3] = useState('hide')

  
  const change = ()=>{
    setTimeout(()=>{
      setChangeImg1('hide')
      setChangeImg2('')
      setChangeImg3('hide')
    },5000)
    setTimeout(()=>{
      setChangeImg1('hide')
      setChangeImg2('hide')
      setChangeImg3('')
    },10000)
    setTimeout(()=>{
      setChangeImg1('')
      setChangeImg2('hide')
      setChangeImg3('hide')
    },15000)

  }
  if(changeImg1==''&&changeImg2=='hide'&&changeImg3=='hide'){
    change()
  }



  return(
    <>
    <header>

      <div id="yoda">
        <img src="../src/imgs/baby yoda.png" alt="" />
      </div>


      <div id="gitIco"><img src="../src/imgs/githubico.png" alt="" /></div>
      <Link to={'https://github.com/Leandro20001'}>Meu GitHub</Link>
    </header>
    <span id="mainSpan">Olá!</span>
    <h1>Bem vindo ao meu portifólio</h1>

    <div id="myPhotoDiv">
      <img  src="../src/imgs/myPhoto.jpeg" alt="" />
    </div>

    <p className="mainP">Meu Nome é Leandro Ferreira Lima,sou Desenvolvedor Fullstack especializado em Javascript. Trabalho com as tecnologias mais utilizadas do mercado: ReactJS, React Native, NextJS, NodeJS, Python, criação e uso de APIs e Bancos de dados relacionais e não relacionais.</p>
    <p id="secondMainP" className="mainP">Espero Trabalhar com você em seu projeto!</p>

    <h2>Meu Projetos</h2>


    <div id="projectsDiv">

      <div
      onClick={()=>{
        nav('L-Shop')
      }} 
      className="projectBox" id="box1">
        <img className={changeImg1} src="../src/imgs/l-shop1.png" alt="" />
        <img className={changeImg2} src="../src/imgs/l-shop2.png" alt="" />
        <img className={changeImg3} src="../src/imgs/l-shop3.png" alt="" />
      </div>

      <div
      onClick={()=>{
        nav('Employee-Manager')
      }}  
      className="projectBox">
        <img src="../src/imgs/3.png" alt="" />
        
      </div>

      <div
      onClick={()=>{
        nav('Layout-Project')
      }}  
      className="projectBox">
        <img className={changeImg1} src="../src/imgs/project1.JPG" alt="" />
        <img className={changeImg2} src="../src/imgs/project1.JPG" alt="" />
        <img className={changeImg3} src="../src/imgs/project2.JPG" alt="" />
      </div>

      <div className="projectBox"></div>

    </div>





    </>
  )

}