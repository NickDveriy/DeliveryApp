import React, { useEffect, useState } from 'react';
import DriverItem from './components/DriverItem';
import AddDriver from './components/AddDriver';
import FilterItems from './components/FilterItems';
import { getDrivers, addDriver } from "./API";


type CurrentState = {
  show: boolean,
  drivers: IDriver[]
}

const App: React.FC = () => {
  const [pageState, setPageState] = useState<CurrentState | any>({});

  const setDrivers = (driversToSet: IDriver[]) => {
    setPageState({
      ...pageState,
      drivers: driversToSet
    });
  };

  const setShowModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setPageState({
      ...pageState,
      show: !pageState.show
    });
  };

  const fetchDrivers = (filterParams?: object): void => {
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
        setShowModal();
        alert(data.message);
      })
      .catch(err => console.log(err));
  };

  return (
    <main className='App'>
      <div className="header-title">
        <h1>Drivers List</h1>
        <button
          className="toggle-button"
          onClick={e => {
            setShowModal(e);
          }}
        >Add driver
        </button>
      </div>

      <AddDriver onClose={setShowModal} saveDriver={handleSaveDriver} show={pageState.show} driversData={pageState.drivers || []} />
      <FilterItems runFilter={fetchDrivers} driversData={pageState.drivers || []} inModal={false} />
      {(pageState.drivers || []).map((driver: IDriver) => (
        <DriverItem
          key={driver._id}
          driver={driver}
        />
      ))}

    </main>
  );
};

export default App;
