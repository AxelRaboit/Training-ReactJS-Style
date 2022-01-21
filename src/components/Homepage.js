import './Homepage.css';
import React, { Component } from 'react';
import styles from './myCss.module.css'; //This method works only on the file where this is imported
import styled from 'styled-components';

const Header = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #a82caa;
`

const Title = styled.h3`
    font-size: 1.3em;
`

const CardContent = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 500px;
`

class Homepage extends Component {
    render() {

        const changeColor = this.props.changeColor
            ? ('container__section__pattern1')
            : ('container__section__pattern2')
        ;

        return (
            <div className='container__home'>
                
                <div className='container__section'>
                    <div className={`container__section ${changeColor}`}>
                        <h3>Container with const</h3>
                    </div>
                    <div className='container__content__section'>

                    </div>
                </div>

                <div className='container__section'>
                    <div className={`container__section ${styles.green}`}>
                        <h3>Container with module</h3>
                    </div>
                    <div className='container__content__section'>

                    </div>
                </div>

                <div className='m-3'>
                    <div className='bg-warning p-4 text-center'>
                        <h3>Container Bootstrap</h3>
                    </div>
                    <div className='bg-light p-3'>
                        <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure fugiat consequuntur delectus dolor sit voluptate totam quod at quam, quas officiis omnis cumque eligendi placeat ullam necessitatibus explicabo dolores numquam?</p>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary'>Click me</button>
                        </div>
                    </div>
                </div>

                <div>
                    <Header>
                        <Title>Container with styled component</Title>
                    </Header>
                    <CardContent>

                    </CardContent>
                </div>
            </div>
        );
    }
}

export default Homepage;
