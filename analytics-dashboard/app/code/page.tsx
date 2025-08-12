"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { CodeViewer } from "@/components/code-viewer"
// Add this import
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CodeView() {
  const [notebookContent, setNotebookContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the notebook content
    fetch('/Bank_Loan_Analysis.ipynb')
      .then(response => response.text())
      .then(data => {
        setNotebookContent(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading notebook:', error);
        setIsLoading(false);
      });
  }, []);

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
          <Badge variant="secondary">Jupyter Notebook View</Badge>
        </div>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileCode className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Bank Loan Analysis Code</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View the Python code and analysis used for the dashboard
          </p>
        </div>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm p-4">
          <CardHeader>
            <CardTitle>Jupyter Notebook</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center h-[600px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="w-full">
                {/* Use a more reliable embed approach */}
               <iframe 
                src="https://nbviewer.org/url/github.com/Vishal8700/KPI-ANALYSIS-BANK-LOAN-DATA-/raw/main/Bank_Loan_Analysis.ipynb"
                width="100%"
                height="800" 
                frameborder="0">
            </iframe>

                
                {/* Only show fallback if iframe fails */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Fallback View:</h3>
                  <CodeViewer 
                    title="Bank Loan Analysis Notebook" 
                    language="python" 
                    code={notebookContent} 
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
