"use client";

import CountUp from "react-countup";

const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp 
            decimal=","
            decimals={2}
            prefix="$"
            end={amount} 
        />
    </div>
  )
}
export default AnimatedCount