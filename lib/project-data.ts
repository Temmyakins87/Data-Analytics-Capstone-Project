export const author = {
  name: 'Temitope E. Akindele',
  initials: 'TA',
  role: 'Financial Analyst',
  program: 'Business Data Analytics',
  cohort: 'Pod Orion',
  term: 'Capstone Project · 2026',
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
}

export const project = {
  company: 'NovaMed Solutions',
  title: 'NovaMed Solutions: 2023 Sales Performance & Market Insights',
  tagline:
    'Driving revenue growth, inventory efficiency, and strategic expansion for a pharmaceutical distributor, built on a full year of sales data with Excel, PostgreSQL, and Power BI.',
  context:
    'NovaMed Solutions is a leading pharmaceutical distributor serving diverse healthcare sectors. Leadership had a year of transaction data but no clear view of which drugs, customers, and markets were driving revenue, which made it hard to plan inventory or forecast demand.',
  challenges: [
    'Sales performance optimization',
    'Inventory inefficiencies',
    'Weak demand forecasting',
    'Limited customer engagement insights',
  ],
  objective:
    'Use 2023 sales data to surface actionable insights that support confident, data-driven decisions.',
  dataScope: ['Revenue, Profit & COGS', 'Drug performance', 'Customer demographics', 'Geographic sales'],
}

export const heroStats = [
  { value: '$71.3M', label: 'Total revenue' },
  { value: '$58.5M', label: 'Total profit' },
  { value: '82.0%', label: 'Profit margin' },
  { value: '269.5K', label: 'Units sold' },
]

export const pipeline = [
  {
    step: '01',
    tool: 'Excel',
    title: 'Clean & Explore',
    description:
      'Profiled the 2023 sales records, standardized drug, customer, and country fields, handled blanks and duplicates, and built first-pass pivots to size revenue and profit.',
  },
  {
    step: '02',
    tool: 'PostgreSQL',
    title: 'Model & Query',
    description:
      'Loaded the cleaned data into a star schema and wrote analytical SQL to aggregate revenue, profit, and COGS by month, drug, customer, buyer type, and region.',
  },
  {
    step: '03',
    tool: 'Power BI',
    title: 'Visualize',
    description:
      'Built an interactive two-page report covering sales performance, top and bottom products, customer segmentation, demographics, and geography.',
  },
  {
    step: '04',
    tool: 'Insights',
    title: 'Recommend',
    description:
      'Turned the patterns into strategic recommendations on forecasting, inventory prioritization, customer diversification, and market expansion.',
  },
]

export const toolkit = [
  {
    name: 'Microsoft Excel',
    role: 'Data cleaning & exploration',
    skills: ['Power Query', 'Pivot Tables', 'XLOOKUP', 'Data Validation', 'Conditional Formatting'],
    highlight: 'Prepared a clean, validated 2023 sales dataset ready for modeling.',
  },
  {
    name: 'PostgreSQL',
    role: 'Data modeling & aggregation',
    skills: ['Star Schema', 'CTEs', 'Window Functions', 'Aggregations', 'Views'],
    highlight: 'Answered revenue, margin, and ranking questions directly in SQL.',
  },
  {
    name: 'Power BI',
    role: 'Dashboards & storytelling',
    skills: ['DAX Measures', 'KPI Cards', 'Slicers', 'Map Visuals', 'Top N Filtering'],
    highlight: 'Two report pages: Sales Performance, plus Customer & Market Insights.',
  },
]

export const monthlyTrend = [
  { month: 'Jan', revenue: 6.84, profit: 5.6 },
  { month: 'Feb', revenue: 4.99, profit: 4.09 },
  { month: 'Mar', revenue: 5.91, profit: 4.85 },
  { month: 'Apr', revenue: 5.4, profit: 4.43 },
  { month: 'May', revenue: 6.07, profit: 4.98 },
  { month: 'Jun', revenue: 5.68, profit: 4.66 },
  { month: 'Jul', revenue: 6.62, profit: 5.3 },
  { month: 'Aug', revenue: 5.44, profit: 4.46 },
  { month: 'Sep', revenue: 6.51, profit: 5.34 },
  { month: 'Oct', revenue: 5.71, profit: 4.68 },
  { month: 'Nov', revenue: 6.16, profit: 5.05 },
  { month: 'Dec', revenue: 5.98, profit: 4.9 },
]

export const topDrugs = [
  { drug: 'Doxycycline', revenue: 3.5 },
  { drug: 'Ergocalciferol', revenue: 3.4 },
  { drug: 'Lisinopril', revenue: 3.35 },
  { drug: 'Clonazepam', revenue: 3.1 },
  { drug: 'Ezetimibe', revenue: 3.0 },
]

export const topCustomers = [
  { name: 'David Johnson', revenue: 3.9 },
  { name: 'Bob Williams', revenue: 3.7 },
  { name: 'Jane Brown', revenue: 3.3 },
  { name: 'Bob Smith', revenue: 3.3 },
  { name: 'Alice Smith', revenue: 3.1 },
]

