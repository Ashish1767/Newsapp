
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


//export default class App extends Component {
const App=()=>{  
const pageSize = 5;
  //apiKey=process.env.REACT_APP_NEWS_API
const [Progress, setProgress] = useState(0)
  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   /*this.*/setState({ progress: progress })
  // }
  //render() {
    return (
<>
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            Progress={/*this.state.*/Progress}

          />

          <Routes>
            <Route exact path="/" element={<News setProgress={/*this.*/setProgress} /*apikey={this.apiKey}*/  key="general" pageSize={/*this.*/pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={/*this.*/setProgress} /*apikey={this.apiKey}*/  key="business" pageSize={/*this.*/pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="entertainment" pageSize={/*this.*/pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="general" pageSize={/*this.*/pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="health" pageSize={/*this.*/pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="science" pageSize={/*this.*/pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="sports" pageSize={/*this.*/pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={/*this.*/setProgress} /* apikey={this.apiKey}*/  key="technology" pageSize={/*this.*/pageSize} country="in" category="technology" />}></Route>
          </Routes>

        </Router>
      </div>
    </>)
  }

//}

export default App;