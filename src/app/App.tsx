import TraceCard from '@/widgets/TraceCard';
import data from '@/data/trace.json';
import img from '@/data/debug.jpg';
function App() {
  return (
    <>
      <TraceCard data={data} img={img} />
    </>
  );
}

export default App;
