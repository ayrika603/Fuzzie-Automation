import React from 'react'
import Image from 'next/image';
import { Bot } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>

      <div className="p-6 text-center">
        <h2 className="text-3xl mb-4">
          Welcome to the dashboard
        </h2>
        <p className="text-xl">
          Proceed to the workflow section in the menu to create new automations.
        </p>
        
        <div className="flex justify-center mt-4">
          <Bot size={400} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;