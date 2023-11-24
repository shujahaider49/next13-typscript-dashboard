import BarCharts from '@/components/BarChart'
import Cards from '@/components/Cards'
import DoughnutChart from '@/components/Doughnut'
import LineChart from '@/components/LineChart'
import RecentOrders from '@/components/RecentOrders'
import Reports from '@/components/Reports'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboards</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Cards />
        <div className="p-4 grid md:grid-cols-3 gap-4">
          <LineChart />
          <DoughnutChart />
        </div>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarCharts />
          <RecentOrders />
        </div>
        <div className="p-4 ">
          <Reports />
        </div>
      </main>
    </>
  )
}
