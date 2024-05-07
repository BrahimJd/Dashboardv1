import Card from "@/components/Card/Card";
import Transactions from "@/components/Transactions/Transactions";
import Chart from "@/components/Chart/Chart";
import Calendar from "@/components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div>
      <Card />
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-1/2 p-6">
          <Transactions />
        </div>
        <div className="w-full xl:w-1/2 p-6">
          <Calendar />
        </div>
        <div className="w-full p-6">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
