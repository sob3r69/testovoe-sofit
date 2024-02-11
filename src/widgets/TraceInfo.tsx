import { TraceData } from '@/types';

const TraceInfo = ({ data }: { data: TraceData }) => {
  return (
    <>
      <div>UUID: {data.uuid}</div>
      <div>Время: {data.timestamp}</div>
      <div>Класс: {data.history.class}</div>
      <div>Номер: {data.history.plate}</div>
      <div>Версия (app): {data.version.tag}</div>
      <div>Версия (sdk): {data.version.lprsdk}</div>
    </>
  );
};

export default TraceInfo;
