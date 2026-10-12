export default function PageLoader() {
  return (
    <div className="grid min-h-[50vh] place-items-center" role="status" aria-label="Loading page">
      <span className="size-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-700" />
    </div>
  );
}
