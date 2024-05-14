import PageHeader from "../components/page-header";

export default function Playground() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          Page header
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div>
          <PageHeader className="" />
        </div>
      </div>
    </main>
  )
}