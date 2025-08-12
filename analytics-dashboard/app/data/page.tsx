"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DataView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <Badge variant="secondary">EXCEL Data View</Badge>
        </div>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileSpreadsheet className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Financial Loan Data</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View and analyze the raw financial loan dataset as EXCEL
          </p>
        </div>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm p-4">
          <CardHeader>
            <CardTitle>Financial Loan Dataset (EXCEL View)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-ratio-16/9 w-full h-[800px]">
              <iframe 
                src="https://docs.google.com/spreadsheets/d/1WQTOv0FGyNqpwDBMp1mltANLWE8SoEWI3-Wp_Tqumog/edit?usp=sharing" 
                width="100%" 
                height="100%" 
                frameBorder="0">
                EXCEL data viewer
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}