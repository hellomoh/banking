import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Mohit", lastName: "Gupta", email: "mohitgupta@exampleemail.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'guest'}
          subtext="access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

          RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 125.60}]}

      />
    </section>
  )
}

export default Home