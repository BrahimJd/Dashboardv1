import {
  Activity,
  DollarSign,
  Package2,
  Users,
} from "lucide-react";


import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DashboardCard = () => {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0" className="bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">$45,231.89</div>
              <p className="text-xs text-gray-500">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1" className="bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Customers
              </CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">1,234</div>
              <p className="text-xs text-gray-500">
                +5.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-2" className="bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Orders
              </CardTitle>
              <Package2 className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">2,345</div>
              <p className="text-xs text-gray-500">
                +15.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-3" className="bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Products
              </CardTitle>
              <Activity className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">3,456</div>
              <p className="text-xs text-gray-500">
                +10.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardCard;
