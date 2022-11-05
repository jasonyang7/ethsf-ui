export default function Navigation() {
  return (
    <div className="basis-1/2	text-align-center">
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-center"
        defaultValue="Lend"
      >
        <option>Lend</option>
        <option>Borrow</option>
        <option>Pool</option>
      </select>
    </div>
  )
}
