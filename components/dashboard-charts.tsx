'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { buyerTypeMix, monthlyTrend, revenueByAge, revenueByGender, topDrugs } from '@/lib/project-data'

const tooltipStyle = {
  backgroundColor: 'var(--navy)',
  border: 'none',
  borderRadius: 8,
  color: 'var(--navy-foreground)',
  fontSize: 12,
}

const axisTick = { fill: 'var(--muted-foreground)', fontSize: 12 }
const formatMillions = (v: unknown) => `$${Number(v).toFixed(2)}M`

function ChartCard({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure className={`rounded-xl border bg-card p-6 ${className}`}>
      <figcaption>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </figcaption>
      <div className="mt-6 h-64">{children}</div>
    </figure>
  )
}

export function MonthlyTrendChart() {
  return (
    <ChartCard title="Monthly Revenue & Profit" subtitle="Jan–Dec 2023 ($M)" className="lg:col-span-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={monthlyTrend} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.45} />
              <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.25} />
              <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" tick={axisTick} axisLine={false} tickLine={false} />
          <YAxis tick={axisTick} axisLine={false} tickLine={false} domain={[3.5, 7]} />
          <Tooltip contentStyle={tooltipStyle} formatter={formatMillions} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="var(--chart-2)" strokeWidth={2.5} fill="url(#revenueFill)" />
          <Area type="monotone" dataKey="profit" name="Profit" stroke="var(--chart-1)" strokeWidth={2} fill="url(#profitFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function BuyerTypeChart() {
  const colors = ['var(--chart-1)', 'var(--chart-2)']
  return (
    <ChartCard title="Revenue by Buyer Type" subtitle="Share of 2023 revenue">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            contentStyle={tooltipStyle}
            itemStyle={{ color: 'var(--navy-foreground)' }}
            formatter={(v, _name, item) => [`$${v}M (${item.payload.share}%)`, item.payload.type]}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Pie data={buyerTypeMix} dataKey="revenue" nameKey="type" innerRadius={55} outerRadius={85} paddingAngle={2} stroke="none">
            {buyerTypeMix.map((entry, index) => (
              <Cell key={entry.type} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function TopDrugsChart() {
  return (
    <ChartCard title="Top 5 Drugs by Revenue" subtitle="2023 ($M, approx.)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topDrugs} layout="vertical" margin={{ top: 0, right: 12, left: 8, bottom: 0 }}>
          <CartesianGrid stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={axisTick} axisLine={false} tickLine={false} domain={[0, 4]} />
          <YAxis type="category" dataKey="drug" tick={axisTick} axisLine={false} tickLine={false} width={96} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'var(--muted)' }} formatter={formatMillions} />
          <Bar dataKey="revenue" name="Revenue" fill="var(--chart-1)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function AgeGroupChart() {
  return (
    <ChartCard title="Revenue by Age Group" subtitle="2023 ($M)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueByAge} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis dataKey="group" tick={axisTick} axisLine={false} tickLine={false} />
          <YAxis tick={axisTick} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'var(--muted)' }} formatter={(v) => `$${v}M`} />
          <Bar dataKey="revenue" name="Revenue" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function GenderChart() {
  return (
    <ChartCard title="Revenue by Gender" subtitle="2023 ($M)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueByGender} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis dataKey="gender" tick={axisTick} axisLine={false} tickLine={false} />
          <YAxis tick={axisTick} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'var(--muted)' }} formatter={(v) => `$${v}M`} />
          <Bar dataKey="revenue" name="Revenue" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
