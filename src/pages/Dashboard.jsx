import DataTable from "../components/DataTable/DataTable";
import { useFakeApi } from "../hooks/useFakeApi";
import Loader from "../components/Loader";

export default function Dashboard() {
  const { data, loading, error } = useFakeApi();

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500">Failed to load data. Refresh page.</div>;

  return <DataTable rows={data} />;
}