import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'
import { SessionDetail } from '../medical-agent/[sessionid]/page'
import moment from 'moment'

// Custom button component that renders as a span to avoid nested buttons
const CustomTrigger = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean
  }
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'text-primary underline-offset-4 hover:underline',
        'h-9 rounded-md px-3',
        'text-sm',
        className
      )}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </span>
  )
})
CustomTrigger.displayName = 'CustomTrigger'

type props = {
  record: SessionDetail
}

const ViewReportDialog = ({ record }: props) => {
  const report = record?.report as any; 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomTrigger className="text-violet-400 hover:text-violet-300 underline-offset-4 hover:underline focus-visible:ring-violet-500">View Report</CustomTrigger>
      </DialogTrigger>
      {/* Constrain overall height so inner content can scroll */}
      <DialogContent className="sm:max-w-2xl max-w-[95vw] max-h-[85vh] p-0 overflow-hidden bg-[#0f0d14]/95 border border-violet-900/40 backdrop-blur text-white [&>button[aria-label='Close']]:text-white [&>button[aria-label='Close']:hover]:text-violet-300 ">
        <DialogHeader className="px-6 pt-6 pb-3">
          <DialogTitle asChild>
            <h2 className="text-center text-2xl">Medical AI Voice Agent Report</h2>
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable area */}
        <DialogDescription asChild>
          <div
            className="px-6 pb-6 pt-0 overflow-y-auto"
            style={{ maxHeight: 'calc(85vh - 72px)' }} // subtract header area
          >
            <div className="mt-2 space-y-4 divide-y divide-violet-900/40">
              {/* Session Info */}
              <section className="pt-2">
                <h2 className="font-bold text-violet-400 text-lg">Session Info</h2>
                <p className="text-gray-200">
                  <span className="font-bold">Doctor</span>: {record.selectedDoctor.specialist}
                </p>
                <p className="text-gray-200">
                  <span className="font-bold">Consulted On</span>: {moment(new Date(record?.createdOn)).format("LLL")}
                </p>
              </section>

              {/* Complaint */}
              <section className="pt-4">
                <h2 className="font-bold text-violet-400 text-lg">Chief Complaint</h2>
                <p className="text-gray-200">{report?.chiefComplaint || "N/A"}</p>
              </section>

              {/* Summary */}
              <section className="pt-4">
                <h2 className="font-bold text-violet-400 text-lg">Summary</h2>
                <p className="text-gray-200">{report?.summary || "N/A"}</p>
              </section>

              {/* Symptoms */}
              <section className="pt-4">
                <h2 className="font-bold text-violet-400 text-lg">Symptoms</h2>
                <p className="text-gray-200">
                  {Array.isArray(report?.symptoms) ? report.symptoms.join(', ') : (report?.symptoms || "N/A")}
                </p>
              </section>

              {/* Duration & Severity */}
              <section className="pt-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h2 className="font-bold text-violet-400 text-lg">Duration</h2>
                    <p className="text-gray-200">{report?.duration || "N/A"}</p>
                  </div>
                  <div>
                    <h2 className="font-bold text-violet-400 text-lg">Severity</h2>
                    <p className="text-gray-200">{report?.severity || "N/A"}</p>
                  </div>
                </div>
              </section>

              {/* Medications */}
              <section className="pt-4">
                <h2 className="font-bold text-violet-400 text-lg">Medications Mentioned</h2>
                <ul className="list-disc list-inside text-gray-200">
                  {report?.medicationsMentioned?.length
                    ? report.medicationsMentioned.map((med: string, idx: number) => <li key={idx}>{med}</li>)
                    : <li className="list-none text-gray-400">N/A</li>
                  }
                </ul>
              </section>

              {/* Recommendations */}
              <section className="pt-4">
                <h2 className="font-bold text-violet-400 text-lg">Recommendations</h2>
                <ul className="list-disc list-inside text-gray-200">
                  {report?.recommendations?.length
                    ? report.recommendations.map((rec: string, idx: number) => <li key={idx}>{rec}</li>)
                    : <li className="list-none text-gray-400">N/A</li>
                  }
                </ul>
              </section>

              {/* Timestamp */}
              <section className="pt-4">
                <p className="text-xs text-gray-500 text-right">
                  Generated on: {report?.timestamp ? moment(report.timestamp).format("LLL") : 'N/A'}
                </p>
              </section>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>


  )
}

export default ViewReportDialog
