export const lumoraFacts = [
  { label: 'States', value: '10' },
  { label: 'Physical stores', value: '20+' },
  { label: 'Sales channels', value: '3' },
  { label: 'Related tables', value: '5' },
]

export const lumoraChallenges = [
  'Valuable trends and patterns were not being identified',
  'Difficulty spotting fast-moving vs. slow-moving products',
  'No visibility into customer purchasing behaviour',
  'Slower, less informed business decisions',
]

export const lumoraTables = [
  {
    name: 'sales',
    type: 'Fact',
    columns:
      'sale_id, customer_id, product_id, store_id, channel_id, units_sold, sales_amount, discount_applied, net_sales_amount, order_status, date',
  },
  { name: 'customer', type: 'Dimension', columns: 'customer_id, customer_name, gender, age_group, segment' },
  { name: 'product', type: 'Dimension', columns: 'product_id, product_name, product_category' },
  { name: 'store', type: 'Dimension', columns: 'store_id, store_name, region, state' },
  { name: 'channel', type: 'Dimension', columns: 'channel_id, channel_type' },
]

export type LumoraQuery = {
  id: string
  team: string
  question: string
  concept: string
  sql: string
}

export const lumoraQueries: LumoraQuery[] = [
  {
    id: 'customers',
    team: 'Leadership',
    question: 'How many unique customers do we have?',
    concept: 'COUNT DISTINCT',
    sql: `SELECT COUNT(DISTINCT customer_id) AS unique_customers
FROM customer;`,
  },
  {
    id: 'products',
    team: 'Leadership',
    question: 'How many products are currently in our product line?',
    concept: 'COUNT',
    sql: `SELECT COUNT(*) AS total_products
FROM product;`,
  },
  {
    id: 'stores',
    team: 'Leadership',
    question: 'How many stores do we have so far?',
    concept: 'COUNT',
    sql: `SELECT COUNT(*) AS total_stores
FROM store;`,
  },
  {
    id: 'revenue',
    team: 'Finance',
    question: 'What is the total revenue generated?',
    concept: 'SUM',
    sql: `SELECT SUM(net_sales_amount) AS total_revenue
FROM sales;`,
  },
  {
    id: 'order-status',
    team: 'Operations',
    question: 'How many orders were completed vs. returned?',
    concept: 'GROUP BY',
    sql: `SELECT order_status,
       COUNT(*) AS total_orders
FROM sales
GROUP BY order_status
ORDER BY total_orders DESC;`,
  },
  {
    id: 'completed-revenue',
    team: 'Finance',
    question: 'What is the total revenue from completed orders only?',
    concept: 'WHERE',
    sql: `SELECT SUM(net_sales_amount) AS completed_revenue
FROM sales
WHERE order_status = 'Completed';`,
  },
  {
    id: 'age-groups',
    team: 'Marketing',
    question: 'How many customers fall under each age group?',
    concept: 'GROUP BY',
    sql: `SELECT age_group,
       COUNT(*) AS total_customers
FROM customer
GROUP BY age_group
ORDER BY total_customers DESC;`,
  },
  {
    id: 'selected-products',
    team: 'Product',
    question: 'What are the sales details for product IDs 8, 14 and 29?',
    concept: 'JOIN + IN',
    sql: `SELECT s.sale_id,
       p.product_id,
       p.product_name,
       s.units_sold,
       s.net_sales_amount,
       s.order_status,
       s.date
FROM sales AS s
JOIN product AS p ON p.product_id = s.product_id
WHERE s.product_id IN (8, 14, 29)
ORDER BY p.product_id, s.date;`,
  },
  {
    id: 'top-products',
    team: 'Management',
    question: 'Which five products sold the most units and generated the most revenue?',
    concept: 'JOIN + ORDER BY + LIMIT',
    sql: `-- Top 5 by units sold
SELECT p.product_name,
       SUM(s.units_sold) AS total_units
FROM sales AS s
JOIN product AS p ON p.product_id = s.product_id
GROUP BY p.product_name
ORDER BY total_units DESC
LIMIT 5;

-- Top 5 by revenue
SELECT p.product_name,
       SUM(s.net_sales_amount) AS total_revenue
FROM sales AS s
JOIN product AS p ON p.product_id = s.product_id
GROUP BY p.product_name
ORDER BY total_revenue DESC
LIMIT 5;`,
  },
  {
    id: 'category-count',
    team: 'Product',
    question: 'How many products exist in each product category?',
    concept: 'GROUP BY',
    sql: `SELECT product_category,
       COUNT(*) AS total_products
FROM product
GROUP BY product_category
ORDER BY total_products DESC;`,
  },
  {
    id: 'high-earning-categories',
    team: 'Finance',
    question: 'Which product categories generated more than 20,000,000 in revenue?',
    concept: 'HAVING',
    sql: `SELECT p.product_category,
       SUM(s.net_sales_amount) AS category_revenue
FROM sales AS s
JOIN product AS p ON p.product_id = s.product_id
GROUP BY p.product_category
HAVING SUM(s.net_sales_amount) > 20000000
ORDER BY category_revenue DESC;`,
  },
  {
    id: 'vip',
    team: 'Marketing',
    question: 'Which customers belong to the VIP segment?',
    concept: 'WHERE',
    sql: `SELECT customer_id,
       customer_name,
       gender,
       age_group,
       segment
FROM customer
WHERE segment = 'VIP'
ORDER BY customer_name;`,
  },
  {
    id: 'mid-range',
    team: 'Finance',
    question: 'Which sales have amounts between 15,000 and 40,000?',
    concept: 'BETWEEN',
    sql: `SELECT sale_id,
       customer_id,
       product_id,
       sales_amount,
       date
FROM sales
WHERE sales_amount BETWEEN 15000 AND 40000
ORDER BY sales_amount DESC;`,
  },
]
