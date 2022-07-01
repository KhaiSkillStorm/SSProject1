import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Error, Landing, Flights,FlightCT,FlightDT,FlightUT } from './pages';
import { AppNav } from './features';
const App = () => {
  return (
    <BrowserRouter>
    <AppNav />
    <Routes>
        {/* When the URL in the browser becomes /, toggle on the Landing page */}
        <Route path="/" element={<Landing />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/create" element={<FlightCT />} />
        <Route path="/flights/delete" element={<FlightDT />} />
        <Route path="/flights/update" element={<FlightUT />} />
        <Route path="/flights/abc" element={<h1>ABC movie</h1>} />
        <Route path="*" element={<Error />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
