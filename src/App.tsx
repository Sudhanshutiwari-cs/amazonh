import React from 'react';
import { Activity, Box, Leaf, PackageSearch, Recycle, Truck, BarChart3 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import DeliveryMap from './components/DeliveryMap';
import SustainabilityChart from './components/SustainabilityChart';
import PackagingWaste from './components/PackagingWaste';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Sustainability Dashboard</h1>
            <p className="mt-2 text-gray-600">Monitor and optimize your environmental impact</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Carbon Footprint"
              value="12.5"
              unit="tons CO₂"
              trend="-2.3%"
              icon={<Leaf className="w-6 h-6 text-green-500" />}
            />
            <MetricCard 
              title="Recycled Packaging"
              value="85"
              unit="%"
              trend="+5%"
              icon={<Recycle className="w-6 h-6 text-blue-500" />}
            />
            <MetricCard 
              title="Route Efficiency"
              value="94"
              unit="%"
              trend="+1.2%"
              icon={<Truck className="w-6 h-6 text-purple-500" />}
            />
            <MetricCard 
              title="Energy Savings"
              value="28.3"
              unit="kWh"
              trend="+3.7%"
              icon={<Activity className="w-6 h-6 text-yellow-500" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-gray-500" />
                Sustainability Trends
              </h2>
              <SustainabilityChart />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PackageSearch className="w-5 h-5 text-gray-500" />
                Packaging Waste Analysis
              </h2>
              <PackagingWaste />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Box className="w-5 h-5 text-gray-500" />
              Eco-Friendly Delivery Routes
            </h2>
            <DeliveryMap />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;