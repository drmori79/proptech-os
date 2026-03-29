import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Building2 } from 'lucide-react';

const Dashboard = () => {
  const [rentPush, setRentPush] = useState(0);
  const totalSqFt = 85000;
  const capRate = 5.5;

  const additionalIncome = totalSqFt * rentPush;
  const valuationGain = additionalIncome / (capRate / 100);

  const floors = [
    { id: 3, suites: [{ name: "TechGlobal", risk: 85, sqft: "25k" }, { name: "Vacant", risk: 0, sqft: "10k" }] },
    { id: 2, suites: [{ name: "Law Group", risk: 10, sqft: "15k" }, { name: "Creative Co", risk: 45, sqft: "20k" }] },
    { id: 1, suites: [{ name: "Starbucks", risk: 5, sqft: "5k" }, { name: "Whole Foods", risk: 12, sqft: "10k" }] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Asset Command Center</h1>
          <p className="text-slate-400">Property ID: #WTC-MIAMI-01</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition">
            Generate Investor Memo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Building2 size={20} className="text-blue-400" /> Building Health Heatmap
          </h2>
          <div className="flex flex-col gap-3">
            {floors.map(floor => (
              <div key={floor.id} className="flex items-center gap-4">
                <span className="w-8 text-xs font-mono text-slate-500">L{floor.id}</span>
                <div className="flex-1 grid grid-cols-4 gap-3">
                  {floor.suites.map((suite, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-xl border transition-all ${
                        suite.name === "Vacant" ? "border-dashed border-slate-700 bg-transparent" :
                        suite.risk > 70 ? "bg-red-500/20 border-red-500/50 animate-pulse" :
                        suite.risk > 30 ? "bg-yellow-500/10 border-yellow-500/30" : "bg-emerald-500/10 border-emerald-500/30"
                      }`}
                    >
                      <p className="text-[10px] uppercase font-bold text-slate-400">{suite.sqft}</p>
                      <p className="font-semibold text-sm truncate">{suite.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-8">
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
              <TrendingUp size={18} /> Strategic Simulator
            </h3>
            <label className="text-sm text-slate-300 block mb-4">Target Rent Push: <span className="text-white font-bold">${rentPush}/sqft</span></label>
            <input 
              type="range" min="0" max="15" step="0.5" value={rentPush}
              onChange={(e) => setRentPush(parseFloat(e.target.value))}
              className="w-full mb-6 accent-blue-500" 
            />
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-slate-400">Equity Value Add:</span>
                <span className="text-emerald-400 font-mono font-bold">+${valuationGain.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-yellow-500" /> Active Risks
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
                <span className="text-sm">TechGlobal (L3)</span>
                <span className="text-xs font-bold text-red-500">85% RISK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
