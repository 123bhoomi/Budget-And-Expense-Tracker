//rafce
import React, { useRef, useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';
import Navbar from "./components/Navbar";

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Budget-Expense Tracker</h1>
        </section>
      </>
    );
  };
  
  const About = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          
          <h2>
             There will be two options for the user that are income and expenses to make an entry.
          </h2>
          <h2>
             The user can select any entry according to his/her choice. 
          </h2>
          <h2>
            There are different options in both expense and income category.
          </h2>
          <h2>
             For instance we have sub categories in income that are lottery, deposits, travel , bills , salary, savings ,
            rental income etc.
          </h2>
          <h2>
             The important point here is that user can create his /her category according to need.
          </h2>
          <h2>
             This is a platform independent web application. 
          </h2>
          <h2>
            User can use this application either in their mobile
            phones or desktops.
          </h2>
          <h2>
             Both Income and Expenses pie chart will be created when we add any item and distributed according to
            the user need.
          </h2>
          <h2>
             The main feature is that we have used speech recognition technique in this daily expense tracker.
          </h2>
          <h2>
             If any user doesn’t know how to add or delete he/she simply can give commands. 
          </h2>
          <h2>
            For eg:- Add rupees 10,000 in income as salary
          </h2>
        </section>
      </>
    );
  };
  
  const Service = () => {
    const classes = useStyles();

    return (
      <>
        <Navbar />
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                {/* <Grid item xs={12} sm={5} ref={main} className={classes.main}>
                    <Main />
                </Grid> */}
                <Grid item xs={12} sm={5} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
      </>
    );
  };
  
  const Login = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Thapa Technical Contact Page</h1>
        </section>
      </>
    );
  };

const App = () => {

    //const { speechState } = useSpeechContext();
    //const main = useRef(null);
    //const executeScroll = () => main.current.scrollIntoView(); //main=Main component

    // useEffect(() => {
    //     if (speechState === SpeechState.Recording) {
    //         executeScroll();
    //     }
    // }, [speechState]);
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} >
                
            </Route>

            <Route path="/about" element={<About />}>
                
            </Route>
            
            <Route path="/login" element={<Login />}>
                
            </Route>

            <Route path="/service" element={<Service />}>
                
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App

