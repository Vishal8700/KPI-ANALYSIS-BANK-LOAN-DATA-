import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Users, Percent, Calendar, Building2, Code2, FileSpreadsheet, FileCode } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Bank Loan Analytics</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial analysis and risk assessment dashboard
          </p>
          <Badge variant="secondary" className="mt-4">
            Bank Data • Updated Dec 2021
          </Badge>
        </div>

        {/* Primary KPIs */}
        <div className="mb-8">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="data">
                <Link href="/data" className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4" />
                  View Data
                </Link>
              </TabsTrigger>
              <TabsTrigger value="code">
                <Link href="/code" className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  View Code
                </Link>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Primary KPIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">38,576</div>
                <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  MTD Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">4,314</div>
                <p className="text-sm text-green-600 mt-1">+8.2% from last MTD</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Total Funded Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$435.79M</div>
                <p className="text-sm text-green-600 mt-1">+15.3% growth</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  MTD Funded Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$53.98M</div>
                <p className="text-sm text-green-600 mt-1">+9.7% from last MTD</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Total Amount Received
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$473.07M</div>
                <p className="text-sm text-green-600 mt-1">+11.8% growth</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  MTD Amount Received
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$58.07M</div>
                <p className="text-sm text-green-600 mt-1">+7.4% from last MTD</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Average Interest Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">12.05%</div>
                <p className="text-sm text-red-600 mt-1">+0.3% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Average DTI Ratio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">13.33%</div>
                <p className="text-sm text-green-600 mt-1">-0.5% improvement</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Secondary KPI Matrices */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Loan Performance Metrics
          </h2>
          
          {/* Good Loan KPIs */}
          <h3 className="text-xl font-semibold text-green-700 mb-4">Good Loan Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Good Loan Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">33,243</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Funded Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$370.22M</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Total Received
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$435.79M</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Percentage of Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">86.18%</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bad Loan KPIs */}
          <h3 className="text-xl font-semibold text-red-700 mb-4">Bad Loan Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Bad Loan Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">5,333</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Funded Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$65.53M</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Total Received
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">$37.28M</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Percentage of Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">13.82%</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Analytics Overview
          </h2>

          {/* Monthly Trends */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Monthly Funding Trends</CardTitle>
              <p className="text-sm text-gray-600">Track loan funding performance over time</p>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newplot-96qhyre7Namuyj9bEJgBxZDDCqkTRF.png"
                  alt="Monthly Trends in Loan Funded Amount showing growth from Jan 2021 to Nov 2021"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Two column layout for smaller charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Term Length Analysis */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Loan Term Distribution</CardTitle>
                <p className="text-sm text-gray-600">Breakdown of loan applications by term length</p>
              </CardHeader>
              <CardContent>
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newplot%20%282%29-HDUDaTdaNC5lqxY6LK2ugUBflBIfhG.png"
                    alt="Loan Applications by Term Length showing 73.2% for 36 months and 26.8% for 60 months"
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Home Ownership Analysis */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Home Ownership Impact</CardTitle>
                <p className="text-sm text-gray-600">Loan funding distribution by home ownership status</p>
              </CardHeader>
              <CardContent>
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newplot%20%284%29-85kYsPf3E5gK8hxTMwSyiPPyVCK95v.png"
                    alt="Loan Funded Amount by Home Ownership showing distribution between Mortgage, Rent, and Own"
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geographic Analysis */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Geographic Distribution</CardTitle>
              <p className="text-sm text-gray-600">Loan funding amounts across different states</p>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newplot%20%281%29-GHDFz4ImOgyVvkqFnG1180E4csh3Vq.png"
                  alt="Loan Funded Amount by State showing funding distribution across US states"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Employment Length Analysis */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Employment Length Impact</CardTitle>
              <p className="text-sm text-gray-600">Relationship between employment history and loan funding</p>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newplot%20%283%29-1BjvszJtTnMJQHPuso7XznShRHw2rP.png"
                  alt="Loan Funded Amount by Employment Length showing funding patterns across different employment durations"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Analysis Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            Code Analysis
          </h2>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Python Analysis Code</CardTitle>
              <p className="text-sm text-gray-600">View the complete Python code used to generate these analytics</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4">
                <div    className="flex items-center justify-between mb-4">
                  <Link
                  href="https://colab.research.google.com/drive/1K6t_DPpahqCK3a4kjbeSCrQenoAw8vD0?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                    Python • Collab Notebook
                  </Badge>
                </Link>

                  <p className="text-sm text-gray-600">
                    Complete analysis workflow including data processing, KPI calculations, and visualizations
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <Code2 className="h-4 w-4" />
                    <span className="font-medium">Analysis Features:</span>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Data loading and preprocessing with pandas</li>
                    <li>• Primary KPI calculations (applications, funding, interest rates)</li>
                    <li>• Good vs Bad loan analysis and risk assessment</li>
                    <li>• Interactive visualizations with Plotly Express</li>
                    <li>• Monthly trends, geographic, and demographic analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2021 Bank Loan Analytics Dashboard.</p>
          <p className="mt-2">Build and Analyse by Vishal Kumar</p>
        </div>
      
       
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
