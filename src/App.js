import React from 'react';

import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="global-container">
      <div className="sidebar">
        <a href="google.com" className="logo"><span>Dev</span>challenges.io</a>
        <nav>
          <ul>
            <li><button>Colors</button></li>
            <li><button>Typography</button></li>
            <li><button>Spaces</button></li>
            <li><button>Buttons</button></li>
            <li><button className="actual">Inputs</button></li>
            <li><button>Grid</button></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <section className="inputs">
          <h1>Inputs</h1>
          <div className="inputs-wrapper">
            <div className="row">
              <div>
                <p className="input-code">&lt;Input &#47;&gt;</p>
                <Input />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input error &#47;&gt;</p>
                <Input error />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input disabled &#47;&gt;</p>
                <Input disabled />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input helperText="Some interesting text" &#47;&gt;</p>
                <Input helperText="Some interesting text" />
              </div>
              <div>
                <p className="input-code">&lt;Input helperText="Some interesting text" error &#47;&gt;</p>
                <Input helperText="Some interesting text" error />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input startIcon="phone" &#47;&gt;</p>
                <Input startIcon="phone" />
              </div>
              <div>
                <p className="input-code">&lt;Input endIcon="lock" &#47;&gt;</p>
                <Input endIcon="lock" />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input value="text" &#47;&gt;</p>
                <Input value="text" />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input size="sm" &#47;&gt;</p>
                <Input size="sm" />
              </div>
              <div>
                <p className="input-code">&lt;Input size="md" &#47;&gt;</p>
                <Input size="md" />
              </div>
            </div>
            <div className="row-1">
              <div>
                <p className="input-code">&lt;Input fullwidth &#47;&gt;</p>
                <Input fullWidth />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="input-code">&lt;Input multiline row="4" &#47;&gt;</p>
                <Input multiline row="4" />
              </div>
            </div>
          </div>
        </section>
        <footer><p>created by <a href="google.com">username</a> - devChallenges.io</p></footer>
      </div>
    </div>
  );
}

export default App;
