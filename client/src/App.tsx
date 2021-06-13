import React, { useEffect, useState } from 'react';
import DriverItem from './components/DriverItem';
import AddDriver from './components/AddDriver';
import FilterItems from './components/FilterItems';
import { getDrivers, addDriver } from "./API";


const App: React.FC = () => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const fetchDrivers = ( filterParams?: object ): void => {
    getDrivers(filterParams)
      .then(({ data: { drivers } }: IDriver[] | any) => setDrivers(drivers))
      .catch((err: Error) => console.warn(err));
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleSaveDriver = (e: React.FormEvent, formData: IDriver): void => {
    e.preventDefault();
    addDriver(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Record is not saved");
        }
        setDrivers(data.drivers);
      })
      .catch(err => console.log(err));
  };

    return (
    <main className='App'>
      <h1>Drivers List</h1>
      <FilterItems runFilter={fetchDrivers} driversData={drivers} />
      {/* <AddDriver saveDriver={handleSaveDriver} /> */}
      {drivers.map((driver: IDriver) => (
        <DriverItem
          key={driver._id}
          driver={driver}
        />
      ))}
    </main>
  );
};

export default App;
