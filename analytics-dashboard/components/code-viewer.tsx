"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, Code2, Play, Copy } from "lucide-react"

interface CodeViewerProps {
  title: string
  language: string
  code: string
}

export function CodeViewer({ title, language, code }: CodeViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  // Split code into cells based on comments that start with """
  const cells = code.split(/(?="""[^"]*""")/g).filter((cell) => cell.trim().length > 0)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-blue-600" />
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Interactive Python analysis code</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {language}
            </Badge>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4" />
                  View Code
                </>
              )}
            </button>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cells.map((cell, index) => {
              const isMarkdown = cell.trim().startsWith('"""')
              const cleanCell = isMarkdown ? cell.replace(/"""/g, "").trim() : cell.trim()

              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  {isMarkdown ? (
                    // Markdown cell
                    <div className="bg-blue-50 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          Markdown
                        </Badge>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-2">{cleanCell.split("\n")[0]}</h3>
                        {cleanCell
                          .split("\n")
                          .slice(1)
                          .map((line, i) => (
                            <p key={i} className="text-gray-700 text-sm mb-1">
                              {line}
                            </p>
                          ))}
                      </div>
                    </div>
                  ) : (
                    // Code cell
                    <div className="bg-gray-50">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Code
                          </Badge>
                          <span className="text-xs text-gray-500">Cell {index + 1}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => copyToClipboard(cleanCell, index)}
                            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors"
                            title="Copy code"
                          >
                            <Copy className="h-3 w-3" />
                          </button>
                          {copiedIndex === index && <span className="text-xs text-green-600 ml-1">Copied!</span>}
                        </div>
                      </div>
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-gray-800 font-mono">{cleanCell}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-blue-800">
              <Play className="h-4 w-4" />
              <span className="font-medium">Analysis Results:</span>
            </div>
            <p className="text-sm text-blue-700 mt-1">
              This code generates all the visualizations shown above, including monthly trends, state-wise analysis,
              loan term distribution, and employment length impact charts.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
