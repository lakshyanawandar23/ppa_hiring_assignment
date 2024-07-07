// components/CountUp.js
// components/CountUpComponent.js
import CountUp from 'react-countup';

export default function CountUpComponent() {
  return (
    <div className="my-8 py-16 bg-gray-100 dark:bg-gray-700">
      <h2 className="text-3xl font-bold dark:text-gray-800">Helping a local business reinvent itself</h2>
      <div className="flex justify-around mt-4 ">
        <div>
          <h3 className="text-2xl font-bold dark:text-gray-800"><CountUp end={2245341} duration={2.75} /></h3>
          <p>Total Visitors</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold  dark:text-gray-800"><CountUp end={46328} duration={2.75} /></h3>
          <p>New Users</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold dark:text-gray-800 "><CountUp end={828867} duration={2.75} /></h3>
          <p>Comments</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold  dark:text-gray-800"><CountUp end={1926436} duration={2.75} /></h3>
          <p>Payments</p>
        </div>
      </div>
    </div>
  );
}

