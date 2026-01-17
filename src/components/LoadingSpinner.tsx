export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-20" role="status" aria-live="polite">
      <div className="w-10 h-10 border-4 border-slate-300 border-t-brand-accent rounded-full animate-spin" />
    </div>
  );
}
