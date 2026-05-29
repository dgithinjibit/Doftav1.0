
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './shared/Card';
import { SunIcon, DropletIcon, ThermometerIcon, LeafIcon, ArrowRightIcon } from './icons';
import { Alert } from '../types';

const mockSensorData = [
  { name: '6 days ago', moisture: 30, temp: 22, health: 92 },
  { name: '5 days ago', moisture: 32, temp: 23, health: 93 },
  { name: '4 days ago', moisture: 35, temp: 24, health: 95 },
  { name: '3 days ago', moisture: 45, temp: 23, health: 96 },
  { name: '2 days ago', moisture: 55, temp: 22, health: 97 },
  { name: 'Yesterday', moisture: 65, temp: 21, health: 98 },
  { name: 'Today', moisture: 75, temp: 22, health: 98 },
];

const mockAlerts: Alert[] = [
    { id: '1', title: 'High Spoilage Risk', description: 'Sector 4 tomatoes show high moisture levels.', recommendation: 'Increase ventilation and consider early harvest for affected plants.', severity: 'high', timestamp: '2 hours ago' },
    { id: '2', title: 'Nutrient Deficiency', description: 'Low nitrogen detected in Sector 2 corn.', recommendation: 'Apply a nitrogen-rich fertilizer as per soil analysis.', severity: 'medium', timestamp: '1 day ago' },
];

const Monitoring: React.FC = () => {
    const highRiskAlert = mockAlerts.find(a => a.severity === 'high');

    return (
        <div className="space-y-6 py-6">
            <div>
                <h1 className="text-3xl font-bold text-stone-800">Monitoring & Alerts</h1>
                <p className="text-stone-500">Real-time AI insights from your farm sensors.</p>
            </div>
            
            {highRiskAlert && (
                <Card className="bg-red-50 border border-red-200">
                    <div className="p-4">
                        <h3 className="font-bold text-red-800 text-lg">{highRiskAlert.title}</h3>
                        <p className="text-sm text-red-700 mt-1">{highRiskAlert.description}</p>
                        <div className="mt-4 p-3 bg-red-100 rounded-lg">
                            <p className="font-semibold text-red-900">Action Recommended:</p>
                            <p className="text-sm text-red-800">{highRiskAlert.recommendation}</p>
                        </div>
                        <p className="text-xs text-red-500 text-right mt-2">By taking action, you can prevent ~50kg of loss and earn <span className="font-bold">25 WASTE tokens</span>.</p>
                    </div>
                </Card>
            )}

            <Card className="p-4">
                <h2 className="font-bold text-stone-700 mb-4">Crop Health Trend (Tomatoes - Sector 4)</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockSensorData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                        <YAxis yAxisId="left" stroke="#84cc16" />
                        <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                        <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }}/>
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="health" name="Health (%)" stroke="#84cc16" strokeWidth={2} activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="moisture" name="Moisture (%)" stroke="#38bdf8" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="temp" name="Temp (°C)" stroke="#f97316" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
                <Card className="p-3">
                    <SunIcon className="w-7 h-7 mx-auto text-yellow-500" />
                    <p className="font-bold text-lg mt-1">25°C</p>
                    <p className="text-xs text-stone-500">Air Temp</p>
                </Card>
                <Card className="p-3">
                    <DropletIcon className="w-7 h-7 mx-auto text-blue-500" />
                    <p className="font-bold text-lg mt-1">68%</p>
                    <p className="text-xs text-stone-500">Soil Moisture</p>
                </Card>
                <Card className="p-3">
                    <ThermometerIcon className="w-7 h-7 mx-auto text-red-500" />
                    <p className="font-bold text-lg mt-1">22°C</p>
                    <p className="text-xs text-stone-500">Soil Temp</p>
                </Card>
            </div>

            <div>
                <h2 className="text-xl font-bold text-stone-700 mb-3">All Alerts</h2>
                <div className="space-y-3">
                    {mockAlerts.map(alert => (
                        <Card key={alert.id} className={`border-l-4 ${alert.severity === 'high' ? 'border-red-500' : 'border-yellow-500'}`}>
                           <div className="p-4 flex justify-between items-center">
                               <div>
                                   <p className="font-semibold text-stone-800">{alert.title}</p>
                                   <p className="text-sm text-stone-500">{alert.description}</p>
                               </div>
                               <ArrowRightIcon className="w-5 h-5 text-stone-400 flex-shrink-0 ml-4" />
                           </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Monitoring;
