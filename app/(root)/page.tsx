import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";


const Home = () => {
  const loggedIn = { firstName: 'Landry', lastName: 'IngSawa', email: 'machinelab2021@gmail.com' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user= {loggedIn?.firstName || "Guest"}
            subtext= "Access and Manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2345.50}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 300.20 }, { currentBalance: 600.50 }]}
      />
    </section>
  )
}
export default Home