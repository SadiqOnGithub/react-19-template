function Costing() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      Costing
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="aspect-video h-12 w-full rounded-lg bg-muted/50" />
      ))}
    </div>
  )
}

export default Costing
