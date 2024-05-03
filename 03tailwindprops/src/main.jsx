import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './assets/compent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <Card userName="ram"/>
  <Card userName='setha' post="teacher" url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOk_Z2l6Qsdg6BO3fhHSJZs1O3Wv4QQknng&s'/>
  <Card userName='sathish' post="student" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetpH8JnsPu4NPiiuG1n9-XxhAE-SPGT_haA&s"/>
  <Card  />
  </>
)




