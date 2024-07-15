import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'raj', lastName: 'Verma', email: 'verma@coolgmail.com' };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your accound and transactions efficiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.25}
                    />
                </header>

                Recent Transaction
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 1200 }]}
            />
        </section>

    )
}

export default Home