export const buyerTypeMix = [
  { type: 'Wholesalers', revenue: 62.9, share: 88.1 },
  { type: 'End users', revenue: 8.5, share: 11.9 },
]

export const revenueByAge = [
  { group: 'Under 30', revenue: 11.2 },
  { group: '30–50', revenue: 22.7 },
  { group: '51–70', revenue: 28.4 },
  { group: '70+', revenue: 9.0 },
]

export const revenueByGender = [
  { gender: 'Male', revenue: 33.2 },
  { gender: 'Female', revenue: 23.0 },
  { gender: 'Other', revenue: 15.1 },
]

export const dashboardKpis = [
  { label: 'Total Revenue', value: '$71.3M', note: 'Jan–Dec 2023' },
  { label: 'Total Profit', value: '$58.5M', note: '82.0% profit margin' },
  { label: 'Total COGS', value: '$12.9M', note: '18% of revenue' },
  { label: 'Peak Month', value: '$6.84M', note: 'January revenue' },
]

export const dashboardScreens = [
  {
    src: '/images/dashboard-sales.png',
    title: 'Page 1: Sales Performance',
    alt: 'NovaMed Power BI sales performance page with KPI cards for revenue, profit, margin, COGS and quantity, monthly revenue and profit trends, and top and bottom drugs and customers by revenue.',
  },
  {
    src: '/images/dashboard-customers.png',
    title: 'Page 2: Customer & Market Insights',
    alt: 'NovaMed Power BI customer page showing revenue by gender, revenue by buyer type donut chart, a world map of top countries, and revenue by age group.',
  },
]

export const sqlQuery = `-- Monthly revenue, profit and margin for 2023,
-- ranked by revenue with month-over-month change
WITH monthly AS (
  SELECT
    d.month_num,
    d.month_name,
    SUM(s.revenue)              AS revenue,
    SUM(s.revenue - s.cogs)     AS profit,
    SUM(s.quantity)             AS units
  FROM fact_sales s
  JOIN dim_date d ON d.date_key = s.date_key
  WHERE d.year = 2023
  GROUP BY d.month_num, d.month_name
)
SELECT
  month_name,
  ROUND(revenue / 1e6, 2)                       AS revenue_m,
  ROUND(profit  / 1e6, 2)                       AS profit_m,
  ROUND(100.0 * profit / revenue, 1)            AS margin_pct,
  ROUND(100.0 * (revenue - LAG(revenue) OVER w)
        / LAG(revenue) OVER w, 1)               AS mom_growth_pct,
  RANK() OVER (ORDER BY revenue DESC)           AS revenue_rank
FROM monthly
WINDOW w AS (ORDER BY month_num)
ORDER BY month_num;`

export const schemaTables = [
  { name: 'fact_sales', type: 'Fact', columns: 'sale_id, date_key, drug_id, customer_id, geo_id, quantity, revenue, cogs' },
  { name: 'dim_drug', type: 'Dimension', columns: 'drug_id, drug_name, drug_class, unit_price' },
  { name: 'dim_customer', type: 'Dimension', columns: 'customer_id, full_name, gender, age_group, buyer_type' },
  { name: 'dim_geography', type: 'Dimension', columns: 'geo_id, city, country, region' },
  { name: 'dim_date', type: 'Dimension', columns: 'date_key, month_num, month_name, quarter, year' },
]

export const insights = [
  {
    metric: '82%',
    title: 'Strong profitability',
    finding:
      'NovaMed earned $58.5M profit on $71.3M revenue against just $12.9M COGS, which points to efficient cost management and real pricing strength.',
    recommendation:
      'Use the dashboards for continuous, data-driven monitoring so margin stays protected as volumes grow.',
  },
  {
    metric: 'Jan & Jul',
    title: 'Clear seasonal peaks',
    finding:
      'Revenue peaked in January ($6.84M revenue, $5.6M profit) and July ($6.62M, $5.3M), then dipped to $4.99M in February, a repeatable seasonal pattern.',
    recommendation:
      'Implement advanced demand forecasting built on these seasonal patterns to reduce stock inefficiencies.',
  },
  {
    metric: '15×',
    title: 'Concentrated drug portfolio',
    finding:
      'The top drug, Doxycycline, generated $3.5M, about 15 times the lowest performer, Warfarin, at $229.2K. Revenue is concentrated in a handful of products.',
    recommendation:
      'Prioritize inventory for high-performing drugs and review the long tail for portfolio optimization.',
  },
  {
    metric: '88.1%',
    title: 'Wholesale dependency',
    finding:
      'Wholesalers drove $62.9M (88.1%) of revenue. Together with concentration in a few top markets, this raises operational risk.',
    recommendation:
      'Diversify the customer base beyond wholesalers and strengthen presence in top-performing international markets.',
  },
]
