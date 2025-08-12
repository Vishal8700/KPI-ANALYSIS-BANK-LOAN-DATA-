# Bank Loan Analysis

## Overview
This project analyzes a bank loan dataset to generate actionable insights and interactive visuals. It computes key performance indicators (KPIs), compares good vs. bad loan segments, and explores trends by time, state, purpose, term, employment length, and home ownership. The analysis is implemented in a Google Colab notebook and can be exported into a standalone interactive HTML report.

## Objectives
- Quantify portfolio health with KPIs:
  - Total and MTD loan applications
  - Total and MTD funded amount
  - Total and MTD amount received
  - Average interest rate and DTI
- Segment portfolio quality:
  - Good loans (Fully Paid, Current) vs. Bad loans (Charged Off)
  - Applications, funded amount, and amount received per segment
- Explore drivers and trends:
  - Monthly trends of funded amount and applications
  - Distribution by term (36 vs. 60 months)
  - Funded amount by state, purpose, employment length, and home ownership

## Repository Structure
- Bank Loan Analysis.ipynb — Main analysis notebook in Colab
- data/financial_loan.xlsx — Input dataset (path used in the notebook)
- exports/ — Optional export folder for aggregated results
  - monthly_data.csv
  - state_data.csv
  - term_data.csv
  - purpose_data.csv
  - home_data.csv
- report/bank_loan_analysis_report.html — Standalone interactive report (optional artifact)

Note: File paths can be adjusted; in Colab, the example path used is /content/drive/MyDrive/Datasets/financial_loan.xlsx

## Dataset
Expected columns:
- id: Unique application ID
- address_state: Two-letter US state code
- application_type: Individual/Joint
- emp_length: Employment length (text format such as "< 1 year", "10+ years")
- emp_title: Job title (free text)
- grade, sub_grade: Credit grades
- home_ownership: RENT, OWN, MORTGAGE, etc.
- issue_date: Loan issue date
- loan_status: Current, Fully Paid, Charged Off, etc.
- term: 36 months or 60 months
- verification_status: Income verification status
- annual_income: Applicant’s annual income
- dti: Debt-to-income ratio (0–1)
- int_rate: Interest rate (0–1)
- loan_amount: Funded amount
- total_payment: Total amount received to date

If your dataset differs, update the column names or processing steps accordingly.

## Environment and Requirements
- Google Colab (recommended) or local Python 3.8+
- Python libraries:
  - pandas
  - numpy
  - (Optional for visualization in notebook) plotly, seaborn, matplotlib
- For the HTML report:
  - No backend required; uses Plotly CDN in the browser

## Quick Start (Colab)
1. Open the notebook Bank Loan Analysis.ipynb in Google Colab.
2. Mount Google Drive (if using Drive storage) and verify the dataset path.
3. Run all cells to:
   - Load and clean data
   - Compute KPIs and segment metrics
   - Create aggregated tables for charts
4. Inspect key outputs:
   - KPIs: totals, MTD metrics, averages
   - Good vs. Bad loan metrics and percentages
   - Aggregated tables: monthly_data, state_data, term_data, purpose_data, home_data

## Data Processing Steps
1. Load data from Excel:
   - df = pd.read_excel("/content/drive/MyDrive/Datasets/financial_loan.xlsx")
2. Clean and parse:
   - Fill missing emp_title with "Unknown"
   - Parse date fields: issue_date, last_credit_pull_date, last_payment_date, next_payment_date
3. Compute KPIs:
   - Total loan applications: count of id
   - MTD metrics: filter by max issue_date month and sum loan_amount and total_payment
   - Averages: int_rate and dti converted to percentages
4. Segment portfolio:
   - Good loans: loan_status in ["Fully Paid", "Current"]
   - Bad loans: loan_status in ["Charged Off"]
   - Compute applications, funded amount, amount received, and percentages
5. Aggregate for visuals:
   - Monthly: by issue_date (period M)
   - State: by address_state
   - Term: by term
   - Purpose: by purpose
   - Home ownership: by home_ownership

## Key Metrics and Definitions
- Total Loan Applications: Total number of unique loan applications.
- Funded Amount: Sum of loan_amount.
- Amount Received: Sum of total_payment (payments collected so far).
- MTD (Month-to-Date): Metrics restricted to the latest month in the dataset.
- Average Interest Rate: Mean of int_rate; multiply by 100 for percentage.
- Average DTI: Mean of dti; multiply by 100 for percentage.
- Good Loan: Status is Fully Paid or Current.
- Bad Loan: Status is Charged Off.

## Visualizations
- Monthly Trends (Area/Line): Issue month vs. total funded amount (and/or applications).
- Term Distribution (Donut/Pie): Share of applications across 36 vs. 60 months.
- State Breakdown (Bar): Funded amount by address_state.
- Purpose Breakdown (Bar): Funded amount by loan purpose.
- Home Ownership (Treemap/Sunburst): Funded amount by home_ownership.

These visuals can be rendered:
- In the Colab notebook (e.g., with Plotly)
- In a standalone HTML dashboard

## License
Specify license terms for your analysis code and generated report (e.g., MIT). If dataset licensing is restrictive, do not redistribute the raw data.

## Contact
Maintainer: Vishal Kumar  
Email: vishal.kumar.ug22@nsut.ac.in

If you want, I can tailor this README to your exact notebook outputs and insert your actual KPI values and chart data.

[1] [https://colab.research.google.com/drive/1K6t_DPpahqCK3a4kjbeSCrQenoAw8vD0?authuser=1#scrollTo=ykUNC6EeiY5V](https://colab.research.google.com/drive/1K6t_DPpahqCK3a4kjbeSCrQenoAw8vD0?usp=sharing)
