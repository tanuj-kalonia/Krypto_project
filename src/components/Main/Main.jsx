import React from 'react'
import { motion } from "framer-motion"

import "./Main.css"
import SmallCard from "./SmallCard/SmallCard"

const Main = () => {

    const [progress, SetProgress] = React.useState(45)
    return (
        <section className='app__main'>
            <div className='app__main-left'>
                <h1 className='main-left-heading'>
                    Stake Your <span>$Token </span>
                    And Earn 20% Interest
                    On Staked Token
                </h1>

                <p className='p-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea commodo
                </p>

                <div className='card-holder'>
                    <SmallCard
                        ptext="APY In Percentage"
                        priceText="24% APY"
                    />
                    <SmallCard
                        ptext="Current Token Price"
                        priceText="1.384 USDT"
                    />
                </div>
            </div>
            <div className='app__main-right'>
                <div className='card-holder'>
                    <SmallCard
                        ptext="Min Stacking Amout"
                        priceText="50 USDT"
                    />
                    <SmallCard
                        ptext="Max Stacking Amout"
                        priceText="50 USDT"
                    />
                </div>

                <div className='details-wrapper'>
                    <div className='wrapper-items'>
                        <p className='item-left'>Your Wallet Address</p>
                        <p className='item-right'>0x8F5d...8955</p>
                    </div>
                    <div className='wrapper-items'>
                        <p className='item-left'>Total Stakable Token</p>
                        <p className='item-right'>53746 TOKEN</p>
                    </div>
                    <div className='wrapper-items'>
                        <p className='item-left'>Total Stakable Token In USD</p>
                        <p className='item-right'>$532345</p>
                    </div>
                    <div className='wrapper-items'>
                        <p className='item-left'>Unstake Fee</p>
                        <p className='item-right'>15%</p>
                    </div>
                    <div className='wrapper-items'>
                        <p className='item-left'>Lock Deadline</p>
                        <p className='item-right'>30 Days</p>
                    </div>

                    <div className='progress-container'>
                        <p className='p-text'>Pool filed</p>
                        <div class="progress">
                            <div className="progress-value">
                                <p className='filled-p'>{progress}% filled</p>
                            </div>
                        </div>
                    </div>

                    <div className='token-container'>
                        <p className='p-text'>Stake your Token</p>
                        <div className='input-container'>
                            <input type="text" name="tokenAmount" placeholder='Enter Amount of Token'></input>
                            <button>MAX</button>
                        </div>
                    </div>

                    <div className='btn-grp'>
                        <button className='white-btn'>STAKE</button>
                        <button className='white-btn'>UNSTAKE</button>
                    </div>
                    <button className='red-btn'>EMERGENCY WITHDRAW</button>
                </div>
            </div>
        </section>
    )
}

export default Main