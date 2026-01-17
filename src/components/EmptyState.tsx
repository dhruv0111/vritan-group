export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-20 text-center text-slate-500">
      {message}
    </div>
  );
}
