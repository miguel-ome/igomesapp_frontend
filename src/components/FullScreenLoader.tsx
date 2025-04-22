import { Loading } from "./ui/Loading";

export function FullScreenLoader() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999]">
      <Loading />
    </div>
  );
}
