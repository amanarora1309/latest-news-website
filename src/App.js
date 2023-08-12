import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  // setProgress(progress)



  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='' pageSize={pageSize} country='in' category='' />} />
          <Route exact path='/Business' element={<News apiKey={apiKey} setProgress={setProgress} key='Business' pageSize={pageSize} country='in' category='Business' />} />
          <Route exact path='/Entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='Entertainmen' pageSize={pageSize} country='in' category='Entertainment' />} />
          <Route exact path='/General' element={<News apiKey={apiKey} setProgress={setProgress} key='General' pageSize={pageSize} country='in' category='General' />} />
          <Route exact path='/Health' element={<News apiKey={apiKey} setProgress={setProgress} key='Health' pageSize={pageSize} country='in' category='Health' />} />
          <Route exact path='/Science' element={<News apiKey={apiKey} setProgress={setProgress} key='Science' pageSize={pageSize} country='in' category='Science' />} />
          <Route exact path='/Sports' element={<News apiKey={apiKey} setProgress={setProgress} key='Sports' pageSize={pageSize} country='in' category='Sports' />} />
          <Route exact path='/Technology' element={<News apiKey={apiKey} setProgress={setProgress} key='Technology' pageSize={pageSize} country='in' category='Technology' />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )

}


export default App;
